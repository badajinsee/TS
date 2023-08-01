//object , 객체 리터럴 타입 , 구조적 타입 시스템
let user: {
  id?: number; // ?는 있어도 되고 없어도 된다. 근데 number 여야만 함(선택적)
  name: string;
} = {
  id:1,
  name:"나",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// }
// user.id;

// user = {
//   name:"홍길동",
// }

let config: {
  readonly apikey: string; //읽기 전용 readonly
} = {
  apikey : 'MY API KEY',
};

// config.apikey = "hacked";

