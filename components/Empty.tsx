import React from "react";

export enum Status {
  Active = "active",
  Delete = "delete",
}

interface EmptyProps {
  status: Status;
}

const Empty = ({ status }: EmptyProps) => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <h1 className="text-xl font-bold text-black">Blogs not found </h1>
    </div>
  );
};

export default Empty;
