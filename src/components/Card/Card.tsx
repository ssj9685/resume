import { cx } from "@emotion/css";
import type { ReactNode } from "react";
import { cardStyle } from "./card.style";

export default function Card(props: {
	className?: string;
	title: string;
	children: ReactNode;
}) {
	const { title, children, className } = props;

	return (
		<section className={cx(cardStyle.section, className)}>
			<h3>{title}</h3>
			{children}
		</section>
	);
}
