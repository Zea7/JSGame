# JSGame
Simple Online p2p game based on JS

---  
## For Dev   
개발의 편의성을 위해 Vite + React + Phaser로 client를 구성.  
docker compose를 사용하였으며  

```  
docker compose up -d  
```   
를 이용해 dev server와 dev client 두 개를 띄울 수 있다.  

처음 사용자의 경우,  
권한 문제 해결을 위해 UID와 GID를 덮어 쓰게 되어 있으므로   

```   
chmod +x start.sh  
./start.sh  
```   
를 통해 .env 파일을 생성하고 권한을 옮기면 된다.   

브라우저를 통해 localhost:5173~5174로 두 개의 client를 바로 띄울 수 있으며   
사용하는 커널의 유저와 gid를 그대로 가져가기 때문에 permission 문제 없이   
volume으로 연결된 client 코드 수정이 바로 적용이 됨.  

서버의 경우 개발의 편의성을 위해 demon을 띄우는 설정까지는 해두지 않아  
추후에 추가할 예정.   

해당 코드는 스켈레톤 코드로 놔두고 브랜치를 파서 개발을 한 뒤,  
나중에 main에 merge하는 식으로 개발할 예정.   