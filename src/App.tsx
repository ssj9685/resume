import { css, cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import Divider from "./components/Divider/Divider";
import List from "./components/List/List";
import SubTitle from "./components/SubTitle/SubTitle";
import { styles } from "./style";
import Link from "./components/Link/Link";
import Flex from "./components/Flex/Flex";
import Gap from "./components/Spacing/Spacing";

export default function Resume() {
  return (
    <div className={cx(styles.container, styles.global)}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <div
              className={css`
                display: flex;
                flex-wrap: wrap;
                place-items: end;
                gap: 24px;
              `}
            >
              <div>
                <h1 className={styles.name}>신석진</h1>
                <p className={styles.title}>프론트엔드 개발자</p>
              </div>
            </div>
          </div>
        </header>
        <Card title="">
          <p>
            안녕하세요.
            <br />
            경험과 소통을 중요시하는 개발자 신석진입니다.
            <br />
            <br />
            서비스를 만들고 직접 사용하는 것을 즐기며, 사용자와 개발자의 경험을
            개선하기 위해 기획, 디자인, 백엔드 동료들과 소통하며 문제 상황을
            해결하는 것을 즐깁니다.
            <br />
            <br />
            여러 프로젝트를 진행하며 웹앱에서 발생하는 네트워크와 메모리 관련
            이슈를 해결하여 사용 경험을 개선하고 아키텍쳐와 리팩토링 그리고
            테스트에 관해 고민하고 코드리뷰를 통해 동료들과 개발 경험을 개선
            해나가고 있습니다.
          </p>
        </Card>

        <Card title="경력사항">
          <SubTitle text="주식회사 에이피알" />
          <Detail text="프론트엔드 개발자 | 2023년 6월 - 현재" />
          <List
            contents={[
              "웹뷰 내의 게임 전체 프로젝트 설계 및 개발",
              "다국가 웹뷰 서비스 개발 및 서비스 운영을 위한 관리자 페이지 개발",
              "프론트엔드 CI/CD 프로세스 개선 및 유지보수",
              "테스트 코드 작성 및 레거시 코드 리팩토링",
              "사내 프론트엔드 개발자 스터디 리딩",
              "2024년 상반기 우수사원 수상",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="(주)에바(EVAR)" />
          <Detail text="프론트엔드 개발자 | 2022년 1월 - 2023년 6월" />
          <List
            contents={[
              "다국가 충전기 위치 및 상태 관리를 위한 관리자 페이지 및 충전기 설정 앱 개발",
              "관리자 페이지 Javascript + Vue2 환경에서 -> Typescript + Next.js로 마이그레이션",
              "앱/웹 Github actions/ Fastlane  CI/CD 환경 구축",
            ]}
          />
        </Card>

        <Card title="프로젝트">
          <SubTitle text="에이지알 프렌즈 & 코끼리 게임 개발" />
          <Detail text="2024년 01월 - 현재" />
          <Detail text="에이피알 | 웹뷰 기반의 앱테크 게임 서비스" />
          <Detail text="기술 스택 | React.js, Flutter, Emotion, Valtio, Typescript, i18next, Matter.js, Jenkins, CloudFront, S3, Sentry" />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          앱테크와 게임의 재미 요소를 기반으로 기존 사용자의 접속시간을
          증대시키고 공유 기능을 통한 신규 이용자 유입을 유도하기 위한 서비스
          <br />
          <Link
            href="https://photos.app.goo.gl/2VTCj1XzuRJKbYtJ9"
            text="동작 영상"
          />
          <Link
            href="https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EC%A7%80%EC%95%8C-%EB%A9%94%EB%94%94%ED%81%90%EB%B8%8C-%EB%94%94%EC%A7%80%ED%84%B8%ED%81%B4%EB%A6%AC%EB%8B%89-age-r/id1610283967"
            text="App Store"
          />
          <Link
            href="https://play.google.com/store/apps/details?id=com.apr.digitalclinic&hl=ko"
            text="Google Play"
          />
          <Gap type="vertical" size={12} />
          [개발]
          <br />
          프론트엔드 아키텍쳐 설계, UI 개발 및 배포까지 서비스 전체를 담당
          <List
            contents={[
              "React.js, Emotion, Typescript를 활용하여 게임 전반 UI 개발",
              "Canvas, Matter.js를 활용한 물리 엔진 적용",
              "Flutter, React.js가 통신하는 javascriptChannel 구조 설계",
              "i18next 활용 다국어 서비스 제공",
              "Jenkins와 CloudFront, S3를 활용하여 CI/CD 구축",
              "Sentry에 사용자 식별값 및 버전별 정보를 추가하고 Replay 기능 도입",
            ]}
          />
          [경험]
          <br />
          신규 프로젝트, 멀티플랫폼에서 얻을 수 있는 경험 및 게임 개발을 하며
          생긴 문제 해결
          <List
            contents={[
              "Canvas에서 발생하는 웹뷰 메모리 누수를 싱글톤 패턴을 도입하여 해결",
              "앱내 캐시 무효화로 인한 javascript 불일치 현상을 CI/CD 단계에서 버전 체크를 통해 해결",
              "구형 아이폰에 Input에 버퍼가 남아있는 문제를 공용 컴포넌트에 focus 전환 로직을 추가하여 해결",
              "앱 개발자와 백엔드 개발자와의 원활한 협업을 위해 Class 기반으로 설계",
            ]}
          />
          [성과]
          <br />
          출시 후 3주 동안 MAU 25%, 월 이용시간 142% 상승
          <Divider type="horizontal" />
          <SubTitle text="메디큐브톡 & 포인트샵 개발" />
          <Detail text="2023년 07월 - 현재" />
          <Detail text="에이피알 | 사용자 간 소통의 장, 활동하면서 얻은 포인트를 쓸 수 있는 서비스" />
          <Detail text="기술 스택 | Next.js, Flutter, styled-components, TanStack Query, Typescript, Jest, Mock Service Worker, Jenkins, Playwright, Sentry ECS" />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          사용자들이 기기 사용 팁이나 고민을 공유하거나 실제 기기 사용 후 변화를
          기록하는 활동을 통해 포인트를 얻을 수 있으며, 이러한 포인트를 사용할
          수 있도록 해서 구매를 유도하는 것이 목적인 서비스
          <br />
          <Link
            href="https://photos.app.goo.gl/WTGVJQXgH31HMBXu9"
            text="동작 영상"
          />
          <Link
            href="https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EC%A7%80%EC%95%8C-%EB%A9%94%EB%94%94%ED%81%90%EB%B8%8C-%EB%94%94%EC%A7%80%ED%84%B8%ED%81%B4%EB%A6%AC%EB%8B%89-age-r/id1610283967"
            text="App Store"
          />
          <Link
            href="https://play.google.com/store/apps/details?id=com.apr.digitalclinic&hl=ko"
            text="Google Play"
          />
          <Gap type="vertical" size={16} />
          [개발]
          <br />
          SSR을 통한 유저 경험 개선과 다국가 서비스 개발 및 유닛/e2e 테스트를
          통한 안정적 개발 진행
          <List
            contents={[
              "Next.js, styled-components, Typescript 사용하여 SSR 기반 UI 개발",
              "Tanstack Query의 mutation을 활용한 낙관적 업데이트 적용",
              "Jest 기반 유닛 테스트 작성",
              "Playwright 기반 e2e 테스트 작성",
              "i18next 사용하여 다국어 서비스 제공",
              "쿠키를 활용한 전역 상태 관리 및 공용 getServersideProps 적용",
            ]}
          />
          [경험]
          <br />
          다국가 서비스에서의 사용자 경험과 개발자 경험을 개선
          <List
            contents={[
              "Next.js 이미지 최적화에 메모리 누수가 발생, 이를 lambda@edge를 활용한 이미지 리사이징을 적용하여 해결",
              "Mock service worker를 도입하여 테스트 코드에서 모킹 코드를 제거하여 개발 경험을 개선",
              "앱 상태 바 높이의 레이아웃 시프트와 번역 FOUC를 쿠키를 활용한 SSR 및 i18next를 적용하여 개선",
              "테스트 코드에 다국어 관련 언어 중복을 i18n 키 값을 활용한 유틸을 제작하여 개선",
              "백화현상이 발생했을 때 Flutter에서 WebResource 에러로 인지하여 재실행하도록 하여 사용자 경험 개선",
            ]}
          />
          [성과]
          <br />
          ECS 시간당 메모리 평균 2~3% 유지
          <br />
          일별 Cloudfront 전송 비용 400G 감소
          <br />
          일별 주문 수 평균 40건 {"->"} 2157건
          <br />
          일별 게시글 수 평균 993건 {"->"} 12602건
          <Divider type="horizontal" />
          <SubTitle text="앱 관리 페이지 개발" />
          <Detail text="2023년 06월 - 현재" />
          <Detail text="에이피알 | 앱을 사용하는 사용자들 및 이벤트, 앱 기능들을 관리하기 위한 페이지" />
          <Detail text="기술 스택 | React.js, styled-components, TanStack Query, Zustand, Typescript, Vite, Vitest " />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          외부 팀에서 앱에 들어가는 기능들을 관리할 수 있는 페이지. 게시글 및
          이벤트 관리, 상품 관리, 푸시 설정, 포인트 환불 등의 기능을 하며 고객
          응대시 빠르게 대응할 수 있도록 UX를 고려
          <Gap type="vertical" size={16} />
          [개발]
          <br />
          관리자 페이지에 들어가는 기능 전반을 개발하며 사용성과 개발 경험을
          개선
          <List
            contents={[
              "React.js, Typescript, styled-components를 사용하여 UI 개발",
              "Create React App -> Vite 마이그레이션 진행",
              "FFMpeg.wasm을 사용하여 썸네일과 미리보기 영상을 만드는 기능 개발",
              "Drag and Drop 기능을 담은 라이브러리 래핑 컴포넌트 개발",
              "Color picker 라이브러리를 통한 색상 미리보기 기능 개발",
            ]}
          />
          [경험]
          <br />
          코드의 반복이 가져오는 비효율을 깨닫고 리팩토링을 진행
          <List
            contents={[
              "아이콘 리소스를 import 하고 경로를 알기 힘든 문제를 타입스크립트로 관리하도록 리팩토링",
              "토스트에 필요한 상태를 반복해서 쓰던 것을 정해진 타입별로 쓸 수 있게 유틸 함수로 리팩토링",
              "모달을 관리하는 상태가 반복되는 것을 외부에서 사용가능한 훅 형태로 리팩토링",
              "표 생성마다 반복되는 코드들을 훅을 사용하여 리팩토링하여 130->19줄로 단축",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="전기차 충전기 관리자 페이지 개발" />
          <Detail text="2022년 01월 - 2023년 06월" />
          <Detail text="에바 | 충전기의 원격 조작, 설정 및 위치 확인을 위한 페이지" />
          <Detail text="기술 스택 | Next.js, MUI, zustand" />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          한국, 미국, 일본에 있는 전기차 충전기를 관리하기 위한 페이지. 충전기
          전문 교환, 실시간 로그 확인, 원격 충전 시작, 충전기 위치 확인, 고객
          관리, 결제 수단 관리 등의 기능을 제공
          <Gap type="vertical" size={16} />
          [개발]
          <br />
          프론트 개발환경이 잡혀있지 않은 상황에서 기술스택을 전환하고 빠르게
          기능을 개발할 수 있는 환경 구축
          <br />
          <List
            contents={[
              "관리자 페이지 Javascript + Vue2 환경에서 Typescript + Next.js로 마이그레이션",
              "Github Actions 활용 CI/CD 구축",
              "네이버 Map API를 활용하여 충전기 관리 지도 개발",
              "운영/개발 환경 분리",
            ]}
          />
        </Card>

        <Card title="학력">
          <SubTitle text="충북대학교 대학원" />
          <Detail text="2020년 9월 - 2022년 2월" />
          <Detail text="정보통신공학과 | 임베디드 및 응용 SW 분야 연구" />
          <p>
            학석사 연계과정으로 1년 6개월 간 연구를 진행하였으며 Node.js를
            기반으로 통신 프로토콜을 사용하는 것을 연구하였습니다.
          </p>
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
          <Detail text="2015년 3월 - 2020 8월" />
          <Detail text="정보통신공학과 | 2015년 3월 - 2020 8월" />
          <p>
            학석사 연계과정으로 3년 6개월간 재학하였으며 재학중에는 OSI 모델과
            통신 프로토콜 및 웹 프로그래밍에 대하여 학습하였습니다.
          </p>
        </Card>

        <Card title="활동">
          <SubTitle text="@ga-ut/store" />
          <Detail text="오픈소스 | 2024년 11월-12월" />
          <p>리액트에서 사용가능한 전역상태 라이브러리</p>
          <List
            contents={[
              "단순한 문법과 보일러 플레이트 제거로 개발자 경험 개선",
              "타입 안정성 및 자동 랜더링 최적화",
              "여러 상황의 테스트 코드 제공",
              <Link href="https://github.com/ga-ut/store" text="Github 링크" />,
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="우당탕탕 도서관" />
          <Detail text="커뮤니티 | 2024년 2월-6월" />
          <p>
            매주 1회 주제에 관한 글을 올리고 온라인으로 모여서 해당 주제에 관해
            얘기를 나누고 지식을 공유하는 모임
          </p>
          <List
            contents={[
              "블로그 주 1회 운영 및 커뮤니티 리딩",
              "내부 컨퍼런스 개최 및 발표",
              <>
                <Link href="https://uddang-con.vercel.app" text="발표자료" />
                <Link href="https://youtu.be/CJvTIpR1e5Q" text="발표영상" />
              </>,
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="Yatata" />
          <Detail text="프로젝트 | 2021년 4월-9월" />
          <p>외부 라이브러리 없는 자체 구현 Websocket 및 WebRTC 프로젝트</p>
          <List
            contents={[
              "정적 리소스 제공, 로깅, 소켓 관리, Websocket, WebRTC 구현",
              "Custom element 형태로 UI 제공",
              <Link
                href="https://github.com/ssj9685/yatata"
                text="Github 링크"
              />,
            ]}
          />
        </Card>

        <Card title="기술">
          <Gap type="vertical" size={8} />
          <div
            className={css`
              display: grid;
              grid-template-columns: repeat(3, 1fr);

              @media screen and (max-width: 425px) {
                grid-template-columns: repeat(2, 1fr);
              }

              @media screen and (max-width: 375px) {
                display: grid;
                overflow: auto;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr;
              }
            `}
          >
            <Flex direction="column">
              <h6>주요 기술</h6>
              <List contents={["React.js", "Next.js", "Flutter"]} />
            </Flex>
            <Flex direction="column">
              <h6>언어</h6>
              <List contents={["Typescript", "Javascript", "Dart"]} />
            </Flex>
            <Flex direction="column">
              <h6>상태관리</h6>
              <List contents={["TanStack Query", "Valtio", "zustand"]} />
            </Flex>

            <Flex direction="column">
              <h6>인프라</h6>
              <List contents={["CloudFront", "S3", "ECS", "Lambda"]} />
            </Flex>
            <Flex direction="column">
              <h6>테스트</h6>
              <List
                contents={[
                  "Jest",
                  "Playwright",
                  "Mock Service Worker",
                  "React Testing Library",
                ]}
              />
            </Flex>
            <Flex direction="column">
              <h6>CI/CD</h6>
              <List contents={["Jenkins", "Fastlane", "Github actions"]} />
            </Flex>
            <Flex direction="column">
              <h6>스타일</h6>
              <List contents={["emotion", "styled-components"]} />
            </Flex>
            <Flex direction="column">
              <h6>모니터링</h6>
              <List contents={["Sentry"]} />
            </Flex>
          </div>
          <Divider type="horizontal" />
          <Detail text="협업시 활용한 도구들입니다." />
          <List
            contents={[
              "디자인: Figma",
              "소통: Microsoft Teams",
              "일감 관리: Jira, Confluence",
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
