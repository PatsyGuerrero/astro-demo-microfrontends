FROM node:lts AS base
ENV PUBLIC_CONTENTFUL_SPACE_ID="jhuukrkt1w7q" \
    PUBLIC_CONTENTFUL_HOST="preview.contentful.com" \
    PUBLIC_CONTENTFUL_TOKEN="TFxAVprHYQICGyKGkWUFdT47KGrDLqsZnP2Av2qZvHo"

WORKDIR /app

COPY package.json package-lock.json ./

FROM base AS prod-deps
RUN npm install --omit=dev

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
COPY . .
RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4323
EXPOSE 4323

CMD ["node", "./dist/server/entry.mjs"]