#!/bin/bash

# --- 1. .env 파일 생성 ---
#
# `cat << EOF > .env` 구문은
# EOF가 다시 나올 때까지의 모든 내용을 .env 파일에 씁니다.
# 이때 $(command) 부분은 쉘에 의해 실행된 *결과*로 대체됩니다.

echo "Creating .env file..."
cat << EOF > .env
DOCKER_USER=$(whoami)
DOCKER_UID=$(id -u)
DOCKER_GID=$(id -g)
EOF

# --- 2. 생성된 .env 파일 내용 확인 (선택 사항) ---
echo "✅ .env file created with the following content:"
cat .env
echo "------------------------------------------------"

# --- 3. Docker Compose 실행 ---
echo "🚀 Starting Docker Compose in detached mode..."
docker compose up -d

echo "✅ Done."