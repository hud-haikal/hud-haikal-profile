import { contactData } from '../data/contact';

export default function HmuPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="font-inter font-black text-4xl md:text-5xl text-[#1A1A1A] border-l-4 border-[#1A1A1A] pl-4 mb-8 inline-block">
        HMU
      </h1>

      <p className="font-inter text-xl text-[#1A1A1A] mb-8">
        Let&apos;s connect — reach out anytime.
      </p>

      <div className="font-inter text-lg text-[#1A1A1A] space-y-4 mb-10">
        <p>
          <span className="font-bold">Email:</span>{' '}
          <a
            href={`mailto:${contactData.email}`}
            className="underline hover:text-[#FF3366] transition-colors"
          >
            {contactData.email}
          </a>
        </p>
        <p>
          <span className="font-bold">Phone:</span> {contactData.phone}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {contactData.linkedin !== 'WIP' && (
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-[#1A1A1A] font-inter font-extrabold text-lg px-8 py-4 border-3 border-[#1A1A1A] shadow-neo hover:-translate-y-1 hover:shadow-neo-lg active:translate-y-0 active:shadow-neo-sm focus-visible:outline-none transition-all duration-300"
          >
            LinkedIn
          </a>
        )}
        {contactData.instagram !== 'WIP' && (
          <a
            href={contactData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF3366] text-[#1A1A1A] font-inter font-extrabold text-lg px-8 py-4 border-3 border-[#1A1A1A] shadow-neo hover:-translate-y-1 hover:shadow-neo-lg active:translate-y-0 active:shadow-neo-sm focus-visible:outline-none transition-all duration-300"
          >
            Instagram
          </a>
        )}
      </div>

      {contactData.linkedin === 'WIP' && contactData.instagram === 'WIP' && (
        <p className="font-inter text-[#1A1A1A] mt-6">
          Contact links coming soon.
        </p>
      )}
    </div>
  );
}