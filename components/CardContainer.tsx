import Card from "./Card";
import { CardDataProps } from "@/types";

const CardContainer = ({ data }: { data: CardDataProps[] }) => {
  return (
    <div className="my-5 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
      {data?.length > 0 &&
        data?.map((data: CardDataProps, index: number) => (
          <Card key={index} data={data} />
        ))}
    </div>
  );
};

export default CardContainer;
