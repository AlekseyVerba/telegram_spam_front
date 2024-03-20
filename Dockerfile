ARG NODE_VERSION=18
FROM node:$NODE_VERSION as build
COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps
COPY . ./

ARG BACKEND_URL=${BACKEND_URL}
ARG TINY_KEY=${TINY_KEY}
ARG T="${TINY_KEY}"

ENV TEST_LALA=fsdfsd
RUN npm run build
CMD [ "node", "index.js" ]
