import ArrowUpRightICon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 pt-14 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-[#deccfb] to-[#d79bff] px-10 py-8 rounded-md text-gray-950 text-center md:text-left flex flex-col items-center md:flex-row">
            <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 gap-4 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Let&apos;s create something amazing together
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your next project to life? Let's connect and
                  disscus, I can help you achieve your goals.
                </p>
              </div>
              <a
                href="mailto:abhpraja235@gmail.com"
                className="text-white bg-gray-900 inline-flex gap-2 mt-8 items-center px-6 h-12 rounded-md w-max hover:cursor-pointer"
              >
                <span className="font-semibold w-max">Contact Me</span>
                <ArrowUpRightICon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
