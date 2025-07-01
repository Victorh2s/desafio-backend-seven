# deploy.sh
#!/bin/bash
git pull origin main
sudo docker compose down
sudo docker compose build --no-cache
sudo docker compose up -d