import React from 'react'
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";

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