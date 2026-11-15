const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'YOUR_PUBLISHABLE_KEY';

if (
    SUPABASE_URL.includes('YOUR_PROJECT') ||
    SUPABASE_PUBLISHABLE_KEY === 'YOUR_PUBLISHABLE_KEY'
) {
    throw new Error('กรุณาใส่ Project URL และ Publishable key ใน config.js');
}

export const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);