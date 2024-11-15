# Use Node.js base image
FROM node:current-alpine3.18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the app source code
COPY . .

# Expose ports for the React Native Metro bundler and Webpack (for web)
EXPOSE 8081 19000 19001 3000

# Start the Metro bundler for mobile and web dev server
CMD ["yarn", "start"]
