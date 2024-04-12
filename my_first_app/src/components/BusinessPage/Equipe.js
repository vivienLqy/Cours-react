import React, { useState } from 'react';
import Personnage from './Personnage'; // En supposant que le composant Personnage soit défini dans un fichier séparé
import Luffy from '../../assets/img/luffy.jpg';
import Nami from '../../assets/img/nami.jpg';
import Robin from '../../assets/img/nico.jpg';
import Chopper from '../../assets/img/chopper.jpg';
import Usopp from '../../assets/img/usopp.jpg';
import Sanji from '../../assets/img/sanji.jpg';
import Zoro from '../../assets/img/zoro.jpg';

const Equipe = () => {
    const [personnages, setPersonnages] = useState([
        { nom: "Chopper", img: Chopper, equipage: "Chapeau de paille" },
        { nom: "Nami", img: Nami, equipage: "Chapeau de paille" },
        { nom: "Monkey D Luffy", img: Luffy, equipage: "Chapeau de paille" },
        { nom: "Nico Robin", img: Robin, equipage: "Chapeau de paille" },
        { nom: "Sanji", img: Sanji, equipage: "Chapeau de paille" },
        { nom: "Roronoa Zoro", img: Zoro, equipage: "Chapeau de paille" },
        { nom: "God Usopp", img: Usopp, equipage: "Chapeau de paille" }
    ]);

    return (
        <div className="container">
            <div className="row">
                {personnages.map((personnage, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Personnage nom={personnage.nom} img={personnage.img} equipage={personnage.equipage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Equipe;
