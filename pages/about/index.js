import React from 'react'
import Router from "next/router";
import Head from "next/head";
import {MainLayout} from "../../layouts/MainLayout";

export default function About() {
    const linkClick = () => {
        Router.push('/')
    }
    return (
        <MainLayout title={' About | Post Card'}>
            <h1>
                About
            </h1>
            <button onClick={linkClick}>
                go back to home
            </button>
            <button onClick={() => Router.push('/posts')}>
                go to posts
            </button>
        </MainLayout>

    )
}