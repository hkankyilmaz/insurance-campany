import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import app from '@/app/_connect/connect';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';

export default function Trip({ variety, setOpen }) {
    return <T setOpen={setOpen} />
}



function T({ setOpen }) {

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
        formState: { errors },
        clearErrors,
        control,
        watch,
        reset,
    } = useForm();
    const watchFields = watch()

    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "mail");
        let filteredData;

        filteredData = {
            insure: "Seyahatim Sigortalı",
            varietyInsure: "Seyehat Sigortası",
            birthdate: data.trip_person_kasko_birthdate,
            tcNo: data.trip_person_trip_TcNo,
            about: data.trip_person_trip_about,
            date1: data.trip_person_trip_date1,
            date2: data.trip_person_trip_date2,
            nameSurname: data.trip_person_trip_nameSurname,
            phoneNumber: data.trip_person_trip_phoneNumber,
            email: data.trip_person_trip_email
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
                })

            await addDoc(dbRefTwo,
                {
                    to: ["gilanakdagcisigorta@gmail.com"],
                    message: {
                        subject: "Teklif İsteyen Müşteri",
                        html: `
                            <p><strong>Sigorta :</strong> Seyahatim Sigortalı </p>
                            <p><strong>Türü :</strong> Seyahat Sigortası </p>
                            <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname} </p>
                            <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p> 
                            <p><strong>Tc Kimlik No :</strong> ${filteredData.tcNo} </p>
                            <p> <strong>Doğum Traihi :</strong> ${filteredData.birthdate} </p>
                            <p><strong>Gidiş Tarihi :</strong> ${filteredData.date1} </p>
                            <p> <strong>Dönüş Tarihi :</strong> ${filteredData.date2} </p>
                            <p> <strong>Seyehat Edilecek Yer :</strong> ${filteredData.about} </p> 
                            <p> <strong>Email :</strong> ${filteredData.email} </p>                
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
            <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                <div>
                    <TextField
                        value={watchFields.trip_person_trip_nameSurname ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Ad/Soyad"
                        {...register("trip_person_trip_nameSurname", {
                            required: "Zorunlu Alan",

                        })}
                    />
                </div>
                <div>
                    <TextField
                        value={watchFields.trip_person_trip_phoneNumber ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Cep Telefonu"
                        {...register("trip_person_trip_phoneNumber", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>

                    <TextField
                        value={watchFields.trip_person_trip_TcNo ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="TC Kimlik No"
                        {...register("trip_person_trip_TcNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.trip_person_kasko_birthdate ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Doğum Tarihi"
                        {...register("trip_person_kasko_birthdate", {
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
                        value={watchFields.trip_person_trip_date1 ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Gidiş Tarihi"
                        {...register("trip_person_trip_date1", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        value={watchFields.trip_person_trip_date2 ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Dönüş Tarihi"
                        {...register("trip_person_trip_date2", {
                            required: "Zorunlu Alan",
                        })}
                    />
                </div>
                <div>
                    <TextField
                        value={watchFields.trip_person_trip_about ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Seyehat Edilecek Yer"
                        {...register("trip_person_trip_about", {
                            required: "Zorunlu Alan",
                        })}
                    />
                </div>
                <div>
                    <TextField
                        value={watchFields.trip_person_trip_email ?? ""}
                        className='!mb-3' size='small' fullWidth
                        label="Email adresi"
                        {...register("trip_person_trip_email", {
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


}