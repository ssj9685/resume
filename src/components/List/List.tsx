import { ReactNode } from "react";
import { listStyle } from "./list.style";

export default function List(props: { contents: ReactNode[] }) {
  const { contents } = props;

  return (
    <ul className={listStyle.list}>
      {contents.map((content, index) => (
        <li key={index}>{content}</li>
      ))}
    </ul>
  );
}
