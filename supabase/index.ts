import { createClient } from '@supabase/supabase-js'

export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const SUPABASE_IMAGES_BUCKET = "images"

if (NEXT_PUBLIC_SUPABASE_URL === undefined) {
  throw new Error('Supabase url not privided')
}
if (NEXT_PUBLIC_SUPABASE_KEY === undefined) {
  throw new Error('Supabase key not privided')
}

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

