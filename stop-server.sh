#!/bin/bash

# Navigate to the Laravel project directory (Modify this if the path is different)
cd /mnt/c/Users/kneno/PhpstormProjects/RealEstate1/

# Stop the Sail containers
./vendor/bin/sail down

# Print a message
echo "Server stopped successfully."
