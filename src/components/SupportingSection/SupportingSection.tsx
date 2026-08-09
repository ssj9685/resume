import { useId } from "react";
import Link from "../Link/Link";
import List from "../List/List";
import type { ResumeEvidenceSection } from "../../resume.types";
import { supportingSectionStyle } from "./supportingSection.style";

export default function SupportingSection(props: ResumeEvidenceSection) {
	const { title, items } = props;
	const titleId = useId();

	return (
		<section className={supportingSectionStyle.section} aria-labelledby={titleId}>
			<h3 id={titleId} className={supportingSectionStyle.sectionTitle}>
				{title}
			</h3>

			<div>
				{items.map((item) => (
					<article key={item.title} className={supportingSectionStyle.item}>
						<header className={supportingSectionStyle.itemHeader}>
							<div>
								<h4 className={supportingSectionStyle.itemTitle}>{item.title}</h4>
								<p className={supportingSectionStyle.itemMeta}>{item.subtitle}</p>
							</div>
							{item.period ? (
								<time className={supportingSectionStyle.itemPeriod}>{item.period}</time>
							) : null}
						</header>

						<p className={supportingSectionStyle.description}>{item.description}</p>
						{item.highlights?.length ? <List contents={item.highlights} /> : null}
						{item.links?.length ? (
							<div className={supportingSectionStyle.links}>
								{item.links.map((link) => (
									<Link
										key={`${item.title}-${link.text}`}
										href={link.href}
										text={link.text}
									/>
								))}
							</div>
						) : null}
					</article>
				))}
			</div>
		</section>
	);
}
