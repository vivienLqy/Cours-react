import RoronoaZoro from '../../assets/img/zoro_character.webp';

const Zoro = () => {
    return (
        <div className='d-flex flex-column' style={{ width: "200px" }}>
            <div className='text-center'>
                <img src={RoronoaZoro} style={{ height: "350px" }} alt="Roronoa Zoro" />
            </div>
            <button onClick={() => countHits('zoro')} className='btn btn-success'>Zoro attaque</button>
            <div className='mt-2 d-flex justify-content-around'>
                <span className='badge text-bg-warning'>
                    <FontAwesomeIcon icon={faHandFist} /> {zoroHits}
                </span>
                <span className='badge text-bg-success'>
                    <FontAwesomeIcon icon={faGratipay} />100%
                </span>
            </div>
        </div>
    );
};

export default Zoro;