import Image from "next/image";
import Link from "next/link";

export default function Card({
  id,
  name,
  price,
  image,
  size = "grid", // ✅ default to grid
  className = "",
}) {
  // Define size-specific classes and configurations
  const sizeSet = [
    {
      type: "hero",
      containerClass: "",
      imageSizes: "(min-width: 768px) 66vw, 100vw",
      priceTagClass: "lg:px-20 lg:pb-[35%]",
    },
    {
      type: "large",
      containerClass: "",
      imageSizes: "(min-width: 768px) 33vw, 100vw",
      priceTagClass: "",
    },
    {
      type: "carousel",
      containerClass:
        "relative h-[250px] w-[400px] flex-none mr-3 list-none",
      imageSizes:
        "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw",
      priceTagClass: "",
    },
    {
      type: "grid",
      containerClass:
        "aspect-square transition-opacity animate-fadeIn",
      imageSizes:
        "(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw",
      priceTagClass: "",
    },
  ];

  // ✅ fallback to "grid" config if not found
  const set = sizeSet.find((s) => s.type === size) || sizeSet.find((s) => s.type === "grid");

  const cardContent = (
    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black hover:border-blue-600 dark:bg-black relative border-neutral-600 dark:border-neutral-800">
      <Image
        alt={name}
        src={image}
        fill
        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
        priority={size === "hero"}
      />
      <div
        className={`absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label ${set.priceTagClass}`}
      >
        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
          <h3 className="mr-4 line-clamp-2 grow pl-2 leading-none tracking-tight">
            {name}
          </h3>
          <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
            ${price?.toFixed(2)}
            <span className="ml-1 hidden @[275px]/label:inline">USD</span>
          </p>
        </div>
      </div>
    </div>
  );

  // For carousel and grid, wrap in li and link
  if (size === "carousel") {
    return (
      <li className={set.containerClass}>
        <Link href={`/bie_daalt/${id}`} className="relative h-full w-full">
          {cardContent}
        </Link>
      </li>
    );
  }

  if (size === "grid") {
    return (
      <li className={`${set.containerClass} ${className}`}>
        <Link
          href={`/bie_daalt/${id}`}
          className="relative inline-block h-full w-full"
        >
          {cardContent}
        </Link>
      </li>
    );
  }

  // For hero and large, just return the card with optional link wrapper
  return (
    <Link
      href={`/bie_daalt/${id}`}
      className={`${set.containerClass} ${className}`}
    >
      {cardContent}
    </Link>
  );
}