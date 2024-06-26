import React, { useContext } from 'react';
import RoronoaZoro from '../../assets/img/zoro_character.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { withHits } from './withHits'; // Importer LifeContext depuis withHits.js

const Zoro = ({ countHits, hits, life, name }) => {

    const handleCLick = (atk) => {
        setHits(hits + 1)
        reduceLife(atk)
    }

    return (
        <div className='d-flex flex-column' style={{ width: "200px" }}>
            <div className='text-center'>
                <img src={RoronoaZoro} style={{ height: "350px" }} alt="Roronoa Zoro" />
            </div>
            <button onClick={() => countHits('Arlong')} className='btn btn-success'>{name} attaque</button>
            <div className='mt-2 d-flex justify-content-around'>
                <span className='badge text-bg-warning'>
                    <FontAwesomeIcon icon={faHandFist} /> {hits}
                </span>
                <span className='badge text-bg-success'>
                    <FontAwesomeIcon icon={faGratipay} />{life.Zoro}%
                </span>
            </div>
        </div>
    );
};

export default withHits(Zoro);
