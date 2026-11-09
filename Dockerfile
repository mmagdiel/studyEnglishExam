# Grammar Master: static Astro site, built with Node and served by nginx.
# Used by Coolify ("Dockerfile" build pack). The container listens on port 80.

# --- Build ---------------------------------------------------------------
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached between code changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# `npm run build` = astro check + astro build → static files in /app/dist
RUN npm run build

# --- Serve ---------------------------------------------------------------
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
