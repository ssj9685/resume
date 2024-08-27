import { ReactNode } from "react";
import { cardStyle } from "./card.style";

export default function Card(props: { title: string; children: ReactNode }) {
  const { title, children } = props;

  return (
    <section className={cardStyle.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
