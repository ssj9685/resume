import { subTitleStyle } from "./subTitle.style";

export default function SubTitle(props: { text: string }) {
  const { text } = props;

  return (
    <h5 autoCapitalize="none" className={subTitleStyle.subTitle}>
      {text}
    </h5>
  );
}
