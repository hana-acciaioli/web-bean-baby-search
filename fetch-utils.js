const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanBabies(name, type) {
    let query = client.from('beanBabies').select('*').order('name').limit(100);
    // eslint-disable-next-line no-empty
    if (name) {
    }

    // eslint-disable-next-line no-empty
    if (type) {
    }
    const response = await query;
    return response;
}
