import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    linkName: "Resume",
    href: "/Abhishek_Prajapati_Resume.pdf",
  },
  {
    linkName: "Instagram",
    href: "https://www.instagram.com/itzabhi__p/",
  },
  {
    linkName: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-prajapati-93216b249/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-purple-300/30 -z-50 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container">
        <div className="border-t-2 border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between z-20">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((links) => (
              <a
                href={links.href}
                target="_blank"
                rel="noopener noreferrer"
                key={links.linkName}
                className="inline-flex items-center gap-1.5 "
              >
                <span className="font-semibold">{links.linkName}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
