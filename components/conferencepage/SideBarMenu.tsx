import React, { FC, useState, useEffect, useCallback } from "react";
import update from "immutability-helper";
import MenuItem from "./MenuItem";
import Typography from "../shared/Typography";
import OrganizersProfile from "./OrganizersProfile";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SpeakersProfile from "./SpeakersProfile";
import Schedule from "./Schedule";
import Sponsor from "./Sponsor";
interface IProps {
  selectedMenu: String;
  setSelectedMenu: (id: String) => void;
  //conference: IConference;
}

interface IMenuItem {
  id: string;
  label: string;
}

const menuItemsArray = [
  { id: "organizer", label: "Organizer" },
  { id: "speakers", label: "Speakers " },
  { id: "schedule", label: "Schedule" },
  { id: "sponsors", label: "Sponsors" },
];

const SideBarMenu: FC<IProps> = ({ selectedMenu, setSelectedMenu }) => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(menuItemsArray);
  const [screenSize, setScreenSize] = useState<number>(
    globalThis.window?.innerWidth
  );

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  const moveMenuItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setMenuItems((menuItems: IMenuItem[]) =>
      update(menuItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, menuItems[dragIndex] as IMenuItem],
        ],
      })
    );
  }, []);

  const renderMenuItem = useCallback(
    (menuItem: IMenuItem, index: number) => {
      return (
        <MenuItem
          key={menuItem.id}
          index={index}
          id={menuItem.id}
          moveMenuItem={moveMenuItem}
        >
          <div
            onClick={() =>
              screenSize <= 768 && selectedMenu === menuItem.id
                ? setSelectedMenu("")
                : setSelectedMenu(menuItem.id)
            }
          >
            <div
              className={`${
                selectedMenu === menuItem.id ? "bg-primary" : "bg-fifth"
              } w-full flex p-2 rounded-md ${
                selectedMenu === menuItem.id && "shadow-lg"
              } gap-10 cursor-pointer mb-6 ${
                selectedMenu !== menuItem.id && "border border-fourth"
              }`}
            >
              <div
                className={`${
                  selectedMenu === menuItem.id ? "bg-fifth" : "bg-fourth"
                } flex justify-center items-center rounded-md p-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="20"
                  viewBox="0 0 29 26"
                  fill="none"
                >
                  <path
                    d="M22 24L17 19.1111M7 2V24V2ZM7 2L12 6.88889L7 2ZM7 2L2 6.88889L7 2ZM22 24V2V24ZM22 24L27 19.1111L22 24Z"
                    stroke="#FFC93E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Typography.H3 bold>
                <span
                  className={`${
                    selectedMenu === menuItem.id
                      ? "text-fifth"
                      : "text-secondary"
                  }`}
                >
                  {menuItem.label}
                </span>
              </Typography.H3>
            </div>
            {menuItem.id === selectedMenu ? (
              <div className="bg-fourth w-full p-8 mobile:p-4 rounded-lg mobile:flex flex-col gap-6 hidden">
                {selectedMenu == "organizer" && <OrganizersProfile />}
                {selectedMenu == "speakers" && <SpeakersProfile />}
                {selectedMenu == "schedule" && <Schedule />}
                {selectedMenu == "sponsors" && <Sponsor />}
              </div>
            ) : null}
          </div>
        </MenuItem>
      );
    },
    [moveMenuItem, selectedMenu, screenSize, setSelectedMenu]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-5">
        {menuItems.map((item, key) => renderMenuItem(item, key))}
      </div>
    </DndProvider>
  );
};

export default SideBarMenu;
