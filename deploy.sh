# deploy.sh
#!/bin/bash
git pull origin main
docker-compose down
docker-compose build --no-cache
docker-compose up -d