# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the necessary port
EXPOSE 3022
EXPOSE 3021
EXPOSE 3025

# Command to run the Node.js script
CMD ["node", "server.js"]

