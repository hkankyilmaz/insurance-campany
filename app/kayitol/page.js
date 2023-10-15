"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrMessage from "../_components/ErrMessage";
import validator from "validator";
import Footer from "../_components/Footer/Index";
import app from "../_connect/connect";
import { toast, ToastContainer } from 'react-toastify';

function Copyright(props) {
    return (
        <Typography
            className="max-md:text-xs"
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="#">
                @akdagsigorta
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}


const defaultTheme = createTheme();

export default function SignUp() {
    const db = getFirestore(app);
    const router = useRouter();


    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
        try {
            const docRef = doc(db, "users", data.email);
            const docSnap = await getDoc(docRef);
            if (docSnap.data() !== undefined) {
                setError("email", { type: "focus", message: "Kayıtlı Kullanıcı" })
                return;
            }

            setDoc(docRef, data)
                .then((res) => {
                    toast.success("Kayıt işlemi tamamlandı.Lütfen Oturum Açın.");
                    router.push('/oturumac')
                })
                .catch(error => {
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
        }



    };


    return (
        <>
            <section className="pt-[100px] md:pt-[150px] h-[90vh]">

                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline />
                    <Box

                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: "orange" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Kayıt Ol
                        </Typography>
                        <Box
                            className="w-[350px]"
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                id="fullname"
                                label="Ad Soyad"
                                name="fullname"
                                autoComplete="fullname"
                                autoFocus
                                {...register("fullname", {
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
                                name="fullname"
                                render={({ message }) => <ErrMessage message={message} />}
                            />
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Addresi"
                                name="email"
                                autoComplete="email"
                                {...register("email", {
                                    required: "Zorunlu Alan",
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Lütfen geçerli bir email adresi girin",
                                    },
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => <ErrMessage message={message} />}
                            />
                            <TextField
                                size="small"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Şifre"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password", {
                                    required: "Zorunlu Alan",
                                    minLength: {
                                        value: 6,
                                        message: "En az 6 krakter girin",
                                    },
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({ message }) => <ErrMessage message={message} />}
                            />

                            <Button
                                type="submit"
                                className="!bg-[orange]"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {"Gönder"}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/* <Link href="#" variant="body2">
                        Forgot password?
                      </Link> */}
                                </Grid>
                                <Grid item>
                                    <Link className="text-blue-800 underline max-md:text-xs" href="/oturumac">
                                        {"Hesabın var mı ? Giriş yap."}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />

                </ThemeProvider>
            </section>
            <Footer />
        </>


    );
}