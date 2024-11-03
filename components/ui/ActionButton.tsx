import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ActionButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={` ${className} relative block w-fit px-20 py-1 text-lg font-medium text-center text-white rounded-xl bg-black  hover:bg-gradient-to-b from-transparent to-[#999999]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
