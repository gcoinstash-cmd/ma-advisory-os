# M&A Advisory OS — 3-Minute Turnkey Database Setup

Follow these 3 simple steps to connect your M&A Advisory OS to Supabase:

### 1. Create a Supabase Project
- Head to [supabase.com](https://supabase.com) and create a new project.
- Copy your **Project URL** and **Anon Public API Key** from Settings -> API.

### 2. Run SQL Schema and Seed
- In the Supabase dashboard, open the **SQL Editor**.
- Paste and run the contents of `supabase/schema.sql`.
- (Optional) Paste and run `supabase/seed.sql` for instant test mandates and VDR logs.

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Run `npm run build` or `npm run dev` and your M&A deal room, client inquiries, and VDR access requests will be fully operational in real time!
