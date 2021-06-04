# MolyMath DevLog

## Stack

<br>

### Front

- Next.Js(SSR)
- React Hooks
- Redux Saga
- Emotion

### Back

- Node
- Express
- Sequelize(MySQL)

### DevOps

- AWS
  - EC2
  - S3
  - Route53

<br>

### 선택 이유

- `React`는 SPA이며, App과 비슷하게 화면 이동 시 깜빡임 없이 자연스럽게 넘어가는 방식이어서 사용자 경험을 개선하며, 데이터와 화면을 자동으로 일치와 더불어 유지 보수와 재사용을 위한 Component를 구성할 수 있습니다. 뷰와 앵귤러도 같은 SPA인데 왜 리액트를 선택한 이유는 npm trends에서 통계를 비교해보면 리액트가 높은 것을 보실 수 있습니다. 시장성을 무시 못 하기 때문에 많은 기업들이 찾음과 동시에 자료도 방대하기 때문에 선택했습니다.

​

- `Redux`는 여러 컴포넌트 간의 공통적인 데이터가 필요하며, 중앙 데이터 역할로 흩어진 데이터들을 컴포넌트 간에 각각 쉽게 보내 줄 수 있습니다. saga는 thunk에 비해 다양한 작업들을 처리할 수 있습니다.
  비동기 작업할 때 기존 요청을 취소 처리와 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행할 수도 있으며, API 요청이 실패했을 때 재요청하는 작업 등을 할 수 있습니다.

​

- `Next.js`는 SSR을 쉽게 구현하도록 도와주는 프레임 워크입니다.
  검색엔진 (SEO) 노출의 필요성과 서버 캐싱 적용으로 인한 사용자 경험 개선 때문에 선택했습니다.
  SSR과 CSR 서로의 단점들을 보완하여 검색엔진(SEO)을 위해 Pre-Rendering, SSR, Code Spliiting을 해결해 주며 SSR with Hydration 기법으로 React + Next.js 처음에는 SSR을 적용하고, 그 후엔 다른 페이지들에선 CSR을 이용하는 방식입니다.

<br>

## ProtoType

https://www.figma.com/proto/3JmgbuLpka5ZecDH9sJa41/Prototyping-in-Figma?node-id=207%3A2980&scaling=scale-down&page-id=0%3A1
