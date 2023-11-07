# Use the Nginx official image as the base image
FROM nginx:alpine

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the HTML file from the host to the container
COPY ./index.html /usr/share/nginx/html

# Copy the CSS directory from the host to the container
COPY ./css /usr/share/nginx/html/css

# Copy the JS directory from the host to the container
COPY ./js /usr/share/nginx/html/js

# Copy the images directory from the host to the container
COPY ./images /usr/share/nginx/html/images

# Expose port 80 for the container
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]