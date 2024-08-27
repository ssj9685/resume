import { subTitleStyle } from "./subTitle.style";

export default function SubTitle(props: { text: string }) {
  const { text } = props;

  return <h3 className={subTitleStyle.h3}>{text}</h3>;
}
