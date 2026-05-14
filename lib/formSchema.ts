import { z } from "zod";

const phoneRegex = /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is required")
    .regex(phoneRegex, "Enter a valid US phone number"),
  consent: z
    .boolean()
    .refine((value) => value === true, "Consent is required to continue"),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const contactFormSchema = leadFormSchema.extend({
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details so we can help")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
