# Stage 1: Build the React application
FROM node:20 as build-stage

# Specify ARG for build-time environment variables
ARG REACT_APP_BASE_URL

# Set the environment variable so it is available during the build
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

# Optional: If you have a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
