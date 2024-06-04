import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function MauroDetails () {
    const {secretId} = useParams(); 

    const [rick, setRick] = useState(Math.trunc(Math.random() * 3) + 1)

    return (
        <>
        <section>
            <h5>Secret found: {secretId}, secret is {rick} </h5>
            {secretId == rick ? 
                <h1>YOU LOSE!</h1>
            :
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY5NmQ1eGU1d2RpOXM5bGJzZjU5bTdwbXJ4ZDQxNWpic295NWExdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g7GKcSzwQfugw/giphy.webp" />
            }

            <Link to="/Mauro" className="btn btn-primary">Try Again</Link>
        </section>
        </>
    )
}