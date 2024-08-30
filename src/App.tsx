import { cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import Divider from "./components/Divider/Divider";
import List from "./components/List/List";
import SubTitle from "./components/SubTitle/SubTitle";
import { styles } from "./style";

export default function Resume() {
  return (
    <div className={cx(styles.container, styles.global)}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.name}>신석진</h1>
            <p className={styles.title}>프론트엔드 개발자</p>
          </div>
          <div className={styles.contact}>
            <strong>Email</strong>
            <a href="mailto:ssj2648597@gmail.com">ssj2648597@gmail.com</a>
            <strong>Github</strong>
            <a href="https://github.com/ssj9685">github.com/ssj9685</a>
            <strong>LinkedIn</strong>
            <a href="https://linkedin.com/in/ssj9685">
              linkedin.com/in/ssj9685
            </a>
          </div>
        </header>
        <Card title="소개">
          <p>
            3년차 프론트엔드 엔지니어로, React와 TypeScript를 사용하여 웹뷰와
            통합하여 개발하는 것에 익숙합니다. <br />
            UI/UX 최적화와 최신 기술 도입에 열정을 가지며, 지속적인 학습을 통해
            역량을 키우고 있습니다. <br />
            협업과 자동화 시스템 구축에 관심이 많아 팀의 생산성을 극대화하는 데
            기여하는 것을 좋아합니다.
          </p>
        </Card>

        <Card title="경력사항">
          <SubTitle text="주식회사 에이피알" />
          <Detail text="프론트엔드 개발자 | 2018년 6월 - 현재" />
          <List
            contents={[
              "React와 Redux를 사용하여 주요 웹 애플리케이션 개발 및 유지보수",
              "Next.js 기반의 SSR(서버 사이드 렌더링) 웹앱 구축",
              "GitHub Actions를 활용한 CI/CD 파이프라인 구축으로 배포 자동화",
              "Emotion을 사용한 스타일링 최적화, 재사용 가능한 컴포넌트 설계",
              "REST API와 GraphQL로 백엔드 통신 처리",
              "기술 부채 청산 프로젝트 주도 및 비효율적인 코드 개선",
              "새로운 프론트엔드 기술 도입을 위한 세미나 및 워크샵 주최",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="XYZ 주식회사" />
          <Detail text="프론트엔드 개발자 | 2018년 6월 - 현재" />
          <List
            contents={[
              "React와 Redux를 사용하여 주요 웹 애플리케이션 개발 및 유지보수",
              "Next.js 기반의 SSR(서버 사이드 렌더링) 웹앱 구축",
              "GitHub Actions를 활용한 CI/CD 파이프라인 구축으로 배포 자동화",
              "Emotion을 사용한 스타일링 최적화, 재사용 가능한 컴포넌트 설계",
              "REST API와 GraphQL로 백엔드 통신 처리",
              "기술 부채 청산 프로젝트 주도 및 비효율적인 코드 개선",
              "새로운 프론트엔드 기술 도입을 위한 세미나 및 워크샵 주최",
            ]}
          />
        </Card>

        <Card title="프로젝트">
          <SubTitle text="개인 포트폴리오 웹사이트" />
          <Detail text="기술 스택 | Next.js, Tailwind CSS, strapi" />
          <List
            contents={[
              "Next.js와 Tailwind CSS를 사용하여 반응형 개인 포트폴리오 웹사이트 구축",
              "Strapi를 통해 콘텐츠 관리 시스템(CMS) 구축, 블로그 기능 추가",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="e-Commerce 플랫폼" />
          <Detail text="기술 스택 | React, Redux, TypeScript" />
          <List
            contents={[
              "React와 Redux를 사용하여 고성능의 e-Commerce 플랫폼 개발",
              "CI/CD 도구로 GitHub Actions 사용, 배포 자동화",
              "사용자 경험을 최적화하기 위해 코드 스플리팅 및 Lazy Loading적용",
            ]}
          />
        </Card>

        <Card title="활동">
          <SubTitle text="우당탕탕 도서관" />
          <Detail text="커뮤니티 | 2024년 2월-6월" />
          <List
            contents={[
              "블로그 주 1회 운영",
              "커뮤니티 리딩",
              "내부 컨퍼런스 개최 및 발표",
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
