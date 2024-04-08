# Secure local Ollama API Access with NGINX and Express.js

This project demonstrates configuring NGINX as a reverse proxy to facilitate secure API access, utilizing Express.js for authentication. The configuration ensures that only requests with the correct API key from a local "ollama" server are authorized to access the API, enhancing security and control over API usage.

## Overview

The infrastructure involves NGINX serving as the entry point for API requests. NGINX forwards these requests to an Express.js application designed to authenticate the API key provided in the request headers. Upon successful authentication, NGINX then proxies the request to the actual service endpoint. This setup also includes Docker configurations for deployment and log management.

## Objectives

- **Secure API Endpoints**: Utilize NGINX and Express.js to create a secure gateway for accessing API endpoints, allowing only authorized requests from the local "ollama" server.
- **API Key Authentication**: Implement an authentication layer with Express.js that verifies the presence and correctness of an API key in the request headers.
- **Logging and Monitoring**: Configure NGINX to log requests and responses for monitoring and troubleshooting purposes, with logs persisted to a Docker volume.

## Configuration Details

### NGINX Setup

NGINX is configured to listen for incoming requests on a specified port. It acts as a reverse proxy, directing those requests to an Express.js application for API key verification. Upon successful authentication, NGINX forwards the requests to the designated internal service.

