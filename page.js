"use client";
import React, { useState } from 'react';
import { Tv, Languages, Sparkles, Mic, Share2, CheckCircle2, ArrowRight, Sun, Moon, Play, History, CreditCard, Settings } from 'lucide-react';

export default function DubLab() {
  const [tab, setTab] = useState('home');
  const [dark, setDark] = useState(true);
  const [shares, setShares] = useState(0);

  return (
    <div className={`min-h-screen flex text-sm ${dark ? 'bg-[#09090b] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      {/* SIDEBAR NAVIGATION */}
      <aside className={`w-64 border-r p-4 flex flex-col justify-between ${dark ? 'bg-[#0b0f19] border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <div className="space-y-6">
          <h2 onClick={() => setTab('home')} className="text-xl font-black tracking-tighter cursor-pointer bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">🎙️ DUBLAB</h2>
          <nav className="flex flex-col gap-1">
            {['home', 'studio', 'voices', 'history', 'pricing', 'settings'].map(t => (
              <button key={t} onClick={() => setTab(t)} className={`w-full text-left p-2.5 rounded-xl capitalize font-bold ${tab === t ? 'bg-indigo-600 text-white' : 'hover:bg-zinc-500/10'}`}>{t === 'home' ? 'Home' : t === 'pricing' ? 'Pricing' : `AI ${t}`}</button>
            ))}
          </nav>
        </div>
        <button onClick={() => setDark(!dark)} className="w-full p-2.5 rounded-xl border border-zinc-700/50 font-bold">{dark ? '☀️ Light' : '🌙 Dark'} Mode</button>
      </aside>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-1 p-8 overflow-y-auto max-w-4xl mx-auto">
        {tab === 'home' && (
          <div className="space-y-12 text-center pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/30 bg-indigo-500/10 text-indigo-400"><Sparkles size={12} /> ElevenLabs Spec Multi-Voice Models Active</div>
            <h1 className="text-4xl font-black tracking-tight">Translate Videos Instantly with Cloned Voices</h1>
            <p className="opacity-60 max-w-xl mx-auto">Upload your video files, choose from 22 native global language configs, and render professional high-fidelity voice-over syncs via DubLab.</p>
            <button onClick={() => setTab('studio')} className="px-6 py-3 font-bold rounded-xl bg-indigo-600 text-white inline-flex items-center gap-2 shadow-lg shadow-indigo-600/20">Open AI Studio <ArrowRight size={16} /></button>
            
            {/* VIRAL SHARE REFERRAL WIDGET */}
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-indigo-950/20 to-pink-950/20 text-left space-y-3">
              <h3 className="font-extrabold text-lg">Share with 5 Friends = Get 1 Dub Task Free!</h3>
              <div className="flex justify-between text-xs font-bold opacity-60"><span>Referral Progress</span><span>{shares} / 5 Joined</span></div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5"><div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${(shares/5)*100}%` }} /></div>
              <button onClick={() => shares < 5 && setShares(shares + 1)} disabled={shares === 5} className="px-4 py-2 text-xs font-bold bg-white text-zinc-950 rounded-lg disabled:opacity-40"><Share2 size={12} className="inline mr-1" /> Invite 1 Creator Friend</button>
              {shares === 5 && <p className="text-xs font-bold text-emerald-400">🎉 Free Task Token Successfully Unlocked on Dashboard!</p>}
            </div>
          </div>
        )}

        {tab === 'studio' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black">AI DUBBING STUDIO WORKSPACE</h2>
            <div className={`p-6 rounded-2xl border ${dark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'} space-y-4`}>
              <input type="text" placeholder="Paste Cloud Video URL (YouTube, MP4, S3 Target)..." className={`w-full p-3 rounded-xl border outline-none ${dark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100'}`} />
              <div className="grid grid-cols-2 gap-4">
                <select className={`p-3 rounded-xl border ${dark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100'}`}><option>🇮🇳 Hindi (hi)</option><option>🇺🇸 English (en)</option><option>🇪🇸 Spanish (es)</option></select>
                <select className={`p-3 rounded-xl border ${dark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100'}`}><option>🎙️ Adam (Deep Clone)</option><option>🎙️ Bella (Conversational)</option></select>
              </div>
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg">{shares === 5 ? "🚀 Run Free Referral Render Job" : "⚡ Trigger Cloud DubLab Processing"}</button>
            </div>
          </div>
        )}

        {tab === 'voices' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black">VOICE CLONING LABORATORY</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-8 ${dark ? 'border-zinc-800' : 'border-zinc-200'} cursor-pointer`}><Mic size={20} className="mb-2 text-indigo-400" /><span className="font-bold text-xs">Train New Custom Voice Model</span></div>
              <div className={`p-4 rounded-xl border ${dark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-200'}`}><h4 className="font-bold text-sm">Adam Default (System)</h4><p className="text-xs opacity-50 mt-1">Deep vocal signature optimized for high-fidelity long narrations.</p></div>
            </div>
          </div>
        )}

        {tab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black">SYSTEM HISTORY LOGS</h2>
            <div className="border border-zinc-800 rounded-xl overflow-hidden text-xs text-center"><div className="bg-zinc-900 p-3 font-bold border-b border-zinc-800">Completed Render Task Queue Logs</div><div className="p-4 opacity-50 font-mono">dub_job_9845_alpha | 🇲🇾 Malay (ms) | Success State</div></div>
          </div>
        )}

        {tab === 'pricing' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-center">FLEXIBLE WORKSPACE PLAN TIERS</h2>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className={`p-6 rounded-2xl border ${dark ? 'border-zinc-800' : 'border-zinc-200'}`}><h4 className="font-bold opacity-60">Starter Tier</h4><div className="text-3xl font-black my-2">$0</div><p className="text-xs opacity-50">Includes 10 free rendering balance minutes.</p></div>
              <div className="p-6 rounded-2xl bg-zinc-950 border-2 border-indigo-500"><h4 className="font-bold text-indigo-400">Creator Pro</h4><div className="text-3xl font-black text-white my-2">$29</div><p className="text-xs opacity-50 text-zinc-400">300 Unrestricted high-fidelity lip-sync render minutes.</p></div>
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div className="space-y-4 max-w-sm">
            <h2 className="text-xl font-black">ACCOUNT SETTINGS</h2>
            <div className="space-y-1"><span className="text-xs opacity-50 font-bold">Workspace Branding Name</span><input type="text" readOnly value="DubLab AI Global Network" className={`w-full p-2.5 rounded-xl border ${dark ? 'bg-zinc-900 border-zinc-800 opacity-60' : 'bg-zinc-100'}`} /></div>
          </div>
        )}
      </main>
    </div>
  );
}

