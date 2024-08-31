import { Movie } from "@/components/pages/movie-page";
import { api } from "@/lib/api";
import { RentOption } from "@/types/RentOption";
import { Star } from "lucide-react";

export default async ({ params }: { params: { id: string } }) => {
  const {
    data: { movie: data, rental_options },
  } = await api<{ movie: Movie; rental_options: RentOption[] }>(
    `/movie/${params.id}`
  );
  return (
    <>
    <Movie.InitialContainer>
      <Movie.Image alt={data.title} src={data.image_url} />
      <Movie.Content data={data}>
      </Movie.Content>
    </Movie.InitialContainer>
    <Movie.RentContainer>
      {rental_options.map((option) => (
        <Movie.RentOption {...option} />
      ))}
    </Movie.RentContainer>
    </>
  );
};
