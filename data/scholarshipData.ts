import { Scholarship } from '@/types';

export const scholarshipList: Scholarship[] = [
  {
    id: 'freshman-merit',
    name: 'Freshman Merit Scholarship',
    tag: 'Academic Excellence',
    description: 'Awarded to newly admitted undergraduate and postgraduate students who demonstrated outstanding academic performance in qualifying examinations.',
    eligibility: 'High aggregate percentage in qualifying board or degree examinations. Conferred automatically or via merit rank verification at admissions counselling.'
  },
  {
    id: 'dr-bharathi-rao',
    name: 'Dr. Bharathi Rao Founder Scholarship',
    tag: 'Founder Honor',
    description: 'Instituted in honor of university founder Dr. Bharathi Rao to empower passionate scholars exhibiting exemplary dedication to healthcare and community upliftment.',
    eligibility: 'Applicants with demonstrated merit and notable community or extracurricular commitment. Documented portfolio evaluated during personal counselling.'
  },
  {
    id: 'minority',
    name: 'Minority Scholarship',
    tag: 'Inclusion & Equity',
    description: 'Promoting higher education access and financial relief for eligible students belonging to recognized minority communities under state and national guidelines.',
    eligibility: 'Valid community certification recognized under statutory government frameworks, subject to annual verification.'
  },
  {
    id: 'girl-student',
    name: 'Girl Student Scholarship',
    tag: 'Women in STEM & Health',
    description: 'Empowering women scholars in allied health sciences, clinical rehabilitation, legal studies, and engineering technologies with dedicated tuition waivers.',
    eligibility: 'Applicable to female candidates enrolling across eligible undergraduate and postgraduate degree programmes.'
  },
  {
    id: 'defence-ward',
    name: 'Defence Ward Scholarship',
    tag: 'National Service Honor',
    description: 'Honoring children of Indian armed forces personnel, paramilitary staff, and ex-servicemen who served the nation with distinction.',
    eligibility: 'Valid service documentation or ex-serviceman identity certification verified by official defense authorities.'
  },
  {
    id: 'single-parent',
    name: 'Single Parent Scholarship',
    tag: 'Family Assistance',
    description: 'Providing crucial tuition assistance to ambitious students raised by single parents, easing educational access without financial disruption.',
    eligibility: 'Documentation confirming single parent guardianship and eligible annual household income bands.'
  },
  {
    id: 'chancellors-excellence',
    name: 'Chancellor\'s Excellence Award',
    tag: 'Distinguished Talent',
    description: 'Prestigious award conferred on exceptional state or national achievers in sports, Olympiads, science innovation, or public leadership.',
    eligibility: 'State, national, or international certificates of distinction in accredited athletic, academic, or cultural competitions.'
  },
  {
    id: 'sc-st-empowerment',
    name: 'SC/ST Empowerment Scholarship',
    tag: 'Social Upliftment',
    description: 'Special fee concessions and scholarship support dedicated to eligible Scheduled Caste and Scheduled Tribe scholars following statutory reservation principles.',
    eligibility: 'Submission of valid caste certificate issued by the competent government authority during document verification.'
  },
  {
    id: 'early-bird',
    name: 'Early Bird Scholarship',
    tag: 'Admissions 2026-27',
    description: 'Incentive scholarship granted to proactive candidates who register and confirm their provisional admission early in the admission cycle.',
    eligibility: 'Completion of application and admission confirmation within designated early intake deadlines.'
  }
];

export const SCHOLARSHIPS = scholarshipList;
