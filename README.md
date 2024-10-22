# 🎬 CineMatch - Movie Recommendation System

![CineMatch Logo](https://cdn.sanity.io/images/qyzm5ged/production/6e9ba02908d8f9589ec90db79eeff45288d8f954-1762x985.gif/providing-real-time-search-suggestions.gif) <!-- Add your project logo here -->

CineMatch is an AI-powered movie recommendation system that uses **Content-Based Filtering** and **AI** techniques to recommend personalized movies to users. The system learns from user preferences and suggests movies based on genre, cast, director, and more.

![Technologies Used](https://img.shields.io/badge/Frontend-React.js-blue)
![Backend](https://img.shields.io/badge/Backend-Flask-orange)
![Database](https://img.shields.io/badge/Database-MongoDB-green)
![ML](https://img.shields.io/badge/MachineLearning-ContentBased-blueviolet)

---

## 🌟 Features

- 🎥 **Personalized Recommendations**: Get movie suggestions based on your preferences.
- 🔍 **Movie Search**: Search for movies by title, genre, or cast.
- 📋 **User Profiles**: Sign up, login, and get custom movie lists.
- ⚡ **Real-Time Data**: Fetch data from MongoDB to ensure up-to-date recommendations.
- 💡 **AI Integration**: AI-driven algorithms for enhanced accuracy.
- 🎨 **Responsive UI**: Tailored user interface with **Tailwind CSS**.

---

## 🚀 Live Demo

//Check out the live version of CineMatch here: [Live Demo](https://your-demo-link.com)

---

## 🛠️ Tech Stack

| **Category**    | **Technology**                       |
|-----------------|--------------------------------------|
| Frontend        | React.js, Tailwind CSS               |
| Backend         | Flask, Python                        |
| Database        | MongoDB                              |
| Machine Learning| Content-Based Filtering (TF-IDF, Cosine Similarity) |
| Deployment      | Heroku/Vercel (Frontend), Flask (Backend) |

---

## 📂 Project Structure

```bash
CineMatch/
│
├── frontend/               # React.js frontend
│   ├── src/
│   ├── public/
│   ├── components/
│   └── App.js
│
├── backend/                # Flask backend
│   ├── app.py
│   ├── models.py
│   └── routes.py
│
├── data/                   # Movie dataset (MongoDB)
├── machine_learning/       # AI models (Content-based filtering)
└── README.md
