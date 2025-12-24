import {Link} from "react-router-dom"

export default function landingPage() {
    return (
        <div>
            <h1>Home page!</h1>
            <Link to="/blog">Go to Blog</Link>
        </div>
    )
}