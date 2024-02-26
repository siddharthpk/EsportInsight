# EsportInsight

## Overview

EsportInsight is a comprehensive platform designed for esports analytics and visualization. It leverages live match data to provide insights into game analytics, player performance, and match outcomes through intuitive and interactive dashboards.

## Features

- **Live Match Tracking:** Displays real-time information on ongoing esports matches.
- **Data Analytics Dashboard:** Offers in-depth analytics on player performances and game statistics.
- **Interactive Visualizations:** Utilizes D3.js for dynamic data visualization, enhancing user engagement.

## Architecture

The project is divided into two main components:

- **Backend:** A Node.js application with Express for handling API requests and serving data.
- **Frontend:** A React application, written in TypeScript, providing the user interface and visualizations.

### Technologies

- **Frontend:** React, TypeScript, D3.js
- **Backend:** Node.js, Express
- **Database:** MongoDB (optional, for storing match data)
- **Deployment:** Docker

## Getting Started

### Prerequisites

- Node.js (version 20 or newer)
- npm (version 6 or newer)
- Docker

### Backend Setup

1. **Build the Docker Image**

   Navigate to the backend directory and build the Docker image:

   ```bash
   cd backend
   docker build -t esportinsight-backend .

2. **Run the Container**

    Run the backend container, specifying the port:

    ```bash
    docker run -p 5000:5000 esportinsight-backend

### Frontend Setup
1. **Build the Docker Image**

   Navigate to the frontend directory and build the Docker image:

   ```bash
   cd frontend
   docker build -t esportinsight-frontend .

2. **Run the Container**

    Run the frontend container, specifying the port:

    ```bash
    docker run -p 3000:3000 esportinsight-frontend

### Accessing the Application 
Open a web browser and navigate to http://localhost:3000 to view the EsportInsight dashboard.

## License
EsportInsight is licensed under the MIT License. See the LICENSE file for more details.
