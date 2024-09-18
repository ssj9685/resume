import { css } from "@emotion/css";

export const styles = {
  container: css`
    width: 100%;
    display: flex;
    place-content: center;
    font-family: Pretendard, Inter;
  `,
  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #333;
    line-height: 1.6;
    max-width: 21cm;

    @media print {
      & {
        width: 210mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        font-size: 12pt;
      }
    }
  `,
  header: css`
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  `,
  profile: css`
    display: flex;
  `,
  contact: css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
  `,
  name: css`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  `,
  title: css`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0.5rem 0 0;
    opacity: 0.9;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `,
  skillCategory: css`
    font-weight: 600;
    color: #3a7bd5;
    margin-bottom: 0.5rem;
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
  global: css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    a {
      color: black;
    }

    a:visited {
      color: black;
    }

    body,
    html {
      height: 100%;
      scroll-behavior: smooth;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      font-weight: bold;
      color: #222;
    }

    h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 1.3;
      margin-bottom: 0.8rem;
      font-weight: 700;
    }

    h3 {
      font-size: 2rem;
      line-height: 1.4;
      margin-bottom: 0.6rem;
      font-weight: 600;
    }

    h4 {
      font-size: 1.75rem;
      line-height: 1.5;
      margin-bottom: 0.4rem;
      font-weight: 500;
    }

    h5 {
      font-size: 1.5rem;
      line-height: 1.6;
      margin-bottom: 0.2rem;
      font-weight: 400;
    }

    h6 {
      font-size: 1.25rem;
      line-height: 1.7;
      margin-bottom: 0.1rem;
      font-weight: 300;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-transform: capitalize;
      letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.75rem;
      }

      h4 {
        font-size: 1.5rem;
      }

      h5 {
        font-size: 1.25rem;
      }

      h6 {
        font-size: 1rem;
      }
    }

    @font-face {
      font-family: "Pretendard";
      src: url("/resume/Pretendard.woff") format("woff");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
  `,
};
