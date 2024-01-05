"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"



import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio:z.string().min(10, {
    message: "Bio must be atleast 10 words",
  }),
  experience:z.string(),
  location:z.string(),
  mode:z.string(),
  email: z.string().email({
    message: "Invalid email address",
  }),
  number:z.string().min(2, {
    message: "Phone number must consist of atleast 10 digits",
  }).max(10, {
    message: "Phone number cannot exceed 10 digits",
  }),
  subject: z.string(),
})

export default function Home()
{

      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         name:"",
         bio:"",
         experience:"",
         email:"",
         location:"",
         number:"",
         mode:"",
         subject:"", 
        },
      })
     
      const onSubmit = async (data: any) => {
        try {
          console.log(data);
       
          }
        catch (error) 
        {
        console.error(error);
        }
      
      
  return (
    <>
    

    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10" >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your display name" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
            <Textarea
                  placeholder=" Write what you want students to see"
                  className="resize-none"
                  {...field}
                />
            </FormControl>
            <FormDescription>
             
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualifications</FormLabel>
            <FormControl>
              <Input placeholder="Enter your qualifications" {...field} />
            </FormControl>
            <FormDescription>
              Enter your qualifications in the format (e.g., B.A English Hons., 2 Years Experience).
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your location" {...field} />
            </FormControl>
            <FormDescription>
              Specify the location where you want to teach. Include this in the description box for SEO.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="number"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mobile Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter your mobile number" {...field} />
            </FormControl>
            <FormDescription>
              Provide your mobile number. Note that this will be publicly visible on the website for students to contact you.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email address"  {...field} />
            </FormControl>
            <FormDescription>
              Provide your email address. Note that this will be publicly visible on the website for students to contact you.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="pic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profile Pic</FormLabel>
            <FormControl>
              <Input id="picture" placeholder="Upload the picture" type="file" {...field} />
            </FormControl>
            <FormDescription>
            Provide a profile pic under 25 kb
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> 
       <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your mode of preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                  <SelectItem value="Both">Both</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
              Select the subjects that you want to teach 
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the subject you are interested in teaching" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="Language Arts / English">Language Arts / English</SelectItem>
<SelectItem value="Mathematics">Mathematics</SelectItem>
<SelectItem value="Science">Science</SelectItem>

                </SelectContent>
              </Select>
              <FormDescription>
              Select the subjects that you want to teach 
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />      
    </form>
  </Form>

  </>
  )
      }
}
