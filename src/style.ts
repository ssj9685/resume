import { css } from "@emotion/css";

export const styles = {
  container: css`
    margin: 0 auto;
    padding: 2rem;
    font-family: "Inter", sans-serif;
    color: #333;
    line-height: 1.6;
    width: 1000px;

    @page {
      size: A4;
    }
  `,
  header: css`
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  contact: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
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
};
