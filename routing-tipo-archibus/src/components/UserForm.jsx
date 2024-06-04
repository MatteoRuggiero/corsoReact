import { useState } from "react";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const [password, setPassword] = useState("");

  const isEmailValid = (email) => {
    const regexEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmailPattern.test(email);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault(); //Blocco il comportamento standard della form (fare una POST coi dati)

    // Se per qualche motivo la email non è valida, visualizzo un errore
    if (!isEmailValid(email)) {
        setShowError(true);
      return;
    }

    const userDataDummy = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDataDummy),
      });

      if (!response.ok) throw new Error("Errore in invio dati");

      const data = await response.json();
      console.log("Invio dati con successo: ", data);

      alert("Invio dati con successo");

      setEmail("");
      setPassword("");
      setShowError(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>

      {/** Se showError è uguale a true allora renderizza la label di errore */}
      {showError ? (
        <p className="error text-danger">
          * Devi inserire correttamente tutti i campi
        </p>
      ) : (
        false
      )}
        <div className="vertical-center">
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>
      </div>
    </form>
  );
}