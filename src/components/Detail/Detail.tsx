import { detailStyle } from "./detail.style";

export default function Detail(props: { text: string }) {
  const { text } = props;

  return <p className={detailStyle.p}>{text}</p>;
}
