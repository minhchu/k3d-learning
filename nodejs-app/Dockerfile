FROM node:18-alpine

RUN apk add --no-cache tini && \
    corepack enable && \
    corepack prepare pnpm@latest-8 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml index.js ./ 

RUN pnpm install

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "index.js"]
