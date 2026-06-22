// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://psnyqpxqsdewmviivtci.supabase.co";
const supabaseAnonKey = "sb_publishable_oZISZADB_PxrxhGKXLNeiQ_GVj_0r81";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);