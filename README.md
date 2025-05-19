# NEC Web CMCPTX

## 기술 스택

- **프레임워크:** React + Vite
- **언어:** TypeScript
- **상태 관리:** 
  - TanStack Query v5 (서버 상태)
- **HTTP 클라이언트:** Axios
- **패키지 매니저:** pnpm
- **스타일링:** TBD

## 프로젝트 구조 (FSD - Feature-Sliced Design)

```
src/
├── app/          # 전역 설정 (providers, styles, store)
├── processes/    # 업무 프로세스 (시나리오, 스토리)
├── pages/        # 페이지 컴포넌트
├── widgets/      # 독립적인 블록들의 조합
├── features/     # 사용자 시나리오
├── entities/     # 비즈니스 엔티티
└── shared/       # 공유 로직
```

### FSD 레이어 설명

1. **app/** 
   - 전역 설정, 스타일, 프로바이더
   - 앱 초기화 로직

2. **processes/**
   - 페이지를 넘나드는 비즈니스 프로세스
   - 복잡한 사용자 시나리오

3. **pages/**
   - 라우트에 대응되는 페이지
   - 위젯들의 조합

4. **widgets/**
   - 재사용 가능한 비즈니스 컴포넌트
   - 여러 피처의 조합

5. **features/**
   - 사용자 상호작용
   - 구체적인 비즈니스 로직

6. **entities/**
   - 비즈니스 엔티티 모델
   - 엔티티 관련 로직

7. **shared/**
   - UI 키트
   - 유틸리티
   - API
   - 타입

## 개발 가이드

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 빌드

```bash
pnpm build
```