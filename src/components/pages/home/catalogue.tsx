import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

export function Catalogue({ data, pages }: { data: Movie[], pages: number }) {
    return (
        <main className=" my-12 px-4">
            <h1 id="cat" className="text-4xl font-bold mb-6 max-md:text-center">Catálogo</h1>
            <section className="grid grid-cols-[repeat(auto-fit,240px)] max-md:grid-cols-1 gap-6">
                {data.map((movie) => (
                    <div key={movie.id} className="flex flex-col max-md:items-center w-60 gap-4">
                        <img
                            src={movie.image_url}
                            alt={movie.title}
                            className="rounded-lg object-contain"
                            width={240}
                            // height={300}
                        />
                        <h2 className="text-xl font-bold leading-5 h-10 line-clamp-2">{movie.title}</h2>
                        <p className=" max-md:text-center text-justify line-clamp-4">{movie.sinopsis}</p>
                        <div className=" flex gap-2">
                            {/* <Button className=" w-6/12" variant={'outline'}><Star className=" mr-1"/> Favoritar</Button> */}
                            <Link className=" w-full" href={`/rent/${movie.id}`}>
                                <Button className=" w-full"><ExternalLink className="mr-1"/> Alugar</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
            <div className="flex justify-center gap-4 mt-6">
                {Array.from({ length: pages}, (_, i) => (
                    <Link href={`/?page=${i+1}#cat`}>
                        <Button key={i} className="bg-zinc-800 text-white px-4 py-2 rounded-md">
                            {i + 1}
                        </Button>
                    </Link>
                ))}
            </div>
        </main>
    )
}