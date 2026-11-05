export const EVENT = {
  name: "IDEAS THAT MOVE THE WORLD",
  tagline: "Think Beyond. Speak Boldly. Inspire Change.",
  theme: "BEYOND BOUNDARIES – IDEAS THAT SHAPE TOMORROW",
  dates: {
    day1: "2027-02-19",
    day2: "2027-02-20",
    day3: "2027-02-21",
  },
  venue: "JNMC Campus, Nehru Nagar, Belagavi, Karnataka, India",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=JNMC+Campus+Nehru+Nagar+Belagavi+590010",
  phone: "6362172106",
  email: "arzupatel26@gmail.com",
  timezone: "Asia/Kolkata",
  capacity: {
    total: 1000,
    dailyMax: 600,
  },
} as const;

export const TICKET_DEFAULTS = [
  {
    type: "DAY1_PASS" as const,
    name: "Day 1 Pass",
    description: "Access for 19 February 2027 – The Future Starts Now",
    priceInPaise: 99900,
    quantityTotal: 200,
    isStudentOnly: false,
    validDays: ["2027-02-19"],
    inclusions: ["Digital QR entry ticket", "Access to all Day 1 sessions", "Networking opportunities"],
    exclusions: ["Lunch and refreshments (unless later approved)", "Travel and accommodation", "Physical badge (subject to confirmation)"],
  },
  {
    type: "DAY2_PASS" as const,
    name: "Day 2 Pass",
    description: "Access for 20 February 2027 – Ideas Into Action",
    priceInPaise: 119900,
    quantityTotal: 200,
    isStudentOnly: false,
    validDays: ["2027-02-20"],
    inclusions: ["Digital QR entry ticket", "Access to all Day 2 sessions", "Networking opportunities"],
    exclusions: ["Lunch and refreshments (unless later approved)", "Travel and accommodation", "Physical badge (subject to confirmation)"],
  },
  {
    type: "DAY3_PASS" as const,
    name: "Day 3 Pass",
    description: "Access for 21 February 2027 – A Better Tomorrow",
    priceInPaise: 99900,
    quantityTotal: 200,
    isStudentOnly: false,
    validDays: ["2027-02-21"],
    inclusions: ["Digital QR entry ticket", "Access to all Day 3 sessions", "Networking opportunities"],
    exclusions: ["Lunch and refreshments (unless later approved)", "Travel and accommodation", "Physical badge (subject to confirmation)"],
  },
  {
    type: "THREE_DAY_PASS" as const,
    name: "Three-Day Pass",
    description: "Full access 19–21 February 2027",
    priceInPaise: 249900,
    quantityTotal: 300,
    isStudentOnly: false,
    validDays: ["2027-02-19", "2027-02-20", "2027-02-21"],
    inclusions: ["Digital QR entry ticket", "Access to all sessions across three days", "Networking opportunities", "Digital participation certificate (subject to attendance criteria)"],
    exclusions: ["Lunch and refreshments (unless later approved)", "Travel and accommodation", "Physical badge (subject to confirmation)"],
  },
  {
    type: "STUDENT_THREE_DAY_PASS" as const,
    name: "Student Three-Day Pass",
    description: "Full access 19–21 February 2027 – Valid student ID required",
    priceInPaise: 179900,
    quantityTotal: 100,
    isStudentOnly: true,
    validDays: ["2027-02-19", "2027-02-20", "2027-02-21"],
    inclusions: ["Digital QR entry ticket", "Access to all sessions across three days", "Networking opportunities", "Digital participation certificate (subject to attendance criteria)"],
    exclusions: ["Lunch and refreshments (unless later approved)", "Travel and accommodation", "Physical badge (subject to confirmation)"],
  },
] as const;

export const DAY_THEMES = [
  {
    day: 1,
    date: "19 February 2027",
    title: "THE FUTURE STARTS NOW",
    focus: ["Artificial Intelligence", "Technology", "Innovation", "Research", "Digital Transformation"],
  },
  {
    day: 2,
    date: "20 February 2027",
    title: "IDEAS INTO ACTION",
    focus: ["Entrepreneurship", "Business", "Startups", "Leadership", "Marketing & Finance"],
  },
  {
    day: 3,
    date: "21 February 2027",
    title: "A BETTER TOMORROW",
    focus: ["Education", "Sustainability", "Social Impact", "Creativity", "Inclusion"],
  },
] as const;

export const PROPOSED_SPEAKERS = [
  { name: "Deepak Shapeti", designation: "Co-Founder / CEO", organisation: "Morphing Machines", status: "INVITED" },
  { name: "R. K. Patil", designation: "Co-Founder / CEO", organisation: "Vayavya Labs", status: "INVITED" },
  { name: "Dr. Ameet Patil", designation: "Founder / CEO", organisation: "Ecobillz", status: "INVITED" },
  { name: "Prof. Haripriya Rengarajan", designation: "Associated with", organisation: "WICCI Karnataka International Education Council", status: "INVITED" },
  { name: "Dr. R. Balasubramaniam", designation: "Member", organisation: "NITI Aayog", status: "INVITED" },
  { name: "Siddharth Mutkekar", designation: "Founder / CEO", organisation: "KabadiMan", status: "INVITED" },
] as const;
