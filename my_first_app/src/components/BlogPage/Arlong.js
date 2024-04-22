import React from 'react';
import ArlongImg from '../../assets/img/Arlong.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import withHits from './withHits';

const Arlong = ({ countHits, hits, life, reduceLife }) => {

    const handleClick = (params) => {
        countHits(params); // Appeler countHits avec le paramètre 'arlong'
        reduceLife(params); // Appeler reduceLife avec le paramètre 'arlong'
    }

    return (
        <div className='d-flex flex-column' style={{ width: "200px" }}>
            <div className='text-center'>
                <img src={ArlongImg} style={{ height: "350px" }} alt="Arlong" />
            </div>
            <button onClick={() => handleClick('arlong')} className='btn btn-success'>Arlong attaque</button>
            <div className='mt-2 d-flex justify-content-around'>
                <span className='badge text-bg-warning'>
                    <FontAwesomeIcon icon={faHandFist} /> {hits}
                </span>
                <span className='badge text-bg-success'>
                    <FontAwesomeIcon icon={faGratipay} />{life}
                </span>
            </div>
        </div>
    );
};

export default withHits(Arlong);
