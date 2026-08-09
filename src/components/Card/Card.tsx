import { cx } from "@emotion/css";
import type { ReactNode } from "react";
import { cardStyle } from "./card.style";

export default function Card(props: {
	className?: string;
	title: ReactNode;
	children: ReactNode;
}) {
	const { title, children, className } = props;

	return (
		<section className={cx(cardStyle.section, className)}>
			{title ? <h3>{title}</h3> : null}
			{children}
		</section>
	);
}
