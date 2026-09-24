-- M&A ADVISORY OS Database Schema
-- Production Supabase SQL Definition with Row Level Security (RLS)

CREATE TABLE IF NOT EXISTS public.deal_mandates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_name TEXT NOT NULL,
    industry TEXT NOT NULL,
    enterprise_value TEXT NOT NULL,
    ebitda TEXT NOT NULL,
    multiple TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'ACTIVE CIM',
    highlights JSONB DEFAULT '[]'::jsonb,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.vdr_access_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mandate_id UUID REFERENCES public.deal_mandates(id) ON DELETE SET NULL,
    mandate_name TEXT NOT NULL,
    requester_name TEXT NOT NULL,
    firm_name TEXT NOT NULL,
    requester_email TEXT NOT NULL,
    aum_bracket TEXT NOT NULL,
    nda_signed BOOLEAN DEFAULT false,
    status TEXT NOT NULL DEFAULT 'PENDING REVIEW',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.client_advisory_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL,
    founder_name TEXT NOT NULL,
    work_email TEXT NOT NULL,
    trailing_revenue TEXT NOT NULL,
    trailing_ebitda TEXT NOT NULL,
    target_exit_timeline TEXT NOT NULL,
    mandate_type TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW SUBMISSION',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.deal_mandates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vdr_access_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_advisory_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for active mandates
CREATE POLICY "Public read deal mandates" ON public.deal_mandates
    FOR SELECT USING (true);

-- Public insert for VDR access requests & client advisory inquiries
CREATE POLICY "Public insert vdr access requests" ON public.vdr_access_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public insert client inquiries" ON public.client_advisory_inquiries
    FOR INSERT WITH CHECK (true);

-- Authenticated administrative full access
CREATE POLICY "Admin full access mandates" ON public.deal_mandates
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access vdr requests" ON public.vdr_access_requests
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access client inquiries" ON public.client_advisory_inquiries
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
