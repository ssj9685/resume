import { css } from "@emotion/css";
import { ReactElement } from "react";

export default function Divider(props: {
  type: "horizontal" | "vertical";
  length?: number;
  thickness?: number;
}) {
  const { type, length, thickness = 1 } = props;

  const map: { [key in typeof type]: ReactElement } = {
    horizontal: (
      <div
        className={css`
          width: ${length ? `${length}px` : "100%"};
          background: #c0c0c0;
          height: ${thickness}px;
          margin: 4px 0;
        `}
      />
    ),
    vertical: (
      <span
        className={css`
          height: ${length ? `${length}px` : "100%"};
          background: #aeaeae;
          width: ${thickness}px;
        `}
      />
    ),
  };

  return map[type];
}
