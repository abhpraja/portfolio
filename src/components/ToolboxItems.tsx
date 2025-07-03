import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
  items,
  className,
  itemsWraooerClassName,
}: {
  items: {
    title: string;
  }[];
  className?: string;
  itemsWraooerClassName?: string;
}) => {
  return (
    <>
      <div
        className={twMerge(
          "flex, [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className
        )}
      >
        <div
          className={twMerge(
            "flex py-0.5 pr-6 flex-none gap-6",
            itemsWraooerClassName
          )}
        >
          {[...new Array(3)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center py-2 px-3 outline outline-2 rounded-sm outline-white/10"
                >
                  <span className="">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
