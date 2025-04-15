# Use a base Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files to container
COPY . .

# Install dependencies
RUN npm install

# Expose default port (adjust if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
