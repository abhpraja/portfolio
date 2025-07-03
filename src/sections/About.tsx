"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import aboutMe from "@/assets/images/about-me.png";

const toolboxItems = [
  {
    title: "Java",
    icon: "",
  },
  {
    title: "JavaScript",
    icon: "",
  },
  {
    title: "ReactJS",
    icon: "",
  },
  {
    title: "HTML5",
    icon: "",
  },
  {
    title: "CSS3",
    icon: "",
  },
  {
    title: "TailwindCSS",
    icon: "",
  },
  {
    title: "NodeJS",
    icon: "",
  },
  {
    title: "Express",
    icon: "",
  },
  {
    title: "MongoDB",
    icon: "",
  },
  {
    title: "Figma",
    icon: "",
  },
];

const hobbiesboxItems = [
  {
    title: "Painting",
    icon: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    icon: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Traveling",
    icon: "🧳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    icon: "🎶",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cycling",
    icon: "🚲",
    left: "70%",
    top: "45%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <section id="about">
      <div className="py-20 lg:py-28 ">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do, and what inspires me."
          />
          <div className="mt-10 flex flex-col gap-8">
            <div className="md:grid md:grid-cols-5 md:gap-8 grid grid-cols-1 gap-8">
              <Card className="h-fit md:h-[320px] md:col-span-3">
                <CardHeader
                  title="Myself"
                  description="The Mind Behind the Work"
                />
                <div>
                  <p className="text-md text-white/100 text-left p-6 mx-auto font-light">
                    Frontend web developer based in India, driven by a passion
                    for crafting intuitive digital experiences. Interested in
                    the intersections of design, technology, and security, with
                    a focus on clean code, responsive design, and user-centric
                    development.
                  </p>
                </div>
              </Card>

              <Card className="h-[320px] md:col-span-2  relative">
                <Image
                  src={aboutMe}
                  className="absolute -z-10 top-0 w-full left-0 h-full object-cover"
                  alt="profile img"
                />
              </Card>
            </div>

            <div className="md:grid md:grid-cols-5 md:gap-8 grid grid-cols-1 gap-8">
              <Card className="h-[320px] flex flex-col md:col-span-2">
                <CardHeader
                  title="Beyond the code"
                  description="Explore my interests and hobbies beyond the digital realm."
                />

                <div className="relative flex-1" ref={constrainRef}>
                  {hobbiesboxItems.map((hobbies) => (
                    <motion.div
                      key={hobbies.title}
                      className="inline-flex gap-2 px-6 bg-gradient-to-r from-[#deccfb] to-[#d79bff] rounded-full py-1.5 absolute"
                      style={{
                        left: hobbies.left,
                        top: hobbies.top,
                      }}
                      drag
                      dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobbies.title}
                      </span>
                      <span>{hobbies.icon}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="h-[320px] p-0 md:col-span-3">
                <CardHeader
                  title="My tech stack"
                  description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                />

                <div className="mt-4">
                  <ToolboxItems
                    items={toolboxItems}
                    itemsWraooerClassName="animate-move-left [animation-duration:30s]"
                  />
                  <ToolboxItems
                    items={toolboxItems}
                    className="mt-6"
                    itemsWraooerClassName="animate-move-right [animation-duration:30s]"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
