import React from "react";

import { FileInputProps } from "@/types";
import { uploadImage } from "@/utils";

const FileInput = ({ setValue }: FileInputProps) => {
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = await uploadImage(e.target.files[0]);

      if (url) {
        setValue(url);
      }
    }
  };

  return (
    <div className="mb-3">
      <label
        htmlFor="file_input"
        className="block mb-1 text-sm font-medium text-gray-900 "
      >
        Profile Image
      </label>
      <input
        onChange={onChangeHandler}
        type="file"
        id="file_input"
        className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500  block w-full p-2.5  "
        required
      />
    </div>
  );
};

export default FileInput;
