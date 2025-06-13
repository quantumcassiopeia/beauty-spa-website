import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export function ServiceCard({
  image,
  title,
  tag,
}: {
  image: string;
  title: string;
  tag: string;
}) {
  return (
    <div className="bg-[#f4f0e7] relative flex w-full max-w-[27rem] md:flex-col md:justify-baseline md:bg-transparent md:w-60  mb-auto rounded-2xl">
      <span className="absolute top-1.5 right-1.5 md:hidden">
        <ArrowOutwardIcon fontSize="small" />
      </span>
      <div className="relative flex-shrink-0 h-28 w-32 rounded-l-2xl md:h-60 md:w-60 md:rounded-2xl overflow-clip">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between p-2">
        <p className="text-sm md:text-center md:py-2 opacity-70">{tag}</p>
        <h3 className="md:text-center text-md">{title}</h3>
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
      <p className="mt-auto">Book now</p>
    </div>
  );
}

export function StaffCard({
  image,
  title,
  expertise,
}: {
  image: string;
  title: string;
  expertise: string;
}) {
  return (
    <div className="w-40 md:w-52 ">
      <div className="relative rounded-2xl h-40 w-40 md:h-72 md:w-52 overflow-clip">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h1 className="text-center text-2xl pt-4 font-bold">{title}</h1>
      <h2 className="text-center text-sm">{expertise}</h2>
    </div>
  );
}

export function ExperienceCard({
  title,
  description,
  iconPosition = "left",
  children,
}: {
  title: string;
  description: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-[var(--lighter-base-color)] flex flex-col w-44 rounded-2xl p-4  ${
        iconPosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
      }  md:w-80 md:items-center md:justify-between`}
    >
      <div>{children}</div>
      <div>
        <h1
          className={`pb-1 font-bold ${
            iconPosition === "right" ? "md:text-left" : "md:text-right"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm md:w-60 ${
            iconPosition === "right" ? "md:text-left" : "md:text-right"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
