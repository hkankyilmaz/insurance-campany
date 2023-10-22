import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import app from '@/app/_connect/connect';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';


export default function Health({ variety }) {
    return <H />
}



function H() {

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
        const db = getFirestore(app);
        const dbRef = collection(db, "requests");
        console.log(data);
        let filteredData;
        if (values.person) {
            filteredData = {
                insure: "Sağlığım Sigortalı",
                varietyInsure: "Tamamlayıcı Sağlık Sigortası",
                weight: data.health_person_health_weight,
                tcNo: data.health_sup_health_TcNo,
                birthdate: data.health_sup_health_birthdate,
                nameSurname: data.health_sup_health_nameSurname,
                phoneNumber: data.health_sup_health_phoneNumber,
                tall: data.health_sup_health_tall

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
                tall: data.health_special_health_tall

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
                        label="Tamamlayıcı Sağlık Sigortası"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Özel Sağlık Sigortası"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ad/Soyad"
                            {...register("health_sup_health_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Cep Telefonu"
                            {...register("health_sup_health_phoneNumber", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>

                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Tc No"
                            {...register("health_sup_health_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("health_sup_health_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Boy(cm)"
                            {...register("health_sup_health_tall", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Kilo(kg)"
                            {...register("health_person_health_weight", {
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
                        label="Tamamlayıcı Sağlık Sigortası"
                    />
                    <FormControlLabel control={<Checkbox checked={values.business}
                        onChange={(e) => setValues({ business: e.target.checked, person: !e.target.checked })} />}
                        label="Özel Sağlık Sigortası"
                    />
                </div>
                <div className='grid grid-cols-2 gap-x-2 max-md:grid-cols-1' >
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Ad/Soyad"
                            {...register("health_special_health_nameSurname", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
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
                            className='!mb-3' size='small' fullWidth
                            label="Tc No"
                            {...register("health_special_health_TcNo", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Doğum Tarihi"
                            {...register("health_special_health_birthdate", {
                                required: "Zorunlu Alan",

                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Boy(cm)"
                            {...register("health_special_health_tall", {
                                required: "Zorunlu Alan",
                            })}
                        />

                    </div>
                    <div>
                        <TextField
                            className='!mb-3' size='small' fullWidth
                            label="Kilo(kg)"
                            {...register("health_special_health_weight", {
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