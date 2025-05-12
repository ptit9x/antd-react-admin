## STAGE 1: Build ###
FROM node:20.16-alpine as build
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --silent
COPY . /app
RUN npm run build

### STAGE 2: NGINX ###
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]