import React, { useState } from 'react';
import Zoro from './Zoro';
import Arlong from './Arlong';

const Hoc = () => {
    const [zoroHits, setZoroHits] = useState(0);
    const [arlongHits, setArlongHits] = useState(0);
    const [hits, setHits] = useState(0)

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
                        <Zoro countHits={countHits} zoroHits={zoroHits} />
                        <Arlong countHits={countHits} arlongHits={arlongHits} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoc;
