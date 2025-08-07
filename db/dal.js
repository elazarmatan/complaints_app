import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

export async function createComplaint(complaint){
    const {data,error} = await supabase.from('complaint').insert(complaint)
     if(error) throw new Error(error.message)
    return data
}

export async function getAllComplaints(){
    const {data,error} = await supabase.from('complaint').select('*')
    if(error) throw new Error(error.message)
    return data
}

