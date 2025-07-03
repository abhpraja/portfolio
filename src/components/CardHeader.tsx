import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
    title,description, className }: {title: string, description: string, className? : string;}) => {
  return (
    <>
      <div className={twMerge("flex flex-col p-6", className)}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-8 text-purple-300" />
          <h3 className="text-2xl lg:text-3xl">{title}</h3>
        </div>
        <p className="mt-2 text-sm lg:text-base text-white/60">{description}</p>
      </div>
    </>
  );
};
