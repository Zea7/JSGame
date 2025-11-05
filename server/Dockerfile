FROM node:24-alpine

WORKDIR /app
COPY package*.json /app

ARG USERNAME
ARG UID
ARG GID

# 기본 node:24-alpine은 node라는 이름의 유저를 사용
# 로컬에서 git을 이용한 버전 관리의 용이성을 위해 docker 내부의 유저를 현재 사용 유저와 같이 가져감
# group, user 생성
RUN deluser node && \
    addgroup -g $GID $USERNAME \
    && adduser -D -u $UID -G $USERNAME $USERNAME

# 필요 시 sudo 설치 (기본적으로 없음)
RUN apk add --no-cache sudo bash \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER $USERNAME

ENV NODE_ENV=development
RUN npm install