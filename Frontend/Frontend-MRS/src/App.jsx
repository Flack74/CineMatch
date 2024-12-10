import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import MoviesList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import GenreCard from "./components/GenreCard";
// import LoginForm from './components/LoginForm';
// import SignUpForm from './components/SignUpForm';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/category/:categoryName/movies" element={<MovieList />} /> */}
              <Route path="/movies" element={<MoviesList />} />
              <Route path="/genres" element={<GenreCard/>} />
              <Route path="/movies/:category" element={<MoviesList />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />

              {/* Uncomment if Login/SignUp pages are needed */}
              {/* <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<SignUpForm />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
