ARG NODE_VERSION=18
FROM node:$NODE_VERSION as build

# Set default value for BACKEND_URL if not provided during build

COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps

# Set the environment variable using the build argument

COPY . ./

ARG V
# Pass BACKEND_URL as a build argument to npm run build
RUN npm run build

CMD [ "node", "index.js" ]
