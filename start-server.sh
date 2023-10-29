#!/bin/bash

# Navigate to the Laravel project directory (Modify this if the path is different)
cd /mnt/c/Users/kneno/PhpstormProjects/RealEstate1/

# Start the Sail containers
./vendor/bin/sail up -d

# Print a message
echo "Server started successfully. Visit http://localhost:$(grep APP_PORT .env | cut -d '=' -f2) to access the application."
