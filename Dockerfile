FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false nodejs &&\
    npm install --global npm

ENV HOME=/home/nodejs

ADD . $HOME/postlaju
RUN chown -R nodejs:nodejs $HOME/*

USER nodejs
WORKDIR $HOME/postlaju
RUN npm install

CMD ["node", "./bin/www"]