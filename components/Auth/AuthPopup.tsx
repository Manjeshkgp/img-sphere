"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { signIn } from "next-auth/react";
import { useSignupMutation } from "@/store/queries/authApi";
import Loader from "@/components/Loader/Loader";

interface AuthPopupProps {
  popupState: "Login" | "Signup" | undefined;
  setPopupState: Dispatch<SetStateAction<"Login" | "Signup" | undefined>>;
}

const AuthPopup: FC<AuthPopupProps> = ({ popupState, setPopupState }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [signup, { isLoading }] = useSignupMutation();
  return (
    <>
      <div className="z-20 fixed flex justify-center items-center inset-0 dark:bg-[rgba(0,0,0,0.4)] bg-[rgba(255,255,255,0.4)] backdrop-blur-3xl">
        {(isLoading||loading)&&(<div className="fixed z-30 flex justify-center items-center inset-0 dark:bg-[rgba(0,0,0,0.4)] bg-[rgba(255,255,255,0.4)] backdrop-blur-3xl">
          <Loader/>
        </div>)}
        <form
          onSubmit={async (e) => {
            setLoading(true);
            e.preventDefault();
            if (popupState === "Login") {
              signIn("credentials", {
                email: form.email,
                password: form.password,
                redirect: false,
              })
                .then((res) => {
                  if (res?.ok) {
                    setLoading(false);
                    setPopupState(undefined);
                  }else{
                    setLoading(false);
                  }
                })
                .catch((err) => {
                  setLoading(false);
                });
            } else {
              signup({ email: form.email, password: form.password })
                .then(async () => {
                  await signIn("credentials", {
                    email: form.email,
                    password: form.password,
                    redirect: false,
                  })
                    .then(() => {
                      setPopupState(undefined);
                      setLoading(false);
                    })
                    .catch((err) => {
                      setLoading(false);
                    });
                })
                .catch((err) => {
                  setLoading(false);
                });
            }
          }}
          className="w-[90vw] max-w-[400px] rounded-[20px] border border-[#F6E2E2] bg-gradient-to-br from-[rgba(111,100,239,0.20)] to-[rgba(169,162,252,0.20)] bg-blend-overlay backdrop-blur-[20px] flex flex-col justify-start items-center gap-4 py-14"
        >
          <p
            onClick={() => setPopupState(undefined)}
            className="absolute top-2.5 right-5 cursor-pointer text-xl"
          >
            x
          </p>
          <input
            type="text"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter your email"
            className="w-[90%] rounded-[30px] border border-[#E9D0D0] bg-transparent focus:outline-none py-[11.5px] px-5 placeholder:text-slate-950 text-slate-700 dark:placeholder:text-[rgba(255,255,255,0.7)] dark:text-white"
          />
          <div className="relative w-[90%]">
            <input
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="Enter your password"
              className="w-[100%] rounded-[30px] border border-[#E9D0D0] bg-transparent focus:outline-none py-[11.5px] pl-5 pr-14 placeholder:text-slate-950 text-slate-700 dark:placeholder:text-[rgba(255,255,255,0.7)] dark:text-white"
            />
            <p
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-4 top-3 cursor-pointer select-none"
            >
              {showPass ? "Hide" : "Show"}
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#50B42E] mt-3 transition-all duration-300 hover:brightness-90 border border-[#E9D0D0] rounded-[30px] flex justify-center items-center text-center py-[11.5px] text-white w-[90%]"
          >
            {popupState === "Login" && "Log In"}
            {popupState === "Signup" && "Sign Up"}
          </button>
          <p
            onClick={() => {
              if (popupState === "Login") {
                setPopupState("Signup");
              } else {
                setPopupState("Login");
              }
            }}
            className="text-xs cursor-pointer hover:brightness-90 dark:brightness-110"
          >
            {popupState === "Login" && "Don’t have an account? Sign Up"}
            {popupState === "Signup" && "Already have an account, Login"}
          </p>
        </form>
      </div>
    </>
  );
};
export default AuthPopup;
