import React, { useState } from "react";

const withHits = (PersonageComponent) => {
    return (props) => {
        const [hits, setHits] = useState(0);

        const countHits = () => {
            setHits(hits + 1);
        };

        // Nous passons la fonction countHits et l'état hits au composant enveloppé
        return <PersonageComponent countHits={countHits} hits={hits} {...props} />;
    };
};

export default withHits;
