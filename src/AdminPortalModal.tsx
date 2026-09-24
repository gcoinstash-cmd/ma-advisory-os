import React, { useState } from 'react';
import { Shield, Key, X, TrendingUp, Building2, Lock, DollarSign, Briefcase, FileCheck } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'ma2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid M&A Advisor Passkey. Hint: Use 1-Click Auto-Fill Demo Passkey.');
    }
  };

  const autofillPasskey = () => {
    setPasskey('ma2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090c13] border border-blue-900/50 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl overflow-hidden">
        {/* Sapphire blue backdrop glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-xl text-blue-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide font-serif">M&A ADVISORY DEAL CONSOLE</h3>
                <p className="text-xs text-slate-400">Nexus Capital Virtual Data Room & Pipeline Desk</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                  Managing Director Access Passkey
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/25 text-center font-mono"
                >
                  Verify Deal Credentials
                </button>
                <button
                  type="button"
                  onClick={autofillPasskey}
                  className="py-3 px-4 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/30 text-blue-300 font-mono text-xs rounded-xl transition-all"
                >
                  ⚡ Auto-Fill: ma2026
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>FINRA / SEC M&A Broker Exemption Compliant</span>
              <span className="font-mono text-blue-400">VDR Gate Active</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-blue-600/20 border border-blue-500/40 rounded-xl text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-serif">Live Mandate & VDR Roster</h4>
                  <p className="text-xs text-slate-400">Active Sell-Side & Buy-Side Deals Under Exclusivity</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Aggregate Deal Flow</span>
                  <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">$385M</div>
                <div className="text-[10px] text-emerald-400 mt-1">7 Active Mandates</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Approved VDR Bidders</span>
                  <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">42</div>
                <div className="text-[10px] text-cyan-400 mt-1">100% Executed NDAs</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Avg Multiple Realized</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">8.4x</div>
                <div className="text-[10px] text-emerald-400 mt-1">Adjusted EBITDA</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Live Confidential Deal Pipeline</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Project CloudScale (DevOps SaaS)</span>
                    <span className="text-slate-400 ml-2">$42M EV • 9.2x EBITDA • 6 IOIs Received</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">LOI STAGE</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Project MedLogix (Cold-Chain Pharma Distribution)</span>
                    <span className="text-slate-400 ml-2">$68M EV • 7.8x EBITDA • VDR Round 2</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px] bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">DUE DILIGENCE</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Project Apex Defense (Aerospace Precision Machining)</span>
                    <span className="text-slate-400 ml-2">$115M EV • 8.6x EBITDA • Exclusivity Granted</span>
                  </div>
                  <span className="text-purple-400 font-mono text-[11px] bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">DEFINITIVE APA</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Sign Out
              </button>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-all shadow-md font-mono"
                >
                  Close Console
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
