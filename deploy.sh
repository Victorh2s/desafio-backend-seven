# deploy.sh
#!/bin/bash
git pull origin main
sudo docker compose down
sudo docker compose build --no-cache
sudo docker compose up -d

echo "Verificando se a aplicação está rodando na porta 8080..."
sleep 120  # Dá um tempo para o container subir
curl -I http://localhost:8080 || echo "Verifique os logs do container com: sudo docker compose logs"