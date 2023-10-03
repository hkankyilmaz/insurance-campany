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
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Link from "next/link";


import { useRouter } from "next/navigation";
import { Icon } from "../_components/Forms";


import ErrMessage from "../_components/Forms";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography
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
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const ref = React.useRef();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    let options = { redirect: false, email, password };

    console.log(data);
  };


  return (
    <main className="">

      <section className="panel-4">
        <ThemeProvider theme={defaultTheme}>
          <Container
            className="h-[100vh] w-[350px] pt-[150px] z-40"
            component="main"
            maxWidth="xs"
          >
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
                  required
                  fullWidth
                  id="email"
                  label="Email Addresi"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register("email", {
                    required: "This is required field",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter valid e-mail",
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
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "This is required field",
                    minLength: {
                      value: 6,
                      message: "You Password must have minimum 6 Character",
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
                  className="!bg-[#0A66C2]"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLoading ? <Icon /> : "Gönder"}
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="#" variant="body2">
                        Forgot password?
                      </Link> */}
                  </Grid>
                  <Grid item>
                    <Link className="text-blue-800 underline" href="/signup">
                      {"Hesabın yok mu ? Kayıt ol."}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </section>

    </main>
  );
}