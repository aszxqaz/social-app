import { createClient } from '@supabase/supabase-js'

if (process.env.SUPABASE_KEY === undefined) {
  throw new Error('Supabase key not privided')
}
if (process.env.SUPABASE_URL === undefined) {
  throw new Error('Supabase url not privided')
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

