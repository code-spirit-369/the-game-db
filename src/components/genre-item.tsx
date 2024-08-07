import Image from "next/image";
import Link from "next/link";

export default function GenreItem({ genre }: { genre: Genre }) {
  return (
    <Link
      href={`/genre/${genre.id}`}
      className="flex items-center space-x-4 cursor-pointer p-3 rounded-2xl hover:bg-primary/90 hover:text-white transition-colors duration-300"
    >
      <Image
        src={genre.image_background}
        alt={genre.slug}
        width={1080}
        height={1080}
        className="aspect-square object-cover size-12 md:size-16 rounded-2xl"
      />
      <p className="text-base md:text-xl font-semibold">{genre.name}</p>
    </Link>
  );
}
