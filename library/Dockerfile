FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l",  "4173", "--cors"]
