#!/bin/bash

# Add all files and folders to stage
git add .

# Commit all staged files and folders
echo -e "\nAdded commit message"
read message

git commit -m "$message"

# Push to repository

git push