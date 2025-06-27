import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing PUBLIC_SUPABASE_URL environment variable");
}

if (!supabaseKey) {
  throw new Error("Missing PUBLIC_SUPABASE_ANON_KEY environment variable");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
