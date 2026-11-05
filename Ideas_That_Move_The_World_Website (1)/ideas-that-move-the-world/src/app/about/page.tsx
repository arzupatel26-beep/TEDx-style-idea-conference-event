import { EVENT } from "@/lib/constants";

export const metadata = {
  title: "About the Conference",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About the Conference</h1>
          <p className="mt-4 text-navy-200 text-lg">{EVENT.theme}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-navy">
        <p className="text-lg text-navy-700 leading-relaxed">
          IDEAS THAT MOVE THE WORLD is a three-day independent international ideas conference bringing together thinkers, entrepreneurs, professionals, researchers, students and innovators to exchange perspectives and explore ideas that can shape the future.
        </p>
        <p className="text-navy-600 leading-relaxed mt-6">
          Under the theme <strong>BEYOND BOUNDARIES – IDEAS THAT SHAPE TOMORROW</strong>, the conference explores technology, innovation, entrepreneurship, education, sustainability, leadership and social impact.
        </p>
        <p className="text-navy-600 leading-relaxed mt-6">
          Through keynote presentations, panel discussions, interactive sessions, workshops and networking opportunities, the conference aims to create a platform where meaningful ideas become opportunities for collaboration and positive change.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-12">Format</h2>
        <p className="text-navy-600">
          Physical, in-person participation only. Online or virtual participation is not available.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-12">Organiser</h2>
        <p className="text-navy-600">
          Ideas That Move the World – Organising Committee.  
          This conference is independently organised and is not affiliated with TED or TEDx.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-12">Contact</h2>
        <p className="text-navy-600">
          Phone: {EVENT.phone}<br />
          Email: {EVENT.email}
        </p>
      </div>
    </div>
  );
}
