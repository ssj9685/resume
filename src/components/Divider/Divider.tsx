import { css, cx } from "@emotion/css";

type DividerType = "horizontal" | "vertical";

const styles = {
  horizontal: (thickness: number, length?: number) => css`
    display: block;
    width: ${length ? `${length}px` : "100%"};
    border-bottom: ${thickness}px solid #c0c0c0;
    margin: 24px 0;
  `,
  vertical: (thickness: number, length?: number) => css`
    display: inline-block;
    height: ${length ? `${length}px` : "100%"};
    border-right: ${thickness}px solid #c0c0c0;
    margin: 24px 0;
  `,
};

export default function Divider(props: {
  type: DividerType;
  length?: number;
  thickness?: number;
  className?: string;
}) {
  const { type, length, thickness = 1, className } = props;

  return <div className={cx(styles[type](thickness, length), className)} />;
}
