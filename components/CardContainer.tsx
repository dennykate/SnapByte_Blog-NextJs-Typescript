import { Card, Empty } from "./";
import { CardDataProps } from "@/types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Status } from "./Empty";

type CardContainerProps = {
  data: CardDataProps[];
  loading: boolean;
};

const CardContainer = ({ data, loading }: CardContainerProps) => {
  if (data?.length == 0) {
    return <Empty status={Status.Active} />;
  }

  return (
    <>
      {!loading ? (
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-4">
          {data?.map((data: CardDataProps, index: number) => (
            <Card key={index} data={data} />
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-2 w-full h-[300px] justify-center">
          <AiOutlineLoading3Quarters className="text-xl animate-spin" />
          <h1 className="text-xl font-bold text-black">Loading ...</h1>
        </div>
      )}
    </>
  );
};

export default CardContainer;
