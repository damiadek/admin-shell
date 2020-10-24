import { Input } from "antd";
import React, { ReactElement } from "react";
interface ICustomInputFieldProps {
  placeholder?: string;
  id?: string;
  label?: string;
  type?: string;
  suffix?: ReactElement;
}

export const CustomInputField = React.forwardRef(
  (
    {
      id = "",
      placeholder = "",
      label = "",
      type = "text",
      suffix
    }: ICustomInputFieldProps,
    ref: any
  ) => {
    return (
      <div className="custom-input">
        <Input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          suffix={suffix}
        ></Input>
        {label && <label>{label}</label>}
      </div>
    );
  }
);
