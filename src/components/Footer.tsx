export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#FFFDF7] py-8 px-4 text-center">
      <p className="font-inter font-bold text-sm">
        &copy; {year} Hud Haikal Zainuddin
      </p>
    </footer>
  );
}