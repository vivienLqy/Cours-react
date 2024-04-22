
import ArlongImg from '../../assets/img/Arlong.webp';

const Arlong = () => {
    return (
        <div className='d-flex flex-column' style={{ width: "200px" }}>
            <div className='text-center'>
                <img src={ArlongImg} style={{ height: "350px" }} alt="Arlong" />
            </div>
            <button onClick={() => countHits('arlong')} className='btn btn-success'>Arlong attaque</button>
            <div className='mt-2 d-flex justify-content-around'>
                <span className='badge text-bg-warning'>
                    <FontAwesomeIcon icon={faHandFist} /> {arlongHits}
                </span>
                <span className='badge text-bg-success'>
                    <FontAwesomeIcon icon={faGratipay} />100%
                </span>
            </div>
        </div>
    );
};

export default Arlong;