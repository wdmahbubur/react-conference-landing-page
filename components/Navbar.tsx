import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <section className="w-full py-4 mx-auto flex items-center justify-between px-32 absolute left-0 right-0 top-10 mobile:top-6 tablet:px-16 mobile:px-6">
      <Link href="/" className="sm:mx-auto">
        <div className="relative h-11 w-36 tablet:h-9 tablet:w-32 mobile:h-7 mobile:w-24">
          <Image src="/logo.png" alt="Logo" fill />
        </div>
      </Link>
      <nav className="tablet:hidden mx-auto">
        <ul className="flex items-center gap-14 text-lg">
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">What We do</li>
          <li className="cursor-pointer">Our work</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Say hi</li>
        </ul>
      </nav>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer mx-auto mobile:ml-auto mobile:mr-0"
      >
        <path
          d="M4.55255 18H23.6578M4.55255 6H23.6578H4.55255ZM4.55255 12H23.6578H4.55255Z"
          stroke="#0A142F"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};

export default Navbar;
