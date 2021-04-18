import Router, { useRouter } from 'next/router'

export default function Create() {
    const router = useRouter();

    const genders = ['Male', 'Female']
    const create = async (event) => {
        event.preventDefault();

        const req = await fetch("/api/students/create", {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
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
            event.target.clear
        }

    }
    return <div className="main">
        <form onSubmit={create}>
            <center><h2>New Student entry</h2></center>

            <input type='text' id='name' placeholder="Name" required /><br />

            <input type='text' id='grade' placeholder="Grade" required /><br />

            <input type='date' id='date' placeholder="yyyy-mm-dd" required /><br />

            <select type='Gender' placeholder="Name" id='gender'>
                {genders.map((gender, index) => (
                    <option value={index}>{gender}</option>
                ))}
            </select><br /><br />

            <button type="submit">Create</button>
        </form>

    </div>
}