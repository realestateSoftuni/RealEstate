#!/bin/bash

# Start the Sail containers
./vendor/bin/sail up -d


if [ $? -ne 0 ]; then
    echo "Server failed to start."
    exit 1
else
    # Print a message only if sail command was successful
    echo "Server started successfully. Visit http://localhost:$(grep APP_PORT .env | cut -d '=' -f2) to access the application."
fi
