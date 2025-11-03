import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://okujyxgmabigdmqkcljh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdWp5eGdtYWJpZ2RtcWtjbGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTQzMzAsImV4cCI6MjA3Nzc3MDMzMH0.9tQIVCTbIv3KhN2gah39faKJ2U2YJQ7vXzdWoO4wHFM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

