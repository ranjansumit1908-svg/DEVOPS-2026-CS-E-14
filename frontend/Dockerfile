# ---------- build the React app ----------
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# API base the browser calls. "/api" = same site, nginx forwards it to API_UPSTREAM.
# docker build --build-arg VITE_API_URL=/api .
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ---------- serve it with nginx ----------
FROM nginx:alpine

# nginx fills in ${PORT} from the environment at start-up (Render sets it)
ENV PORT=80
ENV API_UPSTREAM=http://localhost:5000
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
