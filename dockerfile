# Etapa de build
FROM node:18-alpine AS builder
WORKDIR /app

# Copia o código e instala dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante do código e builda a aplicação Next.js
COPY . .
RUN npm run build

# Etapa final com Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
