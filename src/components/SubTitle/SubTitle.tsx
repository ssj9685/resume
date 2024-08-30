import { subTitleStyle } from "./subTitle.style";

export default function SubTitle(props: { text: string }) {
  const { text } = props;

  return <h5 className={subTitleStyle.subTitle}>{text}</h5>;
}
