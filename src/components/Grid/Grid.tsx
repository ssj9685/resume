import { css } from "@emotion/css";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

const styles = {
	grid: (props: ComponentProps<typeof Grid>) =>
		css`
      display: grid;
      width: ${props.width};
      height: ${props.height};
      grid-template-areas: ${props.areas};
      grid-template-columns: ${props.columns};
      grid-template-rows: ${props.rows};
    `,
};

export default function Grid(props: {
	width?: CSSProperties["width"];
	height?: CSSProperties["height"];
	areas?: CSSProperties["gridTemplateAreas"];
	rows?: CSSProperties["gridTemplateRows"];
	columns?: CSSProperties["gridTemplateColumns"];
	children?: ReactNode;
}) {
	return <div className={styles.grid(props)}>{props.children}</div>;
}
