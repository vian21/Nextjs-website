import Head  from 'next/head'
import Image from 'next/image'

export default function About(){
    return <div>
            <Head>
                <title>About Me!</title>
            </Head>
            
            <div className="main">
                <center>
                    <Image
                    src="/images/patrick.jpg"
                    width={768}
                    height={576}
                    layout='responsive'
                    className="about"
                    />  
                    <h1 className="ab">About Me!</h1>
                </center>
                <p>
                    My name is Patrick Igiraneza and I am an enthusiastic webdevelopper who likes leaning new things
                    and creating solutions. I love coding since I was 13 years old and I love playing around 
                    software and computers.
                </p>
            </div>
            <style jsx>
            {`
                .ab{
                    color:skyblue;
                }
            `}</style>
    </div>
}