import React from "react";

export const MovieContainer = ({ children }: { children: React.ReactNode }) => (
    <main className=" flex px-32 gap-12 w-full mt-16">
        {children}
    </main>
)