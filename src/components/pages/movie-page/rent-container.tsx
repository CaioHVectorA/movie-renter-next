import { ReactNode } from "react";

export const MovieRentContainer = ({ children }: { children: ReactNode }) => (
    <div className=" flex max-md:flex-col gap-2 px-16 mt-6">
            { children }
        </div>
)