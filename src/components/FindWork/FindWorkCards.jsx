import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import classes from "./FindWorkCards.module.css";
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


function FindWorkCards() {
    return (
        <>
            <div className={classes.FindWorkCards}>
                <div className='container'>
                    <div className={classes.Wrap}>
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
                                        <div className={classes.text}>

                                        <p>Mohir ustalarni ishga taklif etamiz
                                        <b> {item.money} </b><sub> so`m </sub> gacha oylik maosh</p>
                                        <div className="row between-xs">
                                        <button>Boglanish</button>
                                        <button>Batafsil</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <Stack className={classes.stack} spacing={12}>
                        <Pagination count={20} variant="outlined" shape="rounded" />
                    </Stack>

                </div>

            </div>

        </>
    )
}

export default FindWorkCards;
