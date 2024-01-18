"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Button = dynamic(() => import("@/components/Button/Button"));
const AuthPopup = dynamic(() => import("@/components/Auth/AuthPopup"));

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [popupState, setPopupState] = useState<"Login" | "Signup" | undefined>(
    undefined
  );
  const {status} = useSession();
  const loginLogoutHandler = () => {
    if (status === "unauthenticated") {
      setPopupState("Login");
    } else {
      signOut();
    }
  };
  return (<>
    <header className="fixed z-10 top-[39.19px] w-[95.07vw] px-[5vw] sm:pl-[3vw] sm:pr-[3.6vw] h-[67.69px] left-[2.465vw] rounded-[8.91px] bg-[rgba(217,217,217,0.12)] backdrop-blur-[25px] shadow-navbar flex justify-between items-center font-euclid_circular_b text-white text-sm sm:text-[17.813px] sm:leading-[112%]">
      <Link href={"/"} className="">
        Homepage
      </Link>
      <div className="flex justify-center items-center gap-2 sm:gap-[22.47px]">
        <p onClick={loginLogoutHandler} className="cursor-pointer">
          {status === "unauthenticated" && "Login"}
          {status === "authenticated"  && "Logout"}
          {status === "loading" && "loading..."}
        </p>
        {status === "unauthenticated" && (
          <Button variant="primary" onClick={() => setPopupState("Signup")}>
            Create Account
          </Button>
        )}
      </div>
    </header>
    {popupState!==undefined&&<AuthPopup popupState={popupState} setPopupState={setPopupState}/>}
  </>);
};

export default Navbar;
