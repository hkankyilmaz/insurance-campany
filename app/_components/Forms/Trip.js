import React from 'react'
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import app from '@/app/_connect/connect';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

export default function Trip({ variety }) {
    return <T />
}



function T() {

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
        reset,
    } = useForm();
    console.log(errors)
    const onSubmit = async (data) => {
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data);
        let filteredData;

        filteredData = {
            insure: "Seyahatim Sigortalı",
            varietyInsure: "Seyehat Sigortası",
            birthdate: data.trip_person_kasko_birthdate,
            tcNo: data.trip_person_trip_TcNo,
            about: data.trip_person_trip_about,
            date1: data.trip_person_trip_date1,
            trip_person_trip_date2: data.trip_person_trip_date2,
            nameSurname: data.trip_person_trip_nameSurname,
            phoneNumber: data.trip_person_trip_phoneNumber
        }
        try {
            addDoc(dbRef, filteredData)
                .then((res) => {
                    toast.success("Form Gönderildi");
                    reset();

                    // const mailgun = new Mailgun(formData);
                    // const mg = mailgun.client({ username: 'api', key: "1b0dce67dff44776aa730a4507771b29-3750a53b-ff0e525d" || 'key-yourkeyhere' });

                    // mg.messages.create('sandboxec4c5e4621884ae2aba4a6b367589e93.mailgun.org', {
                    //     from: "Excited User <mailgun@sandbox-123.mailgun.org>",
                    //     to: ["hkankyilmazz@gmail.com"],
                    //     subject: "Hello",
                    //     text: "Testing some Mailgun awesomeness!",
                    //     html: "<h1>Testing some Mailgun awesomeness!</h1>"
                    // })
                    //     .then(msg => console.log(msg)) // logs response data
                    //     .catch(err => console.log(err)); // logs any error
                })
                .catch(error => {
                    toast.error("Form Gönderilemedi");
                    reset();
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
            <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Ad/Soyad"
                        {...register("trip_person_trip_nameSurname", {
                            required: "Zorunlu Alan",

                        })}
                    />
                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Cep Telefonu"
                        {...register("trip_person_trip_phoneNumber", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>

                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Tc No"
                        {...register("trip_person_trip_TcNo", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Doğum Tarihi"
                        {...register("trip_person_kasko_birthdate", {
                            required: "Zorunlu Alan",

                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Gidiş Tarihi"
                        {...register("trip_person_trip_date1", {
                            required: "Zorunlu Alan",
                        })}
                    />

                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Dönüş Tarihi"
                        {...register("trip_person_trip_date2", {
                            required: "Zorunlu Alan",
                        })}
                    />
                </div>
                <div>
                    <TextField
                        className='!mb-3' size='small' fullWidth
                        label="Seyehat Edilecek Yer"
                        {...register("trip_person_trip_about", {
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