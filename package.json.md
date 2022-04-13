# package.json

이 문서는 package.json에 대한 설명입니다.

## name

프로젝트 이름으로서 이 보일러플레이트로 새로운 프로젝트를 시작할 때 변경해서 사용하면 됩니다.

## version

보일러 플레이트 버전을 관리합니다. 최초버전은 v 1.0.0입니다.

## private

이 프로젝트 안의 소스 안에는 공개하고 싶지 않는 코드가 있다는 것을 표시하여 npm같은 곳에 등록되는 것을 방지합니다.

## script

개발 서버 실행 (default port: 7070)

```json
"serve": "vue-cli-service serve"
```

목업 API 서버 실행 (default port: 3000)

```json
"mockup": "nodemon /tests/mock-api"
```

## dependencies
작성중...

## devDependencies

 - cross-env : 운영체제나 플랫폼에 종속되지 않고 동일한 방법으로 env 변수를 주입하는 방법이다.

## engines

프로젝트 개발 환경 (node: 14.17.4, npm: 7.24.1)

## repository

github 주소를 표기함
