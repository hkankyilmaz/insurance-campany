import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import validator from 'validator';
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import app from '@/app/_connect/connect';
export default function BusinessForm({ variety, setOpen }) {
    return <Business setOpen={setOpen} />
}



function Business({ setOpen }) {

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
        watch
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
                insure: "İşyerim Sigortalı",
                varietyInsure: "İşyeri Sigortası",
                isPerson: "Şahıs",
                tcNo: data.business_person_business_TcNo,
                about: data.business_person_business_about,
                adress: data.business_person_business_adress,
                area: data.business_person_business_area,
                itemsPrice: data.business_person_business_itemsPrice,
                itemsPrice2: data.business_person_business_itemsPrice2,
                nameSurname: data.business_person_business_nameSurname,
                phoneNumber: data.business_person_business_phoneNumber,
                birthdate: data.business_person_business_birthdate,
                email: data.business_person_business_email,

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
                email: data.business_business_business_email,

            }
        }


        try {
            await addDoc(dbRef, filteredData)
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
                          <p> <strong> Sigorta :</strong> İşyerim Sigortalı</p>
                          <p><strong>Türü :</strong> İşyeri Sigortası / Şahıs</p>
                          <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                          <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                          <p><strong>Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                          <p><strong>Doğum Traihi :</strong> ${filteredData.birthdate}</p>
                          <p><strong>Açık Adres :</strong> ${filteredData.adress}</p>
                          <p><strong>İşyerinin Büyüklüğü :</strong> ${filteredData.area}</p>
                          <p><strong>Faaliyet Alanı :</strong> ${filteredData.about}</p>
                          <p><strong>Demirbaş Değeri :</strong> ${filteredData.itemsPrice}   </p>                     
                          <p><strong>Emtia Değeri :</strong> ${filteredData.itemsPrice2}</p>
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
                            <p><strong>Sigorta</strong> : İşyerim Sigortalı</p>
                            <p> <strong>Türü :</strong> İşyeri Sigortası / Şirket</p>
                            <p> <strong>Firma Adı :</strong> ${filteredData.companyName}</p>
                            <p> <strong>Vergi Numarası :</strong> ${filteredData.taxNumber}</p>
                            <p> <strong>İl-İlçe :</strong> ${filteredData.location}</p>
                            <p> <strong>Telefon :</strong> ${filteredData.phoneNumber}</p>
                            <p> <strong>Açık Adres :</strong> ${filteredData.adress}</p>
                            <p> <strong>İşyerinin Büyüklüğü :</strong> ${filteredData.area}</p>
                            <p> <strong>Faaliyet Alanı :</strong> ${filteredData.about}</p>
                            <p> <strong>Demirbaş Değeri :</strong> ${filteredData.itemsPrice} </p>                     
                            <p> <strong>Emtia Değeri :</strong> ${filteredData.itemsPrice2}</p>
                            <p><strong>Email Adresi :</strong> ${filteredData.email}</p>
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
                    <FormControlLabel control={<Checkbox color='warning' checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox color='warning' checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            value={watchFields.business_person_business_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("business_person_business_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu - 05XXXXXXXXX"
                            {...register("business_person_business_phoneNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isMobilePhone: (value) =>
                                        validator?.isMobilePhone(value, 'tr-TR')
                                },
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.business_person_business_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("business_person_business_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi - XX/XX/XXXX"
                            {...register("business_person_business_birthdate", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isDate: (value) =>
                                        validator?.isDate(value, options)
                                },

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("business_person_business_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İşyerinin Büyüklüğü (m2)"
                            {...register("business_person_business_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_about ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Faaliyet Alanı"
                            {...register("business_person_business_about", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_itemsPrice ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Demirbaş Değeri(TL)"
                            {...register("business_person_business_itemsPrice", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_itemsPrice2 ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İçindeki Emtia Değeri(TL)"
                            {...register("business_person_business_itemsPrice2", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_person_business_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("business_person_business_email", {
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
                            Tüm Alanları Doldurun,Tarihleri GG/AA/YYYY, Telefon Numaranızı 05XXXXXXXXX Formatında Girin.
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
                    <FormControlLabel control={<Checkbox color='warning' checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Şahıs"
                    />
                    <FormControlLabel control={<Checkbox color='warning' checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Şirket"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            value={watchFields.business_business_business_companyName ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Firma Unvanı"
                            {...register("business_business_business_companyName", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_taxNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Vergi Numarası"
                            {...register("business_business_business_taxNumber", {
                                required: "Zorunlu Alan",

                            })}
                        />
                    </div>
                    <div>

                        <TextField
                            value={watchFields.business_business_business_location ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İl-İlçe"
                            {...register("business_business_business_location", {
                                required: "Zorunlu Alan",
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu - 05XXXXXXXXX"
                            {...register("business_business_business_phoneNumber", {
                                required: "Zorunlu Alan",
                                validate: {
                                    isMobilePhone: (value) =>
                                        validator?.isMobilePhone(value, 'tr-TR')
                                },
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_adress ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Açık Adres"
                            {...register("business_business_business_adress", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_area ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İşyerinin Büyüklüğü (m2)"
                            {...register("business_business_business_area", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_about ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Faaliyet Alanı"
                            {...register("business_business_business_about", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_itemsPrice ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Demirbaş Değeri(TL)"
                            {...register("business_business_business_itemsPrice", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_itemsPrice2 ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="İçindeki Emtia Değeri(TL)"
                            {...register("business_business_business_itemsPrice2", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.business_business_business_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("business_business_business_email", {
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
                            Tüm Alanları Doldurun,Tarihleri GG/AA/YYYY, Telefon Numaranızı 05XXXXXXXXX Formatında Girin.
                        </span>
                    </p>
                    : undefined

                }
            </form>)
    }

}