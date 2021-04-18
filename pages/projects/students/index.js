import Link from 'next/link';

export default function Students({students}){
    return <div>

            <div className='main'>
                <h1>Feching data from mysql database</h1>
               
                <ol>
                    {students.map((student, index)=>(
                        <li key={index}>
                            <Link href={'/projects/students/'+student.id}>
                                <a>{student.name +' '+ student.grade}</a>
                            </Link>
                        </li>
                    ))}
                </ol>

                <Link href='/projects/students/create'>
                    <a><button>New</button></a>
                </Link>
            </div>
    </div>
}

export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/students")
    const students = await res.json()
    return{
        props:{students}
    }
}