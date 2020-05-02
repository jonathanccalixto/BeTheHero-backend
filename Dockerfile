FROM node:12-alpine

# Creates build folder in node` home
RUN mkdir -p /home/node/app

# Sets as default folder
WORKDIR /home/node/app

# Copies the main project to app folder
COPY . ./
# Changes default folder owner
RUN chown -R node:node /home/node/app

# swaps root user to node user
USER node

# Installs packages
RUN yarn \
 && yarn knex migrate:latest

# Exposes port
EXPOSE 4000