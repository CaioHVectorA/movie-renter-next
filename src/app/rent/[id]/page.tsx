import { Movie } from "@/components/pages/movie-page";
import { api } from "@/lib/api";
import { Star } from "lucide-react";

export default async ({ params }: { params: { id: string } }) => {
    const { data } = await api<Movie>(`/movie/${params.id}`);
    return (
        <Movie.Container>
            <Movie.Image alt={data.title} src={data.image_url} />
            <Movie.Content data={data} />
        </Movie.Container>
    )
}