import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  myAction: defineAction({
    input: z.object({
      guardian_first: z.string(),
      guardian_last: z.string(),
      guardian_phone: z.string(),
      guardian_phone_alt: z.string(),
      guardian_email: z.string(),
      first: z.string(),
      last: z.string(),
      age: z.number(),
      instrument: z.string(),
      allergies: z.array(z.string())
    }),
    handler: (input, context) => {},
  }),
};
