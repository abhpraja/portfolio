export const Header = () => {
  return (
    <div className="flex justify-center  items-center sticky top-5 z-40">
      <nav className="flex border border-white/25 rounded-md p-1.5 bg-white/10 backdrop-blur-sm">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Project
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white rounded-sm text-gray-900 hover:bg-white/30"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
