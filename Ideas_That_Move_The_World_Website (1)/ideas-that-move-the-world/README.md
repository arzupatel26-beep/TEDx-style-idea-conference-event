# IDEAS THAT MOVE THE WORLD
## Complete Event Management Platform

**Event:** IDEAS THAT MOVE THE WORLD  
**Theme:** BEYOND BOUNDARIES – IDEAS THAT SHAPE TOMORROW  
**Dates:** 19–21 February 2027  
**Venue:** JNMC Campus, Nehru Nagar, Belagavi, Karnataka, India  
**Capacity:** 1,000 unique participants · Max 600 daily  

This is a production-oriented full-stack event management system built with Next.js 14, Prisma, PostgreSQL, Razorpay, Resend, and role-based admin controls.

---

## What is Included

### Public Website
- Premium homepage with countdown, day themes, tickets, venue
- About, Vision & Mission, Theme pages
- Day 1 / Day 2 / Day 3 agenda (editable)
- Speakers (only published after admin approval)
- Tickets & Pricing with clear inclusions/exclusions
- Registration flow with student ID upload support
- Venue & Auditoriums (only verified data published)
- Sponsors enquiry + approved sponsor display
- FAQs, Contact, Feedback (post-event)
- Privacy Policy, Terms, Cancellation & Refund, Code of Conduct

### Core Platform Features
- Ticket inventory with real-time capacity tracking
- Unique participant counting (multi-day tickets count once)
- Daily attendance limits (configurable)
- Razorpay order creation + signature verification + webhooks
- Cryptographically secure QR tickets (no PII in QR)
- Mobile-friendly check-in with camera scanning + manual lookup
- One check-in per valid day per ticket
- Transactional emails via Resend (templates editable)
- Speaker management with invitation status workflow
- Private speaker travel & hospitality portal
- Document & operational approval centre
- Private budget & expense tracking
- Role-based access control (8 roles)
- Feedback system (activates only when event marked completed)
- Audit logs
- CSV/Excel export capability

### Database
Full relational schema covering:
Users, Roles, Attendees, Registrations, Tickets, Payments, Refunds, QR tokens, Check-ins, Speakers, Sessions, Auditoriums, Speaker Travel, Sponsors, Email Templates & Logs, Feedback, Documents, Budget, Expenses, Contact Enquiries, Audit Logs, Event Settings.

---

## Tech Stack

| Layer            | Technology                  |
|------------------|-----------------------------|
| Framework        | Next.js 14 (App Router)     |
| Language         | TypeScript                  |
| Styling          | Tailwind CSS                |
| Database         | PostgreSQL (Neon)           |
| ORM              | Prisma 5                    |
| Auth             | NextAuth.js / credentials   |
| Payments         | Razorpay                    |
| Email            | Resend                      |
| QR               | qrcode + html5-qrcode       |
| Hosting          | Vercel (recommended)        |

---

## Quick Start (Local Development)

### 1. Prerequisites
- Node.js 18+
- PostgreSQL database (Neon free tier works well)
- Razorpay test account
- Resend account (for emails)

### 2. Clone & Install
```bash
cd ideas-that-move-the-world
npm install
```

### 3. Environment
```bash
cp .env.example .env
```
Fill in:
- `DATABASE_URL` (Neon connection string)
- `AUTH_SECRET` / `NEXTAUTH_SECRET` (generate long random strings)
- `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` (test keys)
- `RESEND_API_KEY` and from-email (verify domain later)

### 4. Database
```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

Default Super Admin after seed:
- Email: `admin@ideasthatmovetheworld.org`
- Password: `ChangeMeImmediately2027!`  
**Change this password immediately.**

### 5. Run
```bash
npm run dev
```
Open http://localhost:3000

---

## Key Configuration Defaults

### Ticket Inventory & Prices
| Ticket                 | Price   | Qty |
|------------------------|---------|-----|
| Day 1 Pass             | ₹999    | 200 |
| Day 2 Pass             | ₹1,199  | 200 |
| Day 3 Pass             | ₹999    | 200 |
| Three-Day Pass         | ₹2,499  | 300 |
| Student Three-Day Pass | ₹1,799  | 100 |

All quantities and prices are editable in Admin → Tickets.

### Capacity Logic
- Unique participants ≤ 1,000
- Any single day attendance ≤ 600 (or admin-configured limit)
- Three-day ticket holders count as 1 unique person but occupy 1 seat on each of the three days.

### Speakers
All initial speakers are seeded as `INVITED` and `isPublished = false`.  
Only after an admin sets status to CONFIRMED and toggles publication do they appear publicly.

### Food & Accommodation
Public pages clearly state that food/refreshments and attendee travel/accommodation are **not** included by default.

---

## Admin Dashboard (to be completed / extended)

Route: `/admin` (protected)

Modules planned / partially scaffolded:
1. Overview & live stats
2. Event configuration
3. Ticket inventory & pricing
4. Registrations & attendees
5. Payments & refunds
6. QR check-in console
7. Speakers & sessions
8. Speaker travel requests
9. Sponsors & enquiries
10. Email templates & logs
11. Documents & approvals
12. Budget & expenses
13. Feedback results
14. Staff & roles
15. Audit log

Roles enforced on the backend:
- SUPER_ADMIN
- EVENT_MANAGER
- SPEAKER_MANAGER
- REGISTRATION_MANAGER
- CHECKIN_STAFF
- SPONSOR_MANAGER
- FEEDBACK_MANAGER
- FINANCE_MANAGER

---

## Payment Flow (Razorpay)

1. Server creates order (`/api/payments/create-order`)
2. Frontend opens Razorpay checkout with order_id
3. On success, frontend sends payment_id + order_id + signature to `/api/payments/verify`
4. Server verifies signature with Razorpay secret
5. Only then: mark registration CONFIRMED, generate QR token, increment inventory, send confirmation + ticket emails
6. Webhook endpoint (`/api/webhooks/razorpay`) for redundancy and failed-payment handling (signature verified)

**Never issue a confirmed ticket based solely on frontend success.**

Use test mode until live merchant credentials and organiser approval are in place.

---

## QR Tickets & Check-in

- Token is a long random string (no name, email or phone inside)
- QR encodes only the token
- Check-in endpoint validates token, ticket validity for that date, not already checked in that day, not revoked/refunded
- Staff interface supports camera scan (html5-qrcode) and manual registration ID search
- Offline contingency requires later reconciliation and is marked as offline

---

## Email (Resend)

Templates are stored in the database and editable.  
Seed includes:
- Registration confirmation
- QR ticket delivery

Additional templates to create via admin:
- Reminders (7-day, 3-day, 1-day, event-day)
- Schedule updates
- Speaker communications
- Thank-you + feedback invitation
- Certificate (when criteria configured)

Use Vercel Cron or similar for scheduled reminders. Protect cron routes with `CRON_SECRET`.

---

## Security Checklist

- [ ] All secrets in environment variables only
- [ ] Password hashing (bcrypt)
- [ ] Server-side role checks on every admin action
- [ ] Razorpay signature verification
- [ ] Webhook signature verification
- [ ] Input validation with Zod
- [ ] Rate limiting on registration & payment endpoints
- [ ] Secure file upload validation (student ID, documents)
- [ ] CSRF protection where applicable
- [ ] Audit logging of sensitive actions
- [ ] No PII in QR codes
- [ ] Private budget / speaker travel / documents never public

---

## Deployment (Vercel + Neon)

1. Push repository to GitHub
2. Create Neon project → copy connection string
3. Create Vercel project → import GitHub repo
4. Add all environment variables in Vercel
5. Deploy
6. Run migrations / `prisma db push` via Vercel build or one-off command
7. Seed production carefully (or run seed once)
8. Configure custom domain
9. Verify Resend domain
10. Switch Razorpay to live only after organiser approval

---

## Project Structure (Key Paths)

```
prisma/
  schema.prisma          # Full data model
  seed.ts                # Tickets, speakers, sessions, admin, budget
src/
  app/
    page.tsx             # Homepage
    layout.tsx
    globals.css
    register/            # Registration flow (to be expanded)
    tickets/
    agenda/
    speakers/
    admin/               # Protected admin area
    api/
      payments/
      webhooks/
      checkin/
      auth/
  components/
    layout/              # Header, Footer
    home/                # Countdown etc.
  lib/
    prisma.ts
    utils.ts
    constants.ts         # Event & ticket defaults
.env.example
```

---

## Completion Status Summary

### A. Implemented and ready for local testing
- Complete Prisma schema (all entities)
- Seed data (tickets, provisional sessions, invited speakers, budget categories, email templates, super admin)
- Premium public homepage with branding (navy / gold / teal)
- Responsive header & footer
- Countdown timer
- Ticket pricing constants and formatting
- Capacity model design
- Environment template
- Core utility functions (registration ID, secure token, currency)

### B. Implemented in schema / design – needs API routes & UI completion
- Registration + student ID upload flow
- Razorpay order + verify + webhook
- QR generation & email delivery
- Check-in scanner page
- Admin dashboard modules
- Role-based guards
- Email template editor
- Speaker travel portal
- Feedback form (gated by event completion flag)
- Document approval workflow
- Budget module

### C. Awaiting real-world / organiser input
- Confirmed speakers (biographies, photos, talk titles)
- Confirmed auditorium bookings & capacities
- Final logo & brand assets (replaceable via admin)
- Live Razorpay merchant account
- Verified Resend sending domain
- Approved refund percentages / processing times
- Catering inclusion decisions
- Sponsor agreements

### D. Intentionally not fabricated
- No fake speaker acceptances or biographies
- No fake sponsor logos
- No invented tax rates
- No claimed live payment or email delivery without credentials
- No TED/TEDx branding

---

## Next Actions for Organiser / Developer

1. **Immediate**
   - `npm install`
   - Set up Neon database
   - Fill `.env`
   - `prisma db push` + seed
   - Change default admin password

2. **Development priority order**
   - Finish registration form + API
   - Razorpay test integration end-to-end
   - QR generation + email
   - Basic admin login + ticket inventory view
   - Check-in page
   - Then remaining admin modules

3. **Before public launch**
   - Legal review of Privacy, Terms, Refund policy
   - Domain verification for email
   - Live payment credentials + organiser sign-off
   - Final content approval (speakers, agenda, venue)

---

## Contact for this build

This platform was scaffolded according to the full master specification for the independent conference **IDEAS THAT MOVE THE WORLD**.

For questions about the codebase structure, contact the development team that receives this repository.

**Organiser contact (from specification):**  
Phone: 6362172106  
Email: arzupatel26@gmail.com

---

*Think Beyond. Speak Boldly. Inspire Change.*
