# Welcome to market-10 👋

로그인, 회원가입 페이지 토이 프로젝트입니다.

[링크](https://obscure-tundra-06600.herokuapp.com/)

![index](https://user-images.githubusercontent.com/38618187/87047635-ba20fa00-c235-11ea-9497-748376c6619e.gif)

## Installation

사용하시기 전에 node를 설치해주세요 [node](https://nodejs.org/ko/)

```bash
cd signup
```

```bash
npm install
# or
yarn install
```

그리고 .env 파일을 만들어주세요

```bash
# 현재 경로는 /signup/ 입니다.

# linux
touch .env

# window
fsutil file createnew .env 0

# window power shell
echo $null >> .env
```

.env에는 다음 정보들이 들어갑니다.

```text
ACCOUNT_SALT=비밀번호 암호화 키
SESSION_EXPIRE_MIN=세션만료시간 (number, 분)
SESSION_CYCLE_MIN=db에서 오래된 세션을 지우는 주기 (number, 분)
PORT=포트번호 (number)
```

## Usage

다음 명령어로 실행이 가능합니다.

```bash
npm start
# or
yarn start
```

## 로그인 페이지

![login](https://user-images.githubusercontent.com/38618187/87047889-08ce9400-c236-11ea-83c9-c57960f059c4.gif)

## 회원가입 페이지

![signup](https://user-images.githubusercontent.com/38618187/87048029-3582ab80-c236-11ea-9c83-66d586525d51.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
