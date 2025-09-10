import { createAuthClient } from "better-auth/react"
import { nextCookies } from "better-auth/next-js";


export const authClient = createAuthClient({
    baseURL: "https://linkbird-eight.vercel.app/",
    plugins: [nextCookies()]
})