import { Home } from "@/components/pages/home";
import { Button } from "@/components/ui/button";
import { sanchez } from "@/helpers/font";
import { api } from "@/lib/api";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async ({ searchParams }: { searchParams: { page: string } }) => {
  const { data } = await api<{ data: Movie[], total: number, per_page: number }>(`/movies?page=${searchParams.page || 1}`);
  return (
    <>
      <Home.InitialSection>
        <Home.Search name={data.data[Math.floor(Math.random() * data.data.length)].title}/>
      </Home.InitialSection>
      <Home.Catalogue data={data.data} pages={Math.round(data.total / data.per_page)}  />
    </>
  );
}
