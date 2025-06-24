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

export default function BandSignUpForm() {
  const formSchema = z.object({
    first: z.string(),
    last: z.string(),
    cellphone: z.string(),
    email: z.string(),
    privacy: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first: "",
      last: "",
      cellphone: "",
      email: "",
      privacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        className="space-y-8 @container"
      >
        <div className="grid grid-cols-12 gap-4">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem className="col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="first"
                        placeholder="First name"
                        type="text"
                        id="first"
                        className=" "
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem className="col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="last"
                        placeholder="Last name"
                        type="text"
                        id="last"
                        className=" "
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cellphone"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="cellphone"
                        placeholder="Cellphone"
                        type="tel"
                        id="cellphone"
                        className=" "
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="email"
                        placeholder="Email"
                        type="email"
                        id="email"
                        className=" "
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="hidden shrink-0">Checkbox</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <FormLabel
                      key="privacy"
                      className="border-0 p-0 w-full flex items-start has-[[data-state=checked]]:border-primary"
                      htmlFor="privacy"
                    >
                      <Checkbox
                        id="privacy"
                        className=""
                        {...field}
                        value={field.value ? "true" : "false"}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <FormLabel>Checkbox</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          Checkbox Description
                        </p>
                      </div>
                    </FormLabel>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="sign-up"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="hidden shrink-0">Submit</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Button
                      key="sign-up"
                      id="sign-up"
                      name=""
                      className="w-full"
                      type="submit"
                      variant="default"
                    >
                      Submit
                    </Button>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          /> */}
          <div className="col-span-12 col-start-auto w-full">
            <Button type="submit" className="w-full" variant="default">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
