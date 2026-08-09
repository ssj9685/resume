# 신석진 · Frontend Engineer

사용자 화면에서 시작한 문제를 앱과 서버, 운영 도구, 배포 환경까지 따라가 해결해 온 프론트엔드 엔지니어입니다.

APR에서 프론트엔드 파트장으로 일하며 다국가 뷰티 서비스와 크리에이터 캠페인 플랫폼을 개발하고 있습니다. 사용자가 서비스를 이용하는 화면과 운영자가 상태를 확인하고 대응하는 관리자 도구를 함께 개발합니다.

[웹 이력서](https://ssj9685.github.io/resume/) · [LinkedIn](https://linkedin.com/in/ssj9685) · [기술 블로그](https://blog.ga-ut.com) · [GitHub](https://github.com/ssj9685)

## 대표 경험

### 앱과 웹을 잇는 가입 흐름

Flutter 앱에서 받은 Google과 Apple 로그인 결과를 앱 안의 WebView로 전달했습니다. 일반 웹에서도 같은 OAuth 가입 흐름을 사용하도록 구현했습니다. 출시 후에는 소셜 가입 비중과 가입 퍼널 완료율의 변화를 기간별로 확인했습니다. SNS 연동 단계를 앞에 배치하는 UX를 제안하고, 단계 순서별 완료율을 비교하는 A/B 실험과 OAuth 실패 원인 기록을 구현했습니다.

### 크리에이터 캠페인 운영

운영자가 캠페인 가이드를 작성하고 PDF로 내보내는 관리자 화면과 API를 개발했습니다. 저장한 가이드는 앱의 WebView 화면에, 콘텐츠 반려 사유와 회차는 사용자의 재제출 화면에 표시했습니다.

### 캠페인 검색·SSR 지연 분석

캠페인 푸시 직후 반복되던 검색 API와 SSR 지연을 백엔드 쿼리와 프론트엔드 실행 구조로 나눠 분석했습니다. 서버의 반복 SKU 조회를 배치로 바꾸고, 컨테이너 자원에 맞춰 Node.js 워커 수와 메모리를 조정했습니다.

## 더 읽기

- [APR에서의 경험](./docs/02-experience/apr.md)
- [함께 일할 때 지키려는 기준](./docs/01-profile/working-principles.md)
- [기술을 깊게 들여다보려는 이유](./docs/01-profile/technical-depth.md)
- [오픈소스와 사이드 프로젝트](./docs/05-activities/ga-ut.md)

## 이 저장소

이 저장소는 제 경력과 작업을 웹으로 보여주는 공개 이력서입니다. 이력서 본문은 [`src/resume.content.ts`](./src/resume.content.ts)에, 경험을 보완하는 공개 문서는 [`docs`](./docs)에 정리했습니다.

작성 과정의 메모와 회사 내부 근거, 개인정보는 공개 저장소에 포함하지 않습니다.

```bash
bun install
bun run dev
```
