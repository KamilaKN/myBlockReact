import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostsPage/PostPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostPage />} />
                <Route path="/post/:id" element={<SinglePostPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
