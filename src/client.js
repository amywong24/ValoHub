import { createClient } from '@supabase/supabase-js'

const URL = "https://einducsredqvypizzamc.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbmR1Y3NyZWRxdnlwaXp6YW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MjI2ODUsImV4cCI6MjAyODM5ODY4NX0.tE6Wh6n53OKP4agsPVN_vv74WKW7C1sPg-P6JQEd90E";

export const supabase = createClient(URL, API_KEY);