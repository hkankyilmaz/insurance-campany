import CredentialsProvider from 'next-auth/providers/credentials'
import { signIn } from 'next-auth/react'

export const options = {
    session: {
        strategy: "jwt",
    },
    providers: [

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password"
                }
            },


            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { name: credentials.email, password: credentials.password }
                return user
            }
        })
    ],
    pages: {
        signIn: "/oturumac",
    },
}