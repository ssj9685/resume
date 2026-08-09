export type ResumeLink = {
	text: string;
	href: string;
};

export type ResumeContact = {
	label: string;
	text: string;
	href: string;
};

export type ResumeSummary = {
	paragraphs: string[];
};

export type ResumeExperience = {
	company: string;
	title: string;
	period: string;
	changeLabel?: string;
	overview?: string;
	highlights: string[];
};

export type ResumeCompany = {
	name: string;
	period: string;
	areas: string[];
	groupProjectsByYear?: boolean;
};

export type ResumeCaseStudy = {
	company: string;
	title: string;
	period: string;
	summary: string[];
};

export type ResumeEvidenceItem = {
	title: string;
	subtitle: string;
	period?: string;
	description: string;
	highlights?: string[];
	links?: ResumeLink[];
};

export type ResumeEvidenceSection = {
	title: string;
	items: ResumeEvidenceItem[];
};

export type ResumeContent = {
	name: string;
	title: string;
	careerTotalText: string;
	contacts: ResumeContact[];
	summary: ResumeSummary;
	companies: ResumeCompany[];
	experiences: ResumeExperience[];
	caseStudies: ResumeCaseStudy[];
	supportingEvidence: ResumeEvidenceSection[];
};
