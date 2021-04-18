import Head from 'next/head'

export default function Contacts() {
    return <div>
        <div className='main'>
            <Head>
                <title>Contact Me</title>
            </Head>

            <center><h1>Contacts</h1></center>
            <p>Email: <a href="mailto:igiranezapatrick31@gmail.com">igiranezapatrick31@gmail.com</a></p>
            <p>Github: <a href="https://github.com/vian21" target="blank">Vian21</a></p>
        </div>
    </div>
}