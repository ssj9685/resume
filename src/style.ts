import { css, injectGlobal } from "@emotion/css";

export const globalStyle = injectGlobal`
  @font-face {
    font-family: "Pretendard";
    src: url("./Pretendard.woff") format("woff");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #e9e9e9;
    font-family: Pretendard, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  @media print {
    @page {
      size: A4;
      margin: 12mm 12mm 14mm;
    }

    html,
    body {
      width: auto;
      height: auto;
    }

    body {
      margin: 0;
      background: white;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      break-after: avoid-page;
      page-break-after: avoid;
    }

    p,
    li {
      orphans: 3;
      widows: 3;
    }
  }
`;

export const styles = {
	container: css`
    width: 100%;
    display: flex;
    place-content: center;
    min-height: 100vh;
    background: #e9e9e9;
    font-family: Pretendard, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

    @media print {
      min-height: 0;
      background: white;
    }
  `,
	content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #242424;
    line-height: 1.62;
    max-width: 1024px;
    margin: 0 auto;
    padding: 72px 86px 82px;
    background: white;

    @media (max-width: 768px) {
      padding: 44px 28px 56px;
    }

    @media print {
      & {
        width: auto;
        max-width: none;
        margin: 0;
        padding: 0;
        font-size: 10.3pt;
        line-height: 1.5;
      }
    }
  `,
	header: css`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 40px;
    align-items: end;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }

    @media print {
      gap: 24px;
      break-inside: avoid-page;
      page-break-inside: avoid;
    }
  `,
	profile: css`
    display: flex;

    @media print {
      min-width: 0;
    }
  `,
	headerCopy: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  `,
	contact: css`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 2px 12px;
    align-items: baseline;
    font-size: 11.5px;
    line-height: 1.65;
    color: #666;

    strong {
      color: #444;
      font-weight: 650;
    }

    @media print {
      font-size: 8.5pt;
    }
  `,
	summaryParagraph: css`
    margin: 0 0 8px;
    max-width: 720px;
    font-size: 14px;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }

    @media print {
      margin-bottom: 8px;
    }
  `,
	summarySection: css`
    margin-top: 34px;

    @media print {
      margin-top: 24px;
    }
  `,
	roleBlock: css`
    margin-top: 16px;
  `,
	supportingItem: css`
    margin-top: 16px;
    break-inside: avoid-page;
    page-break-inside: avoid;

    &:first-of-type {
      margin-top: 0;
    }
  `,
	linkRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
    break-inside: avoid-page;
    page-break-inside: avoid;
  `,
	name: css`
    font-size: 40px;
    line-height: 1.08;
    font-weight: 760;
    margin: 0;
    letter-spacing: -0.045em;
  `,
	title: css`
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    margin: 0;
    color: #555;
    white-space: pre-wrap;
  `,
	tagline: css`
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 720px;
  `,
	contactItem: css`
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  `,
	main: css`
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  `,
	experienceTitle: css`
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
  `,
	experienceDetails: css`
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  `,
	skillGrid: css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
	skillCategory: css`
    font-size: 0.95rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 0.35rem;
  `,
	skillList: css`
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
    }
  `,
	highlightBox: css`
    background-color: #e8f4fd;
    border-left: 4px solid #3a7bd5;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0 5px 5px 0;
  `,
	experienceSection: css`
    margin-top: 48px;
  `,
	companyExperience: css`
    margin-top: 28px;

    &:first-of-type {
      margin-top: 0;
    }

    & + & {
      margin-top: 52px;
      padding-top: 30px;
      border-top: 2px solid #2c2c2c;
    }

    @media print {
      & + & {
        margin-top: 36px;
        padding-top: 24px;
      }
    }
  `,
	companyName: css`
    margin: 0;
    font-size: 23px;
    line-height: 1.3;
    letter-spacing: -0.03em;
    font-weight: 740;
  `,
	companyMeta: css`
    margin: 16px 0 0;
    border-top: 1px solid #d7d7d7;
  `,
	companyMetaRow: css`
    display: grid;
    grid-template-columns: 100px minmax(0, 1fr);
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;

    dt,
    dd {
      margin: 0;
    }

    dt {
      font-size: 11px;
      line-height: 1.5;
      color: #777;
      letter-spacing: 0.08em;
    }

    dd {
      font-size: 12.5px;
      line-height: 1.5;
      font-weight: 560;
    }

    @media (max-width: 540px) {
      grid-template-columns: 72px minmax(0, 1fr);
      gap: 12px;
    }
  `,
	roleList: css`
    margin-top: 28px;
  `,
	roleItem: css`
    display: grid;
    grid-template-columns: 16px minmax(0, 1fr);
    gap: 14px;
    break-inside: avoid-page;
    page-break-inside: avoid;

    & + & {
      margin-top: 24px;
    }

    ul {
      font-size: 13.5px;
      line-height: 1.62;
    }
  `,
	roleTimelineTrack: css`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 8px;
  `,
	roleTimelineDot: css`
    position: relative;
    z-index: 1;
    width: 7px;
    height: 7px;
    border: 1px solid #8d8d8d;
    border-radius: 50%;
    background: white;
  `,
	roleTimelineDotCurrent: css`
    width: 9px;
    height: 9px;
    border-color: #242424;
    background: #242424;
  `,
	roleTimelineLine: css`
    position: absolute;
    top: 18px;
    bottom: -32px;
    width: 1px;
    background: #cfcfcf;
  `,
	roleContent: css`
    min-width: 0;
  `,
	roleHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;

    h5 {
      margin: 0;
      font-size: 16px;
      line-height: 1.45;
      letter-spacing: -0.015em;
      font-weight: 690;
    }

    time {
      color: #777;
      font-size: 11.5px;
      line-height: 1.5;
      white-space: nowrap;
    }
  `,
	roleTitleRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    min-width: 0;
  `,
	roleChangeLabel: css`
    display: inline-flex;
    align-items: center;
    min-height: 19px;
    padding: 0 7px;
    border: 1px solid #b8b8b8;
    border-radius: 999px;
    color: #555;
    font-size: 9.5px;
    line-height: 1;
    letter-spacing: 0.04em;
    font-weight: 650;
    white-space: nowrap;
  `,
	roleOverview: css`
    margin: 7px 0 0;
    color: #484848;
    font-size: 13.5px;
    line-height: 1.6;
  `,
	companyProjects: css`
    margin-top: 34px;
    padding-top: 18px;
    border-top: 1px solid #a9a9a9;

    ul {
      font-size: 13.5px;
      line-height: 1.62;
    }
  `,
	companyProjectsTitle: css`
    margin: 0 0 20px;
    color: #686868;
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 0.08em;
    font-weight: 650;
  `,
	projectYearGroups: css`
    display: flex;
    flex-direction: column;
  `,
	projectYearGroup: css`
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 14px;
    padding-top: 24px;
    border-top: 1px solid #d9d9d9;

    &:first-child {
      padding-top: 0;
      border-top: 0;
    }

    & + & {
      margin-top: 28px;
    }

    @media (max-width: 540px) {
      grid-template-columns: 36px minmax(0, 1fr);
      gap: 10px;
    }

    @media print {
      padding-top: 18px;

      & + & {
        margin-top: 20px;
      }
    }
  `,
	projectYearGroupPlain: css`
    display: block;
  `,
	projectYearLabel: css`
    margin: 2px 0 0;
    color: #686868;
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    font-weight: 700;
  `,
	projectCompany: css`
    display: grid;
    grid-template-columns: 168px 1fr;
    gap: 24px;
    padding: 16px 0;
    border-top: 1px solid #e5e5e5;

    &:first-of-type {
      border-top: none;
      padding-top: 0;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
	projectCompanyHeader: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
	projectCompanyName: css`
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
  `,
	projectCompanyPeriod: css`
    font-size: 0.85rem;
    color: #777;
    margin: 0;
  `,
	projectList: css`
    display: flex;
    flex-direction: column;
  `,
	projectItem: css`
    break-inside: avoid-page;
    page-break-inside: avoid;

    & + & {
      margin-top: 28px;
      padding-top: 24px;
      border-top: 1px solid #e5e5e5;
    }
  `,
	projectHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    break-after: avoid-page;
    page-break-after: avoid;

    @media (max-width: 540px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }
  `,
	projectTitle: css`
    font-size: 17px;
    line-height: 1.35;
    letter-spacing: -0.025em;
    font-weight: 710;
    margin: 0;
  `,
	projectPeriod: css`
    font-size: 11.5px;
    line-height: 1.5;
    color: #777;
    margin: 0;
    white-space: nowrap;
  `,
	projectMeta: css`
    margin: 6px 0 0;
    font-size: 12px;
    line-height: 1.55;
    color: #6d6d6d;
  `,
	projectDescription: css`
    margin: 0 0 8px;
    color: #333;
  `,
	projectLinks: css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  `,
	projectSection: css`
    margin-top: 20px;
  `,
	projectSectionTitle: css`
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0 0 10px;
  `,
	careerItem: css`
    display: grid;
    grid-template-columns: 168px 1fr;
    gap: 16px;
    align-items: baseline;
    padding: 16px 0;
    border-top: 1px solid #e5e5e5;
    break-inside: avoid-page;
    page-break-inside: avoid;

    &:first-of-type {
      border-top: none;
      padding-top: 0;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
	careerPeriod: css`
    font-size: 0.85rem;
    color: #777;
    margin: 0;
    padding-top: 5px;
    padding-right: 16px;
    border-right: 1px solid #e5e5e5;
    white-space: nowrap;
    line-height: 1.4;

    @media (max-width: 768px) {
      padding-right: 0;
      text-align: left;
      border-right: none;
    }
  `,
	careerInfo: css`
    display: flex;
    flex-direction: column;
    gap: 0px;
    break-inside: avoid-page;
    page-break-inside: avoid;
  `,
	careerName: css`
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.4;
  `,
	careerTitleWrap: css`
    display: inline-flex;
    align-items: baseline;
    gap: 8px;
  `,
	careerTotal: css`
    font-size: 0.85rem;
    font-weight: 400;
    color: #777;
  `,
	global: css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    a {
      color: #2e2e2e;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      color: #222;
    }
  `,
};
