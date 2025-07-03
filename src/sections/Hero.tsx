import memojiImage from "@/assets/images/memoji-computer.png";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="pb-16 relative">
      <div className="box-border py-32 md:py-48 lg:py-60">
        <StarsBackground className="-z-10" />
        <ShootingStars className="-z-10" />
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt={"Person peeking from behind laptop"}
            />
            <div className="bg-white/10 border rounded-full backdrop-blur-md border-white/10 px-4 py-1.5 inline-flex items-center gap-4">
              <div className="size-2.5 bg-green-500 rounded-full relative">
                <div className="bg-emerald-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-xs font-medium font-sans">
                Actively Seeking Internships
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-sans text-3xl md:text-5xl font-semibold text-center mt-4 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 text-sm md:text-lg">
              I specialize in transforming designs into functional,
              high-performing web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 gap-4 justify-center md:flex-row">
            <a href="#projects">
              <button className="inline-flex items-center rounded-md px-6 h-12 gap-2 border backdrop-blur-md border-white/10 bg-white/10">
                <span className="text-sm">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
            </a>

            <a href="mailto:abhpraja235@gmail.com">
              <button className="inline-flex items-center rounded-md px-6 h-12 gap-2 border backdrop-blur-md border-white/10 bg-white/100 text-gray-900">
                <span>👋</span>
                <span className="text-sm">Let&apos;s Connect</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
