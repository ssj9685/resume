import { css, cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import Divider from "./components/Divider/Divider";
import List from "./components/List/List";
import SubTitle from "./components/SubTitle/SubTitle";
import { styles } from "./style";
import Link from "./components/Link/Link";

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
            <Link
              href="mailto:ssj2648597@gmail.com"
              text="ssj2648597@gmail.com"
            />
            <strong>Github</strong>
            <Link href="https://github.com/ssj9685" text="github.com/ssj9685" />
            <strong>LinkedIn</strong>
            <Link
              href="https://linkedin.com/in/ssj9685"
              text="linkedin.com/in/ssj9685"
            />
            <strong>Blog</strong>
            <Link href="https://velog.io/@ssj9685" text="velog.io/@ssj9685" />
          </div>
        </header>
        <Card title="소개">
          <p>
            3년차 프론트엔드 엔지니어로, React와 TypeScript를 주로 사용합니다.
            <br />
            UI/UX 최적화와 최신 기술 도입에 열정을 가지며, 지속적인 학습을 통해
            역량을 키우고 있습니다. <br />
            자동화나 리팩토링 등의 팀의 생산성을 올릴 수 있는 방안을 찾고
            적용하는 것을 좋아합니다. <br /> 크로스 플랫폼 및 웹뷰와 통합하여
            개발하는 것에 익숙합니다.
          </p>
        </Card>

        <Card title="경력사항">
          <SubTitle text="주식회사 에이피알" />
          <Detail text="프론트엔드 개발자 | 2023년 6월 - 현재" />
          <List
            contents={[
              "앱테크 게임 전체 프로젝트 설계 및 개발",
              "웹뷰 내 서비스 개발",
              "CI/CD 프로세스 개선",
              "개발자 경험 개선을 위한 리팩토링 및 유틸 개발",
              "레거시 코드 개선 및 아키텍처 개선",
              "2024년 상반기 우수사원 수상",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="(주)에바(EVAR)" />
          <Detail text="프론트엔드 개발자 | 2022년 1월 - 2023년 6월" />
          <List
            contents={[
              "전기차 충전기 연동 앱 설계, 개발 및 운영",
              "관리자 용 충전기 설정 앱 개발",
              "기존 관리자 페이지 Vue.js -> Next.js로 마이그레이션",
              "앱/웹 CI/CD 환경 구축",
            ]}
          />
        </Card>

        <Card title="프로젝트">
          <SubTitle text="에이지알 프렌즈 & 코끼리 게임 개발" />
          <Detail text="에이피알 | 앱 내 웹뷰 기반의 앱테크 게임 서비스" />
          <Detail text="기술 스택 | React.js, Emotion, Valtio" />
          <List
            contents={[
              "출시 3주 후 MAU 25%, 월 이용시간 142% 상승",
              "GC 처리 방식차이에 의한 메모리 누수 디버깅 및 해결",
              "웹뷰 및 CDN 캐시 오류를 해결하기 위한 CI/CD 구축",
              "CSS와 엘리먼트 동작 호환 문제 해결",
              "다국가 사용자 대응 및 어뷰징 방지를 위한 서버 사용시간 동기 처리",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="앱 내부 커뮤니티 및 포인트 샵 개발 " />
          <Detail text="에이피알 | 사용자 간 소통의 장, 활동하면서 얻은 포인트를 쓸 수 있는 서비스" />
          <Detail text="기술 스택 | Next.js, styled-components, TanStack Query" />
          <List
            contents={[
              "백화 현상 방지 로직 추가 및 재실행 로직 개발",
              "유저 경험 개선을 위한 낙관적 업데이트 사용 도입",
              "쿠키 활용 서버 측 i18n 적용",
              "기존 코드 유지보수 및 리팩토링",
              "테스트 코드 유지보수 및 테스트 편의성 함수 개발",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="앱 관리 페이지 개발" />
          <Detail text="에이피알 | 앱을 사용하는 사용자들 및 이벤트, 앱 기능들을 관리하기 위한 페이지" />
          <Detail text="기술 스택 | React.js, styled-components, TanStack Query" />
          <List
            contents={[
              "표 생성마다 써야하는 코드를 130->19줄로 단축하도록 리팩토링 진행",
              "모달, 토스트 생성할 때마다 불필요한 코드가 생기지 않도록 유틸 개발",
              "유지보수 되지 않는 CRA에서 Vite로 마이그레이션",
            ]}
          />
          <Divider
            type="horizontal"
            className={css`
              page-break-after: always;
            `}
          />
          <SubTitle text="전기차 충전기 연동 앱 개발 및 운영" />
          <Detail text="에바 | 충전기 정보 확인 및 원격 충전 시작이 가능한 앱" />
          <Detail text="기술 스택 | Flutter, GetX" />
          <List
            contents={[
              "앱이 없던 환경에서 AOS, iOS, Web 3개의 플랫폼에 출시 및 유지보수",
              "서브모듈 활용 Core 로직 분리 후 UI 커스텀 기능 타사에 제공",
              "Flutter Web을 지원하지 않던 결제모듈 사용을 위한 유틸 개발",
              "Fastlane을 활용한 앱 CI/CD 구축",
              "미국/일본 사용자 대응 i18n 적용",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="전기차 충전기 관리자 페이지 개편" />
          <Detail text="에바 | 충전기의 원격 조작, 설정 및 위치 확인을 위한 페이지" />
          <Detail text="기술 스택 | Next.js, MUI" />
          <List
            contents={[
              "기존 레거시 Vue.js 2를 Next.js로 마이그레이션",
              "운영/개발 환경 분리 및 CI/CD 적용",
              "충전기 관리 지도 개발",
              "미국/일본 관리자 대응 i18n 적용",
            ]}
          />
        </Card>

        <Card title="학력">
          <SubTitle text="충북대학교 대학원" />
          <Detail text="정보통신공학과" />
          <List
            contents={[
              <Link
                href="https://drive.google.com/file/d/1uDgw4A-2gSQuC6U2OzgKC_MPuYjPwOLY/view?usp=sharing"
                text="WebRTC 관련 연구"
              />,
              <Link
                href="https://www.youtube.com/watch?v=h49x2A9Vjbs"
                text="MQTT KAFKA 관련 연구"
              />,
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="충북대학교" />

          <Detail text="정보통신공학과 | 임베디드 및 응용 SW 분야 연구" />
        </Card>

        <Card title="활동">
          <SubTitle text="우당탕탕 도서관" />
          <Detail text="커뮤니티 | 2024년 2월-6월" />
          <List
            contents={[
              "블로그 주 1회 운영",
              "커뮤니티 리딩",
              <>
                내부 컨퍼런스 개최 및 발표(
                <a href="https://uddang-con.vercel.app" target="_blank">
                  발표자료
                </a>
                )
              </>,
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
