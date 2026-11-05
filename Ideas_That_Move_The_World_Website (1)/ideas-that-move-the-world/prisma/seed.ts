import { PrismaClient, TicketType, InvitationStatus, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { TICKET_DEFAULTS, PROPOSED_SPEAKERS, EVENT } from "../src/lib/constants";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database for IDEAS THAT MOVE THE WORLD...");

  // Event Settings
  await prisma.eventSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      eventName: EVENT.name,
      tagline: EVENT.tagline,
      theme: EVENT.theme,
      startDate: new Date("2027-02-19T00:00:00+05:30"),
      endDate: new Date("2027-02-21T23:59:59+05:30"),
      venueName: EVENT.venue,
      venueMapsUrl: EVENT.mapsUrl,
      contactPhone: EVENT.phone,
      contactEmail: EVENT.email,
      totalCapacity: EVENT.capacity.total,
      maxDailyAttendance: EVENT.capacity.dailyMax,
      aboutText: `IDEAS THAT MOVE THE WORLD is a three-day independent international ideas conference bringing together thinkers, entrepreneurs, professionals, researchers, students and innovators to exchange perspectives and explore ideas that can shape the future.

Under the theme BEYOND BOUNDARIES – IDEAS THAT SHAPE TOMORROW, the conference explores technology, innovation, entrepreneurship, education, sustainability, leadership and social impact.

Through keynote presentations, panel discussions, interactive sessions, workshops and networking opportunities, the conference aims to create a platform where meaningful ideas become opportunities for collaboration and positive change.`,
      visionText: "To create a global platform where bold ideas transcend boundaries and inspire actionable change for a better tomorrow.",
      missionText: "To convene diverse thinkers and doers, foster meaningful dialogue, and catalyse collaborations that turn ideas into impact.",
    },
  });

  // Ticket Categories
  for (const [index, t] of TICKET_DEFAULTS.entries()) {
    await prisma.ticketCategory.upsert({
      where: { type: t.type as TicketType },
      update: {
        name: t.name,
        description: t.description,
        priceInPaise: t.priceInPaise,
        quantityTotal: t.quantityTotal,
        isStudentOnly: t.isStudentOnly,
        validDays: [...t.validDays],
        inclusions: [...t.inclusions],
        exclusions: [...t.exclusions],
        sortOrder: index,
      },
      create: {
        type: t.type as TicketType,
        name: t.name,
        description: t.description,
        priceInPaise: t.priceInPaise,
        quantityTotal: t.quantityTotal,
        isStudentOnly: t.isStudentOnly,
        validDays: [...t.validDays],
        inclusions: [...t.inclusions],
        exclusions: [...t.exclusions],
        sortOrder: index,
        isActive: true,
      },
    });
  }

  // Proposed Speakers (Invited, not published)
  for (const [index, s] of PROPOSED_SPEAKERS.entries()) {
    const existing = await prisma.speaker.findFirst({ where: { name: s.name } });
    if (!existing) {
      await prisma.speaker.create({
        data: {
          name: s.name,
          designation: s.designation,
          organisation: s.organisation,
          invitationStatus: InvitationStatus.INVITED,
          isPublished: false,
          sortOrder: index,
        },
      });
    }
  }

  // Sample Sessions (Provisional)
  const day1Sessions = [
    { title: "Registration and Welcome", start: "08:00", end: "09:00", type: "registration" },
    { title: "Opening Ceremony", start: "09:00", end: "09:45", type: "ceremony" },
    { title: "Keynote: The Future of Technology", start: "09:45", end: "10:30", type: "keynote" },
    { title: "Networking and Refreshments", start: "10:30", end: "11:00", type: "break" },
    { title: "AI and the Future of Human Intelligence", start: "11:00", end: "12:00", type: "session" },
    { title: "Parallel Auditorium Sessions", start: "12:00", end: "13:00", type: "parallel" },
    { title: "Lunch Break", start: "13:00", end: "14:00", type: "break" },
    { title: "International Innovation Panel", start: "14:00", end: "15:00", type: "panel" },
    { title: "Refreshment Break", start: "15:00", end: "15:30", type: "break" },
    { title: "Research and Emerging Technology Showcase", start: "15:30", end: "16:30", type: "showcase" },
    { title: "Audience Interaction and Q&A", start: "16:30", end: "17:15", type: "qa" },
    { title: "Closing", start: "17:15", end: "17:30", type: "ceremony" },
  ];

  for (const [i, s] of day1Sessions.entries()) {
    const start = new Date(`2027-02-19T${s.start}:00+05:30`);
    const end = new Date(`2027-02-19T${s.end}:00+05:30`);
    await prisma.session.create({
      data: {
        title: s.title,
        day: 1,
        startTime: start,
        endTime: end,
        sessionType: s.type,
        isProvisional: true,
        isPublished: true,
        sortOrder: i,
      },
    });
  }

  // Super Admin (change password immediately after first login)
  const passwordHash = await bcrypt.hash("ChangeMeImmediately2027!", 12);
  await prisma.user.upsert({
    where: { email: "admin@ideasthatmovetheworld.org" },
    update: {},
    create: {
      email: "admin@ideasthatmovetheworld.org",
      name: "Super Admin",
      passwordHash,
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
  });

  // Budget categories (private)
  const budgetItems = [
    { name: "Venue and facilities", amount: 30000000 },
    { name: "Audio, video, lighting and technical production", amount: 40000000 },
    { name: "Stage design and decoration", amount: 25000000 },
    { name: "Speaker travel and accommodation", amount: 50000000 },
    { name: "Food and refreshments", amount: 75000000 },
    { name: "Marketing and promotion", amount: 15000000 },
    { name: "Website and registration technology", amount: 10000000 },
    { name: "Staff, security and medical arrangements", amount: 20000000 },
    { name: "Printing, badges and certificates", amount: 10000000 },
    { name: "Logistics and local transportation", amount: 15000000 },
    { name: "Contingency", amount: 25000000 },
  ];

  for (const [i, b] of budgetItems.entries()) {
    await prisma.budgetCategory.create({
      data: {
        name: b.name,
        plannedAmount: b.amount,
        sortOrder: i,
      },
    });
  }

  // Email templates (basic)
  await prisma.emailTemplate.upsert({
    where: { slug: "registration-confirmation" },
    update: {},
    create: {
      slug: "registration-confirmation",
      name: "Registration Confirmation",
      subject: "Registration Confirmed – IDEAS THAT MOVE THE WORLD",
      htmlBody: `<h1>Thank you for registering!</h1><p>Dear {{name}},</p><p>Your registration ({{registrationId}}) for IDEAS THAT MOVE THE WORLD is confirmed.</p><p>Ticket: {{ticketName}}</p><p>We look forward to seeing you in Belagavi.</p>`,
      textBody: "Thank you for registering! Your registration {{registrationId}} is confirmed.",
      variables: ["name", "registrationId", "ticketName"],
    },
  });

  await prisma.emailTemplate.upsert({
    where: { slug: "qr-ticket" },
    update: {},
    create: {
      slug: "qr-ticket",
      name: "QR Ticket Delivery",
      subject: "Your Digital Ticket – IDEAS THAT MOVE THE WORLD",
      htmlBody: `<h1>Your Ticket</h1><p>Dear {{name}},</p><p>Registration ID: {{registrationId}}</p><p>Please present the QR code at the entrance.</p><img src="{{qrDataUrl}}" alt="QR Ticket" />`,
      textBody: "Your ticket for IDEAS THAT MOVE THE WORLD. Registration ID: {{registrationId}}",
      variables: ["name", "registrationId", "qrDataUrl"],
    },
  });

  console.log("Seed completed successfully.");
  console.log("Default Super Admin: admin@ideasthatmovetheworld.org / ChangeMeImmediately2027!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
