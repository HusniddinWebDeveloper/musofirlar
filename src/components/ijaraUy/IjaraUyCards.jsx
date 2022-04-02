import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import classes from "./IjaraUyCards.module.css";
import location from '../../assets/icons/location.png';
import search from '../../assets/icons/search.png'
import money from '../../assets/icons/money.png';
import home from '../../assets/icons/homeIcon.png';
import qavat from '../../assets/icons/qavat.png';
import right from '../../assets/icons/right.png';

const Data = [];
for (let i = 0; i < 20; i++) {
    Data.push({
        img: 'https://cdn.pixabay.com/photo/2022/03/23/21/27/road-7087957__340.jpg',
        name: 'uy',
        region: 'Fargona',
        nation: 'uzbekistan',
        money: 200,
        xonaSoni: 3,
        qavat: 2,
    });
}


function IjaraUyCards() {
    return (
        <>
            <div className={classes.IjaraUyCards}>
                <div className='container'>
                    <div className='row between-lg'>
                        <div className={classes.Input}>
                            <select name="" id="">
                                <option value="">Uzbekistan</option>
                                <option value="">Uzbekistan</option>
                                <option value="">Uzbekistan</option>

                            </select>
                            <select name="" id="">
                                <option value="">London</option>
                                <option value="">London</option>
                                <option value="">London</option>

                            </select>
                            <input type="text" placeholder='Izlash uchun shu yerga yozing' />
                            <button><img src={search} /></button>
                        </div>
                        <div className={classes.button}>
                            <button>E`lon berish</button>
                        </div>
                    </div>
                    <h3>Qidiruv natijalari</h3>
                    <div className={classes.cards}>
                        {Data.map((item) => {
                            return (

                                <div className="">
                                    <div className={classes.card}>
                                        <img src={item.img} alt="" />
                                        <div className={classes.list}>
                                            <img src={location} />
                                            <h4>{item.region},{item.nation}</h4>
                                        </div>
                                        <div className={classes.list}>
                                            <img src={money} />
                                            <h4>{item.money}</h4>
                                        </div>
                                        <div className={classes.list}>
                                            <img src={home} />
                                            <h4>{item.xonaSoni} xonali</h4>
                                        </div>
                                        <div className={classes.list}>
                                            <img src={qavat} />
                                            <h4>{item.qavat} qavat</h4>
                                        </div>
                                        <div className={classes.list}>
                                            <button>batafsil <img src={right} /></button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <Stack className={classes.stack} spacing={12}>
                        <Pagination count={20} variant="outlined" shape="rounded" />
                    </Stack>
                    {/* /* <div className='col-md-3'>
                                <div className={classes.card}>
                                    <img src={item.img} alt="" />
                                    <div className="row">
                                        <img src={location}/>
                                        <h4>{item.region},{item.nation}</h4>
                                    </div>
                                    <div className="row">
                                    <img src={money}/>
                                        <p>{item.money}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className={classes.card}>
                                <img src={item.img} alt="" />

                                    list
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className={classes.card}>
                                <img src={item.img} alt={item.name} />

                                    list
                                </div>
                                                </div> */}
                </div>

            </div>

        </>
    )
}

export default IjaraUyCards;
