import React, { useState } from 'react';
import { 
  TrendingUp, Shield, Award, Briefcase, FileCheck, ArrowRight, 
  Calendar, DollarSign, Lock, Building2, ChevronRight, Check, 
  CheckCircle2, Sparkles, Plus, BarChart3, Database, Users
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface DealMandate {
  id: string;
  codeName: string;
  industry: string;
  enterpriseValue: string;
  ebitda: string;
  multiple: string;
  status: string;
  highlights: string[];
  image: string;
}

const MANDATES: DealMandate[] = [
  {
    id: 'm1',
    codeName: 'Project CloudScale',
    industry: 'DEV-OPS & CLOUD INFRASTRUCTURE SAAS',
    enterpriseValue: '$42,000,000 EV',
    ebitda: '$4.5M Adj. EBITDA (94% NRR)',
    multiple: '9.3x EBITDA Multiple',
    status: 'LOI STAGE // 6 BIDS',
    highlights: ['140% Net Retention Rate', 'Tier-1 Enterprise Fortune 500 Base', 'Proprietary Zero-Trust Container Engine', 'Delaware C-Corp Clean Cap Table'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    codeName: 'Project MedLogix',
    industry: 'SPECIALIZED COLD-CHAIN PHARMA LOGISTICS',
    enterpriseValue: '$68,000,000 EV',
    ebitda: '$8.7M Adj. EBITDA',
    multiple: '7.8x EBITDA Multiple',
    status: 'VDR ROUND 2 DILIGENCE',
    highlights: ['FDA / cGMP Certified 4-Facility Hub', '10-Year Exclusive Hospital Network Contracts', 'Autonomous Temperature IoT Telemetry', 'Substantial Moat & High Barriers to Entry'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    codeName: 'Project Apex Precision',
    industry: 'AEROSPACE & DEFENSE MACHINING',
    enterpriseValue: '$115,000,000 EV',
    ebitda: '$13.4M Adj. EBITDA',
    multiple: '8.6x EBITDA Multiple',
    status: 'EXCLUSIVITY GRANTED',
    highlights: ['ITAR Registered & AS9100D Certified', 'Multi-Year Prime Defense Contractor POs', 'State-of-the-Art 5-Axis CNC Fleet', '98% On-Time Delivery Record'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    codeName: 'Project CyberShield',
    industry: 'AI-POWERED THREAT INTELLIGENCE',
    enterpriseValue: '$55,000,000 EV',
    ebitda: '$5.8M Adj. EBITDA (82% Gross Margin)',
    multiple: '9.5x EBITDA Multiple',
    status: 'MARKETING // CIM DISPATCH',
    highlights: ['Autonomous SecOps Automation Engine', 'Zero Customer Churn in 24 Months', '7 Approved Patents in Active Portfolio', 'Strategic Buyer Synergies Primed'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [cart, setCart] = useState<DealMandate[]>([]);
  const [isCimModalOpen, setIsCimModalOpen] = useState(false);
  const [cimSuccess, setCimSuccess] = useState(false);

  const toggleCart = (mandate: DealMandate) => {
    if (cart.find(m => m.id === mandate.id)) {
      setCart(cart.filter(m => m.id !== mandate.id));
    } else {
      setCart([...cart, mandate]);
    }
  };

  const handleCimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCimSuccess(true);
    setTimeout(() => {
      setCimSuccess(false);
      setIsCimModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#090b12] border-b border-blue-900/30 px-4 py-2 text-center text-xs tracking-wider text-slate-400 flex items-center justify-center space-x-3">
        <span className="flex items-center text-blue-400 font-mono font-semibold">
          <TrendingUp className="w-3.5 h-3.5 mr-1" />
          NEXUS CAPITAL ADVISORS // MIDDLE-MARKET M&A DESK
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span className="hidden sm:inline">Exclusively Representing Founders & Micro-PE Aggregators</span>
        <span className="text-slate-600">•</span>
        <button 
          onClick={() => setIsAdminOpen(true)}
          className="text-blue-400 hover:text-blue-300 font-mono text-xs font-semibold underline ml-2 font-semibold"
        >
          [ ADVISOR DESK ]
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#06080d]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-600/20">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg text-white font-serif flex items-center gap-1.5">
                NEXUS<span className="text-blue-500">CAPITAL</span>
              </span>
              <p className="text-xs font-semibold tracking-wider tracking-widest text-slate-400 uppercase font-mono">M&A Advisory & Data Room OS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300 font-mono">
            <a href="#mandates" className="hover:text-blue-400 transition-colors">Active Mandates</a>
            <a href="#benchmarks" className="hover:text-blue-400 transition-colors">EBITDA Multiples</a>
            <a href="#vdr" className="hover:text-blue-400 transition-colors">Virtual Data Room</a>
            <a href="#team" className="hover:text-blue-400 transition-colors">Advisory Board</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCimModalOpen(true)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-blue-600/25 flex items-center space-x-2 font-mono"
            >
              <Lock className="w-4 h-4" />
              <span>REQUEST CIM / NDA</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>MIDDLE-MARKET TRANSACTION EXCELLENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-serif">
              Maximizing Enterprise Value. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Precision Deal Execution.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We orchestrate competitive auction processes for high-growth tech, healthcare, and industrial market leaders ($10M–$150M EV). Connecting visionary founders with strategic acquirers and institutional private equity.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 font-mono">
              <button
                onClick={() => setIsCimModalOpen(true)}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2"
              >
                <span>REQUEST CONFIDENTIAL CIM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#mandates"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>VIEW ACTIVE DEALS</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">$385M</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Live Mandates</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">8.4x</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Avg EBITDA Multiple</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">92.6%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Closing Success Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-600/40 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-[#090c13] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-ping"></div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">VDR ACTIVE BIDDER RADAR</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">TIER-1 ENCRYPTED</span>
                </div>

                <div className="space-y-4 font-mono">
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Institutional IOIs Received</span>
                      <span className="text-blue-400 font-bold">18 Qualified Bids</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full w-[85%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Due Diligence Document Access</span>
                      <span className="text-emerald-400 font-bold">256-Bit Clean VDR</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full w-[100%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Definitive APA Closing Gate</span>
                      <span className="text-cyan-400 font-bold">Project Titan on Deck</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full w-[92%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsCimModalOpen(true)}
                    className="w-full py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-300 font-mono text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Lock className="w-4 h-4 text-blue-400" />
                    <span>Request Verified VDR Credential</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Mandates Section */}
      <section id="mandates" className="py-20 px-4 sm:px-8 bg-[#080a10] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full">
              ACTIVE M&A INVENTORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Confidential Sell-Side Mandates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              All mandates represent profitable middle-market market leaders with verified audited financials. Access CIM upon bilateral NDA execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MANDATES.map((mandate) => {
              const isInCart = !!cart.find(m => m.id === mandate.id);
              return (
                <div 
                  key={mandate.id}
                  className="bg-[#0a0d15] border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={mandate.image} 
                      alt={mandate.codeName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d15] via-transparent to-black/40"></div>
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider font-mono text-blue-400 uppercase">
                      {mandate.status}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors font-serif">
                          {mandate.codeName}
                        </h3>
                      </div>
                      <span className="font-mono font-bold text-blue-400 text-sm block mb-1">{mandate.enterpriseValue}</span>
                      <div className="text-xs text-slate-300 font-mono font-semibold mb-2">{mandate.ebitda}</div>
                      <p className="text-base text-zinc-200 leading-relaxed leading-relaxed font-mono">
                        {mandate.industry}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider block">Investment Highlights:</span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {mandate.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-blue-400 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCart(mandate)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                          isInCart 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>VDR INCLUDED</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-blue-400" />
                            <span>SELECT MANDATE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multiple Benchmarks & VDR Architecture */}
      <section id="benchmarks" className="py-20 px-4 sm:px-8 bg-[#06080d] scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full">
              MARKET TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Middle-Market Multiple Benchmarks
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We benchmark active EBITDA multiples across key deal sectors to ensure your exit commands maximum market premiums.
            </p>

            <div className="space-y-3 font-mono">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-blue-600/10 border border-blue-500/30 rounded-lg text-blue-400 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">SaaS & Enterprise Recurring Software: 8.5x – 12.0x</h4>
                  <p className="text-base text-zinc-200 leading-relaxed mt-1">Requires &gt;85% gross margins, sub-5% gross revenue churn, and net revenue expansion.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-600/10 border border-emerald-500/30 rounded-lg text-emerald-400 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Specialized Healthcare & Clinical Ops: 7.0x – 9.5x</h4>
                  <p className="text-base text-zinc-200 leading-relaxed mt-1">High-margin cash pay aesthetics, outpatient surgery, and regional lab facilities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#090c13] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-serif">Request Confidential Information Memorandum (CIM)</h3>
            <p className="text-base text-zinc-200 leading-relaxed">Institutional buyers may register for VDR access upon bilateral NDA:</p>

            <form onSubmit={handleCimSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold font-mono text-slate-300 block mb-1">Acquiring Entity Name</label>
                <input required placeholder="Apex Private Equity Fund IV" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none font-mono" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-semibold font-mono text-slate-300 block mb-1">Principal / Partner Name</label>
                  <input required placeholder="David Henderson, Managing Director" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm font-semibold font-mono text-slate-300 block mb-1">Fund AUM / Dry Powder</label>
                  <input placeholder="$250M+ Dedicated Capital" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold font-mono text-slate-300 block mb-1">Select Target Deal</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none font-mono">
                  <option>Project CloudScale ($42M EV - SaaS)</option>
                  <option>Project MedLogix ($68M EV - Pharma Logistics)</option>
                  <option>Project Apex Precision ($115M EV - Aerospace Defense)</option>
                  <option>Project CyberShield ($55M EV - AI SecOps)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base font-semibold min-h-[44px] tracking-wider transition-all shadow-lg shadow-blue-600/25 font-mono"
                >
                  EXECUTE NDA & REQUEST VDR ACCESS
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Virtual Data Room Section */}
      <section id="vdr" className="py-20 px-4 sm:px-8 bg-[#080b12] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto bg-[#0a0d16] border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full">
                VIRTUAL DATA ROOM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif mt-4">
                Secure Lower Middle-Market Deal Rooms
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Institutional virtual data rooms equipped with dynamic watermarking, granular permission gating, and real-time bidder engagement telemetry.
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold font-mono text-xs rounded-xl transition shadow-lg shadow-blue-600/25"
                >
                  ENTER DEAL ROOM [ PASSKEY: ma2026 ]
                </button>
              </div>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">VDR Encryption:</span>
                <span className="text-white font-bold">AES-256 GCM Cloud Storage</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Watermarking:</span>
                <span className="text-blue-400 font-bold">Dynamic IP & Email Imprint</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Compliance:</span>
                <span className="text-emerald-400 font-bold">FINRA / SEC Diligence Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board / Team Section */}
      <section id="team" className="py-20 px-4 sm:px-8 bg-[#06080d] border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full">
              SENIOR LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif mt-4">
              M&A Managing Directors & Deal Architects
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Seasoned bulge-bracket veterans delivering institutional M&A execution to founder-led lower-middle market enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0a0d16] border border-slate-800 rounded-2xl group hover:border-blue-500/40 transition">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" alt="Partner" className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-[1.02] transition" />
              <span className="text-xs font-semibold tracking-wider font-mono text-blue-400 uppercase">TECH & SAAS M&A</span>
              <h4 className="text-lg font-bold text-white mt-1">Marcus Reynolds</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Former Morgan Stanley Tech Banking VP • Advised on 38 Closed Transactions ($3.1B EV).</p>
            </div>

            <div className="p-6 bg-[#0a0d16] border border-slate-800 rounded-2xl group hover:border-blue-500/40 transition">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Partner" className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-[1.02] transition" />
              <span className="text-xs font-semibold tracking-wider font-mono text-cyan-400 uppercase">HEALTHCARE & LIFE SCIENCES</span>
              <h4 className="text-lg font-bold text-white mt-1">Elena Rostova, CFA</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Wharton MBA • Led 18 regional health system and pharma logistics recapitalizations.</p>
            </div>

            <div className="p-6 bg-[#0a0d16] border border-slate-800 rounded-2xl group hover:border-blue-500/40 transition">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Partner" className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-[1.02] transition" />
              <span className="text-xs font-semibold tracking-wider font-mono text-emerald-400 uppercase">INDUSTRIALS & DEFENSE</span>
              <h4 className="text-lg font-bold text-white mt-1">Harrison Cole</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-2">Former Lazard Director • Specialized in ITAR-cleared precision manufacturing and defense platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-[#05060a] px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span className="font-bold text-white font-serif tracking-wider">NEXUS CAPITAL ADVISORS</span>
            </div>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed">
              Middle-Market M&A Advisory & Virtual Data Room Operating System. Architected for boutique investment banks, sell-side brokers, and micro-PE sponsors.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Core Deal Sectors</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>DevOps & Enterprise SaaS</li>
              <li>Cold-Chain Healthcare</li>
              <li>Aerospace & Precision CNC</li>
              <li>Cybersecurity Automation</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Regulatory Compliance</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>SEC Broker-Dealer Exemption</li>
              <li>FINRA Section 15(b) Rule</li>
              <li>256-Bit VDR Room Enforced</li>
              <li>Supabase Row Level Security</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-mono text-white text-xs uppercase tracking-wider">Advisor Access</h5>
            <p className="text-xs font-semibold text-slate-400">
              Access the confidential deal room and mandate Kanban with the 1-click passkey:
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-blue-500/40 text-blue-400 font-mono text-xs rounded-xl transition-all"
            >
              Advisor Portal (/admin)
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-300">
          <div>© 2026 Nexus Capital Advisors LLC. Turnkey M&A Advisory & Virtual Data Room OS.</div>
          <div className="mt-2 sm:mt-0 font-mono text-blue-400">Passkey: ma2026</div>
        </div>
      </footer>

      {/* Modals */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* CIM Modal */}
      {isCimModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#090c13] border border-blue-500/40 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl">
            <button 
              onClick={() => setIsCimModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>

            {!cimSuccess ? (
              <form onSubmit={handleCimSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-xl text-blue-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">Execute Bilateral NDA</h3>
                    <p className="text-base text-zinc-200 leading-relaxed">Instant Virtual Data Room (VDR) clearance</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Buyer / Fund Legal Name</label>
                  <input required placeholder="Summit Equity Partners LP" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Corporate Email</label>
                    <input required type="email" placeholder="henderson@summitequity.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Direct Phone</label>
                    <input required type="tel" placeholder="+1 (212) 555-0912" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold font-mono text-slate-400 block mb-1">Selected Deal Mandate</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-base min-h-[44px] text-white focus:border-blue-500 outline-none font-mono">
                    <option>Project CloudScale ($42M EV - SaaS)</option>
                    <option>Project MedLogix ($68M EV - Pharma Logistics)</option>
                    <option>Project Apex Precision ($115M EV - Aerospace Defense)</option>
                    <option>Project CyberShield ($55M EV - AI SecOps)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base font-semibold min-h-[44px] tracking-wider transition-all shadow-lg shadow-blue-600/25 mt-4 font-mono"
                >
                  DIGITALLY EXECUTE NDA & ACCESS VDR
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/50 rounded-full flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-serif">NDA Executed</h4>
                <p className="text-base text-zinc-200 leading-relaxed max-w-xs mx-auto">
                  Your VDR credentials and CIM document package have been generated. Check your corporate inbox for single sign-on access.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
