FROM node:22.14-bullseye-slim

WORKDIR /app

COPY ./package*.json /app/
RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["node", "run", "dev"]
