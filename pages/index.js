import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../layouts/MainLayout";

export default function Main() {
    return <MainLayout title={'Post Card'}>
        <h1>
            Main
        </h1>
        <p>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
        </p>
        <p>
            <Link href={'/posts'}>
                <a>Posts</a>
            </Link>
        </p>
    </MainLayout>
}