"use client";

import React from "react";
import { Button } from "@mantine/core";
import { Form, FormControl, FormItem, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Space_Grotesk } from "next/font/google";
import { Phone, Mail, MapPin } from "lucide-react";

// Import Firebase
import { db } from "./../../firebase-config"; // Adjust this path based on your project structure
import { collection, addDoc } from "firebase/firestore"; // Import necessary Firestore functions

const space_grotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Email: z.string().email(),
  Subject: z.string(),
  Message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    },
  });

  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contactMessages"), {
        name: values.Name,
        email: values.Email,
        subject: values.Subject,
        message: values.Message,
        timestamp: new Date(),
      });

      // Display success message
      toast({
        title: "Success",
        description: "Message sent successfully!",
        status: "success", // You can customize the appearance using this status (e.g., 'success', 'error', etc.)
      });

      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error(error);

      // Display error message
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        status: "error", // Customize the appearance with this status
      });
    }
  };

  return (
    <section
      id="contact"
      className="flex py-24 px-12 w-auto snap-center flex-col items-center justify-center text-white"
    >
      <h1 className={`${space_grotesk.className} font-extrabold text-5xl mb-5`}>Contact Us</h1>
      <div className={`flex flex-col md:flex-row ${space_grotesk.className} min-h-[500px] max-w-[1000px]`}>
        <div className="bg-black rounded-t-3xl md:rounded-tr-none md:rounded-s-3xl text-white flex flex-col gap-5 items-start p-6 md:p-10 w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">Have A Question?</h2>
            <h2 className="text-3xl font-bold">Get In Touch!</h2>
          </div>
          <p className="text-lg font-light">
            Thank you for visiting our website! If you have any questions or queries, drop us a message, and we{`'`}ll
            get back to you promptly. Your time is valuable to us!
          </p>
          <div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-5 items-center justify-start">
                <Phone size={32}></Phone>
                <div>
                  <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:+91 9341405360">
                      +91 7020729200
                    </a>
                  </p>
                  <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:+91 9003065894">
                      +91 7263049920
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <Mail size={32}></Mail>
                <a target="_blank" rel="noopener noreferrer" href="//">
                  ieeecs@raisoni.net
                </a>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <MapPin size={32}></MapPin>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/64uUET3Sqc796YZi9"
                >
                  IEEE, GHRCE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-b-3xl md:rounded-bl-none md:rounded-e-3xl p-6 md:p-10 w-full md:w-3/4 md:mt-0">
          <Form {...form}>
            <form id="contact-form" onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="text-black" placeholder="Your Name" type="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="text-black" placeholder="Your Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="text-black" placeholder="Subject" type="subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea className="text-black resize" placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-black text-white">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
