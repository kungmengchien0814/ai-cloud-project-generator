export type ProjectFormData = {
  projectName: string;
  members: string;
  departmentClass: string;
  technologies: string;
  goal: string;
  result: string;
};

export type GeneratedIntro = {
  summary: string;
  highlights: string[];
  benefits: string[];
  deployment: string;
};
