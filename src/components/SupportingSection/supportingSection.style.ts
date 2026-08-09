import { css } from "@emotion/css";

export const supportingSectionStyle = {
	section: css`
    margin-top: 76px;
    padding-top: 26px;
    border-top: 2px solid #242424;

    @media (max-width: 768px) {
      margin-top: 60px;
      padding-top: 22px;
    }

    @media print {
      margin-top: 28px;
      padding-top: 12px;
      border-top-width: 1px;
    }
  `,
	sectionTitle: css`
    margin: 0 0 30px;
    font-size: 22px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    font-weight: 730;

    @media print {
      margin-bottom: 14px;
      font-size: 17pt;
    }
  `,
	item: css`
    break-inside: avoid-page;
    page-break-inside: avoid;

    & + & {
      margin-top: 26px;
      padding-top: 24px;
      border-top: 1px solid #dedede;
    }

    @media print {
      & + & {
        margin-top: 16px;
        padding-top: 14px;
      }
    }
  `,
	itemHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: 540px) {
      flex-direction: column;
      gap: 6px;
    }
  `,
	itemTitle: css`
    margin: 0;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    font-weight: 710;
  `,
  itemMeta: css`
    margin: 5px 0 0;
    color: #6d6d6d;
    font-size: 12px;
    line-height: 1.55;

    @media print {
      margin-top: 3px;
    }
  `,
	itemPeriod: css`
    color: #777;
    font-size: 11.5px;
    line-height: 1.5;
    white-space: nowrap;
  `,
  description: css`
    max-width: 720px;
    margin: 11px 0 0;
    font-size: 14px;
    line-height: 1.7;

    @media print {
      margin-top: 7px;
      line-height: 1.6;
    }
  `,
  links: css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 9px;

    @media print {
      margin-top: 6px;
    }
  `,
};
