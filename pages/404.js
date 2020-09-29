import Link from "next/link";
import classes from '../styles/error.module.css'


export default function ErrorPage() {
    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.firstText}>
                    Error 404
                </h1>
                <p>
                    <Link href={'/'}>
                        <a className={classes.secondText}>
                            Please go to back main page
                        </a>
                    </Link>
                </p>
            </div>
        </>
    )

}