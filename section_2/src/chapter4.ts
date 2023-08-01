//타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string,
  birth: string,
  bio: string,
  location: string
};

// function func() {
//   type User = {};
// } 이거는 함수 안에서 User 

let user: User = {
  id: 1,
  name: "나",
  nickname: "na",
  birth: "1997.01.07",
  bio:"안녕하세요",
  location : "부천시"
};

let user2: User = {
  id: 2,
  name: "너",
  nickname: "na",
  birth: "1997.01.07",
  bio:"안녕하세요",
  location : "부천시"
};

// 인덱스 시그니처 
type CountryCodes = {
  [key : string] : string;
};

let countryCodes: CountryCodes = {
  Korea : "ko",
  UnitedState: "us",
  UnitedKingdom:"uk",
};

type CountryNumberCodes = {
  [key:string]: number;
  // Korea:string; // 인덱스 시그니처 :number랑 일치해야함
};

let countryNumberCodes: CountryNumberCodes = {
  // Korea:"ko",
};