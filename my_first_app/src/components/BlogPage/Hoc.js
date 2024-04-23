import React from 'react'; // Importer React depuis 'react'
import Zoro from './Zoro';
import Arlong from './Arlong';

const Hoc = () => {

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
