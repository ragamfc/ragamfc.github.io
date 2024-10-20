import { ReactNode } from "react";

export default function HeadingOne({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center text-sragam_red pb-2">
        {children}
      </h1>
      <div className="border-ragam_red border-2 w-48 mx-auto rounded-full"></div>
    </>
  );
}
