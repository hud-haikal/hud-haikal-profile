import SectionHeading from '../components/SectionHeading';
import CardGrid from '../components/CardGrid';
import { resourcesData } from '../data/resources';

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading>Resources</SectionHeading>
      <div className="mt-8">
        <CardGrid cards={resourcesData} basePath="/resources" />
      </div>
    </div>
  );
}