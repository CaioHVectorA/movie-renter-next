import { Button } from "@/components/ui/button";
import { sanchez } from "@/helpers/font";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";

export function InitialSection({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-b from-zinc-900 to-zinc-700 text-white h-screen flex flex-col items-center justify-center relative">
      <h1 className={sanchez.className + " text-4xl font-bold"}>
        Abandone os streamings e assinaturas caras
      </h1>
      <div className=" relative top-14 flex flex-col gap-6">
        <p className=" text-2xl">
          Explore nossa coleção de filmes e prepare sua pipoca!
        </p>
        { children }
      </div>
      <Button asChild className="absolute bottom-12 w-40 animate-bounce">
        <Link href={"#cat"}>
          <ArrowBigDownDash size={32} />
        </Link>
      </Button>
    </main>
  );
}
