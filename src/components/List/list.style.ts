import { css } from "@emotion/css";

export const listStyle = {
	list: css`
    padding-left: 1.15em;
    margin: 12px 0 0;

    li {
      white-space: pre-wrap;
      margin-bottom: 7px;
      break-inside: avoid-page;
      page-break-inside: avoid;

      &::marker {
        font-size: 0.68em;
      }
    }

    @media print {
      margin-top: 8px;

      li {
        margin-bottom: 5px;
      }
    }
  `,
};
