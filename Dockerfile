FROM --platform=linux/amd64 node:18-alpine as builder

WORKDIR /usr/src/app

RUN apk add --no-cache libc6-compat

RUN npm install -g pnpm@8 --unsafe-perm \
    && pnpm config set store-dir /root/.pnpm-store

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/root/.pnpm-store pnpm install --frozen-lockfile --prefer-offline --reporter=silent

COPY . .

RUN pnpm build \
    && pnpm install --prod --frozen-lockfile --ignore-scripts --prefer-offline --reporter=silent

EXPOSE 80
