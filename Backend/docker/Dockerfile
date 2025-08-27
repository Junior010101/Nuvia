FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build  # opcional, já faz build na imagem

EXPOSE 3000

CMD ["npm", "run", "start:wait"]
