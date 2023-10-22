import React, { useRef, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm, Controller } from "react-hook-form";
import ErrMessage from '../ErrMessage';
import { ErrorMessage } from '@hookform/error-message';
import ErrorIcon from "@mui/icons-material/Error";
import validator from "validator";
import isEmpty from 'lodash.isempty';
import app from '@/app/_connect/connect';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';

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

    const [isLoading, setIsLoading] = useState(false)

    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };
    const [values, setValues] = React.useState({ person: true, business: false })

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
        clearErrors,
    } = useForm({ defaultValue: { car_person_kasko_lpg: undefined } });

    React.useEffect(() => {
        reset()

    }, [values, isSubmitSuccessful])


    console.log(errors)
    const onSubmit = async (data) => {
        console.log(data)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data);
        let filteredData;
        if (values.person) {
            filteredData = {
                insure: "Arabam Sigortalı",
                varietyInsure: "Kasko",
                tcNo: data.car_person_kasko_TcNo,
                BirthDate: data.car_person_kasko_birthdate,
                carNumber: data.car_person_kasko_carNumber,
                job: data.car_person_kasko_job,
                lpg: data.car_person_kasko_lpg,
                nameSurname: data.car_person_kasko_nameSurname,
                phoneNumber: data.car_person_kasko_phoneNumber,
                plugin: data.car_person_kasko_plugin,
                seriesNo: data.car_person_kasko_seriesNo,
            }
        } else {
            filteredData = {
                insure: "Arabam Sigortalı",
                varietyInsure: "Kasko",
                isPerson: "Şirket",
                carNumber: data.car_business_kasko_carNumber,
                companyNameName: data.car_business_kasko_companyName,
                location: data.car_business_kasko_location,
                lpg: data.car_business_kasko_lpg,
                phoneNumber: data.car_business_kasko_phoneNumber,
                plugin: data.car_business_kasko_plugin,
                seriesNo: data.car_business_kasko_seriesNumber,
                taxNumber: data.car_business_kasko_taxNumber,
            }

        }

        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();
                    setIsLoading(false)
                })
                .catch(error => {
                    toast.error("Form Gönderilemedi");
                    reset();
                    setIsLoading(false)
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
        }
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
                                <MenuItem className='hidden' value={undefined}></MenuItem>
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
                                <MenuItem className='hidden' value={undefined}></MenuItem>
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


                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder"}
                </button>
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


                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder"}
                </button>
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
    const [isLoading, setIsLoading] = useState(false)
    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };
    const [values, setValues] = React.useState({ person: true, business: false })
    React.useEffect(() => {
        reset()

    }, [values])
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data)
        let filteredData = {}
        if (values.person) {
            filteredData = {
                insure: "Arabam Sigortalı",
                varietyInsure: "Trafik Sigortası",
                isPerson: "Şahıs",
                tcNo: data.car_person_traffic_TcNo,
                BirthDate: data.car_person_traffic_birthdate,
                carNumber: data.car_person_traffic_carNumber,
                job: data.car_person_traffic_phoneNumber,
                nameSurname: data.car_person_traffic_nameSurname,
                phoneNumber: data.car_person_traffic_phoneNumber,


            }
        } else {
            filteredData = {
                insure: "Arabam Sigortalı",
                varietyInsure: "Trafik Sigortası",
                isPerson: "Şirket",
                carNumber: data.car_business_traffic_carNumber,
                companyNameName: data.car_business_traffic_companyName,
                location: data.car_business_traffic_location,
                phoneNumber: data.car_business_traffic_phoneNumber,
                seriesNo: data.car_business_traffic_seriesNumber,
                taxNumber: data.car_business_traffic_taxNumber,

            }
        }


        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();
                    setIsLoading(false)
                })
                .catch(error => {
                    toast.error("Form Gönderilemedi");
                    reset();
                    setIsLoading(false)
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
        }
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

                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder"}
                </button>

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

                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder"}
                </button>
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
    const [isLoading, setIsLoading] = useState(false)
    const options = {
        format: 'DD/MM/YYYY',
        delimiters: ['/', '-'],
        strictMode: false,
    };

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data);
        let filteredData = {
            insure: "Arabam Sigortalı",
            varietyInsure: "İhtiyari Mali Mesuliyet Sigortası",
            tcNo: data.car_financial_TcNo,
            BirthDate: data.car_financial_birthdate,
            carNumber: data.car_financial_carNumber,
            job: data.car_financial_seriesNo,
            nameSurname: data.car_financial_nameSurname,
            phoneNumber: data.car_financial_phoneNumber,
        }
        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();
                    setIsLoading(false)
                })
                .catch(error => {
                    toast.error("Form Gönderilemedi");
                    reset();
                    setIsLoading(false)
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
        }
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

            <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >
                {isLoading ? "Gönderiliyor..." : "Formu Gönder"}
            </button>
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