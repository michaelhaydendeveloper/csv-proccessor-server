FROM node:14.15.4-slim
EXPOSE 6500

WORKDIR /usr/src/app
RUN yarn install --frozen-lockfile
COPY . .

CMD ["yarn", "start"]
