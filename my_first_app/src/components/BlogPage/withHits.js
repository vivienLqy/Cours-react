import React, { useState } from "react";

const withHits = (PersonageComponent) => {
    return (props) => {
        const [hits, setHits] = useState(0);
        const [life, setLife] = useState(100);

        const countHits = () => {
            setHits(hits + 1);
        };
        const reduceLife = (param) => {
            console.log("Paramètre reçu :", param);
            console.log("Vie avant la réduction :", life);
            if (param === "zoro") {
                setLife(life - 10);
            } else if (param === "arlong") {
                setLife(life - 10);
            }
            console.log("Vie après la réduction :", life);
        };




        // Nous passons la fonction countHits et l'état hits au composant enveloppé
        return <PersonageComponent countHits={countHits} reduceLife={reduceLife} hits={hits} life={life} {...props} />;
    };
};

export default withHits;
