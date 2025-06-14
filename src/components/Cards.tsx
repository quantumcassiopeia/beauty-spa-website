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
  name,
  expertise,
}: {
  image: string;
  name: string;
  expertise: string;
}) {
  return (
    <div className="w-40 md:w-52 ">
      <div className="relative rounded-2xl h-40 w-40 md:h-72 md:w-52 overflow-clip">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h1 className="text-center text-2xl pt-4 font-bold">{name}</h1>
      <h2 className="text-center text-sm">{expertise}</h2>
    </div>
  );
}

export function ExperienceCard({
  title,
  description,
  icon,
  iconPosition = "left",
}: {
  title: string;
  description: string;
  icon: string;
  iconPosition?: "left" | "right";
}) {
  return (
    <div
      className={`bg-[var(--lighter-base-color)] flex flex-col w-44 rounded-2xl p-4  ${
        iconPosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      }  lg:w-80 lg:h-24 lg:items-center lg:justify-between`}
    >
      <div className="relative w-7 h-7">
        <Image src={`/icons/${icon}.svg`} fill alt="icon" />
      </div>
      <div className="pt-4 md:pt-0">
        <h1
          className={`pb-1 font-bold ${
            iconPosition === "right" ? "lg:text-left" : "lg:text-right"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm lg:w-60 ${
            iconPosition === "right" ? "lg:text-left" : "lg:text-right"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function JourneyFlow({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex w-80 pb-6 md:flex-col md:w-60 md:h-72 overflow-clip md:pl-6 md:pb-0">
      <div className="absolute md:top-6 md:bottom-6 md:left-0 md:w-[1px] md:h-auto bottom-0 left-0 w-full h-[1px] bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[var(--base-color)]/20 to-transparent" />

      <h2 className="text-5xl w-10 pb-6 md:text-6xl">{children}</h2>
      <div className="w-full ml-8 md:ml-0">
        <h3 className="text-2xl text-[var(--darker-base-color)] w-45 pb-4">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function OurJourneyCard({
  number,
  span,
  description,
}: {
  number: string;
  span?: string;
  description: string;
}) {
  return (
    <div className="max-w-56">
      <h2 className="text-4xl text-[var(--darker-base-color)]">
        {number}
        {span && (
          <span className="text-xl text-[var(--base-color)] ">{span}</span>
        )}
      </h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
