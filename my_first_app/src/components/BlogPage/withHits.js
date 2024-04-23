import React, { createContext, useState } from "react";

const LifeContext = createContext();

const withHits = (PersonageComponent) => {
    return (props) => {
        const [hits, setHits] = useState(0);


        const countHits = (atk) => {
            setHits((currentHits) => currentHits + 1);

            setLife
        };

        return (
            <LifeContext.Provider value={{ hits, life, countHits }}>
                <PersonageComponent countHits={countHits} hits={hits} life={life} {...props} />
            </LifeContext.Provider>
        );
    };
};

export { withHits, LifeContext }; // Exporter LifeContext en plus de l'exportation par défaut

export default withHits;
