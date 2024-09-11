import { css } from "@emotion/css";
import { ComponentProps, CSSProperties, ReactNode } from "react";

const styles = {
  flex: (props: ComponentProps<typeof Flex>) => css`
    display: flex;
    flex-direction: ${props.direction};
    place-content: ${props.mainAlign};
    place-items: ${props.crossAlign};
    gap: ${props.gap}px;
    flex: ${props.flex};
    flex-wrap: ${props.wrap ? "wrap" : ""};
  `,
};

export default function Flex(props: {
  direction?: CSSProperties["flexDirection"];
  mainAlign?: CSSProperties["justifyContent"];
  crossAlign?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
  gap?: number;
  wrap?: boolean;
  children: ReactNode;
}) {
  return <div className={styles.flex(props)}>{props.children}</div>;
}
