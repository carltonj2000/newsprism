# News RSS Reader With Next.js, Prisma

## Creation Notes

```bash
npm init -y
npm i next react react-dom
npm run dev # will prompt to create index.tsx and auto gen tsconfig.json after
npm i @prisma/client
npm i -D @prisma/cli
# use local docker postgres install
npm run prisma:init # add db to ./prisma/.env
npm run prisma:migrate # after creating schema in ./prisma/schema.prisma
# download prisma studio image for your system, run and point to the schema
```

## Historoy

The code in this repository is based on this
[repo]()
and then
[End to End React with Prisma 2 Udemy Course](https://www.udemy.com/course/end-to-end-react-with-prisma-2)
