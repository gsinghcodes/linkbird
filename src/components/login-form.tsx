"use client"

import Link from "next/link"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signIn } from '@/server/users'
import { toast } from "sonner"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

export const signInWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "https://linkbird-eight.vercel.app/dashboard",
  });
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const {error} = await authClient.signIn.email({
      email: values.email,
      password: values.password
    })
    // const { success, message } = await signIn(values.email, values.password)
    if (error) {
      toast.error(error.message || "Something went wrong")
    } else {
      toast.success("Logged in successfully")
      router.push("/dashboard")
    }
    setLoading(false)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-100" >
        <div className="ml-3 text-gray-500 flex items-center gap-2">
          <ArrowLeft className="size-4" /> 
          <Link href={"/"}>Back</Link>
        </div>
        <CardHeader className="">
          <CardTitle className="text-xl">Login with email</CardTitle>
          <CardDescription>
            Login using your email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" required placeholder="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input type={showPassword? "text" : "password"} required placeholder="password" {...field}
                            className="pr-10" />
                          </FormControl>
                          <div className="absolute right-3 top-2" 
                          onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ?
                            <EyeOff className="size-5"  /> :
                            <Eye className="size-5" />
                          }
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full mt-4" >
                    {loading ? <Loader2 className="size-4 animate-spin" /> : "Login"}
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                </div>
                <div className="flex justify-between">
                  <Link href="#" className="text-sm underline-offset-4 hover:underline">Forgot password</Link>
                  <Link href={"/signup"} className="text-sm underline-offset-4 hover:underline">Create New Account</Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
