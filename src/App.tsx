import { Fragment } from "react";
import { cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import List from "./components/List/List";
import SupportingSection from "./components/SupportingSection/SupportingSection";
import resumeContent from "./resume.content";
import { styles } from "./style";

export default function Resume() {
	const {
		name,
		title,
		careerTotalText,
		contacts,
		summary,
		companies,
		experiences,
		caseStudies,
		supportingEvidence,
	} = resumeContent;

	return (
		<div className={cx(styles.container, styles.global)}>
			<div className={styles.content}>
				<header className={styles.header}>
					<div className={styles.profile}>
						<div className={styles.headerCopy}>
							<h1 className={styles.name}>{name}</h1>
							<p className={styles.title}>{title}</p>
						</div>
					</div>
					<div className={styles.contact}>
						{contacts.map((contact) => (
							<Fragment key={contact.label}>
								<strong>{contact.label}</strong>
								<Link href={contact.href} text={contact.text} />
							</Fragment>
						))}
					</div>
				</header>

				<Card title="" className={styles.summarySection}>
					{summary.paragraphs.map((paragraph) => (
						<p key={paragraph} className={styles.summaryParagraph}>
							{paragraph}
						</p>
					))}
				</Card>

				<Card
					className={styles.experienceSection}
					title={
						<span className={styles.careerTitleWrap}>
							<span>경력</span>
							<span className={styles.careerTotal}>총 {careerTotalText}</span>
						</span>
					}
				>
					{companies.map((company) => {
						const companyRoles = experiences.filter(
							(experience) => experience.company === company.name,
						);
						const companyProjects = caseStudies.filter(
							(project) => project.company === company.name,
						);
						const projectYears = company.groupProjectsByYear
							? [...new Set(companyProjects.map((project) => project.period.slice(0, 4)))]
							: [null];

						return (
							<article key={company.name} className={styles.companyExperience}>
								<h4 className={styles.companyName}>{company.name}</h4>

								<dl className={styles.companyMeta}>
									<div className={styles.companyMetaRow}>
										<dt>기간</dt>
										<dd>{company.period}</dd>
									</div>
									<div className={styles.companyMetaRow}>
										<dt>주요 업무</dt>
										<dd>{company.areas.join(" · ")}</dd>
									</div>
								</dl>

								<div className={styles.roleList}>
									{companyRoles.map((role, roleIndex) => (
										<section
											key={`${role.title}-${role.period}`}
											className={styles.roleItem}
										>
											<div className={styles.roleTimelineTrack} aria-hidden="true">
												<span
													className={cx(
														styles.roleTimelineDot,
														role.changeLabel ? styles.roleTimelineDotCurrent : null,
													)}
												/>
												{roleIndex < companyRoles.length - 1 ? (
													<span className={styles.roleTimelineLine} />
												) : null}
											</div>
											<div className={styles.roleContent}>
												<header className={styles.roleHeader}>
													<div className={styles.roleTitleRow}>
														<h5>{role.title}</h5>
														{role.changeLabel ? (
															<span className={styles.roleChangeLabel}>
																{role.changeLabel}
															</span>
														) : null}
													</div>
													<time>{role.period}</time>
												</header>
												{role.overview ? (
													<p className={styles.roleOverview}>{role.overview}</p>
												) : null}
												{role.highlights.length ? (
													<List contents={role.highlights} />
												) : null}
											</div>
										</section>
									))}
								</div>

								{companyProjects.length ? (
									<section className={styles.companyProjects}>
										<h5 className={styles.companyProjectsTitle}>주요 작업</h5>
										<div className={styles.projectYearGroups}>
											{projectYears.map((projectYear) => {
												const projects = projectYear
													? companyProjects.filter((project) =>
															project.period.startsWith(projectYear),
														)
													: companyProjects;

												return (
													<section
														key={projectYear ?? company.name}
														className={
															projectYear
																? styles.projectYearGroup
																: styles.projectYearGroupPlain
														}
													>
														{projectYear ? (
															<h6 className={styles.projectYearLabel}>{projectYear}</h6>
														) : null}
														<div className={styles.projectList}>
															{projects.map((project) => (
																<article
																	key={project.title}
																	className={styles.projectItem}
																>
																	<header className={styles.projectHeader}>
																		<h6 className={styles.projectTitle}>
																			{project.title}
																		</h6>
																		<time className={styles.projectPeriod}>
																			{project.period}
																		</time>
																	</header>
																	<List contents={project.summary} />
																</article>
															))}
														</div>
													</section>
												);
											})}
										</div>
									</section>
								) : null}
							</article>
						);
					})}
				</Card>

				{supportingEvidence.map((section) => (
					<SupportingSection key={section.title} {...section} />
				))}
			</div>
		</div>
	);
}
