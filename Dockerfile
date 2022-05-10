FROM node:lts-alpine AS builder

ADD . /workdir

RUN set -ex && cd /workdir && yarn install && yarn build


FROM node:lts-alpine

COPY --from=builder /workdir/dist/index.js /app.js

CMD ["/usr/local/bin/node", "/app.js"]
