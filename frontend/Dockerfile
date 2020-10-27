FROM node:14-alpine as base

WORKDIR /app/js/base

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install
COPY . .

FROM node:14-alpine as builder

ENV NODE_ENV=production
WORKDIR /app/js/builder

COPY --from=base /app/js/base /app/js/builder
RUN ["yarn", "build"]

FROM nginx:latest as production

WORKDIR /app/js/src

RUN rm -rf /etc/nginx/conf.d
ADD conf/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /app/js/builder/out ./out

EXPOSE 80