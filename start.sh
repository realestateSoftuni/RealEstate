#!bin/bash

# Start docker containers
docker-compose up -d

# Start the application server
php artisan serve
