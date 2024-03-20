ARG NODE_VERSION=18
FROM node:$NODE_VERSION as build
COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps
COPY . ./
ARG REACT_APP_BACKEND_UR=121
RUN npm run build
CMD [ "node", "index.js" ]