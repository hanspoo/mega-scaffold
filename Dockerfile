FROM node:20-alpine
COPY . /mega-scaffold
WORKDIR /mega-scaffold
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD NX_REJECT_UNKNOWN_LOCAL_CACHE=0 npm run start
