#!/bin/bash

# Check for Windows OS (this might detect WSL environments as well)
if [ "$OSTYPE" = "msys" ] || [ "$OSTYPE" = "cygwin" ] || [ "$OSTYPE" = "win32" ]; then

    echo "Detected Windows OS. Please ensure Docker Desktop is running and then proceed."
    # Optionally, you can exit or just continue with the rest of your script
    # exit 1
else
    # Check if Docker is running on Linux
    docker info > /dev/null 2>&1

    if [ $? -ne 0 ]; then
        echo "Docker is not running. Attempting to start Docker..."

        # Start Docker using systemd
        sudo systemctl start docker

        # Wait a bit to ensure Docker starts up
        sleep 5

        # Check again if Docker is running after the attempt to start
        docker info > /dev/null 2>&1

        if [ $? -ne 0 ]; then
            echo "Failed to start Docker. Please start it manually or check its status."
            exit 1
        fi
    fi
fi

docker compose up -d
# Start the Sail containers
./vendor/bin/sail up -d

if [ $? -ne 0 ]; then
    echo "Server failed to start."
    exit 1
else
    # Print a message only if sail command was successful
    echo "Server started successfully. Visit http://localhost:$(grep APP_PORT .env | cut -d '=' -f2) to access the application."
fi
