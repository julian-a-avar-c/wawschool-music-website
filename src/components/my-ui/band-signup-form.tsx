"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { toast } from "sonner";

export default function BandSignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formSchema = z.object({
    guardian_first: z.string().min(1, "Guardian first name is required"),
    guardian_last: z.string().min(1, "Guardian last name is required"),
    phone: z.string().min(1, "Phone number is required"),
    alt_phone: z.string().optional(),
    email: z.string().email("Please enter a valid email address"),
    student_first: z.string().min(1, "Student first name is required"),
    student_last: z.string().min(1, "Student last name is required"),
    student_age: z
      .number()
      .min(1, "Student age is required")
      .max(18, "Student must be 18 or under"),
    instrument: z.string().min(1, "Please select an instrument"),
    is_online: z.boolean().default(false),
    allergies: z.string().optional(),
    privacy: z
      .boolean()
      .refine((val) => val === true, "You must agree to the privacy policy"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guardian_first: "",
      guardian_last: "",
      phone: "",
      alt_phone: "",
      email: "",
      student_first: "",
      student_last: "",
      student_age: 0,
      instrument: "",
      is_online: false,
      allergies: "",
      privacy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("summer-camp-2025-funnel")
        .insert([
          {
            guardian_first: values.guardian_first,
            guardian_last: values.guardian_last,
            phone: values.phone,
            alt_phone: values.alt_phone || null,
            email: values.email,
            student_first: values.student_first,
            student_last: values.student_last,
            student_age: values.student_age,
            instrument: values.instrument,
            is_online: values.is_online,
            allergies: values.allergies || null,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        toast.error("Something went wrong. Please try again.");
      } else {
        setSubmitSuccess(true);
        toast.success("Registration submitted successfully!");
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function onReset() {
    form.reset();
    form.clearErrors();
    setSubmitSuccess(false);
  }

  if (submitSuccess) {
    return (
      <div className="p-8 text-center border rounded-lg bg-green-50 border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Registration Submitted!
        </h3>
        <p className="text-green-700 mb-4">
          Thank you for registering for WAW Music's Summer Camp. We'll be in
          touch soon!
        </p>
        <Button onClick={onReset} variant="outline">
          Submit Another Registration
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        className="space-y-6 @container"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Guardian Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="guardian_first"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Guardian first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guardian_last"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Guardian last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Primary phone number"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alt_phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Alternative phone number (optional)"
                    type="tel"
                    {...field}
                  />
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
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Student Information</h3>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="student_first"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Student first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="student_last"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Student last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="student_age"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Student age"
                    type="number"
                    min="1"
                    max="18"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value) || 0)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="instrument"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an instrument" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="piano">Piano</SelectItem>
                    <SelectItem value="guitar">Guitar</SelectItem>
                    <SelectItem value="violin">Violin</SelectItem>
                    <SelectItem value="drums">Drums</SelectItem>
                    <SelectItem value="voice">Voice</SelectItem>
                    <SelectItem value="bass">Bass</SelectItem>
                    <SelectItem value="ukulele">Ukulele</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Any allergies or special considerations (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="is_online"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Interested in online lessons</FormLabel>
                  <FormDescription>
                    Check this if you'd like information about online music
                    lessons
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I agree to the privacy policy *</FormLabel>
                <FormDescription>
                  By checking this box, you agree to our privacy policy and
                  terms of service
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register for Summer Camp"}
        </Button>
      </form>
    </Form>
  );
}
