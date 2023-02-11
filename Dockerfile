FROM node:gallium-alpine3.15
RUN apk add curl
WORKDIR /app 
COPY ./dist/ .
CMD ["node", "src/index.js"]