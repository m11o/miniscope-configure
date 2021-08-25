FROM node:16-alpine

RUN apk update

RUN apk --update add tzdata bash alpine-sdk wget
RUN cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
RUN apk del tzdata

RUN mkdir /project
ENV APP_ROOT /project
WORKDIR $APP_ROOT

ADD . $APP_ROOT
