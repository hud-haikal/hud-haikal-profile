import { aboutData } from '../data/about';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="neo-border neo-shadow bg-white px-10 py-8 inline-block mb-8">
        <h1 className="font-inter font-black text-5xl md:text-7xl text-[#1A1A1A] tracking-tight">
          {aboutData.name}
        </h1>
      </div>
      <p className="font-inter font-bold text-xl md:text-2xl text-[#1A1A1A] mb-6">
        {aboutData.tagline}
      </p>
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {aboutData.highlights.map((item) => (
          <span
            key={item}
            className="font-inter font-semibold text-sm text-[#1A1A1A] border-2 border-[#1A1A1A] bg-white shadow-neo-sm px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}