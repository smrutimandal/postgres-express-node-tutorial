FROM node:6.11.5
EXPOSE 1337
RUN mkdir /expressapp
WORKDIR /expressapp
COPY / /expressapp
WORKDIR /expressapp
RUN npm install --production
RUN ln -s /expressapp/node_modules/pm2/bin/pm2 /sbin/pm2
CMD ["pm2","start","--no-daemon","process.json"]