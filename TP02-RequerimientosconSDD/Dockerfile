FROM node:20-alpine

WORKDIR /usr/src/app

# Copia los archivos package.json desde la carpeta backend
COPY backend/package*.json ./

RUN npm install

# Copia el resto del código de la carpeta backend
COPY backend/ .

EXPOSE 3000

CMD ["npm", "start"]