import { css } from "@emotion/css";

const styles = {
  vertical: (size: number) => css`
    display: block;
    height: ${size}px;
  `,
  horizontal: (size: number) => css`
    display: inline-block;
    width: ${size}px;
  `,
} as const;

export default function Gap(props: {
  type: "vertical" | "horizontal";
  size: number;
}) {
  const { type, size } = props;

  return <div className={styles[type](size)} />;
}
