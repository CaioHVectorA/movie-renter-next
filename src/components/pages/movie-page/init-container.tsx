import React from "react";

export const MovieInitialContainer = ({ children }: { children: React.ReactNode }) => (
    <main className=" flex px-16 max-md:flex-col max-md:justify-center max-md:*:text-center gap-12 w-full mt-16">
        { children }
    </main>
)