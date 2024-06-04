import { Link } from "react-router-dom"
import UserForm from "./UserForm"
import "./Lorenzo.css"
export default function Lorenzo () {
    return (
        <section style={{border: "1px solid red"}} className="d-flex flex-column align-items-center pt-5 vh-100">
        <h2>Lorenzo</h2>

        <img
        src="weWantYou.png"
        ></img>
        <UserForm />
       <div>
        <Link to="/" className="button2">Home Page</Link>
        </div>
    </section>
    )
}