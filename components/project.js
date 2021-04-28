/*
 * Project Component
 * will generate a clickable button for each project in project array
*/

export default function Project({ name, link }) {
    return <div>

        <a href={link}><button className="project">{name} →</button></a>

        <style jsx>{`
                .project{
                    margin-top:10px;
                }
    `}</style>
    </div>


}