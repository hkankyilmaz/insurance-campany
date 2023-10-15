import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import ErrMessage from '../ErrMessage';
import { ErrorMessage } from '@hookform/error-message';
import ErrorIcon from "@mui/icons-material/Error";
import validator from "validator";
import isEmpty from 'lodash.isempty';

function CarForm({ variety }) {
    if (variety == "carIns") {
        return <CarInsurance />
    } else if (variety == "traffIcins") {
        return <TrafficInsurance />
    } else if (variety == "refIns") {
        return <ResInsurance />
    }
}

export default CarForm

function CarInsurance() {

    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };
    const [values, setValues] = React.useState({ person: true, business: false })

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors
    } = useForm();
    console.log(errors)
    const onSubmit = async (data) => {
        console.log(data);
    };
    if (values.person) {
        return (
            <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <FormControlLabel control={<Checkbox checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ad/Soyad"
                            {...register("car_person_kasko_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("car_person_kasko_phoneNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isMobilePhone: (value) =>
                                //         validator?.isMobilePhone(value, 'tr-TR') ||
                                //         "Lütfen geçerli bir telefon numarası girin.",
                                // },
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Sahibi Tc No"
                            {...register("car_person_kasko_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_person_kasko_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_person_kasko_seriesNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Meslek"
                            {...register("car_person_kasko_job", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Lpg</InputLabel>
                            <Select
                                onChange={() => clearErrors("car_person_kasko_lpg")}
                                labelId="dlabel-carIns"
                                label="Lpg"
                                {...register("car_person_kasko_lpg", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"lgpTrue"}>Lpg Var</MenuItem>
                                <MenuItem value={"lpgFalse"}>Lpg Yok</MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Orjinal Harici Aksesuar</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Orjinal Harici Aksesuar"
                                {...register("car_person_kasko_plugin", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"pluginTrue"}>Orjinal Aksesuar Var</MenuItem>
                                <MenuItem value={"pluginFalse"}>Orjinal Aksesuar Yok</MenuItem>


                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("car_person_kasko_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center' >  <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />  <span> Lütfen Tüm Alanları Doldurun. </span> </p>
                    : undefined

                }
            </form>
        )
    } else {
        return (
            <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <FormControlLabel control={<Checkbox checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("car_business_kasko_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("car_business_kasko_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("car_business_kasko_location", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("car_business_kasko_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_business_kasko_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_business_kasko_seriesNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isDate: (value) =>
                                //         validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                //         "Lütfen sadece harf girin.",
                                // },
                            })}
                        />

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth defaultValue={" "}>

                            <InputLabel size='small'>Lpg</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Lpg"
                                {...register("car_business_kasko_lpg", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"lgpTrue"}>Lpg Var</MenuItem>
                                <MenuItem value={"lpgFalse"}>Lpg Yok</MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Orjinal Harici Aksesuar</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Orjinal Harici Aksesuar"
                                {...register("car_business_kasko_plugin", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"lgpTrue"}>Orjinal Aksesuar Var</MenuItem>
                                <MenuItem value={"lpgFalse"}>Orjinal Aksesuar Yok</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center' >
                        <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />
                        <span>
                            Lütfen Tüm Alanları Doldurun ve Tarihleri GG/AA/YYYY şeklinde girin.
                        </span>
                    </p>
                    : undefined

                }
            </form>)
    }

}

function TrafficInsurance() {
    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };
    const [values, setValues] = React.useState({ person: true, business: false })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(errors);
    const onSubmit = async (data) => {

        const { email, password } = data;
        let options = { redirect: false, email, password };

        console.log(data);
    };
    if (values.person) {
        return (
            <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <FormControlLabel control={<Checkbox checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ad/Soyad"
                            {...register("car_person_traffic_nameSurname", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isDate: (value) =>
                                //         validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                //         "Lütfen sadece harf girin.",
                                // },
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("car_person_traffic_phoneNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Sahibi Tc No"
                            {...register("car_person_traffic_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_person_traffic_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_person_traffic_seriesNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("car_person_traffic_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center' >
                        <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />
                        <span>
                            Lütfen Tüm Alanları Doldurun ve Tarihleri GG/AA/YYYY şeklinde girin.
                        </span>
                    </p>
                    : undefined

                }
            </form>
        )
    } else {
        return (
            <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <FormControlLabel control={<Checkbox checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("car_business_traffic_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("car_business_traffic_taxNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isMobilePhone: (value) =>
                                //         validator?.isMobilePhone(value, 'tr-TR') ||
                                //         "Lütfen geçerli bir telefon numarası girin.",
                                // },
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("car_business_traffic_location", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("car_business_traffic_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_business_traffic_carNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isAlphanumeric: (value) =>
                                //         validator?.isAlphanumeric(value, 'tr-TR') ||
                                //         "Lütfen sadece sayı ve harf girin.",
                                // },
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_business_traffic_seriesNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>

                </div>

                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center' >
                        <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />
                        <span>
                            Lütfen Tüm Alanları Doldurun ve Tarihleri GG/AA/YYYY şeklinde girin.
                        </span>
                    </p>
                    : undefined

                }
            </form>)
    }
}

function ResInsurance() {
    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(errors);
    const onSubmit = async (data) => {

        const { email, password } = data;
        let options = { redirect: false, email, password };

        console.log(data);
    };

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >

            <div className='grid grid-cols-2 gap-x-2' >
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Ad/Soyad"
                        {...register("car_financial_nameSurname", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Cep Telefonu"
                        {...register("car_financial_phoneNumber", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>

                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Ruhsat Sahibi Tc No"
                        {...register("car_financial_TcNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Araç Plakası"
                        {...register("car_financial_carNumber", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Ruhsat Seri No"
                        {...register("car_financial_seriesNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Doğum Tarihi"
                        {...register("car_financial_birthdate", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
            </div>

            <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>
            {!isEmpty(errors) ?
                <p className='flex justify-center item-center' >
                    <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />
                    <span>
                        Lütfen Tüm Alanları Doldurun ve Tarihleri GG/AA/YYYY şeklinde girin.
                    </span>
                </p>
                : undefined

            }
        </form>
    )

}