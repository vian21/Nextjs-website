import Router, { useRouter } from 'next/router';
import moment from 'moment'

export async function getStaticPaths() {
    //get all students data array
    const res = await fetch("http://localhost:3000/api/students/");
    const students = await res.json();

    //use the students array to generate paths
    const paths = students.map(student => {
        return {
            params: { id: student.id.toString() }
        }
    })

    //return the paths created
    //this will be used to generate static page for each student
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const id = context.params.id;

    const res = await fetch(`http://localhost:3000/api/students/${id}`)
    const student = await res.json()

    return { props: { student } }
}

export default function Student({ student }) {
    const router = useRouter()

    const genders = ['Male', 'Female']


    async function deletestudent(event) {
        event.preventDefault();
        if (confirm(`Are sure you want to delete ${student[0].name} ?`)) {
            const req = await fetch(`/api/students/${student[0].id}/delete`);
            const res = await req.text()

            if (res == 'ok') {
                router.push('/projects/students/');
            } else {
                alert("Failed to delete Row in database!")
            }
        }
    }

    async function updateStudent(event) {
        event.preventDefault();

        const req = await fetch(`/api/students/${student[0].id}/update`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                name: event.target.name.value,
                grade: event.target.grade.value,
                DOB: event.target.date.value,
                gender: event.target.gender.value
            })

        })

        const res = await req.text()

        if (res == 'ok') {
            router.push('/projects/students/')
        } else {
            alert("Failed to Update Student info")
        }
    }
    return <div>
        <div className="main">
            <form onSubmit={updateStudent}>
                <span>Name</span>
                <input type="text" defaultValue={student[0].name} id="name" />
                <span>Grade</span>
                <input type="text" defaultValue={student[0].grade} id="grade" />
                <br />

                <span>DOB</span>
                <input type="date" defaultValue={moment(student[0].DOB).format('YYYY-MM-DD')} id="date" placeholder="yyyy-mm-dd" />
                <br />

                <span>Gender</span> <br />
                <select id="gender" >
                    <option value={student[0].gender}>{genders[student[0].gender]}</option>
                    {genders.map((gender, index) => (
                        <option value={index} key={index}>{gender}</option>
                    ))}
                </select>
                <br />
                <button className="btn btn-outline-info" type="submit">Update</button>
                <button className="btn btn-outline-danger" onClick={deletestudent}>Delete</button>
            </form>
        </div>
        <style jsx>{`
        form button{
            width:40%;
            margin:10px
        }
        `}</style>

    </div>
}
