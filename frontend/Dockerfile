#Build Stage
FROM node:18-alpine3.14 AS build
WORKDIR /frontend/
COPY . /frontend/
RUN npm install
RUN npm run build

#Package Stage
FROM nginx:1.13
COPY --from=build /frontend/dist/frontend/ /usr/share/nginx/html
EXPOSE 80