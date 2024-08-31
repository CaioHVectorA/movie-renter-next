import { Star } from "lucide-react";
import { PropsWithChildren } from "react";

export const MovieContent = ({ data, children }: PropsWithChildren<{ data: Movie }>) => (
  <div>
    <h1 className=" text-4xl">{data.title}</h1>
      <p className=" max-w-[36rem] text-xl mt-4">{data.sinopsis}</p>
      <div className=" flex gap-2 items-center my-6">
        <Star fill="gold" size={28} />
        <div className=" flex max-md:justify-center">
          <p className=" text-xl">{data.rating}</p>
          <span className="text-xl opacity-30">/10</span>
        </div>
      </div>
  </div>
);
