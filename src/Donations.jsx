import "./Donations.css"

function Donations() {
    return (
        <div className="donation-container">
            <div className="bold">Your presence at our celebration is the most treasured gift we could receive!</div>
            <div className="italic">If you wish to help us start our new chapter together, we would gratefully welcome a monetary contribution.</div>
            <div className="bullet-points">
                <div>Venmo</div>
                <div>Zelle</div>
                <div>Cash</div>
            </div>
            <div className="links-container">
                <img height="200" src="/zelle.png"></img>
                <img height="200" src="/venmo.png"></img>
            </div>
        </div>
    );
}

export default Donations;
