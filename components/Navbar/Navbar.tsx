import Link from "next/link";
import { FC } from "react";
import Button from "../Button/Button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header
      className="fixed z-10 top-[39.19px] w-[95.07vw] px-[5vw] sm:pl-[3vw] sm:pr-[3.6vw] h-[67.69px] left-[2.465vw] rounded-[8.91px] bg-[rgba(217,217,217,0.12)] backdrop-blur-[25px] shadow-navbar flex justify-between items-center font-euclid_circular_b text-white text-sm sm:text-[17.813px] sm:leading-[112%]">
      <Link href={"/"} className="">
        Homepage
      </Link>
      <div className="flex justify-center items-center gap-2 sm:gap-[22.47px]">
        <p className="cursor-pointer">Login</p>
        <Button>Create Account</Button>
      </div>
    </header>
  );
};

export default Navbar;
