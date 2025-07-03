import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import crossProjectLandingPage from "@/assets/images/cross-landing-page.png";
import malwareProjectLandingPage from "@/assets/images/malware-landing-page.png";
import Image from "next/image";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Major Project",
    year: "2025",
    title: "Crosscan: Reflected XSS Scanner",
    info: "Crosscan is a MERN stack-based tool to detect reflected XSS vulnerabilities in web apps. It injects custom payloads and analyzes responses. The app features real-time results, MongoDB data storage, and a clean UI.",
    link: "https://github.com/Saiken7/CrossScan-XSS-Vulnerability-Scanner",
    image: crossProjectLandingPage,
  },
  {
    company: "Major Project",
    year: "2024",
    title: "MalGuard: Malware Detection Website",
    info: "A web app to scan uploaded files for malware using signature-based analysis and APIs. Focused on cybersecurity and privacy, it offers real-time detection and highlights my backend and API skills.",
    link: "https://github.com/Cyber141k/malware_detection_website",
    image: malwareProjectLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div>
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase text-md tracking-wide font-semibold bg-gradient-to-r from-[#deccfb] to-[#d79bff] text-transparent bg-clip-text text-center">
              Real-world Results
            </p>
          </div>

          <h2 className="text-3xl text-center font-semibold mt-4 md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-center max-w-md mx-auto text-white/60 mt-4 text-sm md:text-lg font-normal lg:text-xl">
            See how I transformed concepts into engaging digital experiences.
          </p>

          <div className="flex md:mt-20 flex-col mt-10 gap-16">
            {portfolioProjects.map((project) => (
              <Card
                key={project.title}
                className=" px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-20"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-[#deccfb] to-[#d79bff] inline-flex gap-2 uppercase tracking-widest text-sm font-semibold text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <p className="text-sm md:text-base md:mt-5 mt-4 font-light text-white/55">
                      {project.info}
                    </p>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-md flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        Github
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>

                  <div className="relative">
                    <Image
                      src={project.image}
                      alt="Project Title"
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
