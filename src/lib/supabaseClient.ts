import { ANON_KEY, PROJECT_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(PROJECT_URL, ANON_KEY);
