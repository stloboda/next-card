import Head from "next/head";
import {MainLayout} from "../layouts/MainLayout";
import {useState, useEffect} from 'react'
import React from 'react';
import Link from "next/link";
import Router from "next/router";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from '../styles/posts.module.css'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Posts({posts}) {
    const clickHome = () => {
        Router.push('/')
    }
    // const [posts, setPosts] = useState([])
    //
    // useEffect(() => {
    //     async function load(){
    //       const response = await fetch('http://localhost:5800/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //     }
    //     load()
    // },[])

    const classes = useStyles();
    return (
        <div>
            {posts.map(post => (
                <li key={post.id}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                                    <a>
                                        belent
                                    </a>
                                </Link>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>

                    </Card>
                </li>
            ))
            }
        </div>
    );
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:5800/posts')
    const posts = await response.json()
    return {
        posts
    }
}