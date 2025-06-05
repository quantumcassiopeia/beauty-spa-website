import Image from "next/image";

export default function SplitView({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl overflow-clip flex flex-col h-[45rem] w-full md:flex-row md:h-[30rem] md:max-w-5xl mx-auto ">
      <div className="relative h-1/3 md:w-1/3 md:h-full">
        <Image src={href} fill alt={title} className="object-cover" />
      </div>
      <div className="min-h-2/3 md:h-full md:w-2/3">{children}</div>
    </div>
  );
}
