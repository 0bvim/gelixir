.PHONY: all logs status

all: start_db
	@echo "Starting phx server"
	@mix phx.server

start_db:
	@if [ $$(docker ps -aq -f name=postres_backend) ]; then \
		echo "Container 'postres_backend' already exists. Starting it..."; \
		docker start postres_backend; \
	else \
		docker run -d \
		--name postres_backend \
		-e POSTGRES_USER=backend_stuff \
		-e POSTGRES_PASSWORD=1234 \
		-p 5435:5432 \
		postgres:latest; \
	fi
logs:
	@echo "Showing logs..."
	docker-compose logs -f

status:
	@echo "Checking service status..."
	docker-compose ps
