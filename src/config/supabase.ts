import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database tables
export type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  service_interest?: string;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_role?: string;
  client_company?: string;
  testimonial: string;
  service_category?: string;
  image_url?: string;
  is_featured: boolean;
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  description?: string;
  benefits: string[];
  methodology?: string;
  duration?: string;
  modality?: string;
  price_range?: string;
  is_active: boolean;
  created_at: string;
};

export type Newsletter = {
  id: string;
  name: string;
  email: string;
  interests: string[];
  created_at: string;
};

// Database interface
export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: Contact;
        Insert: Omit<Contact, 'id' | 'created_at'>;
        Update: Partial<Omit<Contact, 'id' | 'created_at'>>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, 'id' | 'created_at'>;
        Update: Partial<Omit<Testimonial, 'id' | 'created_at'>>;
      };
      services: {
        Row: Service;
        Insert: Omit<Service, 'id' | 'created_at'>;
        Update: Partial<Omit<Service, 'id' | 'created_at'>>;
      };
      newsletter: {
        Row: Newsletter;
        Insert: Omit<Newsletter, 'id' | 'created_at'>;
        Update: Partial<Omit<Newsletter, 'id' | 'created_at'>>;
      };
    };
  };
}

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never;
