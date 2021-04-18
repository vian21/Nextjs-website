import Router, { useRouter } from "next/router";
import Link from 'next/link'
import Head from 'next/head';
export default function Login() {
    const router = useRouter();

    async function login(event) {
        event.preventDefault();
        const res = await fetch(`/api/signup`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: event.target.name.value,
                date: event.target.date.value,
                email: event.target.email.value,
                password: event.target.password.value
            }),

        })
        const msg = await res.text();

        if (msg == 'ok') {
            alert("Account successfully created! Please Login")
            router.push("/")
        } else {
            alert("Failed to Create account!")
        }

    }
    return <div className="main">
        <Head>
            <title>Sign up</title>
        </Head>

        <form onSubmit={login}>
        <input type="text" id="name" placeholder="Enter your name" required />
            <input type="text" id="email" placeholder="Enter your email" required />
            <input type="date" id="date" placeholder="yyyy/mm/dd" required />
            <input type="password" id="password" placeholder="Enter your password" required /><br /><br />
            <button className="btn btn-outline-danger" type="submit">Sign up</button>
        </form>

        <style jsx>{`
                form button{
                    width:100%;
                    margin:10px;
                    font-size:20px;
                }
                `}</style>
    </div>
}