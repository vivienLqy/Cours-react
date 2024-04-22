import React from 'react';
import Wrapper from '../Wrapper'
import RoronoaZoro from '../../assets/img/zoro_character.webp'
import Arlong from '../../assets/img/Arlong.webp'

const Blog = () => {
    return (
        <Wrapper>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
                        <div className='d-flex flex-column' style={{ width: "200px" }}>
                            <div className='text-center'>
                                <img src={RoronoaZoro} style={{ height: "350px" }} />
                            </div>
                            <button className='btn btn-success'>Zoro attaque</button>
                        </div>
                        <div className='d-flex flex-column' style={{ width: "200px" }}>
                            <div className='text-center'>
                                <img src={Arlong} style={{ height: "350px" }} />
                            </div>
                            <button className='btn btn-success'>Arlong attaque</button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Blog;