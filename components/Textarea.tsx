import React from "react";

import { TextareaProps } from "@/types";
import { convertLabelToId } from "@/utils";

const Textarea = ({ label, placeholder, value, setValue }: TextareaProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        id={convertLabelToId(label)}
        className="w-full bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block p-2.5  "
        placeholder={placeholder}
        required
        value={value}
        onChange={onChangeHandler}
        rows={7}
      ></textarea>
    </div>
  );
};

export default Textarea;
