import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import app from '@/app/_connect/connect';
export default function BusinessForm({ variety }) {
    return <Business />
}



function Business() {

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
        handleSubmit,
        reset,
        formState: { errors },
        clearErrors
    } = useForm();
    console.log(errors)
    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data)
        let filteredData = {}
        if (values.person) {
            filteredData = {
                insure: "İşyerim Sigortalı",
                varietyInsure: "İşyeri Sigortası",
                isPerson: "Şahıs",
                tcNo: data.business_person_business_TcNo,
                phoneNumber: data.business_person_business_about,
                adress: data.business_person_business_adress,
                area: data.business_person_business_area,
                itemsPrice: data.business_person_business_itemsPrice,
                itemsPrice2: data.business_person_business_itemsPrice2,
                nameSurname: data.business_person_business_nameSurname,
                phoneNumber: data.business_person_business_phoneNumber,
                birthdate: data.business_person_kasko_birthdate,

            }
        } else {
            filteredData = {
                insure: "İşyerim Sigortalı",
                varietyInsure: "İşyeri Sigortası",
                isPerson: "Şirket",
                about: data.business_business_business_about,
                adress: data.business_business_business_adress,
                area: data.business_business_business_area,
                companyName: data.business_business_business_companyName,
                itemsPrice: data.business_business_business_itemsPrice,
                itemsPrice2: data.business_business_business_itemsPrice2,
                location: data.business_business_business_location,
                phoneNumber: data.business_business_business_phoneNumber,
                taxNumber: data.business_business_business_taxNumber,

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
                            {...register("business_person_business_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("business_person_business_phoneNumber", {
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
                            label="Tc No"
                            {...register("business_person_business_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("business_person_kasko_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("business_person_business_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İşyerinin Büyüklüğü (m2)"
                            {...register("business_person_business_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Faliyet Konusu"
                            {...register("business_person_business_about", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Demirbaş Değeri(TL)"
                            {...register("business_person_business_itemsPrice", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İçindeki Emtia Değeri(TL)"
                            {...register("business_person_business_itemsPrice2", {
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
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("business_business_business_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("business_business_business_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("business_business_business_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Telefon Numarası"
                            {...register("business_business_business_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("business_business_business_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İşyerinin Büyüklüğü (m2)"
                            {...register("business_business_business_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Faliyet Konusu"
                            {...register("business_business_business_about", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Demirbaş Değeri(TL)"
                            {...register("business_business_business_itemsPrice", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="İçindeki Emtia Değeri(TL)"
                            {...register("business_business_business_itemsPrice2", {
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