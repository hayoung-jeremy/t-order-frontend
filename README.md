# t오더 프론트엔드개발자 기술 면접 과제

## 프로젝트 실행

```
npm i
npm start
npm run serve
```

`npm i` : 프로젝트 설치  
`npm start` : 프로젝트 실행  
`npm run serve` : mock server 실행(json-server / port:3001)

## 기술 스택

- build : create-react-app
- language : typescript
- SPA framework : react
- CSS in JS : styled-components, scss
- global state management : react-redux, redux-toolkit

## 요구사항

### 상품 리스트 페이지

- 상품 리스트를 조회 할 수 있다.
- 상품은 좌측으로 정렬된다.
- 단일 상품을 장바구니에 추가 할 수 있다.

### 장바구니

- 현재 장바구니에 담긴 상품들을 조회 할 수 있다.
- 현재 장바구니에 담긴 상품들을 N 개 주문 할 수 있다.
- 현재 장바구니에 담긴 상품들을 N 개 제거 할 수 있다.
- 최종 결제 금액을 조회 할 수 있다.
- 증가한 장바구니 가로 영역만큼 상품 리스트 가로 비율이 감소한다.

### 주문

- 장바구니에 담긴 상품들을 제거한다.
- 장바구니를 닫는다.
- "주문이 완료되었습니다" 메시지 박스가 나타나며, 3초 후 사라진다.
- 상품 리스트의 가로 비율이 원상 복구 된다.

### 가산 사항

- [ ] 카테고리 클릭 시 ScrollSpy 기능을 제공한다.
