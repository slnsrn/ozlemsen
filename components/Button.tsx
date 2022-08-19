import React, { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

function Button({
  colorClass,
  ...props
}: AriaButtonProps<"button"> & { colorClass?: string }) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`inline-flex justify-center gap-2 rounded-md border border-transparent shadow-sm px-4 py-2 text-xl font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm ${
        colorClass ?? " bg-rose-400 hover:bg-[#f8677c] focus:ring-[#f8677c]"
      }`}
    >
      {props.children}
    </button>
  );
}

const PrimaryButton = (props: AriaButtonProps<"button">) => (
  <Button {...props} />
);
const SecondaryButton = (props: AriaButtonProps<"button">) => (
  <Button
    {...props}
    colorClass="bg-amber-200 hover:bg-amber-300 focus:ring-amber-300 text-rose-400"
  />
);

export { PrimaryButton, SecondaryButton };
