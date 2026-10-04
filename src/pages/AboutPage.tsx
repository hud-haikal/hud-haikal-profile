import { aboutData } from '../data/about';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-inter font-black text-4xl md:text-5xl text-[#1A1A1A] border-l-4 border-[#1A1A1A] pl-4 mb-8">
        About Me
      </h1>
      <p className="font-inter font-bold text-xl md:text-2xl text-[#1A1A1A] mb-6">
        {aboutData.tagline}
      </p>
      <p className="font-inter text-lg text-[#1A1A1A] mb-8 leading-relaxed">
        {aboutData.bio}
      </p>
      <h2 className="font-inter font-extrabold text-2xl text-[#1A1A1A] mb-4">
        Highlights
      </h2>
      <ul className="space-y-3">
        {aboutData.highlights.map((item) => (
          <li
            key={item}
            className="font-inter font-semibold text-[#1A1A1A] border-2 border-[#1A1A1A] bg-white shadow-neo-sm px-4 py-2 inline-block mr-2 mb-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}