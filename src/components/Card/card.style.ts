import { css } from "@emotion/css";

export const cardStyle = {
	section: css`
    background: white;
    padding: 0;
    margin-top: 48px;

    > h3 {
      margin: 0 0 28px;
      font-size: 22px;
      line-height: 1.25;
      letter-spacing: -0.03em;
      font-weight: 730;
    }

    @media print {
      margin-top: 34px;

      > h3 {
        margin-bottom: 20px;
        font-size: 17pt;
      }
    }
  `,
};
