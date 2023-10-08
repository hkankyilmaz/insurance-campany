"use client"

import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CarForm from './CarForm';


function Form() {

    const [value, setValue] = useState({ first: "car", second: "carIns" })

    return (
        <div className=' w-full max-md:px-[20px] max-lg:px-[50px] lg:w-full '>
            <FormControl className='!mb-5' size='small' fullWidth>
                <InputLabel size='small' >Sigorta Türü</InputLabel>
                <Select
                    label="Sigorta Türü"
                    id="demo-simple-select"
                    value={value.first}
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
                            <MenuItem value={"daskIcins"}>Dask</MenuItem>
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
            {
                value.first == "car"
                    ? <CarForm variety={value.second} />
                    : undefined

            }

        </div>
    )
}

export default Form


