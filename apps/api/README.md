# 소개

Nest.JS 학습을 위한 Repo (GraphQL , Rest API, Prisma, PostgreSQL, Login (w passport, jwt etc)

## Features

- GraphQL로 기본 설계된 코드
- Rest API 추가 (Controller.ts)
- 데이터베이스 모델링, 마이그레이션 및 타입 안전한 접근을 위한 [Prisma](https://www.prisma.io/)  (Postgres, MySQL & MongoDB 지원)
- 🔐 JWT Auth w/ [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- REST API Swagger (전체 새로 추가) w/ [Swagger](https://swagger.io/)
- 필요에 따른 코드 변경 및 수정

## Prisma 설정

### 1. 의존성 설치

Nest 애플리케이션을 위한 의존성을 설치하세요.

```bash
# npm
npm install
# yarn
yarn install
```

### 2. Docker를 이용한 PostgreSQL
선택적 

Docker를 이용하여 개발 환경용 PostgreSQL을 설정합니다. [.env.example](./.env.example)을 복사하여 `.env`로 이름을 바꿉니다 - `cp .env.example .env` - 이는 `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`와 같은 PostgreSQL에 필요한 환경 변수를 설정합니다. 변수를 원하는 대로 업데이트하고 강력한 비밀번호를 선택하세요.

PostgreSQL 데이터베이스를 시작합니다.

```bash
docker-compose -f docker-compose.db.yml up -d
# 또는
npm run docker:db
```

### 3. Prisma Migrate

[Prisma Migrate](https://github.com/prisma/prisma2/tree/master/docs/prisma-migrate)는 데이터베이스의 스키마와 마이그레이션을 관리하는 데 사용됩니다. Prisma 데이터 소스는 PostgreSQL 데이터베이스에 연결하기 위한 환경 변수 `DATABASE_URL`을 필요로 합니다. Prisma는 루트의 [.env](./.env) 파일에서 `DATABASE_URL`을 읽습니다.

개발 환경에서 Prisma Migrate를 사용하여

1. `migration.sql` 파일 생성
2. 데이터베이스 스키마 업데이트
3. Prisma 클라이언트 생성

```bash
npx prisma migrate dev
# 또는
npm run migrate:dev
```

`migration.sql` 파일을 사용자 정의하려면 다음 명령어를 실행하세요. 사용자 정의 후 `npx prisma migrate dev`를 실행하여 적용합니다.

```bash
npx prisma migrate dev --create-only
# 또는
npm run migrate:dev:create
```

데이터베이스 변경 사항에 만족하면 [프로덕션 데이터베이스](https://www.prisma.io/blog/prisma-migrate-preview-b5eno5g08d0b#applying-migrations-in-production-and-other-environments)에 변경 사항을 배포하려면 `prisma migrate deploy`를 사용하여 대기 중인 모든 마이그레이션을 적용합니다. CI/CD 파이프라인에서도 사용할 수 있으며 프롬프트 없이 작동합니다.

```bash
npx prisma migrate deploy
# 또는
npm run migrate:deploy
```

### 4. Prisma: Prisma Client JS

[Prisma Client JS](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api)는 데이터 모델을 기반으로 자동 생성되는 타입-안전한 데이터베이스 클라이언트입니다.

Prisma Client JS를 생성하려면 다음을 실행하세요.

> **참고**: [schema.prisma](prisma/schema.prisma)를 업데이트할 때마다 Prisma Client JS를 재생성하세요.

```bash
npx prisma generate
# 또는
npm run prisma:generate
```

### 5. 이 스크립트로 데이터베이스 데이터 씨딩

이 명령어로 스크립트를 실행하세요:

```bash
npm run seed
```

### 6. NestJS 서버 시작

개발 모드에서 Nest 서버를 실행하세요:

```bash
npm run start

# 감시 모드
npm run start:dev
```

프로덕션 모드에서 Nest 서버를 실행하세요:

```bash
npm run start:prod
```

**[⬆ 맨 위로](#overview)**


## GraphQL Playground

NestJS 서버를 위한 GraphQL Playground는 여기에서 사용할 수 있습니다: [GraphQL Playground](http://localhost:3000/graphql)


## Rest Api Swagger

[RESTful API](http://localhost:3000/api) 문서는 Swagger로 제공됩니다.

