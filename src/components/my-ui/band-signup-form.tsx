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
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

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
  is_online: z.boolean(),
  allergies: z.string().optional(),
  // privacy: z
  //   .boolean()
  //   .refine((val) => val === true, "You must agree to the privacy policy"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function BandSignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guardian_first: "",
      guardian_last: "",
      phone: "",
      alt_phone: "",
      email: "",
      student_first: "",
      student_last: "",
      student_age: 10,
      instrument: "",
      is_online: false,
      allergies: "",
      // privacy: false,
    },
  });

  async function onSubmit(values: FormSchema) {
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
      <div>
        <div className="p-8 text-center border-2 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
          <div className="text-6xl mb-4 flex justify-center">
            <Icon
              icon="fa6-solid:party-horn"
              className="w-16 h-16 text-green-600"
            />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center justify-center gap-2">
            Woohoo! You're All Set!{" "}
            <Icon icon="fa6-solid:music" className="w-6 h-6" />
          </h3>
          <p className="text-green-600 mb-6 text-lg flex items-center justify-center gap-2 flex-wrap">
            Thanks for joining our musical adventure! We can't wait to rock out
            with you at WAW Music's Summer Camp. Keep an eye on your inbox -
            we'll be sending some exciting details your way soon!
            <Icon icon="fa6-solid:guitar" className="w-5 h-5" />
            <Icon icon="fa6-solid:sparkles" className="w-5 h-5" />
          </p>
          <Button
            onClick={onReset}
            variant="outline"
            className="rounded-full px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
          >
            Register Another Rockstar!
          </Button>
        </div>
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
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        className={cn(
          "text-[#d14f4f]",
          "space-y-8 @container p-6 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 border-2 border-[#d14f4f]/30 shadow-xl",
        )}
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl mb-2 flex justify-center">
              <Icon icon="fa6-solid:users" className="w-12 h-12 " />
            </div>
            <h3 className="text-2xl font-bold  mb-2 flex items-center justify-center gap-2">
              Tell Us About Your Family!{" "}
              <Icon icon="fa6-solid:sparkles" className="w-6 h-6" />
            </h3>
            <p className="text-red-600">
              We'd love to get to know the awesome guardian behind this future
              rockstar!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="guardian_first"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="What should we call you? (First name)"
                      className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
                      {...field}
                    />
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
                    <Input
                      placeholder="Your family name"
                      className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
                      {...field}
                    />
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
                    placeholder="Your best phone number"
                    type="tel"
                    className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
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
                    placeholder="Got another number? (totally optional!)"
                    type="tel"
                    className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
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
                  <Input
                    placeholder="Your email (where we'll send the fun stuff!)"
                    type="email"
                    className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold  mb-2 flex items-center justify-center gap-2">
              Now, About Our Future Rockstar!{" "}
              <Icon icon="fa6-solid:star" className="w-6 h-6" />
            </h3>
            <p className="text-red-600">
              Time to learn about the amazing student who's ready to rock!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="student_first"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Student's awesome first name"
                      className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
                      {...field}
                    />
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
                    <Input
                      placeholder="Student's last name"
                      className="rounded-2xl border-2 border-purple-200 focus:border-purple-400 py-3"
                      {...field}
                    />
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
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-2">
                  <FormControl>
                    <Input
                      placeholder="How old is our future star?"
                      type="number"
                      min="1"
                      max="18"
                      className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  years old
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="instrument"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f] py-3 w-full">
                      <SelectValue placeholder="What instrument will they play during camp?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="bass">Bass</SelectItem>
                      <SelectItem value="drums">Drums</SelectItem>
                      <SelectItem value="keyboard">Keyboard/Piano</SelectItem>
                      <SelectItem value="vocals">Vocals</SelectItem>
                      <SelectItem value="violin">Violin</SelectItem>
                      <SelectItem value="saxophone">Saxophone</SelectItem>
                      <SelectItem value="trumpet">Trumpet</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="is_online"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 border-2 border-[#d14f4f]/30">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded-lg ring-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className=" font-semibold flex items-center gap-2">
                    <Icon icon="fa6-solid:laptop" className="w-4 h-4" />
                    Online lessons sound cool too!
                  </FormLabel>
                  <FormDescription className="text-red-600 flex items-center gap-2">
                    Would you like to explore online lesson options? We make
                    virtual learning super fun!
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-semibold flex items-center gap-2">
                  <Icon icon="fa6-solid:heart-pulse" className="w-5 h-5" />
                  Keeping Everyone Safe & Happy
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any allergies or medical info we should know about? We want to make sure everyone has the best, safest time! (totally optional, but helpful)"
                    className="min-h-[100px] rounded-2xl border-2 border-[#d14f4f]/30 focus:border-[#d14f4f]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <div className="space-y-6">
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-[#d14f4f]/30">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded-lg ring-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className=" font-semibold flex items-center gap-2">
                    <Icon icon="fa6-solid:handshake" className="w-5 h-5" />
                    Let's Make This Official!
                  </FormLabel>
                  <FormDescription className="text-red-600 flex items-center gap-2">
                    I'm excited to agree to the privacy policy and terms of
                    service - let's rock together safely!
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div> */}

        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-full py-4 text-lg font-bold bg-gradient-to-r from-[#d14f4f] to-red-500 hover:from-red-500 hover:to-[#d14f4f] transform hover:scale-105 transition-all duration-200 shadow-lg text-white flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon icon="fa6-solid:music" className="w-5 h-5" />
                Sending Your Info...
              </>
            ) : (
              <>
                <Icon icon="fa6-solid:rocket" className="w-5 h-5" />
                Let's Rock & Roll!
              </>
            )}
          </Button>
          <Button
            type="reset"
            variant="outline"
            className="rounded-full px-6 py-4 text-lg font-semibold border-2 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Icon icon="fa6-solid:arrow-rotate-left" className="w-5 h-5" />
            Start Over
          </Button>
        </div>
      </form>
    </Form>
  );
}
