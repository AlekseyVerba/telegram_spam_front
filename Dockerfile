ARG NODE_VERSION=18
FROM node:$NODE_VERSION as build
COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps
COPY . ./
ARG REACT_APP_BACKEND_URL=121
ARG BACKEND_URL=${BACKEND_URL}
ARG TINY_KEY=${TINY_KEY}
RUN npm run build
CMD [ "node", "index.js" ]