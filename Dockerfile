FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false nodejs &&\
    npm install --global npm

ENV HOME=/home/nodejs

ADD . $HOME/sigmarateexpress
RUN chown -R nodejs:nodejs $HOME/*
# COPY --chown=nodejs:nodejs . $HOME/

USER nodejs
WORKDIR $HOME/sigmarateexpress
RUN npm install

CMD ["node", "./bin/www"]