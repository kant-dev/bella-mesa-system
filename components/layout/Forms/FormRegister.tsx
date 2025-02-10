"use client"

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(3, "Mínimo de 3 caracteres"),
  email: z.string().email("Informe um email válido"),
  password: z.string().min(6, "Mínimo de 6 caracteres"),
});

export default function FormRegister() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full  bg-white p-2 rounded-lg ">
        <h2 className="text-center text-xl font-bold mb-4">Bella Mesa</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ex: Bella Mesa" className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ex: bellamesa@suporte.com" className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder='Min: 6 caracteres' className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Criar Conta
            </Button>
          </form>

        </Form>
      </div>
    </div>
  );
}
