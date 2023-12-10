import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import app from '@/app/_connect/connect';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';


export default function Health({ variety, setOpen }) {
    return <H setOpen={setOpen} />
}



function H({ setOpen }) {

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
        watch,
        control,
        formState: { errors },
        clearErrors
    } = useForm();
    const watchFields = watch()
    const onSubmit = async (data) => {
        setIsLoading(true)
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        const dbRefTwo = collection(db, "mail");
        let filteredData;
        if (values.person) {
            filteredData = {
                insure: "Sağlığım Sigortalı",
                varietyInsure: "Tamamlayıcı Sağlık Sigortası",
                weight: data.health_sup_health_weight,
                tcNo: data.health_sup_health_TcNo,
                birthdate: data.health_sup_health_birthdate,
                nameSurname: data.health_sup_health_nameSurname,
                phoneNumber: data.health_sup_health_phoneNumber,
                tall: data.health_sup_health_tall,
                email: data.health_sup_health_email

            }
        } else {
            filteredData = {
                insure: "Sağlığım Sigortalı",
                varietyInsure: "Özel Sağlık Sigortası",
                weight: data.health_special_health_weight,
                tcNo: data.health_special_health_TcNo,
                birthdate: data.health_special_health_birthdate,
                nameSurname: data.health_special_health_nameSurname,
                phoneNumber: data.health_special_health_phoneNumber,
                tall: data.health_special_health_tall,
                email: data.health_special_health_email

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
                          <p> <strong> Sigorta :</strong> Sağlığım Sigortalı</p>
                          <p><strong>Türü :</strong> Sağlık Sigortası / Tamamlayıcı Sağlık Sigortası</p>
                          <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                          <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                          <p><strong>Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                          <p><strong>Doğum Traihi :</strong> ${filteredData.birthdate}</p>
                          <p><strong>Açık Adres :</strong> ${filteredData.tall}</p>
                          <p><strong>İşyerinin Büyüklüğü :</strong> ${filteredData.weight}</p>
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
                            <p> <strong> Sigorta :</strong> İşyerim Sigortalı</p>
                            <p><strong>Türü :</strong> İşyeri Sigortası / Özel Sağlık Sigortası</p>
                            <p><strong>Ad Soyad :</strong> ${filteredData.nameSurname}</p>
                            <p><strong>Cep Telefonu :</strong> ${filteredData.phoneNumber}</p>
                            <p><strong>Tc Kimlik No :</strong> ${filteredData.tcNo}</p>
                            <p><strong>Doğum Traihi :</strong> ${filteredData.birthdate}</p>
                            <p><strong>Açık Adres :</strong> ${filteredData.tall}</p>
                            <p><strong>İşyerinin Büyüklüğü :</strong> ${filteredData.weight}</p>
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
                    <FormControlLabel control={<Checkbox color='warning' checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Tamamlayıcı Sağlık Sigortası"
                    />
                    <FormControlLabel control={<Checkbox color='warning' checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Özel Sağlık Sigortası"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            value={watchFields.health_sup_health_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("health_sup_health_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_sup_health_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("health_sup_health_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            value={watchFields.health_sup_health_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("health_sup_health_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_sup_health_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("health_sup_health_birthdate", {
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
                            value={watchFields.health_sup_health_tall ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Boy(cm)"
                            {...register("health_sup_health_tall", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_sup_health_weight ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Kilo(kg)"
                            {...register("health_sup_health_weight", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_sup_health_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("health_sup_health_email", {
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
                    <FormControlLabel control={<Checkbox color='warning' checked={values.person}
                        onChange={(e) => setValues({ person: e.target.checked, business: !e.target.checked })} />}
                        label="Tamamlayıcı Sağlık Sigortası"
                    />
                    <FormControlLabel control={<Checkbox color='warning' checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Özel Sağlık Sigortası"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            value={watchFields.health_special_health_nameSurname ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Ad Soyad"
                            {...register("health_special_health_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_special_health_phoneNumber ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("health_special_health_phoneNumber", {
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
                            value={watchFields.health_special_health_TcNo ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="TC Kimlik No"
                            {...register("health_special_health_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_special_health_birthdate ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("health_special_health_birthdate", {
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
                            value={watchFields.health_special_health_tall ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Boy(cm)"
                            {...register("health_special_health_tall", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_special_health_weight ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Kilo(kg)"
                            {...register("health_special_health_weight", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            value={watchFields.health_special_health_email ?? ""}
                            className='!mb-3' size='small' fullWidth
                            label="Email Adresi"
                            {...register("health_special_health_email", {
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