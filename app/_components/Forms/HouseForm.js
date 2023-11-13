import React, { useState } from 'react'
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
import validator from "validator";
import isEmpty from 'lodash.isempty';
import app from '@/app/_connect/connect';
import ErrorIcon from "@mui/icons-material/Error";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
function HouseForm({ variety, setOpen }) {
    if (variety == "houseIns") {
        return <HouseInsurance setOpen={setOpen} />
    } else if (variety == "daskIns") {
        return <DaskInsurance setOpen={setOpen} />
    } else return <HouseInsurance setOpen={setOpen} />
}

export default HouseForm

function HouseInsurance({ setOpen }) {
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
        control,
        formState: { errors },
    } = useForm();
    const watchFields = watch()
    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "mail");
        let filteredData = {}
        if (values.person) {
            filteredData = {
                insure: "Evim Sigortalı",
                varietyInsure: "Konut Sigortası",
                isPerson: "Şahıs",
                tcNo: data.house_person_konut_TcNo,
                adress: data.house_person_konut_adress,
                area: data.house_person_konut_area,
                birthdate: data.house_person_konut_birthdate,
                flat: data.house_person_konut_flat,
                madeOf: data.house_person_konut_madeOf,
                nameSurname: data.house_person_konut_nameSurname,
                phoneNumber: data.house_person_konut_phoneNumber,
                priceOfGlass: data.house_person_konut_priceOfGlass,
                priceOfItems: data.house_person_konut_priceOfitems,
                usage: data.house_person_konut_usage,
                owner: data.house_person_konut_own,
                wflat: data.house_person_konut_wflat,
                yearOfBuild: data.house_person_konut_yearOfBuild,
                email: data.house_person_konut_email

            }
        } else {
            filteredData = {
                insure: "Evim Sigortalı",
                varietyInsure: "Konut Sigortası",
                isPerson: "Şirket",
                adress: data.house_business_konut_adress,
                area: data.house_business_konut_area,
                companyName: data.house_business_konut_companyName,
                flat: data.house_business_konut_flat,
                location: data.house_business_konut_location,
                madeOf: data.house_business_konut_madeOf,
                phoneNumber: data.house_business_konut_phoneNumber,
                priceOfGlass: data.house_business_konut_priceOfGlass,
                priceOfItems: data.house_business_konut_priceOfitems,
                taxNumber: data.house_business_konut_taxNumber,
                usage: data.house_business_konut_usage,
                owner: data.house_business_konut_own,
                wflat: data.house_business_konut_wflat,
                yearOfBuild: data.house_business_konut_yearOfBuild,
                email: data.house_business_konut_email
            }
        }


        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();
                    setIsLoading(false)
                    setOpen(true)
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
                           <p> <strong>Sigorta :</strong> Evim Sigortalı</p>
                           <p> <strong>Türü :</strong> Evim Sigortası / Şahıs</p>
                           <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                           <p> <strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                           <p><strong>Tc Kimlik No : </strong>${filteredData.tcNo}</p>
                           <p><strong>Doğum Traihi :</strong> ${filteredData.birthDate}</p>
                           <p> <strong>Açık Adres :</strong> ${filteredData.adress}
                           <p><strong>Evin Büyüklüğü(m2) :</strong> ${filteredData.area}</p>
                           <p><strong>Binanın Kat Sayısı :</strong>${filteredData.flat}</p>
                           <p><strong>Bulunduğu Kat :</strong> ${filteredData.wflat}</p>
                           <p> <strong>Yapı Tarzı : </strong>${filteredData.madeOf}</p>
                           <p><strong>Kullanım Şekli : </strong>${filteredData.usage}</p>
                           <p><strong>Bina İnşa Yılı :</strong> ${filteredData.yearOfBuild}</p>
                           <p><strong>Eşya Bedeli :</strong> ${filteredData.priceOfItems}</p>
                           <p> <strong>Cam Bedeli :</strong> ${filteredData.priceOfGlass}</p>
                           <p> <strong>Email Adresi :</strong> ${filteredData.email}</p>
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
                            <p><strong> Sigorta : </strong>Evim Sigortalı</p>
                            <p> <strong> Türü :</strong> Evim Sigortası / Şirket</p>
                            <p>  <strong>  Firma Unvanı :</strong> ${filteredData.companyName}</p>
                            <p> <strong>  Vergi Numarası : </strong>${filteredData.taxNumber}</p>
                            <p> <strong> İl İlçe : </strong>${filteredData.location}</p>
                            <p> <strong> Telefon Numarası :</strong> ${filteredData.phoneNumber}</p>
                            <p> <strong>  Açık Adres :</strong> ${filteredData.adress}</p>
                            <p> <strong>  Evin Büyüklüğü(m2) :</strong> ${filteredData.area}</p>
                            <p> <strong>  Binanın Kat Sayısı :</strong>${filteredData.flat}</p>
                            <p><strong> Bulunduğu Kat : </strong>${filteredData.wflat}</p>
                            <p> <strong> Yapı Tarzı : </strong>${filteredData.madeOf}</p>
                            <p><strong> Kullanım Şekli :</strong> ${filteredData.usage}</p>
                            <p> <strong> Bina İnşa Yılı : </strong>${filteredData.yearOfBuild}</p>
                            <p> <strong> Eşya Bedeli : </strong>${filteredData.priceOfItems}</p>
                            <p> <strong> Cam Bedeli : </strong>${filteredData.priceOfGlass}</p>
                            <p> <strong> Email Adresi : </strong>${filteredData.email}</p>
                                `,
                        },
                    }
                )

        } catch (error) {
            console.log(error)
            setIsLoading(false)
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
                            value={watchFields.house_person_konut_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("house_person_konut_nameSurname", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("house_person_konut_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("house_person_konut_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_person_konut_birthdate", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_person_konut_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_person_konut_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_flat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_person_konut_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_wflat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bulunduğu Kat"
                            {...register("house_person_konut_wflat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <Controller
                            name='house_person_konut_madeOf'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Yapı Tarzı</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Yapı Tarzı"
                                    >
                                        <MenuItem value={"kargir"}>Kargir</MenuItem>
                                        <MenuItem value={"yigmaKargir"}>Yığma Kargir</MenuItem>
                                        <MenuItem value={"betonarme"}>Betonarme</MenuItem>
                                        <MenuItem value={"ahsap"}>Ahşap</MenuItem>
                                        <MenuItem value={"celikKarkas"}>Çelik Karkas</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>


                        <Controller
                            name='house_person_konut_usage'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Kullanım Şekli</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Kullanım Şekli"
                                    >
                                        <MenuItem value={"mesken"}>Mesken</MenuItem>
                                        <MenuItem value={"ısyerı"}>İş Yeri</MenuItem>
                                        <MenuItem value={"depo"}>Depo</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />

                    </div>
                    <div>

                        <Controller
                            name='house_person_konut_own'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Kullanım Şekli</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Kullanım Şekli"
                                    >
                                        <MenuItem value={"malSahibi"}>Mal Sahibi</MenuItem>
                                        <MenuItem value={"kiraci"}>Kiracı</MenuItem>
                                        <MenuItem value={"bos"}>Boş</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_yearOfBuild ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_person_konut_yearOfBuild", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_priceOfitems ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_person_konut_priceOfitems", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_priceOfGlass ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cam Bedeli"
                            {...register("house_person_konut_priceOfGlass", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_konut_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("house_person_konut_email", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                </div>
                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
                </button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center mt-3' >
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
                            value={watchFields.house_business_konut_companyName ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("house_business_konut_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_taxNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("house_business_konut_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            value={watchFields.house_business_konut_location ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("house_business_konut_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("house_business_konut_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_business_konut_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_business_konut_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_flat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_business_konut_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_wflat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bulunduğu Kat"
                            {...register("house_business_konut_wflat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <Controller
                            name='house_business_konut_madeOf'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Yapı Tarzı</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Yapı Tarzı"
                                    >
                                        <MenuItem value={"kargir"}>Kargir</MenuItem>
                                        <MenuItem value={"yigmaKargir"}>Yığma Kargir</MenuItem>
                                        <MenuItem value={"betonarme"}>Betonarme</MenuItem>
                                        <MenuItem value={"ahsap"}>Ahşap</MenuItem>
                                        <MenuItem value={"celikKarkas"}>Çelik Karkas</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>


                        <Controller
                            name='house_business_konut_usage'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Kullanım Şekli</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Kullanım Şekli"
                                    >
                                        <MenuItem value={"mesken"}>Mesken</MenuItem>
                                        <MenuItem value={"ısyerı"}>İş Yeri</MenuItem>
                                        <MenuItem value={"depo"}>Depo</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />

                    </div>
                    <div>

                        <Controller
                            name='house_business_konut_own'
                            control={control}
                            rules={{ required: "Zorunlu Alan", }}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <FormControl className='!mb-3' size='small' fullWidth>
                                    <InputLabel size='small'>Kullanım Şekli</InputLabel>
                                    <Select
                                        value={value == undefined ? "" : value}
                                        onChange={onChange}
                                        labelId="dlabel-carIns"
                                        label="Kullanım Şekli"
                                    >
                                        <MenuItem value={"malSahibi"}>Mal Sahibi</MenuItem>
                                        <MenuItem value={"kiraci"}>Kiracı</MenuItem>
                                        <MenuItem value={"bos"}>Boş</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_yearOfBuild ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_business_konut_yearOfBuild", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_priceOfitems ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_business_konut_priceOfitems", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_priceOfGlass ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cam Bedeli"
                            {...register("house_business_konut_priceOfGlass", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_konut_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("house_business_konut_email", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                </div>
                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
                </button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center mt-3' >
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

function DaskInsurance({ setOpen }) {
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
        control,
        watch,
        formState: { errors },
    } = useForm();
    const watchFields = watch()

    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "mail");
        console.log(data)
        let filteredData = {}
        if (values.person) {
            filteredData = {
                insure: "Evim Sigortalı",
                varietyInsure: "Dask Sigortası",
                isPerson: "Şahıs",
                tcNo: data.house_person_dask_TcNo,
                adress: data.house_person_dask_adress,
                area: data.house_person_dask_area,
                birthdate: data.house_person_dask_birthdate,
                flat: data.house_person_dask_flat,
                nameSurname: data.house_person_dask_nameSurname,
                phoneNumber: data.house_person_dask_phoneNumber,
                yearOfBuild: data.house_person_dask_yearOfBulding,
                email: data.house_person_dask_email


            }
        } else {
            filteredData = {
                insure: "Evim Sigortalı",
                varietyInsure: "Dask Sigortası",
                isPerson: "Şirket",
                tcNo: house_business_dask_TcNo,
                adress: house_business_dask_adress,
                area: data.house_business_dask_area,
                birthdate: data.house_business_dask_birthdate,
                companyName: data.house_business_dask_companyName,
                flat: data.house_business_dask_flat,
                location: data.house_business_dask_location,
                phoneNumber: data.house_business_dask_phoneNumber,
                taxNumber: data.house_business_dask_taxNumber,
                yearOfBuild: data.house_business_dask_yearOfBulding,
                email: data.house_business_dask_email

            }
        }


        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();
                    setIsLoading(false)
                    setOpen(true)
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
                           <p> <strong>Sigorta :</strong> Evim Sigortalı</p>
                           <p> <strong>Türü :</strong> KASKO / Şahıs</p>
                           <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                           <p> <strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                           <p><strong>Tc Kimlik No : </strong>${filteredData.tcNo}</p>
                           <p><strong>Doğum Traihi :</strong> ${filteredData.birthDate}</p>
                           <p> <strong>Açık Adres :</strong> ${filteredData.adress}
                           <p><strong>Evin Büyüklüğü(m2) :</strong> ${filteredData.area}</p>
                           <p><strong>Binanın Kat Sayısı :</strong>${filteredData.flat}</p>          
                           <p><strong>Bina İnşa Yılı :</strong> ${filteredData.yearOfBuild}</p>
                           <p> <strong> Email : </strong>${filteredData.email}</p>
                      
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
                            <p><strong> Sigorta : </strong>Evim Sigortalı/p>
                            <p> <strong> Türü :</strong> KASKO / Şirket/p>
                            <p>  <strong>  Firma Unvanı :</strong> ${filteredData.companyName}</p>
                            <p> <strong>  Vergi Numarası : </strong>${filteredData.taxNumber}</p>
                            <p> <strong> İl İlçe : </strong>${filteredData.location}</p>
                            <p> <strong> Telefon Numarası :</strong> ${filteredData.phoneNumber}</p>
                            <p> <strong> Doğum Tarihi :</strong> ${filteredData.birthDate}</p>
                            <p> <strong>  Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                            <p> <strong>  Açık Adres :</strong> ${filteredData.adress}</p>
                            <p> <strong>  Evin Büyüklüğü(m2) :</strong> ${filteredData.area}</p>
                            <p> <strong>  Binanın Kat Sayısı :</strong>${filteredData.flat}</p>
                            <p> <strong> Bina İnşa Yılı : </strong>${filteredData.yearOfBuild}</p>
                            <p> <strong> Email : </strong>${filteredData.email}</p>
                        `,
                        },
                    }
                )

        } catch (error) {
            console.log(error)
            setIsLoading(false)
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
                            value={watchFields.house_person_dask_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("house_person_dask_nameSurname", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("house_person_dask_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("house_person_dask_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_person_dask_birthdate", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_person_dask_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_person_dask_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_flat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_person_dask_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            value={watchFields.house_person_dask_yearOfBulding ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_person_dask_yearOfBulding", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_person_dask_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("house_person_dask_email", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                </div>
                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
                </button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center mt-3' >
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
                            value={watchFields.house_business_dask_companyName ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("house_business_dask_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_taxNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("house_business_dask_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            value={watchFields.house_business_dask_location ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("house_business_dask_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("house_business_dask_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("house_business_dask_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_business_dask_birthdate", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_business_dask_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_business_dask_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_flat ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_business_dask_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            value={watchFields.house_business_dask_yearOfBulding ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_business_dask_yearOfBulding", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.house_business_dask_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("house_business_dask_email", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>


                </div>
                <button disabled={isLoading ? true : false} className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-orange-400  hover:bg-orange-500' type='submit' >
                    {isLoading ? "Gönderiliyor..." : "Formu Gönder ve Teklif Al"}
                </button>
                {!isEmpty(errors) ?
                    <p className='flex justify-center item-center mt-3' >
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

