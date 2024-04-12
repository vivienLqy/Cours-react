
const Personnage = ({ nom, img, equipage }) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={"avis de recherche de " + nom} />
                <div className="card-body">
                    <p className="card-title"> {nom}</p>
                    <p className="card-text">Equipage : {equipage}</p>
                </div>
            </div>
        </div>
    );
};

export default Personnage;