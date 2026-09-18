import { MetadataRoute } from "next";
import { SCHOOLS, DEPARTMENTS, PROGRAMS } from "@/data/academicData";
import { UNIVERSITY_EVENTS } from "@/data/eventsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smru.edu.in";

  // Static institutional pages
  const staticRoutes = [
    "",
    "/about",
    "/approvals-recognitions",
    "/mandatory-disclosure",
    "/statutory-disclosures",
    "/leadership/all",
    "/anti-ragging",
    "/grievance-redressal",
    "/iqac-quality-assurance",
    "/academic-structure",
    "/schools",
    "/admissions",
    "/phd-admissions",
    "/fee-structure",
    "/admission-policy",
    "/campus-360",
    "/hostel",
    "/hostel-360",
    "/campus-location-hyderabad",
    "/events",
    "/careers",
    "/contact",
    "/search",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // School pages
  const schoolRoutes = SCHOOLS.map((school) => ({
    url: `${baseUrl}/schools/${school.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Department pages
  const departmentRoutes = DEPARTMENTS.map((dept) => ({
    url: `${baseUrl}/schools/${dept.schoolId}/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Program pages (all 71 programmes)
  const programRoutes = PROGRAMS.map((prog) => ({
    url: `${baseUrl}/schools/${prog.schoolId}/${prog.departmentId}/${prog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Event pages
  const eventRoutes = UNIVERSITY_EVENTS.map((ev) => ({
    url: `${baseUrl}/events/${ev.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...schoolRoutes, ...departmentRoutes, ...programRoutes, ...eventRoutes];
}
