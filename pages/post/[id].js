import {useRouter} from "next/router";
import Link from "next/link";

export default function Post({post}) {
    // const router = useRouter()
    return (
        <div>
            <h1>
                {post.title}
                {/*Post {router.query.id}*/}
            </h1>
            <hr/>
            <p>
                {post.author}
            </p>
            <p>
                <Link href={'/posts'}>
                    <a>
                        go to back posts
                    </a>
                </Link>
            </p>
        </div>
    )
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:5800/posts/${ctx.query.id}`)
    const post = await response.json()
    return {
        post
    }
}