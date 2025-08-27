# Frontend Dockerfile
# Etapa de build do Angular
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa de servidor Nginx
FROM nginx:alpine

# Copia o build do Angular pro Nginx
COPY --from=builder /app/dist/Nuvia/browser /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta
EXPOSE 80

# Comando pra rodar o Nginx em foreground
CMD ["nginx", "-g", "daemon off;"]
