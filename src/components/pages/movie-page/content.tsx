import { Star } from "lucide-react";
import { PropsWithChildren } from "react";

export const MovieContent = ({ data, children }: PropsWithChildren<{ data: Movie }>) => (
  <div>
    <h1 className=" text-4xl">{data.title}</h1>
    <div className=" flex gap-2 items-center">
      <Star fill="gold" size={16} />
      <div className=" flex">
        <p className=" text-sm">{data.rating}</p>
        <span className="text-sm opacity-30">/10</span>
      </div>
    </div>
    <div>
      <p className=" max-w-[36rem] text-xl">{data.sinopsis}</p>
      <h2 className=" my-6 text-2xl">Opções de aluguel</h2>
      { children }
    </div>
  </div>
);
