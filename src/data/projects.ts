import type { CardData } from './types';

export const projectsData: CardData[] = [
  {
    id: 'profile-site',
    title: 'Personal Profile Site',
    description: 'A neobrutalism-styled personal profile website built with Vite, React, and Tailwind CSS.',
    detail: 'This is the very site you are viewing. Built as a multi-page SPA with React Router, it features dedicated pages for About, Projects, Resources, and Contact. The design follows a neobrutalism aesthetic — bold borders, offset shadows, and saturated accent colors. The code is modular: data is separated from components, making it easy to update content without touching layout. Deployed on Vercel with automatic CI/CD from GitHub.',
    tags: ['React', 'Tailwind', 'Vite', 'TypeScript'],
    link: 'https://github.com/hud-haikal/hud-haikal-profile',
  },
  {
    id: 'mwcnt-pa6-dispersion',
    title: 'Improving MWCNT Dispersion in PA6 Composites',
    description: 'Explored a polymer–nanotube composite system to improve the dispersion of MWCNTs in a PA6 matrix.',
    detail: 'Developed a crystallization-based approach to coat and separate multi-walled carbon nanotubes (MWCNTs) within a polyamide 6 (PA6) matrix. The project investigated how varying dispersion quality influenced the composite\'s mechanical properties (tensile strength, modulus), thermal behavior (degradation temperature, crystallinity), and structural characteristics (SEM morphology, XRD patterns). Results provided insight into optimal processing conditions for uniform nanocomposite fabrication.',
    tags: ['PolymerEngineering', 'Nanocomposites', 'MWCNT', 'PA6', 'MaterialsScience', 'Research'],
  },
  {
    id: 'project-3',
    title: 'Coming Soon',
    description: 'A project currently in development.',
    detail: 'Details will be added once the project reaches a shareable stage.',
    tags: ['In Progress'],
  },
];