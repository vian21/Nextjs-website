import Link from 'next/link'

export default function Project({name,link}){
    return <Link href={link}>
                <a><button>{name} →</button></a>
           </Link>
}