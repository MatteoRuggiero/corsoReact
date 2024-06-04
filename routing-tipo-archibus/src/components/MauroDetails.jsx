import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

export default function MauroDetails () {
    const {secretId} = useParams(); 


    return (
        <>
        <section>
            <h5>Secret found: {secretId} </h5>

            <Link to="/Mauro" className="btn btn-primary">Try Again</Link>
        </section>
        </>
    )
}