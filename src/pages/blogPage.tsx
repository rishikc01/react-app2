import { useEffect, useState } from "react";
import BlogCard from "../components/blogCard";
import { MediumPost } from "../types/MediumPost";
import "./blogPage.css";

export default function BlogPage() {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMediumPosts() {
            try {
                const rssUrl = encodeURIComponent("https://medium.com/feed/@hsinghwebstudio");
                const response = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
                );

                const data = await response.json();

                const items = data.items.map((item: any) => {
                    const cleanText = item.description.replace(/<[^>]+>/g, "");

                    const preview =
                        cleanText.length > 200
                            ? cleanText.substring(0, 200) + "..."
                            : cleanText;

                    return {
                        title: item.title,
                        author: item.author,
                        pubDate: item.pubDate,
                        description: preview,
                        link: item.link,
                    };
                });


                setPosts(items);
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMediumPosts();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading posts…</p>;
    }

    return (
        <div className="blog-page-container">
            <h1 className="blog-page-title">Blog</h1>

            <div className="blog-grid">
                {posts.map((post, index) => (
                    <BlogCard
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={new Date(post.pubDate).toLocaleDateString()}
                        description={post.description}
                        link={post.link}
                    />
                ))}
            </div>
        </div>
    );
}
