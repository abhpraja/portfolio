export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase text-md tracking-wide font-semibold bg-gradient-to-r from-[#deccfb] to-[#d79bff] text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-3xl text-center font-semibold mt-4 md:text-5xl">
        {title}
      </h2>
      <p className="text-center px-5 max-w-md mx-auto text-white/60 mt-4 text-sm md:text-lg font-normal lg:text-xl">
        {description}
      </p>
    </>
  );
};
