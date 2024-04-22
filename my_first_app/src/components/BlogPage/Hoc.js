import React, { useState } from 'react'; // Importer useState depuis React
import Zoro from './Zoro';
import Arlong from './Arlong';

const Hoc = () => {
    const [arlongLife, setArlongLife] = useState(100);
    const [zoroLife, setZoroLife] = useState(100);

    const reduceLife = (param) => {
        if (param === "zoro") {
            setArlongLife(arlongLife - 10);
        } else if (param === "arlong") {
            setZoroLife(zoroLife - 10);
        }
    };

    return (
        <div>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
                        <Zoro life={zoroLife} reduceLife={reduceLife} />
                        <Arlong life={arlongLife} reduceLife={reduceLife} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoc;
