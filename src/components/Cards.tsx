import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export function FlatCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#f4f0e7] flex gap-4 h-28 w-80 md:flex-col md:h-72 md:w-44 rounded-2xl md:bg-transparent  ">
      <div className="relative h-28 w-28 rounded-l-2xl md:h-44 md:w-44 md:rounded-2xl overflow-clip bg-red-300">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="relative flex flex-col justify-between py-3 md:py-0">
        <p className=" md:text-center text-sm">
          {description}
          <span className="absolute right-2 md:hidden">
            <ArrowOutwardIcon fontSize="small" />
          </span>
        </p>
        <h3 className="md:text-center text-[var(--darker-base-color)]">
          {title}
        </h3>
      </div>
    </div>
  );
}
