"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export function Search({ name }: { name: string }) {
  const [search, setSearch] = useState("");
  return (
    <div className=" bg-zinc-800 rounded-full flex items-center px-6 gap-2 py-2 group-hover:opacity-15">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" bg-transparent border-gray-500 border"
        placeholder={`${name}...`}
      />
      <SearchIcon className="transition-all cursor-pointer hover:rotate-12 group hover:scale-125" />
    </div>
  );
}
