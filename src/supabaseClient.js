import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwganmnudeaqkmyczyfp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Z2FubW51ZGVhcWtteWN6eWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MzIzNTYsImV4cCI6MjEwNTIwODM1Nn0.wNbdHUmVvNuduhjKUBLF2MV0qhpLmrBY_YMtzWG1uZc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
