# Use Node.js 20 as the base image (LTS version)
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

#Base url values
ENV NEXT_PUBLIC_BASE_URL= https://lb.finance.prod.arimac.xyz
ENV API_USERNAME=indika
ENV API_PASSWORD=7FJkN8Y_D

# Build the application if needed
RUN npm run build 
# npm build removed due to next build time variable dependancies. 

# Expose the port the app runs on
EXPOSE 3000

# Define environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Command to run the application
CMD ["npm", "start"]

