FROM node:16.15

WORKDIR /react
RUN yarn global add typescript ts-node typesync @types/node
