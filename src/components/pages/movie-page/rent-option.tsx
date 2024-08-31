import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatBRL } from "@/helpers/format-brl";
import { type RentOption } from "@/types/RentOption";

export function MovieRentOption(data: RentOption) {
  return (
    <div className=" bg-black bg-opacity-10 rounded-lg px-2 py-4 w-72">
      <h3 className={" font-bold my-1 text-2xl"}>{data.name}</h3>
      <div className=" h-20">
        <p className=" mt-2">
          {data.description ||
            `Alugue esse filme por ${data.discount_price} por ${data.duration} dias`}
        </p>
        {data.discount > 0 && (
          <Badge className=" my-2">{data.discount * 100}% de desconto!</Badge>
        )}
      </div>
      <div className=" mt-4">
        <p className=" opacity-60 line-through h-7">
          {data.original_price !== data.discount_price
            ? formatBRL(data.original_price)
            : ""}
        </p>
        <p className=" text-xl font-bold">{formatBRL(data.discount_price)}</p>
      </div>
      <Button className=" w-full mt-4">Alugar</Button>
    </div>
  );
}
