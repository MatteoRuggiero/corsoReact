import {Link} from 'react-router-dom'

export default function Mauro () {

    return (
        <>
            <div className="text-align-center">
                <h2>Choose Wisely</h2>
                <ul>
                    <li>
                        <Link to="/Mauro/1">1</Link>
                    </li>
                    <li>
                        <Link to="/Mauro/2">2</Link>
                    </li>
                    <li>
                        <Link to="/Mauro/3">3</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}