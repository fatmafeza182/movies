"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";

export default function LoginPage() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      // console.log("LocalStorage'da kullanıcı bulunamadı!");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    // console.log("Parse edilen kullanıcı:", parsedUser);

    if (
      parsedUser.data.username.toLowerCase() === data.username.toLowerCase() &&
      String(parsedUser.data.password) === String(data.password)
    ) {
      // console.log("Giriş başarılı!");
      router.push("/");
    } else {
      // console.log("Kullanıcı adı veya şifre hatalı!");
      router.push("/register");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen mt-0">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-md">
        <h1>Login</h1>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-3">
              Login
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
