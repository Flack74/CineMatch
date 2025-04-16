# CineMatch: A Movie Recommendation System

CineMatch is a modern movie recommendation platform that uses advanced algorithms to help users find movies that match their preferences. Built with a sleek and intuitive user interface, CineMatch offers personalized movie suggestions, detailed information about films, and an exceptional user experience.

## 🖼️ Screenshots

### Homepage
![Homepage Screenshot](https://github.com/MayankGhatawal/CineMatch/blob/master/public/Screenshot%202024-12-13%20120749.png?raw=true)

### Movie Details
![Movie Details Screenshot](https://github.com/MayankGhatawal/CineMatch/blob/master/public/Screenshot%202024-12-13%20121320.png?raw=true)

## 🚀 Live Demo

Visit the live application: [CineMatch](https://cine-match-two.vercel.app/)

## 🛠️ Technologies Used

### Frontend
- **React.js** - For building the user interface
- **Tailwind CSS** - For styling the application with a modern and responsive design

### Backend
- **Flask** - For handling the server-side logic
- **MongoDB** - As the database for storing user and movie data

### Machine Learning
- **Content-Based Recommendation System** - Suggests movies based on user preferences using:
  - Movie genres
  - Actors
  - Plot keywords

### Deployment
- **Vercel** - For hosting the frontend
- **Flask Backend** - Hosted using a reliable backend service
- **Docker** - For containerizing the application
- **Kubernetes (Minikube)** - For deploying the app in a Kubernetes cluster locally

## 📜 Features

- **Personalized Recommendations**: Find movies that suit your taste.
- **Search Functionality**: Quickly search for your favorite movies.
- **Movie Details**: Get detailed information about any movie, including its cast, genre, and more.
- **Responsive Design**: Enjoy a seamless experience across devices.

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js
- Python 3.9+
- MongoDB Database
- Docker
- Kubernetes (Minikube)

### Installation

#### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/MayankGhatawal/cinematch.git
   cd cinematch-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```

## 🐳 Dockerizing the Application

1. **Create a `Dockerfile`** for the React frontend:
   ```dockerfile
   # Build the app
   FROM node:16 AS build
   WORKDIR /app
   COPY . ./
   RUN npm install
   RUN npm run build

   # Serve the app
   FROM nginx:alpine
   COPY --from=build /app/build /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t flack74621/cinematch:latest .
   ```

3. **Push the Docker image to Docker Hub**:
   ```bash
   docker push flack74621/cinematch:latest
   ```

## ☸️ Deploying to Kubernetes

1. **Start Minikube** to create a local Kubernetes cluster:
   ```bash
   minikube start
   ```

2. **Create Kubernetes `deployment.yaml`**:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: cinematch
     labels:
       app: cinematch
   spec:
     replicas: 2
     selector:
       matchLabels:
         app: cinematch
     template:
       metadata:
         labels:
           app: cinematch
       spec:
         containers:
         - name: cinematch
           image: flack74621/cinematch:latest
           ports:
           - containerPort: 80
   ```

3. **Create Kubernetes `service.yaml`**:
   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: cinematch-service
   spec:
     selector:
       app: cinematch
     ports:
       - protocol: TCP
         port: 80
         targetPort: 80
     type: NodePort
   ```

4. **Deploy to Kubernetes**:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

5. **Access the Application** via Minikube:
   ```bash
   minikube service cinematch-service
   ```

6. **Scale the Deployment**:
   ```bash
   kubectl scale deployment cinematch --replicas=2
   ```

7. **Verify the Deployment**:
   ```bash
   kubectl get pods
   kubectl get svc
   ```

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow the standard GitHub workflow:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 🙌 Acknowledgements

- Inspiration for the recommendation system design was derived from leading streaming platforms.
- Special thanks to open-source libraries and tools that made this project possible.

---

Feel free to reach out if you have any questions or suggestions. Enjoy using CineMatch!
---

