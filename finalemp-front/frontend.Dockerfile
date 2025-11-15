# FROM node:20-alpine AS build
# WORKDIR /react-app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve production
# FROM nginx:alpine
# COPY --from=build /react-app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:20 
# WORKDIR /app 
# COPY package*.json ./       
# RUN npm install 
# COPY . .     
# EXPOSE 80 
# CMD ["npm", "run", "dev"] 

#Stage 1 — Build
# FROM node:20-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


# # Stage 2 — Serve with NGINX
# FROM nginx:alpine

# # remove default NGINX HTML
# RUN rm -rf /usr/share/nginx/html/*

# # copy build output
# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]