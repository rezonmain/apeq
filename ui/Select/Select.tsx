import { ComponentPropsWithoutRef, ReactNode, forwardRef, useId } from "react";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  defaults?: {
    value: string;
    label: ReactNode;
  };
  options: {
    value: string;
    label: ReactNode;
  }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { defaults, options, label, ...rest } = props;
  const id = useId();
  return (
    <>
      <label htmlFor={rest.id ?? id} className="sr-only">
        {defaults ? defaults.label : label}
      </label>
      <select
        {...rest}
        id={rest.id ?? id}
        ref={ref}
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        {defaults && (
          <option selected value={defaults.value}>
            {defaults.label}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
});

Select.displayName = "Select";

export default Select;
