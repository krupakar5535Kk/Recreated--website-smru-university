export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Schools', href: '/schools/', hasDropdown: true },
  { label: 'Admissions', href: '/admissions/', hasDropdown: true },
  { label: 'Careers', href: '/careers/' },
  { label: 'Search', href: '/search/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Campus 360', href: '/campus-360/' },
];

export const tickerNotices = [
  {
    isNew: true,
    text: 'Admissions and entrance-related updates will be announced through official university notices.',
    href: '/admissions/'
  },
  {
    isNew: false,
    text: 'Ph.D. Admissions 2026–27: Applications closed. Next-cycle updates will be announced through official university notices.',
    href: '/phd-admissions/'
  },
  {
    isNew: false,
    text: 'Admissions Open: Apply now for UG, PG, and Diploma programmes for the 2026-27 session.',
    href: '/admissions/'
  },
  {
    isNew: false,
    text: 'Scholarships: Merit-based financial assistance available for eligible students (T&C apply).',
    href: '/admissions/'
  },
  {
    isNew: false,
    text: 'Campus Tour: Book your campus visit and admission counselling slots today.',
    href: '/contact/'
  }
];

export const footerColumns = {
  academics: [
    { label: 'Schools', href: '/schools/' },
    { label: 'School of Rehabilitation Sciences', href: '/schools/rehabilitation-sciences/' },
    { label: 'School of Health & Allied Health Sciences', href: '/schools/health-allied-health-sciences/' },
    { label: 'School of Psychology', href: '/schools/psychology/' },
    { label: 'School of Nursing', href: '/schools/nursing-sciences/' },
    { label: 'School of Engineering & Emerging Technologies', href: '/schools/engineering-emerging-technologies/' },
    { label: 'School of Law', href: '/schools/law/' },
  ],
  admissions: [
    { label: 'Apply Now', href: 'https://apply.smru.edu.in', external: true },
    { label: 'Admissions Overview', href: '/admissions/' },
    { label: 'Ph.D. Admissions', href: '/phd-admissions/' },
    { label: 'Download Brochure', href: '/brochure/' },
    { label: 'Fee Structure', href: '/fee-structure/' },
    { label: 'Admission Policy', href: '/admission-policy/' },
  ],
  campus: [
    { label: 'Campus Location', href: '/campus-location-hyderabad/' },
    { label: 'Visit Campus', href: '/campus-360/' },
    { label: 'Hostel Facilities', href: '/hostel/' },
  ],
  support: [
    { label: 'Anti-Ragging', href: '/anti-ragging/' },
    { label: 'Grievance Redressal', href: '/grievance-redressal/' },
    { label: 'Ombudsperson', href: '/ombudsperson/' },
    { label: 'Site Search', href: '/search/' },
    { label: 'Admissions', href: '/admissions/' },
    { label: 'Career Guidance', href: '/contact/' },
    { label: 'Contact Directory', href: '/contact-directory/' },
  ],
  disclosures: [
    { label: 'Approvals & Recognitions', href: '/approvals-recognitions/' },
    { label: 'Governance & Leadership', href: '/leadership/all/' },
    { label: 'UGC Recognition Letter', href: '/assets/St. Marys Rehabilitation University UGC recognition letter 2(f).pdf', external: true },
    { label: 'University Establishment Act', href: '/assets/SMRU Act 10 of 2026.pdf', external: true },
    { label: 'Mandatory Disclosure', href: '/mandatory-disclosure/' },
    { label: 'Public Information', href: '/public-information/' },
    { label: 'Statutory Disclosures', href: '/statutory-disclosures/' },
    { label: 'IQAC & Quality', href: '/iqac-quality-assurance/' },
    { label: 'University Cycle Note', href: '/first-academic-year-disclosures/' },
    { label: 'Sponsor Society', href: '/sponsor-society/' },
    { label: 'Accessibility Statement', href: '/accessibility-statement/' },
    { label: 'SMRU — Official Identity & Facts', href: '/smru/', highlight: true },
  ]
};
