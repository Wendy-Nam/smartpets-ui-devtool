# 🧩 Smartpets UI Devtool

### 📎 [배포된 웹사이트 보기](https://wendy-jmcomponents-rn.vercel.app)

| 항목 | 내용 |
|------|------|
| **프로젝트 명** | Smartpets UI Devtool |
| **기반 기술** | React Native Web + Storybook |
| **목적** | 공통 UI 컴포넌트의 테스트, 코드 생성 자동화, 협업 표준화 |
| **도구 개발** | 테스트 가능한 UI 인터페이스 구축<br>정적 배포 자동화 및 시각 기반 QA 환경 제공<br>CI 없이도 활용 가능한 **프론트엔드 DevTool**로 설계 (**기여도 100%**) |
| **UI 컴포넌트 소스** | Capstone_FE 팀 내 협업으로 공동 제작<br>(본 레포는 테스트 및 문서화를 위한 **독립 도구**) |

---

### 👤 Maintainer  
[**Wendy-Nam (남서아)**](https://github.com/Wendy-Nam)

### 🧩 관련 프로젝트  
📦 [Smartpets Capstone_FE](https://github.com/KAU-SMART-PETS/Capstone_FE/tree/main)

> Smartpets 프로젝트의 UI 테스트 및 협업 표준화를 위한 별도 도구입니다.  
> Storybook 설정부터 인터페이스 구성, 정적 배포까지 전 과정을 단독 설계·구현했습니다.

---

## 🎯 목적

- 공통 UI 컴포넌트의 **동작 테스트 및 문서화**
- **실시간 props 조작 / 코드 프리뷰 / 예제 확인** 제공
- QA 기준 통일 및 **온보딩 효율 향상**
- 모바일 환경과 분리된 **웹 기반 인터페이스 제공**
- **정적 배포(Vercel**)를 통한 독립 사용 가능

---

## 🛠️ 기술 스택

- `React Native Web`  
- `Storybook for React Native`  
- `@storybook/addon-docs`  
- `@storybook/addon-controls`  
- `Vercel` (정적 배포)

---

## 📁 디렉토리 구조

이 레포는 [storybookjs/addon-react-native-web](https://github.com/storybookjs/addon-react-native-web) 예제를 기반으로,  
**협업 효율 향상과 테스트 표준화를 위한 별도 도구로 재구성**한 프로젝트입니다.

```
.storybook/                     # Storybook 설정 파일
stories/libraries/nativewind/   # 공통 컴포넌트 및 스토리 정의
```

> `react-native-web`과 `nativewind`의 호환을 위해 샘플 구조를 참고해 설계하였습니다.

---

## 💻 실행 방법

```bash
npm install
npm run storybook
```


