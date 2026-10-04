import SectionHeading from '../components/SectionHeading';
import CardGrid from '../components/CardGrid';
import { projectsData } from '../data/projects';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-8">
        <CardGrid cards={projectsData} basePath="/projects" />
      </div>
    </div>
  );
}