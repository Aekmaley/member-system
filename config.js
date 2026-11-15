const SUPABASE_URL = 'https://xmdzspqymngdgquakgtg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_xBTOMM1ma91iC02wRW_32A_AX8hbt47';

if (
    SUPABASE_URL.includes('https://xmdzspqymngdgquakgtg.supabase.co') ||
    SUPABASE_PUBLISHABLE_KEY === 'sb_publishable_xBTOMM1ma91iC02wRW_32A_AX8hbt47'
) {
    throw new Error('กรุณาใส่ Project URL และ Publishable key ใน config.js');
}

export const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
