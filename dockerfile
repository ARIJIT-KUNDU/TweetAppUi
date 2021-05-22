FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
RUN npm run build --prod
 
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/tweetapp-spa /usr/share/nginx/html
# ### STAGE 1: Build ###
# FROM node:12.7-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/tweetapp-spa /usr/share/nginx/html