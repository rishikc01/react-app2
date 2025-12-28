import BlogCard from "../components/blogCard";
import "./blogPage.css";

export default function BlogPage() {
    const posts = [
        {
            title: "meow meow",
            author: "car",
            date: "Jan 77, 2024",
            description: "meow emwo emow",
            link: "https://medium.com",
        },
    ];

    return (
        <div className="blog-page-container">
            <h1 className="blog-page-title">Blog</h1>

            <div className="blog-grid">
                {posts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </div>
    );
}
