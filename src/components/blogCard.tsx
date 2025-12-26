import './blogCard.css'

export type blogCardProps = {
    title: string; 
    author: string; 
    date: string; 
    description: string; 
    link: string;
}

export default function BlogCard({
    title,
    author,
    date,
    description,
    link,
}: blogCardProps) {
    return (
        <div className="blog-card">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-meta">
                {author} • {date}
            </p>
            <p className="blog-description">{description}</p>

            <a href={link} target="_blank" rel="noopener noreferrer" className="blog-link">
                Read on Medium →
            </a>
        </div>
    );
}
