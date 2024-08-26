import { css } from "@emotion/css";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
} from "lucide-react";

export default function ImprovedResume() {
  const styles = {
    container: css`
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
      font-family: "Inter", sans-serif;
      color: #333;
      background-color: #f8f9fa;
      line-height: 1.6;
    `,
    header: css`
      background: linear-gradient(135deg, #3a7bd5, #00d2ff);
      color: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    headerLeft: css`
      flex: 2;
    `,
    headerRight: css`
      flex: 1;
      text-align: right;
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
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      svg {
        margin-right: 0.5rem;
      }
    `,
    main: css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,
    section: css`
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      margin-bottom: 1.5rem;
    `,
    sectionTitle: css`
      font-size: 1.25rem;
      font-weight: 600;
      color: #3a7bd5;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
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
      color: #7f8c8d;
      margin-bottom: 0.75rem;
    `,
    list: css`
      padding-left: 1.25rem;
      margin: 0.75rem 0;
      li {
        margin-bottom: 0.5rem;
      }
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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>김철수</h1>
        <p className={styles.title}>Frontend Developer</p>
      </header>

      <div className={styles.skillGrid}>
        <aside>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Mail /> 연락처
            </h2>
            <div className={styles.contactItem}>
              <Mail /> cheolsoo.kim@example.com
            </div>
            <div className={styles.contactItem}>
              <Phone /> 010-1234-5678
            </div>
            <div className={styles.contactItem}>
              <Linkedin /> linkedin.com/in/cheolsoo-kim
            </div>
            <div className={styles.contactItem}>
              <Github /> github.com/cheolsoo-kim
            </div>
            <div className={styles.contactItem}>
              <Globe /> www.cheolsoo-kim-portfolio.com
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>주요 기술 스택</h2>
            <div>
              <h3 className={styles.skillCategory}>언어</h3>
              <ul className={styles.skillList}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>프레임워크</h3>
              <ul className={styles.skillList}>
                <li>React</li>
                <li>Next.js</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>라이브러리</h3>
              <ul className={styles.skillList}>
                <li>Redux</li>
                <li>React-Query</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>스타일링</h3>
              <ul className={styles.skillList}>
                <li>Emotion</li>
                <li>Styled-Components</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>도구</h3>
              <ul className={styles.skillList}>
                <li>Git</li>
                <li>Yarn Berry</li>
                <li>Webpack</li>
                <li>ESBuild</li>
                <li>Babel</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>테스팅 & CI/CD</h3>
              <ul className={styles.skillList}>
                <li>Jest</li>
                <li>Cypress</li>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>소프트 스킬</h2>
            <ul className={styles.list}>
              <li>팀 협업 능력 탁월</li>
              <li>문제 해결 능력</li>
              <li>세부 사항에 대한 주의</li>
              <li>효율적인 커뮤니케이션</li>
            </ul>
          </section>
        </aside>

        <main>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>전문 요약</h2>
            <p>
              5년 경력의 프론트엔드 엔지니어로, React와 TypeScript를 사용한
              SPA(Single Page Application) 개발에 능숙합니다. UI/UX 최적화와
              최신 기술 도입에 열정을 가지며, 지속적인 학습을 통해 역량을 키우고
              있습니다. 협업과 자동화 시스템 구축에 관심이 많아 팀의 생산성을
              극대화하는 데 기여합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Briefcase /> 경력사항
            </h2>
            <div>
              <h3 className={styles.experienceTitle}>프론트엔드 엔지니어</h3>
              <p className={styles.experienceDetails}>
                XYZ 주식회사 | 서울 | 2018년 6월 – 현재
              </p>
              <ul className={styles.list}>
                <li>
                  React와 Redux를 사용하여 주요 웹 애플리케이션 개발 및 유지보수
                </li>
                <li>Next.js 기반의 SSR(서버 사이드 렌더링) 웹앱 구축</li>
                <li>
                  GitHub Actions를 활용한 CI/CD 파이프라인 구축으로 배포 자동화
                </li>
                <li>
                  Emotion을 사용한 스타일링 최적화, 재사용 가능한 컴포넌트 설계
                </li>
                <li>REST API와 GraphQL로 백엔드 통신 처리</li>
                <li>기술 부채 청산 프로젝트 주도 및 비효율적인 코드 개선</li>
                <li>
                  새로운 프론트엔드 기술 도입을 위한 세미나 및 워크샵 주최
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>프로젝트</h2>
            <div>
              <h3 className={styles.experienceTitle}>
                개인 포트폴리오 웹사이트
              </h3>
              <p className={styles.experienceDetails}>
                기술 스택: Next.js, Tailwind CSS, Strapi
              </p>
              <ul className={styles.list}>
                <li>
                  Next.js와 Tailwind CSS를 사용하여 반응형 개인 포트폴리오
                  웹사이트 구축
                </li>
                <li>
                  Strapi를 통해 콘텐츠 관리 시스템(CMS) 구축, 블로그 기능 추가
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.experienceTitle}>e-Commerce 플랫폼</h3>
              <p className={styles.experienceDetails}>
                기술 스택: React, Redux, TypeScript
              </p>
              <ul className={styles.list}>
                <li>
                  React와 Redux를 사용하여 고성능의 e-Commerce 플랫폼 개발
                </li>
                <li>CI/CD 도구로 GitHub Actions 사용, 배포 자동화</li>
                <li>
                  사용자 경험을 최적화하기 위해 코드 스플리팅 및 Lazy Loading
                  적용
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <GraduationCap /> 학력사항
            </h2>
            <h3 className={styles.experienceTitle}>컴퓨터공학 학사</h3>
            <p className={styles.experienceDetails}>
              서울대학교 | 2013년 3월 – 2017년 2월
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Award /> 자격증 및 교육
            </h2>
            <ul className={styles.list}>
              <li>JavaScript 개발자 자격증 - W3Schools, 2018</li>
              <li>고급 React와 Redux 코스 - Udemy, 2019</li>
              <li>TypeScript 완전 정복 - Inflearn, 2020</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Heart /> 봉사활동 및 추가 활동
            </h2>
            <p>
              비영리 단체 XYZ의 자원봉사 개발자 - React와 Node.js 사용하여 웹
              애플리케이션 개발, 주간 코드 리뷰 및 기술 워크샵 진행
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>수상 경력</h2>
            <p>2020년 XYZ 주식회사의 올해의 프론트엔드 개발자 수상</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>지원 동기 및 목표</h2>
            <p>
              토스뱅크의 자율적이고 협업 중심의 환경에서 다양한 웹 서비스 개발에
              참여하고, 최신 프론트엔드 기술을 도입하며 성장하고 싶습니다. UI/UX
              최적화를 통해 사용자 경험을 극대화하고, 팀의 생산성을 높이는
              자동화 도구 개발에 기여하고 싶습니다.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
