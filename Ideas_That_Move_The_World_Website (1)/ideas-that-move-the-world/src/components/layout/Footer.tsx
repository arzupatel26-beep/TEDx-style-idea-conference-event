import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-lg">I</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">IDEAS THAT MOVE</div>
                <div className="text-gold-400 text-xs tracking-widest">THE WORLD</div>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed">
              An independent international ideas conference. Beyond Boundaries – Ideas That Shape Tomorrow.
            </p>
            <p className="text-xs text-navy-400">
              Not affiliated with TED or TEDx.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link href="/agenda" className="hover:text-gold-400 transition-colors">Agenda</Link></li>
              <li><Link href="/speakers" className="hover:text-gold-400 transition-colors">Speakers</Link></li>
              <li><Link href="/tickets" className="hover:text-gold-400 transition-colors">Tickets</Link></li>
              <li><Link href="/venue" className="hover:text-gold-400 transition-colors">Venue</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faqs" className="hover:text-gold-400 transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refunds" className="hover:text-gold-400 transition-colors">Cancellation & Refunds</Link></li>
              <li><Link href="/code-of-conduct" className="hover:text-gold-400 transition-colors">Code of Conduct</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold-400 shrink-0" />
                <span>JNMC Campus, Nehru Nagar, Belagavi, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <a href="tel:+916362172106" className="hover:text-gold-400">6362172106</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <a href="mailto:arzupatel26@gmail.com" className="hover:text-gold-400">arzupatel26@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>© 2027 Ideas That Move the World – Organising Committee. All rights reserved.</p>
          <p>19–21 February 2027 · Belagavi, India</p>
        </div>
      </div>
    </footer>
  );
}
