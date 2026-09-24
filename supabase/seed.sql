-- M&A ADVISORY OS Sample Seed Data

INSERT INTO public.deal_mandates (code_name, industry, enterprise_value, ebitda, multiple, status, highlights, image_url)
VALUES
('Project CloudScale', 'DEV-OPS & CLOUD INFRASTRUCTURE SAAS', '$42,000,000 EV', '$4.5M Adj. EBITDA (94% NRR)', '9.3x EBITDA Multiple', 'LOI STAGE // 6 BIDS', '["140% Net Retention Rate", "Tier-1 Enterprise Fortune 500 Base", "Proprietary Zero-Trust Container Engine", "Delaware C-Corp Clean Cap Table"]'::jsonb, 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'),
('Project MedLogix', 'SPECIALIZED COLD-CHAIN PHARMA LOGISTICS', '$68,000,000 EV', '$8.7M Adj. EBITDA', '7.8x EBITDA Multiple', 'VDR ROUND 2 DILIGENCE', '["FDA Compliant Tier-3 Distribution Network", "Exclusive 7-Year Health System Master Agreements", "Zero Customer Concentration (>9% top account)", "High Barrier Autonomous Fleet Telemetry"]'::jsonb, 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'),
('Project DefSec Precision', 'DEFENSE & AEROSPACE COMPONENT MANUFACTURING', '$115,000,000 EV', '$14.2M Adj. EBITDA', '8.1x EBITDA Multiple', 'ACTIVE CIM // EXCLUSIVE', '["ITAR Registered Tier-1 Prime Contractor Supplier", "$48M Contracted Multi-Year Backlog", "Specialized CNC 5-Axis Robotic Workcells", "High-Margin Defense Modernization Focus"]'::jsonb, 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80');

INSERT INTO public.vdr_access_requests (mandate_name, requester_name, firm_name, requester_email, aum_bracket, nda_signed, status)
VALUES
('Project CloudScale', 'Marcus Sterling', 'Apex Horizon Capital', 'm.sterling@apexhorizoncap.com', '$250M - $1B AUM', true, 'APPROVED'),
('Project MedLogix', 'Elena Vance', 'Vance BioVentures & PE', 'elena@vancebio.com', '$500M+ AUM', true, 'APPROVED'),
('Project DefSec Precision', 'David Chen', 'Sovereign Strategic Acquisitions', 'dchen@sovereignacq.com', '$1B+ AUM', false, 'UNDER COMPLIANCE REVIEW');
