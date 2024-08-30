import { Button } from "@/components/ui/button";
import { type RentOption } from "@/types/RentOption";

export function MovieRentOption(data: RentOption) {
    return (
        <div className=" bg-black bg-opacity-60 rounded-lg px-2 py-2">
            <h3>{data.name}</h3>
            <p>{(data.description || `Alugue esse filme por ${data.discount_price} por ${data.duration} dias`)}</p>
            <div className=" w-full flex justify-between">
                <p>{data.discount_price}</p>
                <Button>Alugar</Button>
            </div>
        </div>
    )
}