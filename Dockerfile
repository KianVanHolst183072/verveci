# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the backend and static content into the container
COPY ./backend /usr/src/app/backend
COPY ./app /usr/src/app/app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World
ENV PYTHONPATH /usr/src/app/backend:$PYTHONPATH


# Run uvicorn when the container launches
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "80"]
