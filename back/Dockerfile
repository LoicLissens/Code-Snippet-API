FROM node:14.17.0-alpine

WORKDIR /app

COPY package*.json ./

# RUN npm install & dep for bcrypt
RUN apk add --no-cache make gcc g++ python && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
