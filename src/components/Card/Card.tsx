import { ReactNode } from "react";
import { cardStyle } from "./card.style";
import { cx } from "@emotion/css";

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
