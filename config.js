const SUPABASE_URL = 'https://xmdzspqymngdgquakgtg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_xBTOMM1ma91iC02wRW_32A_AX8hbt47';



export const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
