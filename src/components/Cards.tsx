import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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

export function PricingCard({
  title,
  description,
  price,
  features,
  variant = "light",
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`${
        variant === "light"
          ? "bg-[var(--lighter-base-color)]"
          : "bg-[var(--base-color)] text-[var(--lighter-base-color)] "
      } cursor-pointer flex flex-shrink-0 flex-col items-start gap-y-3 rounded-2xl p-5 h-[28rem] w-80 text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2`}
    >
      <h1 className=" w-1/2 text-2xl font-bold">{title}</h1>
      <p>{description}</p>
      <h2 className="text-2xl font-bold">
        ${price}
        <span className="text-lg font-normal"> /session</span>
      </h2>
      <ul className="flex flex-col gap-y-2">
        {features.map((feature, index) => (
          <li key={index}>
            <CheckCircleOutlineIcon fontSize="small" className="opacity-50" />{" "}
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-auto">Book now</button>
    </div>
  );
}
