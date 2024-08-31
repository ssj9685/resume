import { ReactNode } from "react";
import { listStyle } from "./list.style";

export default function List(props: { contents: ReactNode[] }) {
  const { contents } = props;

  return (
    <ul className={listStyle.list}>
      {contents.map((content) => (
        <li key={content?.toString()}>{content}</li>
      ))}
    </ul>
  );
}
