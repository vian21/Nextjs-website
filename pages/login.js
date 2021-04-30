import Link from 'next/link'
import Head from 'next/head';
import Cookies from 'js-cookie'

export default function Login() {
    
    //loginClick handler
    async function login(event) {

        event.preventDefault();

        const res = await fetch(`/api/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            }),

        })

        const msg = await res.json();

        if (msg.token !== 'ko') {

            //set cookie using the received JSON Web Token
            Cookies.set('token', `${msg.token}`, { expires: 7, path: '/' });

            //resend user to main page by a fresh reload of page
            window.location.href = "/";

        } else {
            alert("Wrong credentials")
        }

    }

    return <div className="main">

        <Head>
            <title>Login</title>
        </Head>

        <form onSubmit={login}>

            <input type="text" id="email" placeholder="Enter your email" required />
            <input type="password" id="password" placeholder="Enter your password" required /><br /><br />
            <button className="btn btn-outline-info" type="submit">Login</button>

            <Link href="/signup">
                <a><button className="btn btn-outline-danger" type="Signup">Signup</button></a>
            </Link>

        </form>

        <style jsx>{`
            form button{
                width:40%;
                margin:10px
            }
        `}</style>
    </div>
}