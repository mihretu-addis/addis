# ===============================
# Build Stage
# ===============================
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Next.js expects public/; this repo may not have one — ensure it exists for the runtime COPY.
RUN mkdir -p public

# NEXT_PUBLIC_* must be present at build time for Next.js.
# Pass these via --build-arg / compose build.args (do not COPY .env in CI).
ARG NEXT_PUBLIC_API_URL=
ARG NEXT_PUBLIC_SITE_URL=https://addistech.com

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ===============================
# Runtime Stage (Next.js standalone)
# ===============================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
