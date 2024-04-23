import React from 'react'; // Importer React depuis 'react'
import Zoro from './Zoro';
import Arlong from './Arlong';

const Hoc = () => {

    const [life, setLife] = useState({ Zoro: 100, Arlong: 100 });

    const reduceLife = (atk) => {
        setLife((prevLife) => ({
            ...prevLife,
            [atk]: prevLife[atk] - 10
        }));
    }

    return (
        <div>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
                        <Zoro name="Zoro" />
                        <Arlong name="Arlong" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoc;
