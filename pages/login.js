import Router, { useRouter } from "next/router";
import Link from 'next/link'
import Head from 'next/head';
export default function Login() {
    const router = useRouter();

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
        const msg = await res.text();

        if (msg == 'ok') {
            window.location.href = "/";
        } else {
            alert(msg)
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