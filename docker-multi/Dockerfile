#Imagem base
FROM node:alpine

WORKDIR /app

#Instala dependencias
COPY package.json .
RUN npm install
COPY . .

#Comando default
CMD ["npm", "start"]


