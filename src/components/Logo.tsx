export default function Logo({
  color,
  name = false,
  className,
}: {
  color: "dark" | "light";
  name?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`w-9 h-9 ${
          color === "dark"
            ? "bg-[var(--base-color)]"
            : "bg-[var(--lighter-base-color)]"
        }`}
        style={{
          WebkitMaskImage: `url(/icons/logo.svg)`,
          maskImage: `url(/icons/logo.svg)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      <div
        className={`text-2xl md:text-4xl ml-2 ${name ? "block" : "hidden"} ${
          color === "dark"
            ? "text-[var(--base-color)]"
            : "text-[var(--lighter-base-color)]"
        }`}
      >
        beauva
      </div>
    </div>
  );
}
