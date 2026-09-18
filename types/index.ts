export interface Program {
  id: string;
  name: string;
  slug: string;
  schoolId: string;
  departmentId: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Diploma';
  duration: string;
  overview: string;
  eligibility: string;
  careerProspects: string[];
  intake?: string;
  curriculumHighlights?: string[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  schoolId: string;
  description: string;
  programs: Program[];
}

export interface School {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  color: string;
  badge: string;
  description: string;
  departments: Department[];
}

export interface CampusScene {
  id: string;
  slug: string;
  title: string;
  category: 'Academics' | 'Residential' | 'Sports & Wellness' | 'Administration' | 'Campus Life';
  thumb: string;
  description: string;
  highlights?: string[];
}

export interface Scholarship {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  tag: string;
}

export interface UniversityEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  venue?: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Admissions' | 'Academics' | 'Campus';
}
