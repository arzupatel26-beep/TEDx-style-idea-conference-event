import Link from "next/link";
import { Countdown } from "@/components/home/Countdown";
import { DAY_THEMES, EVENT, TICKET_DEFAULTS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-gold-400/30" />
          <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-teal-400/20" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-gold-400/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-medium tracking-widest text-sm uppercase mb-4">
              19–21 February 2027 · Belagavi, India
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              IDEAS THAT<br />
              <span className="text-gold-400">MOVE THE WORLD</span>
            </h1>
            <p className="mt-6 text-xl text-navy-200 font-light">
              {EVENT.tagline}
            </p>
            <p className="mt-4 text-navy-300 max-w-xl">
              A three-day independent international ideas conference exploring technology, entrepreneurship, education, sustainability and social impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-navy-900 font-semibold hover:bg-gold-300 transition-colors shadow-lg"
              >
                Register Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy-600 text-white font-medium hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                View Agenda
              </Link>
            </div>

            <div className="mt-14">
              <Countdown targetDate="2027-02-19T09:00:00+05:30" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-white border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="text-gold-500" size={28} />
              <div className="font-semibold text-navy-900">Three Days</div>
              <div className="text-sm text-navy-500">19–21 February 2027</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-gold-500" size={28} />
              <div className="font-semibold text-navy-900">Belagavi, India</div>
              <div className="text-sm text-navy-500">JNMC Campus, Nehru Nagar</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="text-gold-500" size={28} />
              <div className="font-semibold text-navy-900">1,000 Participants</div>
              <div className="text-sm text-navy-500">Thinkers · Innovators · Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900">About the Conference</h2>
            <p className="mt-6 text-navy-600 leading-relaxed">
              IDEAS THAT MOVE THE WORLD brings together thinkers, entrepreneurs, professionals, researchers, students and innovators to exchange perspectives and explore ideas that can shape the future. Under the theme <strong>BEYOND BOUNDARIES – IDEAS THAT SHAPE TOMORROW</strong>, we explore technology, innovation, entrepreneurship, education, sustainability, leadership and social impact.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1 mt-6 text-teal-600 font-medium hover:text-teal-700">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Three Day Themes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Three Days. Three Themes.</h2>
            <p className="mt-3 text-navy-500">A carefully curated journey of ideas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DAY_THEMES.map((day) => (
              <div
                key={day.day}
                className="group relative bg-navy-900 rounded-2xl p-8 text-white overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="text-gold-400 text-sm font-medium tracking-wider mb-2">
                  DAY {day.day} · {day.date}
                </div>
                <h3 className="text-xl font-bold mb-4">{day.title}</h3>
                <ul className="space-y-2 text-sm text-navy-200">
                  {day.focus.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/agenda/day-${day.day}`}
                  className="inline-flex items-center gap-1 mt-6 text-sm text-gold-400 hover:text-gold-300"
                >
                  View schedule <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers teaser */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900">Speakers</h2>
          <p className="mt-4 text-navy-600 max-w-xl mx-auto">
            Confirmed speaker announcements coming soon. Invitations have been extended to leading thinkers and practitioners.
          </p>
          <Link
            href="/speakers"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-navy-300 text-navy-800 font-medium hover:border-gold-400 hover:text-gold-600 transition-colors"
          >
            View Speakers <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Tickets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Tickets</h2>
            <p className="mt-3 text-navy-500">Secure your place. Limited capacity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TICKET_DEFAULTS.slice(0, 3).map((ticket) => (
              <div
                key={ticket.type}
                className="border border-navy-100 rounded-2xl p-6 hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-navy-900">{ticket.name}</h3>
                <p className="text-sm text-navy-500 mt-1">{ticket.description}</p>
                <div className="mt-4 text-2xl font-bold text-navy-900">
                  {formatCurrency(ticket.priceInPaise)}
                </div>
                <Link
                  href="/register"
                  className="mt-6 block w-full text-center py-2.5 rounded-full bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
                >
                  Select
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tickets" className="text-teal-600 font-medium hover:text-teal-700">
              View all ticket options →
            </Link>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Venue</h2>
              <p className="mt-4 text-navy-200 leading-relaxed">
                JNMC Campus, Nehru Nagar, Belagavi, Karnataka, India.
              </p>
              <p className="mt-2 text-navy-300 text-sm">
                Exact auditorium allocations will be confirmed and published closer to the event.
              </p>
              <a
                href={EVENT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-gold-400 hover:text-gold-300"
              >
                <MapPin size={18} /> Open in Google Maps
              </a>
            </div>
            <div className="bg-navy-800 rounded-2xl p-8 text-center">
              <MapPin size={48} className="mx-auto text-gold-400 mb-4" />
              <p className="text-navy-200">Belagavi, Karnataka</p>
              <p className="text-sm text-navy-400 mt-2">Physical, in-person participation only</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900">Ready to be part of it?</h2>
          <p className="mt-4 text-navy-800">
            Join 1,000 thinkers, innovators and leaders in Belagavi this February.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 mt-8 px-10 py-4 rounded-full bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-colors shadow-lg"
          >
            Register Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
