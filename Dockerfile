FROM node:12.14.1
RUN mkdir /usr/local/nvm
USER root
RUN apt-get update && \
apt-get upgrade -y
WORKDIR /usr/src/app
COPY [".","/usr/src/app"]

RUN npm install

EXPOSE 3001

CMD ["npx","nodemon","."]