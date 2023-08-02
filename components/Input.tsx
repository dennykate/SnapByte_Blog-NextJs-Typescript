import React from "react";

import { InputProps } from "@/types";
import { convertLabelToId } from "@/utils";

const Input = ({ type, label, placeholder, value, setValue }: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-3 w-full">
      <label
        htmlFor={convertLabelToId(label)}
        className="block mb-1 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={convertLabelToId(label)}
        className="w-full bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block p-2.5  "
        placeholder={placeholder}
        required
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
