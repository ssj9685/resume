import { css, cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import Divider from "./components/Divider/Divider";
import List from "./components/List/List";
import SubTitle from "./components/SubTitle/SubTitle";
import { styles } from "./style";
import Link from "./components/Link/Link";
import Flex from "./components/Flex/Flex";
import Gap from "./components/Gap/Gap";

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
              <img
                id="profile-popover"
                // @ts-ignore
                popover={"auto"}
                src="/resume/profile.jpg"
                width={"90%"}
                height={"95%"}
                className={css`
                  object-fit: cover;
                  cursor: pointer;
                `}
                onClick={(e) => e.currentTarget.hidePopover()}
              />
              <button
                className={css`
                  border: none;
                  outline: none;
                  background: none;
                  cursor: pointer;
                `}
                //@ts-ignore
                popoverTarget={"profile-popover"}
              >
                <img
                  alt="프로필사진"
                  src="/resume/profile2.jpg"
                  width={140}
                  height={140}
                  className={css`
                    object-fit: cover;
                    border-radius: 50% 50% 0 50%;
                    margin-left: -28px;
                  `}
                />
              </button>

              <div>
                <h1 className={styles.name}>신석진</h1>
                <p className={styles.title}>프론트엔드 개발자</p>
              </div>
            </div>
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
        <Card title="">
          <p>
            안녕하세요. 경험을 중요시하는 3년차 프론트엔드 엔지니어
            신석진입니다.
            <br />
            <br />
            서비스를 만들고 직접 사용하는 것을 즐기며, 사용자와 개발자 모두의
            경험을 개선하기 위해 동료와 소통하며 문제 상황을 해결하는 것을
            즐깁니다.
            <br />
            <br />
            여러 프로젝트를 진행하며 웹앱에서 발생하는 메모리 관련 이슈를
            해결하여 사용 경험을 개선하고 다국가 서비스에서 i18next를 사용한
            번역 리소스의 관리나 테스트에 관해 고민하여 동료들의 개발 경험을
            개선했습니다.
          </p>
        </Card>

        <Card title="기술">
          <Detail text="실무에서 사용한 기술입니다." />
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
              <SubTitle text="주요 기술" />
              <List contents={["React.js", "Next.js", "Flutter"]} />
            </Flex>
            <Flex direction="column">
              <SubTitle text="스타일" />
              <List contents={["emotion", "styled-components", "MUI"]} />
            </Flex>
            <Flex direction="column">
              <SubTitle text="언어" />
              <List contents={["Typescript", "Javascript", "Dart"]} />
            </Flex>
            <Flex direction="column">
              <SubTitle text="상태관리" />
              <List
                contents={["TanStack Query", "Valtio", "useSyncExternalStore"]}
              />
            </Flex>
            <Flex direction="column">
              <SubTitle text="테스트" />
              <List
                contents={[
                  "Jest",
                  "Mock Service Worker",
                  "React Testing Library",
                ]}
              />
            </Flex>
            <Flex direction="column">
              <SubTitle text="CI/CD" />
              <List contents={["Jenkins", "Fastlane", "Github actions"]} />
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

        <Card title="경력사항">
          <SubTitle text="주식회사 에이피알" />
          <Detail text="프론트엔드 개발자 | 2023년 6월 - 현재" />
          <List
            contents={[
              "웹뷰 내의 게임 전체 프로젝트 설계 및 개발",
              "다국가 웹뷰 서비스 개발 및 서비스 운영을 위한 관리자 페이지 개발",
              "Jenkins CI/CD 프로세스 개선 및 유지보수",
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
              "전기차 충전기 연동 앱 설계, 개발, 운영 및 타사에 제공할 수 있는 커스텀 기능 개발",
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
            href="https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EC%A7%80%EC%95%8C-%EB%A9%94%EB%94%94%ED%81%90%EB%B8%8C-%EB%94%94%EC%A7%80%ED%84%B8%ED%81%B4%EB%A6%AC%EB%8B%89-age-r/id1610283967"
            text="App Store"
          />
          &nbsp;/&nbsp;
          <Link
            href="https://play.google.com/store/apps/details?id=com.apr.digitalclinic&hl=ko"
            text="Google Play"
          />
          <br />
          <Link
            href="https://photos.app.goo.gl/2VTCj1XzuRJKbYtJ9"
            text="영상링크"
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
          <Detail text="2023년 07월 - 2024년 01월" />
          <Detail text="에이피알 | 사용자 간 소통의 장, 활동하면서 얻은 포인트를 쓸 수 있는 서비스" />
          <Detail text="기술 스택 | Next.js, Flutter, styled-components, TanStack Query, Typescript, Jest, Mock Service Worker, Jenkins, ECS" />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          사용자들이 기기 사용 팁이나 고민을 공유하거나 실제 기기 사용 후 변화를
          기록하는 활동을 통해 포인트를 얻을 수 있으며, 이러한 포인트를 사용할
          수 있도록 해서 구매를 유도하는 것이 목적인 서비스
          <br />
          <Link
            href="https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EC%A7%80%EC%95%8C-%EB%A9%94%EB%94%94%ED%81%90%EB%B8%8C-%EB%94%94%EC%A7%80%ED%84%B8%ED%81%B4%EB%A6%AC%EB%8B%89-age-r/id1610283967"
            text="App Store"
          />
          &nbsp;/&nbsp;
          <Link
            href="https://play.google.com/store/apps/details?id=com.apr.digitalclinic&hl=ko"
            text="Google Play"
          />
          <br />
          <Link
            href="https://photos.app.goo.gl/WTGVJQXgH31HMBXu9"
            text="영상링크"
          />
          <Gap type="vertical" size={16} />
          [개발]
          <br />
          다국가 서비스 개발 및 유닛 테스트를 통한 안정적 개발 진행
          <List
            contents={[
              "Next.js, styled-components, Typescript 사용하여 SSR 기반 UI 개발",
              "Jest 기반 유닛 테스트 작성",
              "i18next 사용하여 다국어 서비스 제공",
              "Tanstack Query의 mutation을 활용한 낙관적 업데이트 적용",
            ]}
          />
          [경험]
          <br />
          다국가 서비스에서의 사용자 경험과 개발자 경험을 개선
          <List
            contents={[
              "Mock service worker를 도입하여 테스트 코드에서 모킹 코드를 제거하여 개발 경험을 개선",
              "사용자 페이지 번역시 깜빡이는 현상을 쿠키를 활용한 서버 측 i18n을 적용하여 개선",
              "테스트 코드에 다국어 관련 언어 중복을 i18n 키 값을 활용한 유틸을 제작하여 개선",
              "백화 현상을 프론트에서 메모리를 관리하고 Flutter에서 WebResource 에러시 재실행하도록 하여 사용자 경험 개선",
            ]}
          />
          [성과]
          <br />
          일별 게시글 수 993건 {"->"} 12602건
          <br />
          일별 주문 수 40건 {"->"} 2157건
          <Divider type="horizontal" />
          <SubTitle text="앱 관리 페이지 개발" />
          <Detail text="2023년 06월 - 현재" />
          <Detail text="에이피알 | 앱을 사용하는 사용자들 및 이벤트, 앱 기능들을 관리하기 위한 페이지" />
          <Detail text="기술 스택 | React.js, styled-components, TanStack Query, useSyncExternalStore, Typescript, Vite, Vitest " />
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
              "모달을 관리하는 상태가 반복되는 것을 useSyncExternalStore 기반의 훅으로 리팩토링",
              "표 생성마다 반복되는 코드들을 훅을 사용하여 리팩토링하여 130->19줄로 단축",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="EVpay 개발 및 운영" />
          <Detail text="2022년 01월 - 2023년 06월" />
          <Detail text="에바 | 충전기 정보 확인 및 원격 충전 시작이 가능한 앱" />
          <Detail text="기술 스택 | Flutter, GetX, Freezed, Dio, Firebase Cloud Message, Fastlane" />
          <Gap type="vertical" size={16} />
          [설명]
          <br />
          전기차 충전기를 사용할 때 QR 코드를 인식해서 충전을 시작할 수 있는 앱.
          SMS를 이용해 로그인을 진행하며 본인 카드 및 환경부 카드를 등록하여
          충전기를 사용하고 결제 가능
          <br />
          <Link
            href="https://apps.apple.com/kr/app/evpay/id1619603697"
            text="App Store"
          />
          &nbsp;/&nbsp;
          <Link
            href="https://play.google.com/store/apps/details?id=kr.co.evar.evpay"
            text="Google Play"
          />
          &nbsp;/&nbsp;
          <Link href="https://evpay.co.kr" text="Web" />
          <br />
          <Link
            href="https://photos.app.goo.gl/juz6ju37W3wmeurc7"
            text="영상링크"
          />
          <Gap type="vertical" size={16} />
          [개발]
          <br />
          앱 개발 인원이 한명인 상황에 맞는 Flutter를 기술스택으로 선정, 모든 UI
          및 기능을 구현
          <List
            contents={[
              "Flutter를 사용하여 AOS, iOS, Web 3개의 플랫폼에 개발을 진행 후 배포 및 운영",
              "카메라로 QR 코드를 스캔하여 충전을 시작하는 기능 개발",
              "휴대폰 기반 로그인/회원가입 및 자동로그인 개발",
              "결제 카드 등록 및 결제 연동",
              "FCM 기반 실시간 상태 업데이트",
              "Fastlane을 활용한 앱 출시 CI/CD 구축",
              "서브모듈 활용 주요 로직 분리 후 UI 커스텀 하여 타사에 제공",
            ]}
          />
          [경험]
          <br />
          크로스플랫폼 및 Flutter 라이브러리 지원에서 발생하는 문제 해결
          <List
            contents={[
              "웹에서 지원하지 않는 라이브러리를 사용 가능하도록 javascript interoperability를 사용하여 인터페이스를 설계",
              "Flutter CameraX에서 지원하지 않는 터치하여 초점을 맞추는 기능을 Swift, Kotlin 네이티브 언어로 구현",
            ]}
          />
          [성과]
          <br />앱 출시 후 사용자 수 0 {"->"} 1000명으로 증가
          <Divider type="horizontal" />
          <SubTitle text="전기차 충전기 관리자 페이지 개발" />
          <Detail text="2022년 01월 - 2023년 06월" />
          <Detail text="에바 | 충전기의 원격 조작, 설정 및 위치 확인을 위한 페이지" />
          <Detail text="기술 스택 | Next.js, MUI, Jotai" />
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
              "관리자 페이지 Javascript + Vue2 환경에서 -> Typescript + Next.js로 마이그레이션",
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
          <SubTitle text="우당탕탕 도서관" />
          <Detail text="커뮤니티 | 2024년 2월-6월" />
          <p>
            매주 1회 주제에 관한 글을 올리고 온라인으로 모여서 해당 주제에 관해
            얘기를 나누고 지식을 공유하는 모임
          </p>
          <List
            contents={[
              "블로그 주 1회 운영 및 커뮤니티 리딩",
              <>
                내부 컨퍼런스 개최 및 발표(
                <Link href="https://uddang-con.vercel.app" text="발표자료" />
                &nbsp;/&nbsp;
                <Link href="https://uddang-con.vercel.app" text="발표영상" />)
              </>,
            ]}
          />
        </Card>

        <Card title="자기소개">
          <p>
            글을 끝까지 읽어주셔서 감사합니다. 저에 대해서 궁금하실 것 같은
            사항들을 좀 더 자세히 적어보겠습니다.
            <br />
            <br />
            <strong>
              <i>경험을 중요시합니다.</i>
            </strong>
            <br />
            제품을 사용하는 사용자의 경험도 중요하지만 제품을 만드는 개발자의
            경험도 중요하다고 생각합니다. 때문에 사용자에게 즉각적인 UI 피드백을
            주는 것을 중요하게 생각하며 개발을 진행합니다. 이러한 기다림 없는
            경험으로 고객이 제품을 한번 더 찾는다고 생각합니다. 또한 제가 작성한
            코드를 다른 개발자가 사용할 때 바로 이해가 되고 직관적이어야 한다고
            생각하며 자동완성 되는 것에 집착합니다. 이로하여 개발자가 개발에 좀
            더 집중할 수 환경이 될 것이라고 믿습니다.
            <br />
            <br />
            <strong>
              <i>문제 해결에 초점을 맞춥니다.</i>
            </strong>
            <br />
            개발에서 끝나는 것이 아닌 어떤 것을 이룰 수 있고 해결할 수 있는지에
            집중합니다. 이를 달성하기 위해 개발 외의 조직과의 소통도 활발하게
            하며 아이디어를 주고 받고 문제 상황을 사전에 방지합니다. 또한 개발이
            완벽하지 않다는 사실을 잘 알고 있습니다. 개발에서 버그가 발생했을
            때에 빠르게 대응할 수 있는 환경과 행동이 중요하다고 생각해서 CI/CD와
            이슈 트레킹에 힘을 쏟고 있습니다.
            <br />
            <br />
            <strong>
              <i>새로운 기술 트렌드에 흥미가 높습니다.</i>
            </strong>
            <br />
            새로운 기술에 관심이 있어서 직접 사용해보는 것을 좋아합니다.
            간단하게 사용하고 있는 도구들도 기초부터 혹은 직접 만들어가면서 왜
            필요한지에 대해 조금 더 생각해봅니다. README를 찬찬히 읽어보면서
            그들의 철학을 들여다보기도 해서 웹사이트나 README에 관해 의견을 주고
            직접 안되는 부분을 이슈를 올리곤합니다.
          </p>
        </Card>
      </div>
    </div>
  );
}
