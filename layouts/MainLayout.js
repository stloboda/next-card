import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'First Layout'}) {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <nav>
                <Link href={'/'}>
                    <a>
                        Home
                    </a>
                </Link>
                <Link href={'/about'}>
                    <a>
                        About
                    </a>
                </Link>
                <Link href={'/posts'}>
                    <a>
                        Posts
                    </a>
                </Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav{
            position: absolute;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            background: grey;
             opacity: 0.6;
            }
            
           nav a{
            margin-left: 30px;
            margin-top: 20px;
            text-decoration: none;
            color: white;
            }
                 
            main{
            margin-top: 60px;
            padding: 1rem;
            `}
            </style>
        </>
    )
}