"use server";
import { auth } from "@/lib/auth"

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body:{
                email,
                password,
            }
        })
        return {
            success: true,
            message: "Logged in successfully!"
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "Invalid credentials"
        }
    }
}
export const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        await auth.api.signUpEmail({
            body:{
                name: firstName + " " + lastName,
                email,
                password,
            }
        })
        return {
            success: true,
            message: "Signed up successfully!"
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "Invalid credentials"
        }
    }
}