import React, { useRef, useState } from 'react';
import RoronoaZoro from '../../assets/img/zoro_character.webp';
import Arlong from '../../assets/img/Arlong.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';

const Hoc = () => {
    const [zoroHits, setZoroHits] = useState(0);
    const [arlongHits, setArlongHits] = useState(0);

    const zoro = useRef();
    const arlong = useRef();

    const countZoroHits = () => {
        setZoroHits(zoroHits + 1);
    };

    const countArlongHits = () => {
        setArlongHits(arlongHits + 1);
    };

    return (
        <div>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
                        <div className='d-flex flex-column' style={{ width: "200px" }}>
                            <div className='text-center'>
                                <img src={RoronoaZoro} style={{ height: "350px" }} alt="Roronoa Zoro" />
                            </div>
                            <button onClick={countZoroHits} ref={zoro} className='btn btn-success'>Zoro attaque</button>
                            <div className='mt-2 d-flex justify-content-around'>
                                <span className='badge text-bg-warning'>
                                    <FontAwesomeIcon icon={faHandFist} /> {zoroHits}
                                </span>
                                <span className='badge text-bg-success'>
                                    <FontAwesomeIcon icon={faGratipay} />100%
                                </span>
                            </div>
                        </div>
                        <div className='d-flex flex-column' style={{ width: "200px" }}>
                            <div className='text-center'>
                                <img src={Arlong} style={{ height: "350px" }} alt="Arlong" />
                            </div>
                            <button onClick={countArlongHits} ref={arlong} className='btn btn-success'>Arlong attaque</button>
                            <div className='mt-2 d-flex justify-content-around'>
                                <span className='badge text-bg-warning'>
                                    <FontAwesomeIcon icon={faHandFist} /> {arlongHits}
                                </span>
                                <span className='badge text-bg-success'>
                                    <FontAwesomeIcon icon={faGratipay} />100%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoc;
