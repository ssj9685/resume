import { listStyle } from "./list.style";

export default function List(props: { contents: string[] }) {
  const { contents } = props;

  return (
    <ul className={listStyle.list}>
      {contents.map((content) => (
        <li key={content}>{content}</li>
      ))}
    </ul>
  );
}
