import type { ResumeContent } from "./resume.types";

export const resumeContent: ResumeContent = {
	name: "신석진",
	title: "Frontend Engineer",
	careerTotalText: "4년+ (2022.01 - 현재)",
	contacts: [
		{
			label: "Email",
			text: "ssj2648597@gmail.com",
			href: "mailto:ssj2648597@gmail.com",
		},
		{
			label: "GitHub",
			text: "github.com/ssj9685",
			href: "https://github.com/ssj9685",
		},
		{
			label: "LinkedIn",
			text: "linkedin.com/in/ssj9685",
			href: "https://linkedin.com/in/ssj9685",
		},
		{
			label: "Blog",
			text: "blog.ga-ut.com",
			href: "https://blog.ga-ut.com",
		},
	],
	summary: {
		paragraphs: [
			"APR에서 프론트엔드 파트장으로 일하며 다국가 뷰티 서비스와 크리에이터 캠페인 플랫폼을 개발하고 있습니다.",
			"사용자 행동 데이터와 고객 문의에서 오류와 이탈 원인을 찾아 가입 화면과 캠페인 참여 흐름을 고쳐 왔습니다.",
		],
	},
	companies: [
		{
			name: "에이피알",
			period: "2023.06 - 현재",
			groupProjectsByYear: true,
			areas: [
				"다국가 뷰티 서비스 개발",
				"관리자 시스템·대시보드 개발",
				"Flutter 앱–WebView 연동",
				"크리에이터 캠페인 플랫폼 개발",
				"사용자 행동 로그 수집",
				"배포 자동화",
			],
		},
		{
			name: "EVAR",
			period: "2022.01 - 2023.06",
			areas: [
				"전기차 충전 앱 개발·출시",
				"충전기 관리자 시스템 이관",
				"앱과 웹의 빌드·배포 자동화",
			],
		},
	],
	experiences: [
		{
			company: "에이피알",
			title: "Frontend Part Lead",
			period: "2025.06 - 현재",
			changeLabel: "직책 변경",
			overview:
				"여러 제품이 함께 쓰는 컴포넌트와 배포 워크플로를 만들었습니다. 코드 리뷰에서는 상태 전이 조건과 사용자 동선, 운영 절차를 확인하고 있습니다.",
			highlights: [],
		},
		{
			company: "에이피알",
			title: "Frontend Engineer",
			period: "2023.06 - 2025.05",
			overview:
				"다국가 뷰티 서비스의 사용자 웹과 관리자 시스템을 개발했습니다. Flutter 앱과 앱 안의 WebView 화면이 실행 정보와 이벤트를 주고받도록 구현했습니다.",
			highlights: [],
		},
		{
			company: "EVAR",
			title: "Frontend Engineer",
			period: "2022.01 - 2023.06",
			overview: "EVPAY 전기차 충전 앱을 출시했습니다. 충전기 관리자 시스템을 개발했습니다.",
			highlights: [],
		},
	],
	caseStudies: [
		{
			company: "에이피알",
			title: "캠페인 푸시 직후 발생한 성능 장애 개선",
			period: "2026.07 - 2026.08",
			summary: [
				"캠페인 푸시 직후 반복되던 검색 API와 SSR 지연을 백엔드 쿼리와 프론트 실행 구조의 문제로 나눠 해결했습니다.",
				"백엔드에서는 반복 SKU 조회를 배치로 바꾸고, 모집 가능 여부를 기존 집계 데이터로 판단하도록 개선했습니다.",
				"프론트에서는 단일 Node.js 프로세스의 CPU 활용 문제를 찾아, 컨테이너 자원에 맞춰 워커 수와 메모리를 조정하는 실행 구조를 구현했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "Google·Apple OAuth 가입 흐름 구축과 A/B 실험",
			period: "2026.04 - 2026.08",
			summary: [
				"Flutter 앱에서 받은 Google과 Apple 로그인 결과를 WebView를 거쳐 기존 웹 회원가입 퍼널로 전달하고, 일반 웹에서도 같은 가입 흐름을 사용하도록 구현했습니다.",
				"출시 후 소셜 가입 비중과 가입 퍼널 완료율의 변화를 기간별로 확인했습니다.",
				"SNS 연동 단계를 기존보다 앞에 배치하는 UX를 제안했습니다. 단계 순서별 가입 완료율을 비교하기 위해 사용자별 5:5 A/B 실험을 구현하고, OAuth 거부와 기술적 실패를 구분해 기록했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "사용자 행동 로그 수집",
			period: "2026.03 - 2026.06",
			summary: [
				"화면마다 흩어진 사용자 로그를 공통 로거로 묶고 API 프록시를 구성했습니다.",
				"API 프록시에 재시도와 실패 데이터 보관을 추가해 로그 전송 실패 원인을 추적할 수 있게 했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "메디큐브프로 크리에이터 운영 플랫폼",
			period: "2025.04 - 2026.08",
			summary: [
				"운영자가 캠페인 가이드를 작성해 저장하고 PDF로 내보내는 관리자 화면과 API를 개발했습니다.",
				"관리자 화면에서 저장한 가이드를 앱의 WebView 화면에 표시했습니다. 콘텐츠 반려 사유와 회차는 재제출 화면과 최종 반려 화면에 표시했습니다.",
				"국가별 주소 입력 오류와 관세 부과 조건, 계좌 등록 예외를 관리자 화면에 표시하고 담당자에게 알림을 보냈습니다. 주소 입력 오류는 운영자가 관리자 화면에서 직접 수정할 수 있게 했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "관리자 프론트엔드 공통화",
			period: "2024.01 - 2026.05",
			summary: [
				"AGE-R 관리자 빌드 환경을 CRA에서 Vite로 전환하고 Storybook을 구성했습니다.",
				"관리자 화면마다 반복되던 테이블과 패널, 권한 처리와 API 호출을 공통 컴포넌트와 패키지로 묶어 AGE-R와 메디큐브프로 관리자 시스템에 적용했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "AGE-R 앱 연동 WebView 게임",
			period: "2023.09 - 2026.02",
			summary: [
				"Flutter 앱에서 키보드와 안전 영역에 맞춰 WebView 높이를 계산했습니다.",
				"게임 재진입마다 canvas 인스턴스와 audio 인스턴스가 쌓여 발열과 멈춤이 발생했습니다. 인스턴스를 재사용하고 해제 시점을 조정해 문제를 해결했습니다.",
			],
		},
		{
			company: "에이피알",
			title: "메디큐브톡·포인트샵",
			period: "2023.08 - 2025.01",
			summary: [
				"커뮤니티 활동으로 포인트를 얻고 상품을 구매하는 사용자 웹을 개발했습니다. 운영자가 포인트와 상품을 관리하는 관리자 기능을 구현했습니다.",
				"사용자 화면은 낙관적 업데이트와 롤백으로 포인트를 즉시 반영하고, 서버는 분산 락으로 중복 지급을 막았습니다.",
			],
		},
		{
			company: "EVAR",
			title: "EVPAY 전기차 충전 앱과 관리자 시스템",
			period: "2022.01 - 2023.06",
			summary: [
				"Flutter 앱을 Android, iOS, Web에 출시했습니다. QR 충전과 카드 등록·결제, FCM을 통한 충전 상태 반영을 구현했습니다.",
				"충전기 위치와 상태를 확인하고 원격으로 제어하는 Vue 2 관리자 시스템을 Next.js와 TypeScript로 이관했습니다.",
				"QR 스캔과 카메라 동작이 플랫폼마다 달라 Web은 JavaScript interop으로, iOS는 Swift로, Android는 Kotlin으로 구현했습니다.",
				"Fastlane과 GitHub Actions로 앱과 웹의 빌드·배포를 자동화했습니다.",
			],
		},
	],
	supportingEvidence: [
		{
			title: "오픈소스 및 사이드 프로젝트",
			items: [
				{
					title: "@ga-ut",
					subtitle: "오픈소스",
					period: "2024.11 - 2024.12",
					description:
						"React 상태 관리, HTTP 요청, IndexedDB 접근을 위한 패키지를 만들고 개인 프로젝트에 적용했습니다.",
					links: [
						{
							text: "GitHub Organization",
							href: "https://github.com/ga-ut",
						},
					],
				},
				{
					title: "우당탕탕 도서관",
					subtitle: "기술 스터디 운영 및 컨퍼런스 발표",
					period: "2024.02 - 2024.06",
					description:
						"지인들과 기술 스터디를 공동 운영했습니다. 자체 컨퍼런스에서는 ‘자바스크립트에서 Class를 추구하면 안 될까?’를 발표했습니다.",
					links: [
						{
							text: "발표 자료",
							href: "https://uddang-con.vercel.app",
						},
						{
							text: "발표 영상",
							href: "https://youtu.be/CJvTIpR1e5Q",
						},
					],
				},
			],
		},
		{
			title: "학력 및 연구",
			items: [
				{
					title: "충북대학교 대학원",
					subtitle: "정보통신공학전공",
					period: "2020.09 - 2022.02",
					description:
						"MQTT와 Kafka를 연결한 스마트팜 엣지 컴퓨팅 플랫폼을 구현하고 성능을 평가해 제1저자 논문을 게재했습니다.",
					links: [
						{
							text: "MQTT·Kafka 스마트팜 엣지 플랫폼 논문",
							href: "https://drive.google.com/file/d/1zrVSHyFt8RN0O-QTKTSirF_ubP29TAo4/view?usp=sharing",
						},
						{
							text: "WebRTC 관련 연구",
							href: "https://drive.google.com/file/d/1uDgw4A-2gSQuC6U2OzgKC_MPuYjPwOLY/view?usp=sharing",
						},
						{
							text: "MQTT·Kafka 연구 발표",
							href: "https://www.youtube.com/watch?v=h49x2A9Vjbs",
						},
					],
				},
				{
					title: "충북대학교",
					subtitle: "정보통신공학부",
					period: "2015.03 - 2020.08",
					description:
						"학석사 연계과정으로 정보통신공학을 전공했습니다.",
				},
			],
		},
	],
};

export default resumeContent;
