import {Link} from "react-router-dom"
import "./landingPage.css"

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="hero">
                <h1 className="hero-title">RSS react project</h1>
                <p className="hero-subtitle">
                    A collection of some Medium blogs
                </p>

                <Link to="/blog" className="hero-button">
                    View Blog
                </Link>
            </div>
        </div>
    );
}
