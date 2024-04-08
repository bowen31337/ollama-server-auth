# Use the official Node.js 16 image as a parent image
FROM node:18

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies defined in package.json
RUN npm install

# The application's code will be mounted as a volume
# COPY . .

# Make your application run when the container is launched
# CMD ["node", "index.js"]
