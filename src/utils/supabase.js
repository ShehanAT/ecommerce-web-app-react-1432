import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
    process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL,
    process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_KEY
);

export const getServiceSupabase = () => 
    createClient(
        process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL,
        process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_KEY
    );
    