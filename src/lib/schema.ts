import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  subject: z.string().trim().min(3, "Please add a short subject.").max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(4000, "Message is too long (4000 characters max)."),
  // Honeypot: real users never see or fill this.
  company: z.string().max(0).optional().default(""),
  // Epoch ms when the form was rendered; used to reject instant bot submissions.
  startedAt: z.number().optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
