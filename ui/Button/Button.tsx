import { ComponentPropsWithoutRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "primary-outline"
  | "secondary-outline";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
}

const buttonClassnames: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-blue-400 disabled:dark:bg-blue-500 disabled:cursor-not-allowed",
  secondary:
    "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 px-5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 disabled:bg-gray-400 disabled:dark:bg-gray-500 disabled:cursor-not-allowed",
  "primary-outline":
    "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 disabled:hover:bg-transparent disabled:hover:text-blue-700 disabled:hover:dark:text-blue-500 disabled:cursor-not-allowed",
  "secondary-outline":
    "text-gray-700 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 px-5 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 disabled:bg-gray-400 disabled:dark:bg-gray-500 disabled:cursor-not-allowed",
};

const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${buttonClassnames[variant]} ${className}`}>
      {props.children}
    </button>
  );
};

export { Button };
