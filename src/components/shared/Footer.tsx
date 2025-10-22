const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white mb-1 py-4 px-6 rounded-t-xl shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-center text-sm md:text-base">
          React · Redux Toolkit · Tailwind CSS
        </p>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} NoraDev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
