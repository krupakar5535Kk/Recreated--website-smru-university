import { School } from '@/types';

export const academicSchools: School[] = [
  {
    id: "rehabilitation-sciences",
    name: "School of Rehabilitation Sciences",
    slug: "rehabilitation-sciences",
    shortName: "Rehabilitation",
    color: "#1d4f8e",
    badge: "Clinical & Assistive Hub",
    description: "Pioneering inclusive healthcare, audiology, speech language pathology, prosthetics, orthotics, and specialized rehabilitation education with integrated clinical practices.",
    departments: [
      {
        id: "audiology-speech-sciences",
        name: "Department of Audiology & Speech Sciences",
        slug: "audiology-speech-sciences",
        schoolId: "rehabilitation-sciences",
        description: "Specialized academic and research division within the School of Rehabilitation Sciences.",
        programs: [
          {
            id: "baslp",
            name: "Bachelor in Audiology and Speech-Language Pathology (BASLP)",
            slug: "baslp",
            schoolId: "rehabilitation-sciences",
            departmentId: "audiology-speech-sciences",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The Bachelor in Audiology and Speech-Language Pathology (BASLP) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "msc-audiology",
            name: "M.Sc. Audiology",
            slug: "msc-audiology",
            schoolId: "rehabilitation-sciences",
            departmentId: "audiology-speech-sciences",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The M.Sc. Audiology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-audiology",
            name: "Ph.D. in Audiology",
            slug: "phd-audiology",
            schoolId: "rehabilitation-sciences",
            departmentId: "audiology-speech-sciences",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Audiology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mao",
            name: "Master of Audiology (MAO)",
            slug: "mao",
            schoolId: "rehabilitation-sciences",
            departmentId: "audiology-speech-sciences",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The Master of Audiology (MAO) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-speech-hearing",
            name: "Ph.D. in Speech and Hearing",
            slug: "phd-speech-hearing",
            schoolId: "rehabilitation-sciences",
            departmentId: "audiology-speech-sciences",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Speech and Hearing program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "prosthetics-orthotics",
        name: "Department of Prosthetics & Orthotics",
        slug: "prosthetics-orthotics",
        schoolId: "rehabilitation-sciences",
        description: "Specialized academic and research division within the School of Rehabilitation Sciences.",
        programs: [
          {
            id: "bpo",
            name: "Bachelor in Prosthetics and Orthotics (BPO)",
            slug: "bpo",
            schoolId: "rehabilitation-sciences",
            departmentId: "prosthetics-orthotics",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The Bachelor in Prosthetics and Orthotics (BPO) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mpo",
            name: "Master in Prosthetics and Orthotics (MPO)",
            slug: "mpo",
            schoolId: "rehabilitation-sciences",
            departmentId: "prosthetics-orthotics",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The Master in Prosthetics and Orthotics (MPO) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "inclusive-education",
        name: "Department of Inclusive Education",
        slug: "inclusive-education",
        schoolId: "rehabilitation-sciences",
        description: "Specialized academic and research division within the School of Rehabilitation Sciences.",
        programs: [
          {
            id: "ba-bed-special-inclusive-education",
            name: "B.A. B.Ed. Special / Inclusive Education",
            slug: "ba-bed-special-inclusive-education",
            schoolId: "rehabilitation-sciences",
            departmentId: "inclusive-education",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.A. B.Ed. Special / Inclusive Education program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bsc-bed-special-inclusive-education",
            name: "B.Sc. B.Ed. Special / Inclusive Education",
            slug: "bsc-bed-special-inclusive-education",
            schoolId: "rehabilitation-sciences",
            departmentId: "inclusive-education",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. B.Ed. Special / Inclusive Education program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bcom-bed-special-inclusive-education",
            name: "B.Com. B.Ed. Special / Inclusive Education",
            slug: "bcom-bed-special-inclusive-education",
            schoolId: "rehabilitation-sciences",
            departmentId: "inclusive-education",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Com. B.Ed. Special / Inclusive Education program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-inclusive-education",
            name: "Ph.D. in Inclusive Education",
            slug: "phd-inclusive-education",
            schoolId: "rehabilitation-sciences",
            departmentId: "inclusive-education",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Inclusive Education program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-special-education",
            name: "Ph.D. in Special Education",
            slug: "phd-special-education",
            schoolId: "rehabilitation-sciences",
            departmentId: "inclusive-education",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Special Education program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
  {
    id: "health-allied-health-sciences",
    name: "School of Health & Allied Health Sciences",
    slug: "health-allied-health-sciences",
    shortName: "Allied Health",
    color: "#0fa571",
    badge: "Healthcare & Therapy",
    description: "Educating the next generation of healthcare professionals through evidence-based clinical immersion in physiotherapy, occupational therapy, and allied diagnostics.",
    departments: [
      {
        id: "physiotherapy",
        name: "Department of Physiotherapy",
        slug: "physiotherapy",
        schoolId: "health-allied-health-sciences",
        description: "Specialized academic and research division within the School of Health & Allied Health Sciences.",
        programs: [
          {
            id: "bpt",
            name: "Bachelor of Physiotherapy (BPT)",
            slug: "bpt",
            schoolId: "health-allied-health-sciences",
            departmentId: "physiotherapy",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The Bachelor of Physiotherapy (BPT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mpt",
            name: "Master of Physiotherapy (MPT)",
            slug: "mpt",
            schoolId: "health-allied-health-sciences",
            departmentId: "physiotherapy",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The Master of Physiotherapy (MPT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-physiotherapy",
            name: "Ph.D. in Physiotherapy",
            slug: "phd-physiotherapy",
            schoolId: "health-allied-health-sciences",
            departmentId: "physiotherapy",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Physiotherapy program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-physiotherapy-neurology",
            name: "Ph.D. in Physiotherapy (Neurology)",
            slug: "phd-physiotherapy-neurology",
            schoolId: "health-allied-health-sciences",
            departmentId: "physiotherapy",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Physiotherapy (Neurology) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "occupational-therapy",
        name: "Department of Occupational Therapy",
        slug: "occupational-therapy",
        schoolId: "health-allied-health-sciences",
        description: "Specialized academic and research division within the School of Health & Allied Health Sciences.",
        programs: [
          {
            id: "bot",
            name: "Bachelor of Occupational Therapy (BOT)",
            slug: "bot",
            schoolId: "health-allied-health-sciences",
            departmentId: "occupational-therapy",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The Bachelor of Occupational Therapy (BOT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mot",
            name: "Master of Occupational Therapy (MOT)",
            slug: "mot",
            schoolId: "health-allied-health-sciences",
            departmentId: "occupational-therapy",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The Master of Occupational Therapy (MOT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-occupational-therapy",
            name: "Ph.D. in Occupational Therapy",
            slug: "phd-occupational-therapy",
            schoolId: "health-allied-health-sciences",
            departmentId: "occupational-therapy",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Occupational Therapy program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "allied-health-sciences",
        name: "Department of Allied Health Sciences",
        slug: "allied-health-sciences",
        schoolId: "health-allied-health-sciences",
        description: "Specialized academic and research division within the School of Health & Allied Health Sciences.",
        programs: [
          {
            id: "bmlt",
            name: "B.Sc. Medical Laboratory Technology (BMLT)",
            slug: "bmlt",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. Medical Laboratory Technology (BMLT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bsc-anaesthesia-ot",
            name: "B.Sc. Anaesthesia & Operation Theatre Technology",
            slug: "bsc-anaesthesia-ot",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. Anaesthesia & Operation Theatre Technology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bcvt",
            name: "B.Sc. Cardiac Vascular Technology (BCVT)",
            slug: "bcvt",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. Cardiac Vascular Technology (BCVT) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "betcms",
            name: "B.Sc. Emergency Technology & Critical Care (BETCMS)",
            slug: "betcms",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. Emergency Technology & Critical Care (BETCMS) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "b-optometry",
            name: "Bachelor of Optometry (B.Optom)",
            slug: "b-optometry",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bachelor of Optometry (B.Optom) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "brt",
            name: "Brt",
            slug: "brt",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Brt program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bsc-forensic-science",
            name: "Bsc Forensic Science",
            slug: "bsc-forensic-science",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bsc Forensic Science program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "diploma-anaesthesia-operation-theatre-technology",
            name: "Diploma Anaesthesia Operation Theatre Technology",
            slug: "diploma-anaesthesia-operation-theatre-technology",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Diploma",
            duration: "1 Year",
            overview: "The Diploma Anaesthesia Operation Theatre Technology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bachelor-nutrition-dietetics-hons",
            name: "Bachelor Nutrition Dietetics Hons",
            slug: "bachelor-nutrition-dietetics-hons",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bachelor Nutrition Dietetics Hons program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "diploma-radiotherapy-technology",
            name: "Diploma Radiotherapy Technology",
            slug: "diploma-radiotherapy-technology",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Diploma",
            duration: "1 Year",
            overview: "The Diploma Radiotherapy Technology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bpa",
            name: "Bpa",
            slug: "bpa",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bpa program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "diploma-dialysis-technology",
            name: "Diploma Dialysis Technology",
            slug: "diploma-dialysis-technology",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Diploma",
            duration: "1 Year",
            overview: "The Diploma Dialysis Technology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bdtt",
            name: "Bdtt",
            slug: "bdtt",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bdtt program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "brt-respiratory",
            name: "Brt Respiratory",
            slug: "brt-respiratory",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Brt Respiratory program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bmit",
            name: "Bmit",
            slug: "bmit",
            schoolId: "health-allied-health-sciences",
            departmentId: "allied-health-sciences",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bmit program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
  {
    id: "psychology",
    name: "School of Psychology",
    slug: "psychology",
    shortName: "Psychology",
    color: "#ffaf3a",
    badge: "Behavioural Sciences",
    description: "Comprehensive psychological science spanning clinical assessment, neuropsychology, rehabilitation counseling, cognitive behaviour, and community mental health.",
    departments: [
      {
        id: "clinical-psychology",
        name: "Department of Clinical Psychology",
        slug: "clinical-psychology",
        schoolId: "psychology",
        description: "Specialized academic and research division within the School of Psychology.",
        programs: [
          {
            id: "bsc-clinical-psychology",
            name: "B.Sc. Clinical Psychology",
            slug: "bsc-clinical-psychology",
            schoolId: "psychology",
            departmentId: "clinical-psychology",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Sc. Clinical Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "ma-clinical-psychology",
            name: "M.A. Clinical Psychology",
            slug: "ma-clinical-psychology",
            schoolId: "psychology",
            departmentId: "clinical-psychology",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The M.A. Clinical Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-clinical-psychology",
            name: "Ph.D. in Clinical Psychology",
            slug: "phd-clinical-psychology",
            schoolId: "psychology",
            departmentId: "clinical-psychology",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Clinical Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "professional-diploma-clinical-psychology",
            name: "Professional Diploma in Clinical Psychology",
            slug: "professional-diploma-clinical-psychology",
            schoolId: "psychology",
            departmentId: "clinical-psychology",
            level: "Diploma",
            duration: "1 Year",
            overview: "The Professional Diploma in Clinical Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "rehabilitation-psychology",
        name: "Department of Rehabilitation Psychology",
        slug: "rehabilitation-psychology",
        schoolId: "psychology",
        description: "Specialized academic and research division within the School of Psychology.",
        programs: [
          {
            id: "pg-diploma-rehabilitation-psychology",
            name: "PG Diploma in Rehabilitation Psychology (PGDRP)",
            slug: "pg-diploma-rehabilitation-psychology",
            schoolId: "psychology",
            departmentId: "rehabilitation-psychology",
            level: "Diploma",
            duration: "1 Year",
            overview: "The PG Diploma in Rehabilitation Psychology (PGDRP) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-rehabilitation-psychology",
            name: "Ph.D. in Rehabilitation Psychology",
            slug: "phd-rehabilitation-psychology",
            schoolId: "psychology",
            departmentId: "rehabilitation-psychology",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Rehabilitation Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "applied-psychology-behavioural-health",
        name: "Department of Applied Psychology & Behavioural Health",
        slug: "applied-psychology-behavioural-health",
        schoolId: "psychology",
        description: "Specialized academic and research division within the School of Psychology.",
        programs: [
          {
            id: "b-psychology-applied-behavioural",
            name: "B.A. Psychology (Applied & Behavioural)",
            slug: "b-psychology-applied-behavioural",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.A. Psychology (Applied & Behavioural) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "m-psychology-applied-behavioural",
            name: "M.A. Psychology (Applied & Behavioural)",
            slug: "m-psychology-applied-behavioural",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The M.A. Psychology (Applied & Behavioural) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-psychology",
            name: "Ph.D. in Psychology",
            slug: "phd-psychology",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-applied-psychology",
            name: "Ph.D. in Applied Psychology",
            slug: "phd-applied-psychology",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Applied Psychology program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bmpsw",
            name: "Bachelor of Medical & Psychiatric Social Work (BMPSW)",
            slug: "bmpsw",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bachelor of Medical & Psychiatric Social Work (BMPSW) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mmsw",
            name: "Mmsw",
            slug: "mmsw",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Mmsw program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "mpsw",
            name: "Mpsw",
            slug: "mpsw",
            schoolId: "psychology",
            departmentId: "applied-psychology-behavioural-health",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Mpsw program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
  {
    id: "nursing-sciences",
    name: "School of Nursing",
    slug: "nursing-sciences",
    shortName: "Nursing",
    color: "#0891b2",
    badge: "Patient Care & Nursing",
    description: "Excellence in nursing care, simulation training, clinical ethics, critical care nursing, and community health healthcare practice.",
    departments: [
      {
        id: "nursing",
        name: "Department of Nursing",
        slug: "nursing",
        schoolId: "nursing-sciences",
        description: "Specialized academic and research division within the School of Nursing.",
        programs: [
          {
            id: "bsc-nursing",
            name: "B.Sc. Nursing",
            slug: "bsc-nursing",
            schoolId: "nursing-sciences",
            departmentId: "nursing",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Sc. Nursing program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "msc-nursing",
            name: "M.Sc. Nursing",
            slug: "msc-nursing",
            schoolId: "nursing-sciences",
            departmentId: "nursing",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The M.Sc. Nursing program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
  {
    id: "engineering-emerging-technologies",
    name: "School of Engineering & Emerging Technologies",
    slug: "engineering-emerging-technologies",
    shortName: "Engineering & Tech",
    color: "#0284c7",
    badge: "Innovation & AI",
    description: "Fostering technological innovation through AI, Machine Learning, Data Science, Cyber Security, Assistive Tech, and Rehabilitation Engineering.",
    departments: [
      {
        id: "rehabilitation-engineering-assistive-technologies",
        name: "Department of Rehabilitation Engineering & Assistive Technologies",
        slug: "rehabilitation-engineering-assistive-technologies",
        schoolId: "engineering-emerging-technologies",
        description: "Specialized academic and research division within the School of Engineering & Emerging Technologies.",
        programs: [
          {
            id: "btech-rehab-engineering",
            name: "B.Tech. in Rehabilitation Engineering",
            slug: "btech-rehab-engineering",
            schoolId: "engineering-emerging-technologies",
            departmentId: "rehabilitation-engineering-assistive-technologies",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. in Rehabilitation Engineering program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-rehabilitation-engineering-prosthetics-orthotics-assistive-technologies",
            name: "B.Tech. Rehabilitation Engineering (Prosthetics, Orthotics & Assistive Tech)",
            slug: "btech-rehabilitation-engineering-prosthetics-orthotics-assistive-technologies",
            schoolId: "engineering-emerging-technologies",
            departmentId: "rehabilitation-engineering-assistive-technologies",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The B.Tech. Rehabilitation Engineering (Prosthetics, Orthotics & Assistive Tech) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "computer-science-engineering",
        name: "Department of Computer Science & Engineering",
        slug: "computer-science-engineering",
        schoolId: "engineering-emerging-technologies",
        description: "Specialized academic and research division within the School of Engineering & Emerging Technologies.",
        programs: [
          {
            id: "btech-cse",
            name: "B.Tech. Computer Science & Engineering",
            slug: "btech-cse",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. Computer Science & Engineering program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-cse-aiml",
            name: "B.Tech. CSE (Artificial Intelligence & Machine Learning)",
            slug: "btech-cse-aiml",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. CSE (Artificial Intelligence & Machine Learning) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-cse-ai-ds",
            name: "B.Tech. CSE (AI & Data Science)",
            slug: "btech-cse-ai-ds",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. CSE (AI & Data Science) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-cse-cs",
            name: "B.Tech. CSE (Cyber Security)",
            slug: "btech-cse-cs",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. CSE (Cyber Security) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-cse-fintech-ai",
            name: "B.Tech. CSE (Fintech & AI)",
            slug: "btech-cse-fintech-ai",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "4 Years + Internship",
            overview: "The B.Tech. CSE (Fintech & AI) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "btech-cse-biomedical-engineering",
            name: "Btech Cse Biomedical Engineering",
            slug: "btech-cse-biomedical-engineering",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Btech Cse Biomedical Engineering program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-cse",
            name: "Phd Cse",
            slug: "phd-cse",
            schoolId: "engineering-emerging-technologies",
            departmentId: "computer-science-engineering",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Phd Cse program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "sciences-humanities",
        name: "Department of Sciences & Humanities",
        slug: "sciences-humanities",
        schoolId: "engineering-emerging-technologies",
        description: "Specialized academic and research division within the School of Engineering & Emerging Technologies.",
        programs: [
          {
            id: "phd-mathematics",
            name: "Ph.D. in Mathematics",
            slug: "phd-mathematics",
            schoolId: "engineering-emerging-technologies",
            departmentId: "sciences-humanities",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Mathematics program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-physics",
            name: "Ph.D. in Physics",
            slug: "phd-physics",
            schoolId: "engineering-emerging-technologies",
            departmentId: "sciences-humanities",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Physics program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-chemistry",
            name: "Ph.D. in Chemistry",
            slug: "phd-chemistry",
            schoolId: "engineering-emerging-technologies",
            departmentId: "sciences-humanities",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Chemistry program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-english",
            name: "Ph.D. in English",
            slug: "phd-english",
            schoolId: "engineering-emerging-technologies",
            departmentId: "sciences-humanities",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in English program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
      {
        id: "business-administration-computer-applications",
        name: "Department of Business Administration & Computer Applications",
        slug: "business-administration-computer-applications",
        schoolId: "engineering-emerging-technologies",
        description: "Specialized academic and research division within the School of Engineering & Emerging Technologies.",
        programs: [
          {
            id: "phd-business-administration",
            name: "Ph.D. in Business Administration",
            slug: "phd-business-administration",
            schoolId: "engineering-emerging-technologies",
            departmentId: "business-administration-computer-applications",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Business Administration program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
  {
    id: "law",
    name: "School of Law",
    slug: "law",
    shortName: "Law",
    color: "#7c3aed",
    badge: "Legal Studies & Justice",
    description: "Fostering legal acumen, ethical advocacy, constitutional jurisprudence, human rights, and corporate law with moot court training.",
    departments: [
      {
        id: "legal-studies",
        name: "Department of Legal Studies",
        slug: "legal-studies",
        schoolId: "law",
        description: "Specialized academic and research division within the School of Law.",
        programs: [
          {
            id: "llb",
            name: "LL.B. (3 Years)",
            slug: "llb",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The LL.B. (3 Years) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "llb-hons",
            name: "LL.B. (Hons) (3 Years)",
            slug: "llb-hons",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The LL.B. (Hons) (3 Years) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "ba-llb-hons",
            name: "B.A. LL.B. (Hons) (5 Years Integrated)",
            slug: "ba-llb-hons",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "5 Years (Integrated)",
            overview: "The B.A. LL.B. (Hons) (5 Years Integrated) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bba-llb-hons",
            name: "B.B.A. LL.B. (Hons) (5 Years Integrated)",
            slug: "bba-llb-hons",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "5 Years (Integrated)",
            overview: "The B.B.A. LL.B. (Hons) (5 Years Integrated) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bsc-llb-hons",
            name: "B.Sc. LL.B. (Hons) (5 Years Integrated)",
            slug: "bsc-llb-hons",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "5 Years (Integrated)",
            overview: "The B.Sc. LL.B. (Hons) (5 Years Integrated) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "bsc-forensic-llb-hons",
            name: "Bsc Forensic Llb Hons",
            slug: "bsc-forensic-llb-hons",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Undergraduate",
            duration: "3 - 4 Years",
            overview: "The Bsc Forensic Llb Hons program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "llm",
            name: "LL.M. (Master of Laws)",
            slug: "llm",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Postgraduate",
            duration: "2 Years",
            overview: "The LL.M. (Master of Laws) program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
          {
            id: "phd-law",
            name: "Ph.D. in Law",
            slug: "phd-law",
            schoolId: "law",
            departmentId: "legal-studies",
            level: "Doctoral",
            duration: "3 - 5 Years",
            overview: "The Ph.D. in Law program at St. Mary's University offers rigorous academic, clinical, and practical training designed to prepare students for impactful careers.",
            eligibility: "Completed 10+2 / Higher Secondary with relevant subjects from a recognized board, or equivalent qualifying degree for postgraduate studies. Verified at admissions counselling.",
            careerProspects: ['Clinical Practice', 'Hospital & Healthcare Centres', 'Research & Academia', 'Specialized Rehabilitation Centres', 'Industry & Corporate Healthcare']
          },
        ]
      },
    ]
  },
];


export function getAllPrograms() {
  return academicSchools.flatMap(s => 
    s.departments.flatMap(d => d.programs)
  );
}

export function getProgramBySlug(slug: string) {
  return getAllPrograms().find(p => p.slug === slug);
}

export function getSchoolBySlug(slug: string) {
  return academicSchools.find(s => s.slug === slug);
}

export function getDepartmentBySlug(schoolSlug: string, deptSlug: string) {
  const school = getSchoolBySlug(schoolSlug);
  return school?.departments.find(d => d.slug === deptSlug);
}

export const SCHOOLS = academicSchools;
export const DEPARTMENTS = academicSchools.flatMap(s => s.departments);
export const PROGRAMS = getAllPrograms();
