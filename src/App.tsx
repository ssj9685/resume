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
            안녕하세요. 경험을 중요시하는 3년차 프론트엔드 엔지니어
            신석진입니다.
            <br />
            서비스를 만들고 직접 사용하는 것을 즐기며, 동시에 제품을 직접 만드는
            입장에서 사용할 때의 경험뿐만 아니라 만들 때의 경험도 중요하게
            생각합니다. 사용자와 개발자 모두의 경험을 개선하기 위해 디자이너와
            아이디어를 공유하고 동료와 소통하며 문제 상황을 해결하는 것을
            즐깁니다.
            <br />
            <br />
            크로스플랫폼 앱을 만들고 그 안에 웹뷰를 개발하는 프로젝트를
            진행해왔으며, 서로 다른 OS와 기기의 성능으로 인해 발생하는 여러
            문제들을 해결하는 것에 익숙합니다. 다양한 국가로 서비스를 제공하면서
            번역 리소스의 관리나 개발 효율성에 관해 고민하여 개선하고 동료들에게
            전파한 경험이 있습니다.
            <br />
            <br />
            새로운 기술에 관심이 많아서 직접 사용해보고 여러 가지 실험을
            해보기도 합니다. 최근에는 Node.js 없이 Bun만을 사용하면 어떤 일이
            벌어지는지 여러 프로젝트 세팅 단계부터 보거나, Creatie를 활용해서
            목업과 디자인 시스템을 얼마나 쉽게 세팅할 수 있는지 알아봤습니다.
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
              <SubTitle text="프레임워크" />
              <List contents={["Next.js", "Flutter"]} />
            </Flex>
            <Flex direction="column">
              <SubTitle text="스타일" />
              <List contents={["emotion", "styled-components"]} />
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
              <List contents={["Jest", "MSW", "React Testing Library"]} />
            </Flex>
            <Flex direction="column">
              <SubTitle text="CI/CD" />
              <List contents={["Jenkins"]} />
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

        <Card
          title="프로젝트"
          className={css`
            page-break-before: always;
          `}
        >
          <SubTitle text="에이지알 프렌즈 & 코끼리 게임 개발" />
          <Detail text="에이피알 | 앱 내 웹뷰 기반의 앱테크 게임 서비스" />
          <Detail text="기술 스택 | React.js, Emotion, Valtio" />
          <List
            contents={[
              "출시 3주 후 MAU 25%, 월 이용시간 142% 상승",
              "WebView 안에 Canvas 기반으로 만들어진 게임에서 새로운 게임을 시작할 때마다 기기가 점점 뜨거워지고 앱이 느려지는 현상 발생\n->휴대폰 기종별 GC가 다르게 동작하는 것을 파악하여 DOM 객체들과 사운드 객체들이 GC 되지 않는 것을 싱글톤 패턴을 도입하여 해결",
              "정적 배포 이후 게임에 접속하지 못하는 유저들이 발생\n-> 원인은 앱내의 웹뷰 자체 캐싱과 CDN 캐싱 무효화 오류로 인한 javascript 불일치\n-> Cloudfront function 및 KeyValueStore와 쿠키를 사용하여 새로운 값을 받을 수 있도록 CI/CD 구축",
              "개발자가 먼저 이슈를 트레킹하지 못하고 CS를 통해 문제를 접수하는 구조\n-> Sentry를 도입하고 리플레이 기능을 활용, 사용자 식별값과 배포 버전별 정보를 추가하여 트레킹",
              "구형 아이폰에서 스타일이 제대로 반영되지 않거나 Input에 Buffer가 남아있는 문제\n-> fit-content 등의 CSS를 대체하고 Input의 경우 focus를 전환 시키도록 컴포넌트를 설계",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="앱 내부 커뮤니티 및 포인트 샵 개발 " />
          <Detail text="에이피알 | 사용자 간 소통의 장, 활동하면서 얻은 포인트를 쓸 수 있는 서비스" />
          <Detail text="기술 스택 | Next.js, styled-components, TanStack Query" />
          <List
            contents={[
              "유닛 테스트 작성시 항상 GET 요청에 대한 모킹이 들어가는 코드가 반복됨\n-> MSW를 도입하여 모킹 코드를 제거하고 테스트 작성하여 개발 경험을 개선",
              "사용자가 페이지를 방문한 이후 글자가 번역되며 깜빡이는 현상 발생\n -> 쿠키를 활용한 서버 측 i18n을 적용하여 문제 해결",
              "Jest를 통한 단위 테스트 중 다국어와 관련된 테스트에 언어별 중복을 확인\n-> i18n 키 값을 활용한 유틸을 제작하여 코드 중복 제거",
              "좋아요나 장바구니와 같은 버튼을 누른후 변화가 느린 문제\n-> 유저 경험 개선을 위한 TanStack Query에 낙관적 업데이트 사용 도입",
              "로딩 후 레이아웃 시프트로 사용자들이 원하는 곳을 누르지 못하는 문제 발생\n-> SSR에서 내려줄 때 스켈레톤을 적용하여 해결",
              "사용자가 일정 시간 이상 앱을 백그라운드에 두거나 메모리가 부족해지면 백화현상으로 서비스를 이용할 수 없음\n-> 한번에 많은 양의 데이터를 받지 않도록 로직을 수정하고 앱쪽에서 예외 발생시 재실행하는 로직 개발",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="앱 관리 페이지 개발" />
          <Detail text="에이피알 | 앱을 사용하는 사용자들 및 이벤트, 앱 기능들을 관리하기 위한 페이지" />
          <Detail text="기술 스택 | React.js, styled-components, TanStack Query" />
          <List
            contents={[
              "매번 테이블을 생성하기 위한 보일러 플레이트들을 산개된 페이지에서 복사 붙여넣기하여 비효율 발생\n-> 데이터 패칭, 정렬등의 정보를 매개변수로 넘기는 훅을 생성하여 리팩토링\n-> 표 생성마다 써야하는 코드를 130->19줄로 단축하여 개발 경험 개선",
              "FFMpeg.wasm을 사용하여 서버 없이 썸네일과 미리보기 영상을 만듬\n-> 서버 자원 및 개발 인력을 최소화",
              "모달, 토스트 생성할 때마다 상태 관리를 위해 불필요한 코드가 생기지 않도록 유틸 개발",
              "유지보수 되지 않는 CRA에서 Vite로 마이그레이션",
            ]}
          />
          <Divider type="horizontal" />
          <SubTitle text="전기차 충전기 연동 앱 개발 및 운영" />
          <Detail text="에바 | 충전기 정보 확인 및 원격 충전 시작이 가능한 앱" />
          <Detail text="기술 스택 | Flutter, GetX" />
          <List
            contents={[
              "앱 개발자가 없고 앱이 없던 환경에서 AOS, iOS, Web 3개의 플랫폼에 2달 이내에 출시해야하는 상황\n-> Flutter를 기술스택으로선정하고 코드 베이스 하나로 성공적으로 배포\n-> 앱 출시 후 사용자 수 0->1000명 확보",
              "개발에 주어진 시간이 길지 않고 앱스토어에 심사를 수동으로 올리는 시간적 비효율 발생\n->Fastlane을 활용하여 CI/CD를 구축\n-> 심사부터 출시까지 자동화하여 배포에 들어가는 시간을 0으로 함",
              "앱에서만 호환되던 라이브러리를 웹에서도 사용해야하는 상황\n-> Javascript interoperability를 사용하여 인터페이스를 설계하여 사용",
              "터치하여 원하는 위치에 초점을 맞춰야하는 기능을 개발해야하는데 Flutter CameraX에서 지원을 안하는 상황\n-> Swift, Kotlin 네이티브로 구현되어 있는 부분을 참고하여 네이티브 모듈 형태로 개발",
              "서브모듈 활용 주요 로직 분리 후 UI 커스텀 기능 타사에 제공",
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
              "블로그 주 1회 운영 및 커뮤니티 리딩",
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
