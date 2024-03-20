ARG NODE_VERSION=18
ARG BACKEND_URL
FROM node:$NODE_VERSION as build
COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps
COPY . ./
ENV BACKEND_URL=$BACKEND_URL
RUN npm run build
CMD [ "node", "index.js" ]