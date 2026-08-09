/* ============================================================
   MOCK DATA LAYER
   In production this would be served by a REST/GraphQL API.
   Kept here as a single source of truth so every page (companies,
   drives, dashboards) reads consistent data without a backend.
   ============================================================ */

const TP_DATA = {
  stats: {
    placementRate: "91%",
    highestCTC: "₹42 LPA",
    avgCTC: "₹6.8 LPA",
    companiesVisited: "128"
  },

  companies: [
    { id: "tcs", name: "TCS", sector: "IT Services", role: "Systems Engineer", ctcMin: 3.6, ctcMax: 4.5, status: "open", eligibility: "CSE, IT, ECE — CGPA 6.0+", drive: "12 Sep 2026", desc: "Pan-India bulk hiring drive for the Ninja & Digital streams. Written test followed by technical + HR interview on campus.", openings: 60 },
    { id: "infosys", name: "Infosys", sector: "IT Services", role: "Systems Engineer / Specialist", ctcMin: 3.6, ctcMax: 6.25, status: "upcoming", eligibility: "All branches — CGPA 6.5+", drive: "28 Sep 2026", desc: "InfyTQ certified candidates get a fast-tracked interview slot. Package depends on the InfyTQ / hiring-test band.", openings: 45 },
    { id: "deloitte", name: "Deloitte", sector: "Consulting", role: "Analyst — Technology Consulting", ctcMin: 7.5, ctcMax: 9.5, status: "open", eligibility: "CSE, IT — CGPA 7.5+", drive: "15 Sep 2026", desc: "Consulting-track hiring with case-study round, group discussion and two interview rounds.", openings: 15 },
    { id: "zoho", name: "Zoho Corporation", sector: "Product", role: "Member of Technical Staff", ctcMin: 6.0, ctcMax: 10.0, status: "open", eligibility: "All branches — no CGPA cutoff", drive: "20 Sep 2026", desc: "Zoho hires on aptitude and a coding round, not on academic cutoffs. Strong DSA fundamentals expected.", openings: 10 },
    { id: "wipro", name: "Wipro", sector: "IT Services", role: "Project Engineer", ctcMin: 3.5, ctcMax: 3.5, status: "closed", eligibility: "All branches — CGPA 6.0+", drive: "02 Aug 2026", desc: "Elite hiring band drive. Offers have been rolled out; results published on the ledger.", openings: 0 },
    { id: "cognizant", name: "Cognizant", sector: "IT Services", role: "GenC — Programmer Analyst", ctcMin: 4.0, ctcMax: 4.0, status: "upcoming", eligibility: "CSE, IT, EEE — CGPA 6.0+", drive: "05 Oct 2026", desc: "GenC drive with an online assessment (aptitude + coding) followed by a technical interview.", openings: 35 },
    { id: "byjus-tech", name: "Sterling Tech Labs", sector: "Product / EdTech", role: "SDE-1", ctcMin: 8.0, ctcMax: 12.0, status: "open", eligibility: "CSE, IT — CGPA 7.0+, strong DSA", drive: "18 Sep 2026", desc: "Product-based hiring — two DSA rounds, one system-design round for shortlisted candidates.", openings: 6 },
    { id: "bosch", name: "Bosch", sector: "Core / Embedded", role: "Graduate Engineer Trainee", ctcMin: 5.2, ctcMax: 6.0, status: "upcoming", eligibility: "ECE, EEE, ME — CGPA 6.5+", drive: "10 Oct 2026", desc: "Core engineering roles in embedded systems and manufacturing. Technical round is domain-specific.", openings: 20 }
  ],

  drives: [
    { id: "d1", company: "TCS", date: "2026-09-12", stage: "Registration open", status: "open", type: "Off-campus pooled", deadline: "2026-09-08" },
    { id: "d2", company: "Deloitte", date: "2026-09-15", stage: "Registration open", status: "open", type: "On-campus", deadline: "2026-09-11" },
    { id: "d3", company: "Sterling Tech Labs", date: "2026-09-18", stage: "Registration open", status: "open", type: "On-campus", deadline: "2026-09-13" },
    { id: "d4", company: "Zoho Corporation", date: "2026-09-20", stage: "Registration open", status: "open", type: "On-campus", deadline: "2026-09-16" },
    { id: "d5", company: "Infosys", date: "2026-09-28", stage: "Opens in 3 weeks", status: "upcoming", type: "Pan-India pooled", deadline: "2026-09-24" },
    { id: "d6", company: "Cognizant", date: "2026-10-05", stage: "Opens in 4 weeks", status: "upcoming", type: "On-campus", deadline: "2026-10-01" },
    { id: "d7", company: "Bosch", date: "2026-10-10", stage: "Opens in 5 weeks", status: "upcoming", type: "On-campus", deadline: "2026-10-05" },
    { id: "d8", company: "Wipro", date: "2026-08-02", stage: "Offers released", status: "closed", type: "Elite band", deadline: "2026-07-28" }
  ],

  alumni: [
    { name: "Ritika Sinha", batch: "2023", company: "Deloitte", role: "Technology Analyst", quote: "The mock interview sessions run by the T&P Cell were tougher than my actual Deloitte interview — that's exactly what made me ready.", avatarColor: "#A8442E" },
    { name: "Aman Kumar", batch: "2022", company: "Zoho Corporation", role: "MTS-2", quote: "I came from a Tier-3 town with no coding background. The DSA bootcamp in the resource hub took me from zero to placement in five months.", avatarColor: "#1B2A41" },
    { name: "Shreya Verma", batch: "2024", company: "Bosch", role: "Graduate Engineer Trainee", quote: "Alumni mentorship connected me directly to a Nalanda senior at Bosch, who walked me through the exact interview pattern.", avatarColor: "#B8862E" },
    { name: "Mohd. Faizan", batch: "2023", company: "TCS Digital", role: "Systems Engineer", quote: "The skill gap analyzer flagged my weak spot in DBMS three months before placements — I fixed it in time.", avatarColor: "#2F6B4F" }
  ],

  resources: [
    { cat: "Resume", title: "ATS-Friendly Resume Templates", desc: "Five ready-to-edit templates tuned for applicant tracking systems used by TCS, Infosys and Deloitte.", tag: "12 templates" },
    { cat: "Resume", title: "Resume Review Checklist", desc: "The exact checklist T&P counsellors use before approving a resume for a drive.", tag: "PDF" },
    { cat: "Interview Prep", title: "HR Interview Question Bank", desc: "220+ frequently asked HR questions with model answer frameworks, sorted by company.", tag: "220 Qs" },
    { cat: "Interview Prep", title: "Technical Interview Playbook", desc: "Company-wise technical round patterns collected from the last three placement seasons.", tag: "Company-wise" },
    { cat: "Skill Courses", title: "DSA in 45 Days", desc: "A structured problem set covering arrays to graphs, mapped to difficulty and topic.", tag: "45-day plan" },
    { cat: "Skill Courses", title: "DBMS & OS Crash Course", desc: "Core CS fundamentals most frequently tested in technical interviews.", tag: "Video + notes" },
    { cat: "Skill Courses", title: "Aptitude & Reasoning Drill", desc: "Timed practice sets that mirror TCS NQT and Cognizant GenC assessment patterns.", tag: "Timed sets" },
    { cat: "Communication", title: "Group Discussion Simulator Guide", desc: "Frameworks for structuring your point in consulting-style GD rounds.", tag: "Guide" }
  ],

  // Skill catalogue used by the AI recommendation engine + skill gap analyzer
  skillCatalog: ["DSA", "DBMS", "OOP", "Operating Systems", "Computer Networks", "Java", "Python", "React", "System Design", "Aptitude", "Communication"],

  // What each hiring role typically weighs — powers the rule-based recommender
  roleWeights: {
    "Systems Engineer": { DSA: 0.5, Aptitude: 0.9, Communication: 0.6, DBMS: 0.4 },
    "SDE-1": { DSA: 0.95, "System Design": 0.5, OOP: 0.7, Java: 0.5, Python: 0.5 },
    "Member of Technical Staff": { DSA: 0.85, OOP: 0.6, "Operating Systems": 0.4, Communication: 0.4 },
    "Analyst — Technology Consulting": { Communication: 0.9, Aptitude: 0.7, DBMS: 0.4, DSA: 0.3 },
    "Graduate Engineer Trainee": { "Operating Systems": 0.6, "Computer Networks": 0.6, Aptitude: 0.5, Communication: 0.5 },
    "GenC — Programmer Analyst": { Aptitude: 0.8, DSA: 0.4, Communication: 0.5 },
    "Project Engineer": { Aptitude: 0.7, Communication: 0.6, DBMS: 0.3 }
  },

  // Recruiter-side applicant funnel (mock, per drive)
  funnels: {
    "TCS": { applied: 412, shortlisted: 180, interviewed: 96, offered: 60 },
    "Deloitte": { applied: 96, shortlisted: 40, interviewed: 22, offered: 15 },
    "Sterling Tech Labs": { applied: 140, shortlisted: 35, interviewed: 14, offered: 6 },
    "Zoho Corporation": { applied: 210, shortlisted: 58, interviewed: 25, offered: 10 }
  }
};

// Simple helper: format LPA range
function ctcRange(min, max) {
  return min === max ? `₹${min} LPA` : `₹${min}–${max} LPA`;
}
