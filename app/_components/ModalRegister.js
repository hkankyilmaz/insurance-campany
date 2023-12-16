"use client"

import { useForm, Controller } from "react-hook-form";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import React from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../_connect/connect";
import isEmpty from 'lodash.isempty';
import ErrorIcon from "@mui/icons-material/Error";
import { toast, ToastContainer } from 'react-toastify';
import feed from "../_assets/feed.png"
import Image from "next/image";
import validator from "validator";


function ModalRegister({ handleClose, open }) {

    const handleClose_ = () => {
        handleClose();
        setShowImage(false)
    }

    const [isLoading, setIsLoading] = React.useState(false)
    const [showImage, setShowImage] = React.useState(false)

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
        const dbRefTwo = collection(db, "mail");
        try {


            await addDoc(dbRefTwo,
                {
                    to: ["gilanakdagcisigorta@gmail.com"],
                    message: {
                        subject: "Aranmak İsteyen Müşteri",
                        html: `
                            <p><strong>Sigorta :</strong> Bilgi Almak </p>
                            <p><strong>Türü :</strong> Beni Arayın </p>
                            <p><strong>Ad Soyad :</strong> ${data.nameSurname} </p>
                            <p><strong>Cep Telefonu :</strong> ${data.phoneNumber}</p>              
                            `,
                    },
                }
            ).then((res) => {
                toast.success("Form Gönderildi");
                reset();
                setIsLoading(false)
                setShowImage(true)



            })
                .catch(error => {
                    toast.error("Form Gönderilemedi");
                    reset();
                    setIsLoading(false)
                })


        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    };
    return (
        <Modal
            open={open}
            onClose={handleClose_}
            className="flex justify-center items-center"
        >
            {

                showImage ?
                    <Image className='m-auto  w-[90vw] md:max-w-[600px] h-auto' src={feed} alt='faa' />
                    :
                    <div className="bg-white md: w-[750px] md:px-10 py-10 rounded-lg max-md:mx-5" >
                        <form className='w-full max-md:px-3 flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)} >
                            <h1 className="md:text-2xl text-center mb-5" >Lütfen Formu Doldurun</h1>
                            <TextField
                                value={watchFields.nameSurname ?? ""}
                                className='!mb-3' size='small' fullWidth
                                label="Ad Soyad"
                                {...register("nameSurname", {
                                    required: "Zorunlu Alan",
                                })}
                            />
                            <TextField
                                value={watchFields.phoneNumber ?? ""}
                                className='!mb-3' size='small' fullWidth
                                label="Telefon numarası"
                                {...register("phoneNumber", {
                                    required: "Zorunlu Alan",
                                    validate: {
                                        isMobilePhone: (value) =>
                                            validator?.isMobilePhone(value, 'tr-TR') ||
                                            "Lütfen geçerli bir telefon numarası girin.",
                                    },
                                })}
                            />
                            <button disabled={isLoading ? true : false} type="submit" className='w-[250px] px-4 py-2 rounded-md  bg-orange-400 hover:bg-orange-500 text-white transition-all ease-in mt-3' >
                                {isLoading ? "Gönderiliyor..." : "Aranma Talebi Oluştur"}
                            </button>
                        </form>
                        {!isEmpty(errors) ?
                            <p className='flex justify-center item-center mt-3' >
                                <ErrorIcon className="translate-y-[2px]" sx={{ marginRight: "3px", color: "#ff9999", fontSize: "17px", }} />
                                <span>
                                    Lütfen Tüm Alanları Doldurun, Telefon Numaranizi 05XXXXXXXXX Formatnda Girin.
                                </span>
                            </p>
                            : undefined

                        }
                    </div>

            }


        </Modal>

    )
}

export default ModalRegister