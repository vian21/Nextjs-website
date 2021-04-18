import Head from 'next/head'
import Project from '../components/project'

export default function Projects() {
    const projects = [
        {
            name: "Fetching JSON",
            link: "/projects/students"
        }
    ]

    return <div>
        <div className='main'>
            <Head>
                <title>Projects</title>
            </Head>
            <center>
                <h1>Projects</h1>
            </center>

            {
                projects.map((project, index) => (
                    <Project key={index} name={project.name} link={project.link} />
                ))
            }
        </div>
    </div>
}