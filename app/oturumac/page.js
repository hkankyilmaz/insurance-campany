"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import ErrMessage from "../_components/ErrMessage";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Footer from "../_components/Footer/Index";
import app from "../_connect/connect";
import { doc, setDoc, getDoc, collection, getDocs, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from 'react-toastify';

function Copyright(props) {
  return (
    <Typography
      className="max-md:xs"
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

export default function SignIn() {
  const db = getFirestore(app);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {

    try {
      const docRef = doc(db, "users", data.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.data() == undefined) {

        setError("email", { type: "focus", message: "Kayıtlı Kullanıcı Yok" })
        return;
      }
      if (docSnap.data().password !== data.password) {
        setError("password", { type: "focus", message: "Yanlış Şifre" })
        return;
      }

      const { email, password } = data;
      let options = { callbackUrl: '/', email, password };
      await signIn("credentials", options);


    } catch (error) {
      console.log(error)
    }


    // const docRef = doc(db, "users", data.email);
    // setDoc(docRef, data)
    //   .then((res) => {
    //     console.log("Document has been added successfully", res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })


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
              Oturum Aç
            </Typography>
            <Box
              className="w-[350px]"
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Addresi"
                name="email"
                autoComplete="email"
                autoFocus
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
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Şifre"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Zorunlu Alan",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <ErrMessage message={message} />}
              />

              <Button
                type="sunmit"
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
                  <Link className="text-blue-800 underline text-xs" href="/kayitol">
                    {"Hesabın yok mu ? Kayıt ol."}
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