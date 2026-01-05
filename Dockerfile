FROM node:20 AS builder

WORKDIR /cityrep-public

COPY package*.json yarn.lock* ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

FROM node:20 AS runner
WORKDIR /cityrep-public

COPY --from=builder /cityrep-public/.next/standalone ./
COPY --from=builder /cityrep-public/.next/static ./.next/static
COPY --from=builder /cityrep-public/public ./public

EXPOSE 3000
CMD ["node", "server.js"]