# Stage 1: Build the application
FROM node:20 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy the rest of your application's code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Set up the production environment
FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist

# Your application runs on port 5000
EXPOSE 5000

CMD ["node", "dist/server.js"]

