# St. Mary's University (SMRU) - Official Website Rebuild

> **High-performance, production-ready rebuild of the official [St. Mary's University](https://smru.edu.in/) website**, India's pioneering state-private university integrating modern multidisciplinary education with specialized rehabilitation sciences and assistive technologies.

Established under the **Telangana State Private Universities (Establishment and Regulation) (Amendment) Act, 2026 (Act No. 10 of 2026)** and recognized by the **University Grants Commission (UGC)** under Section 2(f) of the UGC Act, 1956 (*F.No. 8-18/2024(CPP-I/PU)*).

---

## 🏛️ Project Overview

This project is a clean-slate, pixel-accurate architectural rebuild of the live [smru.edu.in](https://smru.edu.in/) portal. Built from the ground up to achieve modern web standards:
- **Zero Template Bloat**: Tailored typography, signature polygon cut-corner badges, brand colorways (`#0d315c`, `#019e6e`, `#ffaf3a`), and smooth interactive micro-animations.
- **100% Pre-rendered (SSG)**: Over **123 static routes** compiled with sub-second page loads and zero runtime server lag.
- **Zero Fabricated Content**: Every school, department, degree, eligibility requirement, 360° scene, fee policy, and statutory PDF strictly mirrors the official university record.

---

## 🚀 Key Features

### 1. Exact 22-Section Homepage
Faithfully reproduces all 22 sections in exact sequence:
1. Top Notification Ticker / News Marquee
2. Official Institutional Header with Mega Menus & Brand Emblems
3. Drone Hero Campus Video / Fast WebP Fallback with Admissions CTAs
4. Quick Statutory Badges (UGC 2(f) & Act 10 of 2026)
5. Welcome & Chancellor's Message
6. Core Academic Faculties (6 Schools)
7. Featured Conferred Degree Programmes
8. Interactive 360° Virtual Campus Walkthrough Preview
9. Inclusive Rehabilitation & Assistive Tech Framework
10. Admissions 2026-27 Gateway & Online Application Flow
11. 4-Step Admissions Lifecycle
12. 9 Comprehensive Scholarship Schemes
13. Ph.D. & Doctoral Research Admissions Notice
14. Deshmukhi Campus Infrastructure & Transit Directions
15. Student Residential Life & Hostel Amenities
16. Clinical Collaborations & Placement Alliances
17. Campus Life, Cultural Vibrance & Athletics
18. Latest University Events & News (e.g., Plant4Mother Drive)
19. Frequently Asked Questions (Accordion)
20. Quick Interactive Enquiry Form
21. Right-Side Floating Action Sidebar (WhatsApp, Phone, Apply, Enquiry Modal)
22. 5-Column Institutional Footer with Statutory Notice & Back-to-Top

### 2. Comprehensive Academic Hierarchy
- **6 Schools**: Rehabilitation Sciences, Health & Allied Health Sciences, Psychology, Nursing, Engineering & Emerging Technologies, Law.
- **15 Departments**: Specialized academic divisions.
- **71 Degree Programmes**: Fully prerendered with individual routes (`/schools/[school]/[dept]/[prog]`), complete with durations, eligibility criteria, career prospects, and `Course` JSON-LD metadata for Google rich snippets.
- **Interactive Academic Structure Browser (`/academic-structure`)**: Collapsible multi-level hierarchy with instant search and level filters (UG, PG, Diploma, Doctoral).

### 3. Interactive Campus 360° Tour (`/campus-360`)
- High-definition virtual tour across all **22 campus scenes**.
- Category filtering: *Academics*, *Residential*, *Sports & Wellness*, *Administration*, *Campus Life*.
- Full-screen mode, thumbnail carousel, scene descriptions, and deep linking via `?scene=<slug>`.

### 4. Global Discovery & Search Directory (`/search`)
- Fast client-side index covering all 71 programs, 6 schools, admissions, scholarships, 360° scenes, and FAQs.
- Live category pill filters, degree level tags, clear states, and zero-latency filtering.

### 5. Statutory Governance & Disclosures
- **Approvals & Recognitions (`/approvals-recognitions`)**: Statutory documents with direct downloads for:
  - *UGC Section 2(f) Recognition Letter*
  - *Telangana Act No. 10 of 2026 Gazette Notification*
  - *Government Ordinance No. 2 of 2025*
- **Mandatory Disclosures (`/mandatory-disclosure`)**: Governance bodies, land extent, infrastructure metrics, and statutory officers.
- **Anti-Ragging Cell (`/anti-ragging`)**: UGC compliant zero-tolerance charter with 24/7 helplines and online affidavit links.
- **Grievance Redressal (`/grievance-redressal`)**: 3-tier grievance mechanism and University Ombudsman procedures.
- **IQAC (`/iqac-quality-assurance`)**: Internal Quality Assurance Cell parameters, OBE, and audits.
- **Leadership Directory (`/leadership/all`)**: Profiles of Founder Chairman, Vice Chairman, and Deans.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Polygons |
| **Icons** | [Lucide React](https://lucide.dev/) + Optimized Inline SVG Emblems |
| **SEO & Schemas** | Dynamic `sitemap.xml`, `robots.txt`, JSON-LD (`CollegeOrUniversity`, `Course`, `WebSite`) |

---

## 📁 Project Structure

```
smru-university/
├── app/
│   ├── layout.tsx                    # Root layout with fonts, metadata & JSON-LD
│   ├── page.tsx                      # 22-section Homepage
│   ├── globals.css                   # Tailwind v4 directives & polygon clip-paths
│   ├── sitemap.ts                    # Dynamic sitemap (123+ routes)
│   ├── robots.ts                     # Search engine crawling directives
│   ├── search/                       # Unified search directory
│   ├── schools/                      # Schools directory & dynamic pages
│   │   ├── page.tsx
│   │   └── [school]/                 # School detail & departments
│   │       ├── page.tsx
│   │       └── [dept]/
│   │           ├── page.tsx
│   │           └── [prog]/page.tsx   # All 71 degree programme pages
│   ├── academic-structure/           # Interactive academic hierarchy
│   ├── admissions/                   # Admissions gateway & criteria
│   ├── phd-admissions/               # Doctoral admissions notice
│   ├── fee-structure/                # Transparent fee policy
│   ├── admission-policy/             # Non-discrimination admission charter
│   ├── campus-360/                   # Interactive 360° virtual tour
│   ├── hostel/ & hostel-360/         # Residential amenities & tour
│   ├── campus-location-hyderabad/    # Deshmukhi location & transit guide
│   ├── events/ & events/[slug]/      # University events & photo highlights
│   ├── careers/                      # Faculty & administrative openings
│   ├── contact/                      # Regional HQ, campus helpdesk, map
│   ├── about/                        # Genesis, vision, and mission
│   ├── approvals-recognitions/       # UGC 2(f) and Act 10 documents
│   ├── mandatory-disclosure/         # Statutory disclosures
│   ├── leadership/all/               # Chancellor, VC, Deans
│   ├── anti-ragging/                 # Zero-tolerance policy & helpline
│   ├── grievance-redressal/          # Ombudsman & escalation workflow
│   ├── iqac-quality-assurance/       # Academic quality assurance
│   ├── privacy-policy/               # Data privacy charter
│   └── terms-of-service/             # Portal terms of use
├── components/                       # Header, Footer, MegaMenus, Viewers, Forms
├── data/                             # Verified datasets (academics, 360, scholarships, FAQs, events)
├── public/                           # Official assets (logos, drone webp, 360 scenes, legal PDFs)
└── types/                            # Type definitions
```

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Navigate into the project directory
cd smru-university

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the optimized production application (Turbopack)
npm run build

# Start the production server
npm start
```

---

## 🚢 Deployment

This application can be deployed with zero configuration on **Vercel**, **Cloudflare Pages**, **AWS Amplify**, or any **Node.js / Docker** environment:

### Deploying to Vercel
1. Push your code to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

## ⚖️ Legal & Statutory Attribution
- **Institution**: St. Mary's University (SMRU), established as St. Mary's Rehabilitation University.
- **Sponsoring Society**: Joseph Sriharsha & Mary Indraja Educational Society (JSMI).
- **Legislation**: Telangana Act No. 10 of 2026.
- **UGC Letter**: F.No. 8-18/2024(CPP-I/PU) dated 14th January 2025.
- **Official Portal**: [https://smru.edu.in/](https://smru.edu.in/)
- **Online Admissions**: [https://apply.smru.edu.in/](https://apply.smru.edu.in/)
