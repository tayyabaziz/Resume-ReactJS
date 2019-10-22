# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app


ENV PORT 8080
ENV HOST 0.0.0.0
ENV DB mongodb+srv://meanword:MeanWord@AtlasDB@meanword-vkghc.mongodb.net/tayyabaziz?retryWrites=true&w=majority

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# expose port 3000 for our server to run on
EXPOSE 3000

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]