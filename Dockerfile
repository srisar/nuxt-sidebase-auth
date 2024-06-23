FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:20-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]