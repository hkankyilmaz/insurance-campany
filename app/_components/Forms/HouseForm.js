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
import validator from "validator";

function HouseForm({ variety }) {
    if (variety == "houseIns") {
        return <HouseInsurance />
    } else if (variety == "daskIns") {
        return <DaskInsurance />
    } else return <HouseInsurance />
}

export default HouseForm

function HouseInsurance() {

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
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ad/Soyad"
                            {...register("house_person_konut_nameSurname", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isDate: (value) =>
                                        validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                        "Lütfen sadece harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_nameSurname"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("house_person_konut_phoneNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isMobilePhone: (value) =>
                                        validator?.isMobilePhone(value, 'tr-TR') ||
                                        "Lütfen geçerli bir telefon numarası girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_phoneNumber"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Tc No"
                            {...register("house_person_konut_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_TcNo"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_person_konut_birthdate", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isDate: (value) =>
                                        validator?.isDate(value, {
                                            ...options,
                                        }) ||
                                        "Lütfen GG/AA/YYYY veya GG-AA-YY şeklinde girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_birthdate"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_person_konut_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_adress"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_person_konut_area", {
                                required: "Zorunlu Alan",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_area"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_person_konut_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_flat"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bulunduğu Kat"
                            {...register("house_person_konut_wflat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_wflat"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Yapı Tarzı</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Yapı Tarzı"
                                {...register("house_person_konut_madeOf", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"kargir"}>Kargir</MenuItem>
                                <MenuItem value={"yigmaKargir"}>Yığma Kargir</MenuItem>
                                <MenuItem value={"betonarme"}>Betonarme</MenuItem>
                                <MenuItem value={"ahsap"}>Ahşap</MenuItem>
                                <MenuItem value={"celikKarkas"}>Çelik Karkas</MenuItem>
                            </Select>
                        </FormControl>
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_madeOf"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Kullanim Şekli</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Kullanım Şekli"
                                {...register("house_person_konut_usage", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"mesken"}>Mesken</MenuItem>
                                <MenuItem value={"ısyerı"}>İş Yeri</MenuItem>
                                <MenuItem value={"depo"}>Depo</MenuItem>
                            </Select>
                        </FormControl>
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_usage"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Kullanim Şekli</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Kullanım Şekli"
                                {...register("house_person_konut_usage", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"malSahibi"}>Mal Sahibi</MenuItem>
                                <MenuItem value={"kiraci"}>Kiracı</MenuItem>
                                <MenuItem value={"bos"}>Boş</MenuItem>
                            </Select>
                        </FormControl>
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_usage"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_person_konut_yearOfBuild", {
                                required: "Zorunlu Alan",

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_yearOfBuild"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_person_konut_priceOfitems", {
                                required: "Zorunlu Alan",

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_priceOfitems"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_person_konut_priceOfGlass", {
                                required: "Zorunlu Alan",

                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="house_person_konut_priceOfGlass"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>

                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>

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
                                validate: {
                                    isDate: (value) =>
                                        validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                        "Lütfen sadece harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_companyName"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("car_business_kasko_taxNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isMobilePhone: (value) =>
                                //         validator?.isMobilePhone(value, 'tr-TR') ||
                                //         "Lütfen geçerli bir telefon numarası girin.",
                                // },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_taxNumber"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_location"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_phoneNumber"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="seriesNo"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_business_kasko_seriesNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isDate: (value) =>
                                        validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                        "Lütfen sadece harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_seriesNumber"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_lpg"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_kasko_plugin"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>

            </form>)
    }

}

function DaskInsurance() {
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
                                validate: {
                                    isDate: (value) =>
                                        validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                        "Lütfen sadece harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_nameSurname"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("car_person_traffic_phoneNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isMobilePhone: (value) =>
                                        validator?.isMobilePhone(value, 'tr-TR') ||
                                        "Lütfen geçerli bir telefon numarası girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_phoneNumber"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_TcNo"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_carNumber"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_seriesNo"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("car_person_traffic_birthdate", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isDate: (value) =>
                                        validator?.isDate(value, {
                                            ...options,
                                        }) ||
                                        "Lütfen GG/AA/YYYY veya GG-AA-YY şeklinde girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_person_traffic_birthdate"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>

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
                                validate: {
                                    isDate: (value) =>
                                        validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                        "Lütfen sadece harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_companyName"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_taxNumber"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_location"
                            render={({ message }) => <ErrMessage message={message} />}
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
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_phoneNumber"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Araç Plakası"
                            {...register("car_business_traffic_carNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isAlphanumeric: (value) =>
                                        validator?.isAlphanumeric(value, 'tr-TR') ||
                                        "Lütfen sadece sayı ve harf girin.",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_carNumber"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ruhsat Seri No"
                            {...register("car_business_traffic_seriesNumber", {
                                required: "Zorunlu Alan",
                                // validate: {
                                //     isDate: (value) =>
                                //         validator?.isAlpha(value, 'tr-TR', { ignore: " " }) ||
                                //         "Lütfen sadece harf girin.",
                                // },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="car_business_traffic_seriesNumber"
                            render={({ message }) => <ErrMessage message={message} />}
                        />
                    </div>

                </div>


                <button className='m-auto text-white border border-transparent px-3 py-1 mt-3 bg-[#1976D2] hover:bg-[#1566b7]' type='submit' >Formu Gönder</button>

            </form>)
    }
}

