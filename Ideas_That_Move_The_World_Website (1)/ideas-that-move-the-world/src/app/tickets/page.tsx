import Link from "next/link";
import { TICKET_DEFAULTS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Tickets & Pricing",
};

export default function TicketsPage() {
  return (
    <div className="bg-navy-50 min-h-screen">
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Tickets & Pricing</h1>
          <p className="mt-4 text-navy-200 max-w-2xl mx-auto">
            Choose the pass that fits your schedule. All tickets include digital QR entry and access to sessions on the valid days.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TICKET_DEFAULTS.map((ticket) => (
            <div
              key={ticket.type}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col ${
                ticket.type === "THREE_DAY_PASS" ? "border-gold-400 ring-2 ring-gold-400/30" : "border-navy-100"
              }`}
            >
              {ticket.type === "THREE_DAY_PASS" && (
                <div className="bg-gold-400 text-navy-900 text-center text-xs font-semibold py-1.5 tracking-wide">
                  BEST VALUE
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-navy-900">{ticket.name}</h2>
                <p className="text-sm text-navy-500 mt-1">{ticket.description}</p>
                <div className="mt-4 text-3xl font-bold text-navy-900">
                  {formatCurrency(ticket.priceInPaise)}
                </div>
                {ticket.isStudentOnly && (
                  <p className="mt-2 text-xs text-teal-600 font-medium">Valid student ID required</p>
                )}

                <div className="mt-6 space-y-3 flex-1">
                  <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider">Included</p>
                  {ticket.inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-navy-700">
                      <Check size={16} className="text-teal-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider pt-2">Not included</p>
                  {ticket.exclusions.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-navy-500">
                      <X size={16} className="text-navy-300 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/register?ticket=${ticket.type}`}
                  className="mt-8 block w-full text-center py-3 rounded-full bg-navy-900 text-white font-medium hover:bg-navy-800 transition-colors"
                >
                  Select this ticket
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-navy-100 text-sm text-navy-600">
          <h3 className="font-semibold text-navy-900 mb-2">Important notes</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Food and refreshments are not included by default until officially approved by the organiser.</li>
            <li>Attendees are responsible for their own travel and accommodation.</li>
            <li>Student tickets require upload of a valid student ID during registration. Verification is required before the ticket is fully confirmed.</li>
            <li>Taxes and payment gateway charges (if any) will be shown transparently at checkout.</li>
            <li>Capacity is limited. Once a category sells out it will no longer be available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
