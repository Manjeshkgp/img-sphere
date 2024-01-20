import React, { FC, ButtonHTMLAttributes } from "react";

const styles = {
  primary: "py-[7px] px-2 sm:pl-[14.25px] sm:pr-[13.73px] rounded-[8.9px] font-euclid_circular_b font-semibold text-sm sm:text-[17.813px] sm:leading-[112%] text-white border-[2.67px] border-white",
  secondary: "w-[151.136px] h-[42.47px] flex justify-center items-center rounded border border-[#D1D1D1] text-center font-helvetica_neue text-[13.74px] leading-[14.797px] dark:text-white text-[#767676] font-medium capitalize",
  auth:"px-2 py-1.5 dark:bg-indigo-950 bg-indigo-200 rounded-md text-slate-950 dark:text-slate-50 font-semibold font-euclid_circular_b flex justify-center items-center text-center text-lg"
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: keyof typeof styles;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={styles[variant]} {...props}>
      {children ?? "Enter some text"}
    </button>
  );
};

export default Button;
