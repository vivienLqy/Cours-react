import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import Zoro from './Zoro';
import Arlong from './Arlong';

const Hoc = () => {
    const [zoroHits, setZoroHits] = useState(0);
    const [arlongHits, setArlongHits] = useState(0);


    const countHits = (params) => {
        if (params === 'zoro') {
            setZoroHits(zoroHits + 1);
        } if (params === 'arlong') {
            setArlongHits(arlongHits + 1);
        }
    };

    return (
        <div>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
                        <Zoro />
                        <Arlong />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoc;
