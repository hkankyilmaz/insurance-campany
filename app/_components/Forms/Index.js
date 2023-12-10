"use client"

import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CarForm from './CarForm';
import HouseForm from './HouseForm';
import BusinessForm from './Business';
import Trip from './Trip';
import Health from './Health';
import Image from 'next/image';

import car_ from "../../_assets/Çalışma Yüzeyi 1_8.png"
import car from "../../_assets/Çalışma Yüzeyi 1_9.png"
import home_ from "../../_assets/Çalışma Yüzeyi 1_2.png"
import home from "../../_assets/Çalışma Yüzeyi 1_3.png"
import company_ from "../../_assets/Çalışma Yüzeyi 1_4.png"
import company from "../../_assets/Çalışma Yüzeyi 1_5.png"
import trip_ from "../../_assets/Çalışma Yüzeyi 1.png"
import trip from "../../_assets/Çalışma Yüzeyi 1_1.png"
import heart_ from "../../_assets/Çalışma Yüzeyi 1_6.png"
import heart from "../../_assets/Çalışma Yüzeyi 1_7.png"


function Form({ setOpen, param, hidden }) {

    const [value, setValue] = useState({ first: "car", second: "carIns" })


    React.useEffect(() => {

        if (param) {

            if (param == "arac") {
                setValue({ first: "car", second: "carIns" });
            } else if (param == "ev") {
                setValue({ first: "house", second: "houseIns" });
            } else if (param == "isyeri") {
                setValue({ first: "business", second: "busIns" });
            } else if (param == "seyahat") {
                setValue({ first: "trip", second: "tripIns" });
            } else if (param == "saglik") {
                setValue({ first: "healt", second: "compHealtIns" });
            }
        }


    }, [])

    return (
        <div className=' w-full max-md:px-[20px] max-lg:px-[50px] lg:w-full '>
            <div>
                {hidden == false ?
                    <Image alt='faa' src={value.first == "car" ? car : value.first == "house" ? home : value.first == "business" ? company : value.first == "trip" ? trip : value.first == "healt" ? heart : undefined} className='max-w-[50px] max-h-[50px] mb-3' />
                    :
                    undefined
                }
                <FormControl className='!mb-5' size='small' fullWidth>
                    <InputLabel size='small' >Sigorta Türü</InputLabel>
                    <Select
                        label="Sigorta Türü"
                        id="demo-simple-select"
                        value={value.first}
                        readOnly={param ? true : false}
                        onChange={(e) => setValue({
                            second: e.target.value == "car"
                                ? "carIns"
                                : e.target.value == "house"
                                    ? "houseIns"
                                    : e.target.value == "business"
                                        ? "busIns"
                                        : e.target.value == "trip"
                                            ? "tripIns"
                                            : e.target.value == "healt"
                                                ? "compHealtIns"
                                                : null
                            , first: e.target.value
                        })}
                    >
                        <MenuItem value={"car"}>Arabam Sigortalı</MenuItem>
                        <MenuItem value={"house"}>Evim Sigortalı</MenuItem>
                        <MenuItem value={"business"}>İşyerim Sigortalı</MenuItem>
                        <MenuItem value={"trip"}>Seyahatim Sigortalı</MenuItem>
                        <MenuItem value={"healt"}>Sağlığım Sigortalı</MenuItem>
                    </Select>
                </FormControl>
                {value.first == "car" ?
                    <FormControl className='!mb-5' size='small' fullWidth>
                        <InputLabel size='small'>Aracım Sigortalı</InputLabel>
                        <Select
                            labelId="dlabel-carIns"
                            label="Aracım Sigortalı"
                            value={value.second}
                            onChange={(e) => setValue({ ...value, second: e.target.value })}
                        >
                            <MenuItem value={"carIns"}>Kasko</MenuItem>
                            <MenuItem value={"traffIcins"}>Trafik Sigortası</MenuItem>
                            <MenuItem value={"refIns"}>İhtiyari Mali Mesuliyet Sigortası</MenuItem>

                        </Select>
                    </FormControl>
                    : value.first == "house" ?
                        <FormControl className='!mb-5' size='small' fullWidth>
                            <InputLabel size='small'>Evim Sigortalı</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Evim Sigortalı"
                                value={value.second}
                                onChange={(e) => setValue({ ...value, second: e.target.value })}
                            >
                                <MenuItem value={"houseIns"}>Konut Sigortası</MenuItem>
                                <MenuItem value={"daskIns"}>DASK</MenuItem>
                            </Select>
                        </FormControl>
                        : value.first == "business" ?
                            <FormControl className='!mb-5' size='small' fullWidth>
                                <InputLabel size='small'>İşyerim Sigortalı</InputLabel>
                                <Select
                                    labelId="dlabel-carIns"
                                    label="İşyerim Sigortalı"
                                    value={value.second}
                                    onChange={(e) => setValue({ ...value, second: e.target.value })}
                                >
                                    <MenuItem value={"busIns"}>İşyeri Sigortası</MenuItem>

                                </Select>
                            </FormControl>
                            : value.first == "trip" ?
                                <FormControl className='!mb-5' size='small' fullWidth>
                                    <InputLabel size='small'>Sağlığım Sigortalı</InputLabel>
                                    <Select
                                        labelId="dlabel-carIns"
                                        label="Sağlığım Sigortalı"
                                        value={value.second}
                                        onChange={(e) => setValue({ ...value, second: e.target.value })}
                                    >
                                        <MenuItem value={"tripIns"}>Seyahat Sigortası</MenuItem>


                                    </Select>
                                </FormControl>
                                : value.first == "healt" ?
                                    <FormControl className='!mb-5' size='small' fullWidth>
                                        <InputLabel size='small'>Seyahatim Sigortalı</InputLabel>
                                        <Select
                                            labelId="dlabel-carIns"
                                            label="Seyahatim Sigortalı"
                                            value={value.second}
                                            onChange={(e) => setValue({ ...value, second: e.target.value })}
                                        >
                                            <MenuItem value={"compHealtIns"}>Tamamlayıcı Sağlık Sigortası</MenuItem>
                                            <MenuItem value={"specialHealtIns"}>Özel Sağlık Sigortası</MenuItem>
                                        </Select>
                                    </FormControl>
                                    : undefined
                }
            </div>
            {
                value.first == "car"
                    ? <CarForm variety={value.second} setOpen={setOpen} />
                    : value.first == "house"
                        ? <HouseForm variety={value.second} setOpen={setOpen} />
                        : value.first == "business"
                            ? <BusinessForm setOpen={setOpen} />
                            : value.first == "trip"
                                ? <Trip setOpen={setOpen} />
                                : value.first == "healt"
                                    ? <Health setOpen={setOpen} />
                                    : undefined

            }

        </div>
    )
}

export default Form


