https://stackoverflow.com/questions/42040317/cannot-find-module-for-a-node-js-app-running-in-a-docker-compose-environment => --build

`chmod +x ./back.sh`
`chmod +x ./front.sh`
`./back.sh`
`./front.sh`
docker run -d --name code-snippet-db -p 127.0.0.1:5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=code_snippet postgres

docker start code-snippet-db
docker stop code-snippet-db
docker rm code-snippet-db

docker system df 
docker volume prune

npm run dev init-db to init with the db