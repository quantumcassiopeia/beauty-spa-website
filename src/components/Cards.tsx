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
    <div className="bg-[#f4f0e7] flex gap-4 h-28 w-80 md:flex-col md:h-96 md:w-52 rounded-2xl md:bg-transparent">
      <div className="relative h-28 w-28 rounded-l-2xl md:h-52 md:w-52 md:rounded-2xl overflow-clip">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="relative flex flex-col justify-between py-3 md:py-0">
        <p className="md:text-center md:mb-3 opacity-70 ">
          {description}
          <span className="absolute top-1.5 -right-5 md:hidden">
            <ArrowOutwardIcon fontSize="small" />
          </span>
        </p>
        <h3 className="md:text-2xl md:text-center text-[var(--darker-base-color)]">
          {title}
        </h3>
      </div>
    </div>
  );
}
