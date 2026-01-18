import { css, cx } from "@emotion/css";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import Divider from "./components/Divider/Divider";
import Link from "./components/Link/Link";
import List from "./components/List/List";
import SubTitle from "./components/SubTitle/SubTitle";
import { styles } from "./style";

export default function Resume() {
	const careerTotalText = "4년 (2022~현재)";

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
								<p className={styles.title}>Frontend Engineer</p>
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
						<strong>Blog</strong>
						<Link href="https://blog.ga-ut.com" text="blog.ga-ut.com" />
					</div>
				</header>
				<Card title="">
					<p>
						기능을 단위로 보지 않고, 사용자 여정과 조직 운영 흐름을 하나의
						Loop로 판단하는 프론트엔드 엔지니어입니다. 구매 이전 Funnel과
						후기/UGC/기기 사용을 연결하는 Loop 기반 설계에 관심이 있으며,
						앱테크·SNS·정산·배송·다국가 주소체계 같은 후행 도메인을 제품
						단계에서 함께 다룹니다.
					</p>
				</Card>

				<Card
					title={
						<span className={styles.careerTitleWrap}>
							<span>경력사항</span>
							<span className={styles.careerTotal}>총 {careerTotalText}</span>
						</span>
					}
				>
					<section className={styles.careerItem}>
						<p className={styles.careerPeriod}>2023년 6월 - 현재</p>
						<div className={styles.careerInfo}>
							<h4 className={styles.careerName}>에이피알</h4>
							<Detail text="프론트엔드 파트 리드 | 2025년 6월 - 현재" />
							<List
								contents={[
									"기능 리딩 및 우선순위 조정",
									"기획/데이터/물류/자금/마케팅 협업",
									"운영 조직 요구사항 반영 및 관리자 개발",
									"제약 기반 기술/UX 선택",
									"운영·정산·물류 자동화",
								]}
							/>
							<Detail text="프론트엔드 개발자 | 2023년 6월 - 2025년 6월" />
							<List
								contents={[
									"WebView 기반 앱 기능 개발 및 운영",
									"UGC/포인트/앱테크 기능 개발",
									"SNS 연동·정산·물류 프로세스 대응",
									"테스트·CI/CD 도입",
									"우수사원(2024 상반기)",
								]}
							/>
						</div>
					</section>
					<section className={styles.careerItem}>
						<p className={styles.careerPeriod}>2022년 1월 - 2023년 6월</p>
						<div className={styles.careerInfo}>
							<h4 className={styles.careerName}>EVAR</h4>
							<Detail text="프론트엔드 엔지니어" />
							<List
								contents={[
									"Flutter 기반 AOS/iOS/Web 개발 및 운영",
									"QR 기반 충전/결제",
									"FCM 기반 실시간 상태 반영",
									"Fastlane 기반 출시 자동화 및 CI/CD 구축",
									"Vue2 -> TS + Next.js 마이그레이션",
									"지도 기반 운영/상태 관리",
								]}
							/>
						</div>
					</section>
				</Card>

				<Card title="프로젝트">
					<section className={styles.projectCompany}>
						<header className={styles.projectCompanyHeader}>
							<h4 className={styles.projectCompanyName}>에이피알</h4>
							<p className={styles.projectCompanyPeriod}>2023년 6월 - 현재</p>
						</header>
						<div className={styles.projectList}>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>메디큐브프로</h5>
										<p className={styles.projectPeriod}>2025년 - 현재</p>
									</div>
									<p className={styles.projectMeta}>
										인플루언서 운영/정산/물류
									</p>
								</header>
								<p className={styles.projectDescription}>
									엑셀 기반 수작업 운영을 자동화하고 국가별 주소/관세/계좌
									대응과 SNS 기반 캠페인 운영을 지원했습니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"SNS 기반 캠페인 운영",
											"국가별 주소/관세/계좌 대응",
											"정산 프로세스 개선 및 오류 방지",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"엑셀 기반 수작업 운영 자동화",
											"SNS 연동/캠페인 참여 제한 기능 개발",
											"관리자 운영 화면 설계 및 개선",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>성과</h6>
									<List
										contents={[
											"인플루언서 자동화 (2,000 -> 10,000)",
											"수작업/실수 감소",
										]}
									/>
								</section>
							</article>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>통합 관리자 시스템</h5>
										<p className={styles.projectPeriod}>2026년 - 현재</p>
									</div>
									<p className={styles.projectMeta}>
										10여 개 관리자 페이지 통합
									</p>
								</header>
								<p className={styles.projectDescription}>
									PHP5 {"->"} PHP8 이관과 ISMS 심사 대응을 포함한 운영 시스템
									통합 프로젝트입니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"10여 개 관리자 페이지 통합",
											"ISMS 심사 대응",
											"공용 컴포넌트 및 라이브러리 설계",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"PHP5 -> PHP8 이관",
											"외부 운영 조직 및 협력사 연동",
										]}
									/>
								</section>
							</article>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>
											에이지알 프렌즈 & 코끼리 게임
										</h5>
										<p className={styles.projectPeriod}>2024년 - 현재</p>
									</div>
									<p className={styles.projectMeta}>앱테크·리텐션</p>
								</header>
								<p className={styles.projectDescription}>
									참여 기반 리텐션을 위한 웹뷰 기반 앱테크 게임을 구축했습니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"참여 기반 리텐션 설계",
											"WebView 게임 UX 최적화",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"React + Emotion 기반 UI 개발",
											"Canvas/Matter.js 기반 인터랙션 설계",
											"Flutter <-> React 통신 구조 설계",
											"i18next 기반 다국어 적용",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>성과</h6>
									<List contents={["참여자 +25%", "이용시간 +142%"]} />
								</section>
							</article>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>
											메디큐브톡 & 포인트샵
										</h5>
										<p className={styles.projectPeriod}>2023년 - 현재</p>
									</div>
									<p className={styles.projectMeta}>UGC/포인트 커머스</p>
								</header>
								<p className={styles.projectDescription}>
									후기/커뮤니티와 포인트 기반 구매 흐름을 연결한 서비스입니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"UGC/포인트 커머스 흐름 설계",
											"다국가 서비스 운영 안정화",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"SSR 기반 다국가 대응/번역/레이아웃 개선",
											"Jest/Playwright 기반 테스트 도입",
											"i18next 기반 다국어 적용",
											"쿠키 기반 상태 관리 및 공용 SSR 적용",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>성과</h6>
									<List contents={["후기·앱테크·구매 전환 흐름 형성"]} />
								</section>
							</article>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>앱 관리 페이지 개발</h5>
										<p className={styles.projectPeriod}>2023년 - 현재</p>
									</div>
									<p className={styles.projectMeta}>운영/관리자 시스템</p>
								</header>
								<p className={styles.projectDescription}>
									운영 조직 요구사항을 반영한 관리자 페이지 기능을 설계하고
									개선했습니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={["운영 조직 요구사항 반영", "관리자 UX 개선"]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"Vite 마이그레이션",
											"미디어 처리/Drag and Drop 기능 개발",
											"공용 컴포넌트 기반 리팩토링",
										]}
									/>
								</section>
							</article>
						</div>
					</section>
					<section className={styles.projectCompany}>
						<header className={styles.projectCompanyHeader}>
							<h4 className={styles.projectCompanyName}>EVAR</h4>
							<p className={styles.projectCompanyPeriod}>
								2022년 1월 - 2023년 6월
							</p>
						</header>
						<div className={styles.projectList}>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>EVpay</h5>
										<p className={styles.projectPeriod}>
											2022년 01월 - 2023년 06월
										</p>
									</div>
									<p className={styles.projectMeta}>충전기 결제 앱</p>
								</header>
								<p className={styles.projectDescription}>
									Flutter 기반 AOS/iOS/Web 앱을 개발하며 QR 기반 충전·결제와 FCM
									기반 실시간 상태 반영을 구현했습니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"QR 기반 충전/결제",
											"FCM 기반 실시간 상태 반영",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List
										contents={[
											"Flutter 기반 AOS/iOS/Web 개발",
											"Fastlane 기반 출시 자동화",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>성과</h6>
									<List contents={["사용자 0 -> 1000"]} />
								</section>
							</article>
							<article className={styles.projectItem}>
								<header className={styles.projectHeader}>
									<div>
										<h5 className={styles.projectTitle}>
											충전기 관리자 페이지
										</h5>
										<p className={styles.projectPeriod}>
											2022년 01월 - 2023년 06월
										</p>
									</div>
									<p className={styles.projectMeta}>지도 기반 운영/상태 관리</p>
								</header>
								<p className={styles.projectDescription}>
									Vue2 환경을 Typescript + Next.js로 마이그레이션하고 운영/개발
									환경 분리와 CI/CD를 구축했습니다.
								</p>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>핵심</h6>
									<List
										contents={[
											"Vue2 -> TS + Next.js 마이그레이션",
											"지도 기반 운영/상태 관리",
										]}
									/>
								</section>
								<section className={styles.projectSection}>
									<h6 className={styles.projectSectionTitle}>개발</h6>
									<List contents={["CI/CD 구축"]} />
								</section>
							</article>
						</div>
					</section>
				</Card>

				<Card title="학력">
					<SubTitle text="충북대학교 대학원" />
					<Detail text="2020년 9월 - 2022년 2월" />
					<Detail text="정보통신공학과 (WebRTC/통신 연구)" />
					<p>통신 프로토콜 기반 연구를 진행했습니다.</p>
					<List
						contents={[
							<Link
								key={"WebRTC"}
								href="https://drive.google.com/file/d/1uDgw4A-2gSQuC6U2OzgKC_MPuYjPwOLY/view?usp=sharing"
								text="WebRTC 관련 연구"
							/>,
							<Link
								key={"MQTT_KAFKA"}
								href="https://www.youtube.com/watch?v=h49x2A9Vjbs"
								text="MQTT KAFKA 관련 연구"
							/>,
						]}
					/>
					<Divider type="horizontal" />
					<SubTitle text="충북대학교" />
					<Detail text="2015년 3월 - 2020 8월" />
					<Detail text="정보통신공학과 | 학석사 연계" />
					<p>통신 프로토콜과 웹 프로그래밍을 학습했습니다.</p>
				</Card>

				<Card title="경험">
					<SubTitle text="zkvrm" />
					<Detail text="오픈소스" />
					<p>React + Bun + SQLite + S3 기반 풀스택 메모 앱</p>
					<List
						contents={[
							"Bun 기반 서버와 React 연동",
							"Bun에서 제공하는 sqlite DB 기반의 간단한 사용 및 S3 백업",
							<Link
								key={"link"}
								href="https://zkvrm.ga-ut.com"
								text="페이지 링크"
							/>,
							<Link
								key={"Github"}
								href="https://github.com/ssj9685/zkvrm"
								text="Github 링크"
							/>,
						]}
					/>
					<Divider type="horizontal" />
					<SubTitle text="@ga-ut" />
					<Detail text="오픈소스 | 2024년 11월-12월" />
					<p>직접 만든 오픈소스를 모아둔 조직 운영</p>
					<List
						contents={[
							<Link
								key={"Github"}
								href="https://github.com/ga-ut"
								text="Github 링크"
							/>,
						]}
					/>
					<Divider type="horizontal" />
					<SubTitle text="우당탕탕 도서관" />
					<Detail text="커뮤니티 | 2024년 2월-6월" />
					<p>매주 1회 주제 글을 올리고 온라인으로 모여 지식을 공유하는 모임</p>
					<List
						contents={[
							"커뮤니티 운영 및 주제 리딩",
							"내부 컨퍼런스 개최 및 발표",
							<>
								<Link href="https://uddang-con.vercel.app" text="발표자료" />
								<Link href="https://youtu.be/CJvTIpR1e5Q" text="발표영상" />
							</>,
						]}
					/>
				</Card>
			</div>
		</div>
	);
}
