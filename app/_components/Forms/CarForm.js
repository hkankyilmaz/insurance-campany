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
        watch,
        control,
    } = useForm();

    const watchFields = watch()

    React.useEffect(() => {
        reset()

    }, [values, isSubmitSuccessful])


    console.log(errors)
    const onSubmit = async (data) => {
        setIsLoading(true)

        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "maıl");

        let filteredData;
        if (values.person) {
            filteredData = {
                insure: "Arabam Sigortalı",
                varietyInsure: "Kasko",
                tcNo: data.car_person_kasko_TcNo,
                birthDate: data.car_person_kasko_birthdate,
                carNumber: data.car_person_kasko_carNumber,
                job: data.car_person_kasko_job,
                lpg: data.car_person_kasko_lpg,
                nameSurname: data.car_person_kasko_nameSurname,
                phoneNumber: data.car_person_kasko_phoneNumber,
                plugin: data.car_person_kasko_plugin,
                seriesNo: data.car_person_kasko_seriesNo,
                email: data.car_person_kasko_email,
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
                email: data.car_business_kasko_email,
            }

        }

        try {
            await addDoc(dbRef, filteredData)
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
            values.person ?
                await addDoc(dbRefTwo,
                    {
                        to: ["gilanakdagcisigorta@gmail.com"],
                        message: {
                            subject: "Teklif İsteyen Müşteri",
                            html: `
                          <p>  Sigorta :</strong> Arabam Sigortalı</p>
                          <p>Türü : </strong>Kasko / Şahıs</p>
                          <p>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                          <p>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                          <p>Ruhsat Sahibi Tc Kimlik No : </strong>${filteredData.tcNo}</p>
                          <p>Araç Plakası :</strong> ${filteredData.carNumber}</p>
                          <p>Ruhsat Seri No :</strong> ${filteredData.seriesNo}</p>
                          <p>Meslek :</strong> ${filteredData.job}</p>
                          <p>LPG :</strong> ${filteredData.lpg}   </p>                     
                          <p>Orjınal Harici Aksesuar :</strong> ${filteredData.plugin}</p>
                          <p><strong>Doğum Traihi :</strong> ${filteredData.birthDate}</p>
                          <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
                            `,
                        },
                    }
                )
                :
                await addDoc(dbRefTwo,
                    {
                        to: ["gilanakdagcisigorta@gmail.com"],
                        message: {
                            subject: "Teklif İsteyen Müşteri",
                            html: `
                            <p><strong>Sigorta : Arabam Sigortalı</p>
                            <p> <strong>Türü : Kasko / Şirket</p>
                            <p> <strong> Firma Unvanı : </strong>${filteredData.companyNameName}</p>
                            <p> <strong>Vergi Numarası :</strong> ${filteredData.taxNumber}</p>
                            <p> <strong>İl İlçe :</strong> ${filteredData.location}</p>
                            <p> <strong> Telefon Numarası : </strong>${filteredData.phoneNumber}</p>
                            <p> <strong> Araç Plakası : </strong>${filteredData.carNumber}</p>
                            <p> <strong> Ruhsat Seri No : </strong>${filteredData.seriesNo}</p>
                            <p> <strong>LPG : </strong>${filteredData.lpg}   </p>                     
                            <p><strong>Orjınal Harici Aksesuar :</strong> ${filteredData.plugin}</p>
                            <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
                        `,
                        },
                    }
                )

        } catch (error) {
            setIsLoading(false)
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
                            value={watchFields.car_person_kasko_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("car_person_kasko_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_phoneNumber ?? ""}
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
                            value={watchFields.car_person_kasko_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Sahibi TC Kimlik No"
                            {...register("car_person_kasko_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_carNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_person_kasko_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_seriesNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_person_kasko_seriesNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_job ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Meslek"
                            {...register("car_person_kasko_job", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <Controller
                            name='car_person_kasko_lpg'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>LPG</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="LPG"
                                    >
                                        <MenuItem value={"lgpTrue"}>LPG Var</MenuItem>
                                        <MenuItem value={"lpgFalse"}>LPG Yok</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name='car_person_kasko_plugin'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Orjinal Harici Aksesuar</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Orjinal Harici Aksesuar"
                                    >
                                        <MenuItem value={"pluginTrue"}>Orjinal Aksesuar Var</MenuItem>
                                        <MenuItem value={"pluginFalse"}>Orjinal Aksesuar Yok</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("car_person_kasko_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_kasko_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("car_person_kasko_email", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                </div>


                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
                </button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center' >  <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />  <span> Lütfen Tüm Alanları Doldurun ve Tarihleri GG/AA/YYYY şeklinde girin. </span> </p>
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
                            value={watchFields.car_business_kasko_companyName ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("car_business_kasko_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_kasko_taxNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("car_business_kasko_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.car_business_kasko_location ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("car_business_kasko_location", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_kasko_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("car_business_kasko_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_kasko_carNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_business_kasko_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_kasko_seriesNumber ?? ""}
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
                        <Controller
                            name='car_business_kasko_lpg'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>LPG</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="LPG"
                                    >
                                        <MenuItem value={"lgpTrue"}>LPG Var</MenuItem>
                                        <MenuItem value={"lpgFalse"}>LPG Yok</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name='car_business_kasko_plugin'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Orjinal Harici Aksesuar</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Orjinal Harici Aksesuar"
                                    >
                                        <MenuItem value={"pluginTrue"}>Orjinal Aksesuar Var</MenuItem>
                                        <MenuItem value={"pluginFalse"}>Orjinal Aksesuar Yok</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_kasko_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("car_business_kasko_email", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                </div>


                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
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
        watch,
        formState: { errors },
    } = useForm();

    const watchFields = watch()

    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "maıl");
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
                email: data.car_person_traffic_email,


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
                email: data.car_business_traffic_email,

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
            values.person ?
                await addDoc(dbRefTwo,
                    {
                        to: ["gilanakdagcisigorta@gmail.com"],
                        message: {
                            subject: "Teklif İsteyen Müşteri",
                            html: `
                           <p> <strong>Sigorta : </strong>Arabam Sigortalı</p>
                           <p><strong>Türü : </strong>Trafik Sigortasi / Şahıs</p>
                           <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                           <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                           <p><strong>Ruhsat Sahibi Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                           <p><strong>Araç Plakası :</strong> ${filteredData.carNumber}</p>
                           <p><strong>Ruhsat Seri No : </strong>${filteredData.seriesNo}</p>
                           <p><strong>Doğum Traihi :</strong> ${filteredData.birthDate}</p>
                           <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
                            `,
                        },
                    }
                )
                :
                await addDoc(dbRefTwo,
                    {
                        to: ["gilanakdagcisigorta@gmail.com"],
                        message: {
                            subject: "Teklif İsteyen Müşteri",
                            html: `
                            <p> <strong>Sigorta :</strong> Arabam Sigortalı</p>
                            <p><strong> Türü : </strong>Kasko / Şirket</p>
                            <p> <strong>Firma Unvanı :</strong> ${filteredData.companyNameName}</p>
                            <p> <strong>Vergi Numarası :</strong> ${filteredData.taxNumber}</p>
                            <p> <strong>İl İlçe :</strong> ${filteredData.location}</p>
                            <p> <strong>Telefon Numarası :</strong> ${filteredData.phoneNumber}</p>
                            <p> <strong>Araç Plakası : </strong>${filteredData.carNumber}</p>
                            <p><strong> Ruhsat Seri No :</strong> ${filteredData.seriesNo}</p>
                            <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
                                `,
                        },
                    }
                )

        } catch (error) {
            setIsLoading(false)
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
                            value={watchFields.car_person_traffic_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
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
                            value={watchFields.car_person_traffic_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("car_person_traffic_phoneNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.car_person_traffic_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Sahibi TC Kimlik No"
                            {...register("car_person_traffic_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.car_person_traffic_carNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_person_traffic_carNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_person_traffic_seriesNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_person_traffic_seriesNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.car_person_traffic_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("car_person_traffic_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.car_person_traffic_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("car_person_traffic_email", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>

                </div>

                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
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
                            value={watchFields.car_business_traffic_companyName ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("car_business_traffic_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_traffic_taxNumber ?? ""}
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
                            value={watchFields.car_business_traffic_location ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("car_business_traffic_location", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_traffic_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("car_business_traffic_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_traffic_carNumber ?? ""}
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
                            value={watchFields.car_business_traffic_seriesNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_business_traffic_seriesNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.car_business_traffic_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("car_business_traffic_email", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>

                </div>

                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
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
        watch
    } = useForm();
    const watchFields = watch()

    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "mail");
        console.log(data);
        let filteredData = {
            insure: "Arabam Sigortalı",
            varietyInsure: "İhtiyari Mali Mesuliyet Sigortası",
            tcNo: data.car_financial_TcNo,
            birthDate: data.car_financial_birthdate,
            carNumber: data.car_financial_carNumber,
            seriesNo: data.car_financial_seriesNo,
            nameSurname: data.car_financial_nameSurname,
            phoneNumber: data.car_financial_phoneNumber,
            email: data.car_financial_email,
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
            await addDoc(dbRefTwo,
                {
                    to: ["gilanakdagcisigorta@gmail.com"],
                    message: {
                        subject: "Teklif İsteyen Müşteri",
                        html: `
                            <p><strong>Sigorta : </strong>Arabam Sigortalı</p>
                            <p><strong> Türü : </strong>İhtiyari Mali Mesuliyet Sigortası</p>
                            <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                            <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                            <p><strong>Ruhsat Sahibi Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                            <p><strong>Araç Plakası :</strong> ${filteredData.carNumber}</p>
                            <p><strong>Rusat Seri No: </strong>${filteredData.seriesNo}</p>
                            <p><strong>Doğum Traihi :</strong> ${filteredData.birthDate}</p>
                            <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
                            `,
                    },
                }
            )

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    };

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >

            <div className='grid grid-cols-2 gap-x-2' >
                <div>

                    <TextField
                        value={watchFields.car_financial_nameSurname ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Ad Soyad"
                        {...register("car_financial_nameSurname", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.car_financial_phoneNumber ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Cep Telefonu"
                        {...register("car_financial_phoneNumber", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>

                    <TextField
                        value={watchFields.car_financial_TcNo ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Ruhsat Sahibi TC Kimlik No"
                        {...register("car_financial_TcNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.car_financial_carNumber ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Araç Plakası"
                        {...register("car_financial_carNumber", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.car_financial_seriesNo ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Ruhsat Seri No"
                        {...register("car_financial_seriesNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.car_financial_birthdate ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Doğum Tarihi"
                        {...register("car_financial_birthdate", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.car_financial_email ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Email Adresi"
                        {...register("car_financial_email", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
            </div>

            <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
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