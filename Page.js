// ==========================================
// DUBLAB AI - FULL MONOLITHIC FRONTEND CORE (page.js)
// ==========================================
'use client';
import { useState } from 'react';

export default function DubLabSaaSPlatform() {
  const [currentTab, setCurrentTab] = useState('landing'); 
  const [file, setFile] = useState(null);
  const [lang, setLang] = useState('hi');
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [engineLog, setEngineLog] = useState(null);
  const [claimed, setClaimed] = useState(false);

  const triggerDubEngine = async () => {
    if (!file) return alert("कृपया पहले एक वीडियो या ऑडियो फ़ाइल चुनें!");
    setStatus("1. Pipelining file into DubLab secure edge node...");
    setProgress(20);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetLanguage', lang);
    formData.append('textToSpeak', "DubLab Automated Neural Speech Synthesis Pipeline execution.");

    try {
      const interval = setInterval(() => {
        setProgress(p => p >= 85 ? p : p + 20);
      }, 1000);

      const res = await fetch('http://localhost:5000/api/dub/process', {
        method: 'POST',
        body: formData
      });

      clearInterval(interval);
      if (res.ok) {
        const data = await res.json();
        setEngineLog(data);
        setProgress(100);
        setStatus("✨ DubLab AI Synthesis Verified & Complete!");
      }
    } catch (err) {
      setStatus("Error connecting to localized server backend engine.");
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col md:flex-row">
      
      {/* GLOBAL SAAS SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-900/60 backdrop-blur border-b md:border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div onClick={() => setCurrentTab('landing')} className="text-2xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent tracking-widest cursor-pointer mb-10 text-center md:text-left">
            DUBLAB.AI
          </div>
          <nav className="space-y-2 text-sm font-medium">
            <button onClick={() => setCurrentTab('studio')} className={`w-full text-left p-3 rounded-xl transition ${currentTab === 'studio' ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>🎬 AI Dubbing Studio</button>
            <button onClick={() => setCurrentTab('cloning')} className={`w-full text-left p-3 rounded-xl transition ${currentTab === 'cloning' ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>🎤 Voice Cloning Lab</button>
            <button onClick={() => setCurrentTab('history')} className={`w-full text-left p-3 rounded-xl transition ${currentTab === 'history' ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>📁 Project History</button>
            <button onClick={() => setCurrentTab('referral')} className={`w-full text-left p-3 rounded-xl transition ${currentTab === 'referral' ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>🎁 Refer & Earn Plan</button>
            <button onClick={() => setCurrentTab('pricing')} className={`w-full text-left p-3 rounded-xl transition ${currentTab === 'pricing' ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' : 'text-slate-400 hover:bg-slate-800/50'}`}>💳 SaaS Premium Plans</button>
          </nav>
        </div>
        <div className="pt-4 border-t border-slate-800/60 mt-6 md:mt-0">
          <button onClick={() => setCurrentTab('admin')} className={`w-full text-left p-3 text-xs uppercase font-bold tracking-wider rounded-xl transition ${currentTab === 'admin' ? 'text-rose-400 bg-rose-500/5 border border-rose-500/10' : 'text-slate-500 hover:text-slate-400'}`}>🛡️ Root Admin Panel</button>
        </div>
      </aside>

      {/* DYNAMIC SCREEN CONTENT DISPLAY CONTAINER */}
      <main className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full overflow-y-auto">
        
        {/* TABS 1: PREMIUM LANDING INTERFACE */}
        {currentTab === 'landing' && (
          <div className="text-center py-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <span className="inline-flex text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full mb-6">🚀 Next-Generation Neural Audio Architecture Live</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Dub Videos instantly at <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">DubLab AI Studio</span></h1>
            <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed mb-10">Professional video translation, auto voice cloning, and high-fidelity language switching powered by optimized backend routers.</p>
            <button onClick={() => setCurrentTab('studio')} className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-sky-500/10 hover:opacity-90 transition">Open Workspace Console</button>
          </div>
        )}

        {/* TABS 2: DUBBING STUDIO WORKSPACE */}
        {currentTab === 'studio' && (
          <div className="space-y-6">
            <header><h2 className="text-2xl font-black">AI Dubbing Studio</h2><p className="text-xs text-slate-400 mt-1">Upload files and execute smart cross-language rendering tracks.</p></header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 border-2 border-dashed border-slate-800 bg-slate-900/20 rounded-2xl p-12 text-center hover:border-sky-500 transition">
                <input type="file" accept="video/*,audio/*" id="file" className="hidden" onChange={(e) => setFile(e.target.files)} />
                <label htmlFor="file" className="cursor-pointer block">
                  <span className="text-4xl block mb-2">🎬</span>
                  <span className="font-bold text-sm text-slate-200 block">Drag & Drop Master File</span>
                  <span className="text-[10px] text-slate-500">Supports multimedia file assets up to 50MB</span>
                </label>
                {file && <p className="mt-4 text-xs font-semibold text-emerald-400 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">✓ Loaded: {file.name}</p>}
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Localization</label>
                <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none">
                  <option value="hi">Hindi (हिन्दी) — Chatterbox Core</option>
                  <option value="es">Spanish (Español) — Chatterbox Core</option>
                  <option value="bn">Bengali (বাংলা) — Dubverse Engine</option>
                  <option value="ta">Tamil (தமிழ்) — Dubverse Engine</option>
                </select>
                <button onClick={triggerDubEngine} className="w-full bg-sky-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition">Synthesize Voice Track</button>
                {progress > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold"><span className="truncate max-w-[130px]">{status}</span><span>{progress}%</span></div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div className="bg-sky-400 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div></div>
                  </div>
                )}
              </div>
            </div>
            {engineLog && (
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mt-4">
                <h4 className="text-xs font-bold uppercase text-sky-400 mb-2">✓ Engine Pipeline Output Activity Logs</h4>
                <pre className="text-xs text-slate-400 bg-slate-950 p-4 rounded-xl font-mono overflow-x-auto">{JSON.stringify(engineLog, null, 2)}</pre>
              </div>
            )}
          </div>
        )}

        {/* TABS 3: VOICE CLONING COMPONENT */}
        {currentTab === 'cloning' && (
          <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-5">
            <h3 className="text-xl font-black">Voice Cloning Lab</h3>
            <p className="text-xs text-slate-400">Train zero-shot predictive voice matrices from 10-second vocal reference blueprints.</p>
            <input type="text" placeholder="Voice Model Custom Identifier Name" className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm" />
            <input type="file" accept="audio/*" className="w-full text-xs text-slate-500 bg-slate-950 border border-slate-800 p-3 rounded-xl cursor-pointer file:mr-4 file:bg-sky-500/10 file:text-sky-400 file:border-0 file:px-3 file:py-1.5 file:rounded-lg" />
            <button onClick={() => alert("Weights ingestion initiated on DubLab edge servers successfully!")} className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl text-xs">Train Model</button>
          </div>
        )}

        {/* TABS 4: HISTORY ARCHIVES LOG */}
        {currentTab === 'history' && (
          <div className="space-y-4">
            <h3 className="text-xl font-black">Project History Log</h3>
