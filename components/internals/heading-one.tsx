import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function HeadingOne({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <h1
        className={cn(
          "text-3xl font-extrabold text-center text-sragam_red pb-2",
          className
        )}
      >
        {children}
      </h1>
      <div className="border-ragam_red border-2 w-48 mx-auto rounded-full"></div>
    </>
  );
}
