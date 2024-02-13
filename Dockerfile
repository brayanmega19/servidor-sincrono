# Empezamos usando la imagen original de node
FROM node:14

# colocamos el directorio dento del contenedor
WORKDIR /app

# copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (no tenemos ni una, per bueno)
RUN npm install

# agregamos el archivo server.js y el message.txt
COPY server.js ./
COPY message.txt ./

# Exponer puerto 
EXPOSE 3022

# comando usado para iniciar el servidor
CMD ["node", "server.js"]

