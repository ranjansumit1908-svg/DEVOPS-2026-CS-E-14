FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production

# Render sets PORT at runtime. MONGO_URI, JWT_SECRET and CLIENT_URL are
# supplied as environment variables when the container runs, never baked in.
EXPOSE 5000

USER node

CMD ["node", "server.js"]
