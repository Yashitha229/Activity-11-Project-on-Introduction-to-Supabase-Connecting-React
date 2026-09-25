import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://idsrzlggfmsoowrhyljy.supabase.co";

const supabaseKey = "sb_publishable_V043Uz9ZsAU2Ft0zpTIRuQ_f3wmadGg";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);