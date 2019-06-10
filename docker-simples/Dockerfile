# Especifica imagem base
FROM node:alpine

WORKDIR /usr/app

# Instala dependencias e copia para o container
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Executa o comando default
CMD ["npm", "start"]