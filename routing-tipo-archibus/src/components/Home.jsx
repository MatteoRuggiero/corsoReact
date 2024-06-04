
function Home () {
    return (
        <div className="container">
            <h1 className="text-center">I SIMPSON</h1>
        <div id="img-div" className="text-center">
            <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNbzWaqQKNPUszsKUd0qm5hgUq0T5It3VDmFUWNAW1A&s"/>
        </div>
        <div>
            <h2>To start press any key... where's the "any" key?</h2>
        </div>
        <div>
            <h3>Chi siamo:</h3>
            <p>
                Siamo un gruppo di appassionati sviluppatori, uniti dalla passione per la tecnologia e l'innovazione.<br/>
                Nel nostro viaggio attraverso il mondo di React, ci impegniamo a costruire applicazioni web reattive e performanti, che migliorino l'esperienza utente e portino la creatività digitale a nuovi livelli.<br/>
                <br/>
                I membri del team:
            </p>
            <div className="row">
                <div className="col mb-2">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://www.asiamediajournal.com/wp-content/uploads/2022/11/Download-Bart-Simpsons-PFP.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Matteo</h5>
                        <p className="card-text">I can’t promise I’ll try, but I’ll try to try.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://avatarfiles.alphacoders.com/240/240726.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Mauro</h5>
                        <p className="card-text">Your ideas are cool to me, could i subscribe to your newsletter?</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://alicridn.vercel.app/images/the+simpsons+pfp-1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Anne</h5>
                        <p className="card-text">I would kill everyone in this room for a drop of sweet beer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://i.pinimg.com/474x/66/bc/da/66bcda0d744f66db86f232d044b389c7--los-simpsons-homer-simpson.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Lorenzo</h5>
                        <p className="card-text">You tried your best and you failed miserably. The lesson is: Never try.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Home