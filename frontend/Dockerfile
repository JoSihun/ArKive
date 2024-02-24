# Use an official Node.js runtime as the base image
FROM node:20.11.0-alpine

# Set the working directory in the container
WORKDIR /home/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Change the port number to expose the application
# Modify the value of the EXPOSE instruction to specify the desired port number
EXPOSE 3000

# Build the React application
RUN npm run build

# Set the command to run the application
CMD ["npm", "start"]
