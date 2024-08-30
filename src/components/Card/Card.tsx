import { ReactNode } from "react";
import { cardStyle } from "./card.style";

export default function Card(props: { title: string; children: ReactNode }) {
  const { title, children } = props;

  return (
    <section className={cardStyle.section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
