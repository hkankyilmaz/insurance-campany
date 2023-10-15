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
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
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
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("house_person_konut_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
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

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_person_konut_birthdate", {
                                required: "Zorunlu Alan",
                            })}
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

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_person_konut_area", {
                                required: "Zorunlu Alan",
                            })}
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
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bulunduğu Kat"
                            {...register("house_person_konut_wflat", {
                                required: "Zorunlu Alan",

                            })}
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
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_person_konut_yearOfBuild", {
                                required: "Zorunlu Alan",

                            })}
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
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_person_konut_priceOfGlass", {
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
                            {...register("house_business_konut_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("house_business_konut_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("house_business_konut_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("house_business_konut_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_business_konut_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_business_konut_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_business_konut_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bulunduğu Kat"
                            {...register("house_business_konut_wflat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Yapı Tarzı</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Yapı Tarzı"
                                {...register("house_business_konut_madeOf", {
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

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Kullanim Şekli</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Kullanım Şekli"
                                {...register("house_business_konut_usage", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"mesken"}>Mesken</MenuItem>
                                <MenuItem value={"ısyerı"}>İş Yeri</MenuItem>
                                <MenuItem value={"depo"}>Depo</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <FormControl className='!mb-3' size='small' fullWidth>
                            <InputLabel size='small'>Kullanim Şekli</InputLabel>
                            <Select
                                labelId="dlabel-carIns"
                                label="Kullanım Şekli"
                                {...register("house_business_konut_usage", {
                                    required: "Zorunlu Alan",
                                })}
                            >
                                <MenuItem value={"malSahibi"}>Mal Sahibi</MenuItem>
                                <MenuItem value={"kiraci"}>Kiracı</MenuItem>
                                <MenuItem value={"bos"}>Boş</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_business_konut_yearOfBuild", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_business_konut_priceOfitems", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Eşya Bedeli"
                            {...register("house_business_konut_priceOfGlass", {
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
                            {...register("house_person_dask_nameSurname", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("house_person_dask_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Tc No"
                            {...register("house_person_dask_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_person_dask_birthdate", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_person_dask_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_person_dask_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_person_dask_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_person_dask_yearOfBulding", {
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
                            {...register("house_business_dask_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("house_business_dask_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("house_business_dask_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("house_business_dask_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Tc No"
                            {...register("house_business_dask_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("house_business_dask_birthdate", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("house_business_dask_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Evin Büyüklüğü (m2)"
                            {...register("house_business_dask_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Binanın Kat Sayısı"
                            {...register("house_business_dask_flat", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Bina İnşa Yılı"
                            {...register("house_business_dask_yearOfBulding", {
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

