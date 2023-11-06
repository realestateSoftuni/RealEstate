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

docker pull composer:latest

docker run --rm -v $(pwd):/app composer install

docker compose up -d
# Start the Sail containers

./vendor/bin/sail npm install
./vendor/bin/sail npm run build



if [ $? -ne 0 ]; then
    echo "Server failed to start."
    exit 1
else
    # Print a message only if sail command was successful
    echo "Server started successfully. Visit http://localhost:$(grep APP_PORT .env | cut -d '=' -f2) to access the application."
fi

#!/bin/bash

# Your existing server start-up code...

# Set up the Git pre-commit hook (adjust the paths as necessary)
HOOK_SRC="git_hooks/pre-commit"
HOOK_DEST=".git/hooks/pre-commit"

# Check if the hook already exists and is up-to-date
if [ ! -f "$HOOK_DEST" ] || [ "$(diff "$HOOK_SRC" "$HOOK_DEST")" != "" ]; then
    echo "Setting up the Git pre-commit hook..."

    # Copy the pre-commit hook into the .git/hooks directory
    cp "$HOOK_SRC" "$HOOK_DEST"

    # Make the pre-commit hook executable
    chmod +x "$HOOK_DEST"

    echo "Git pre-commit hook set up successfully."
fi

# Your existing code to start the server...
