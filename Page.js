// app/page.js
'use client';
import React, { useState } from 'react';

// 22 भाषाओं की पूरी लिस्ट (फोटो 3 के अनुसार)
const supportedLanguages = [
  { code: 'ar', name: 'Arabic (العربية)' }, { code: 'da', name: 'Danish (Dansk)' },
  { code: 'de', name: 'German (Deutsch)' }, { code: 'el', name: 'Greek (Ελληνικά)' },
  { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish (Español)' },
  { code: 'fi', name: 'Finnish (Suomi)' }, { code: 'fr', name: 'French (Français)' },
  { code: 'he', name: 'Hebrew (עברית)' }, { code: 'hi', name: 'Hindi (हिन्दी)' },
  { code: 'it', name: 'Italian (Italiano)' }, { code: 'ja', name: 'Japanese (日本語)' },
  { code: 'ko', name: 'Korean (한국어)' }, { code: 'ms', name: 'Malay (Bahasa Melayu)' },
  { code: 'nl', name: 'Dutch (Nederlands)' }, { code: 'no', name: 'Norwegian (Norsk)' },
  { code: 'pl', name: 'Polish (Polski)' }, { code: 'pt', name: 'Portuguese (Português)' },
  { code: 'ru', name: 'Russian (Русский)' }, { code: 'sv', name: 'Swedish (Svenska)' },
  { code: 'sw', name: 'Swahili (Kiswahili)' }, { code: 'tr', name: 'Turkish (Türkçe)' }
];

export default function PremiumSaaSDashboard() {
  // वीडियो और एआई स्टेट्स
  const [videoFile, setVideoFile] = useState(null);
  const [targetLang, setTargetLang] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  // नया 5-शेयर बोनस नियम स्टेट्स
  const [sharesCount, setSharesCount] = useState(0);
  const [isClaimed, setIsClaimed] = useState(false);

  // व्हाट्सएप/टेलीग्राम शेयर ट्रैकिंग लॉजिक (बिना लॉगिन झंझट के)
  const handleShareAction = (platform) => {
    if (sharesCount < 5) {
      const nextCount = sharesCount + 1;
      setSharesCount(nextCount);
      if (nextCount === 5) {
        setIsClaimed(true);
        setStatusText('🎉 बधाई हो! 5 शेयर पूरे हुए। 1 फ्री डबिंग क्रेडिट अनलॉक हो गया है!');
      } else {
        setStatusText(`शेयर दर्ज हुआ! बोनस के लिए ${5 - nextCount} शेयर और चाहिए।`);
      }
    }
    const text = "Hey! Check out this premium AI Video Dubbing tool, Dubyo AI:";
    const url = "https://dubyo.ai";
    if (platform === 'whatsapp') {
      window.open(`https://whatsapp.com{encodeURIComponent(text + " " + url)}`, '_blank');
    } else {
      window.open(`https://t.me{encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  // 6-स्टेप्स एआई पाइपलाइन सिम्युलेटर (फोटो 2 और 5 के अनुसार)
  const startDubbingPipeline = () => {
    if (!videoFile || !targetLang) {
      alert('कृपया पहले वीडियो फ़ाइल लोड करें और टारगेट भाषा चुनें!');
      return;
    }
    setLoading(true);
    setProgress(15);
    setStatusText('1. Speech-to-Text (Chatterbox API) एक्टिवेट हो रहा है...');

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setStatusText('🔥 डबिंग पूरी हो गई! आपका वीडियो डाउनलोड के लिए तैयार है।');
          return 100;
        }
        if (prev === 45) setStatusText('2. अनुवाद और वॉइस क्लोनिंग (Dubverse API) चालू है...');
        if (prev === 75) setStatusText('3. लिप-सिंक और ऑडियो-वीडियो मर्जिंग पाइपलाइन प्रोसेस में है...');
        return prev + 5;
      });
    }, 300);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans">
      {/* 📁 साइडबार नेविगेशन सेंटर (फोटो 1, 4, 6 के अनुसार - ऑटो स्क्रॉल फिक्स के साथ) */}
      <aside className="w-64 border-r border-slate-900 bg-slate-900/40 p-4 flex flex-col justify-between hidden md:flex" style={{ height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>
        <div>
          <div className="text-xl font-black tracking-wider text-indigo-500 mb-6 px-3">DUBYO<span className="text-white">.ai</span></div>
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">SaaS Console</div>
          <nav className="mt-4 space-y-1">
            {['📊 Dashboard', '🎙️ AI Studio', '🎤 Voice Clone', '📁 My Projects', '📜 History', '💳 Pricing', '🎫 Subscription', '⚙️ Settings', '📈 Analytics', '🛡️ Admin Panel', '❓ Help Center'].map((item, idx) => (
              <a key={idx} href="#" className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-900 hover:text-white transition-all">{item}</a>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-900 pt-4 text-[11px] text-slate-600 space-y-1 px-3">
          <a href="#" className="block hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="block hover:text-slate-400">Terms of Service</a>
        </div>
      </aside>

      {/* 📊 मुख्य कंटेंट एरिया */}
      <main className="flex-1 p-8 space-y-8 max-w-5xl mx-auto">
        {/* मिनी एनालिटिक्स बोर्ड */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-slate-900 bg-slate-900/20 p-5 rounded-2xl">
            <div className="text-slate-500 text-xs font-semibold uppercase">Total Minutes Dubbed</div>
            <div className="text-2xl font-bold mt-1 text-indigo-400">142.5 mins</div>
          </div>
          <div className="border border-slate-900 bg-slate-900/20 p-5 rounded-2xl">
            <div className="text-slate-500 text-xs font-semibold uppercase">Credits Available</div>
            <div className="text-2xl font-bold mt-1 text-emerald-400">{isClaimed ? '4 Credits' : '3 Credits'}</div>
          </div>
          <div className="border border-slate-900 bg-slate-900/20 p-5 rounded-2xl">
            <div className="text-slate-500 text-xs font-semibold uppercase">SaaS Plan</div>
            <div className="text-2xl font-bold mt-1">Creator Pro</div>
          </div>
        </div>

        {/* मुख्य एआई डबिंग इंजन और प्रोग्रेस मॉनिटर */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-3xl p-6 md:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* लेफ्ट साइड: अपलोड फॉर्म */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-100">🎙️ AI Video Dubbing Studio</h3>
            
            <div className="border-2 border-dashed border-slate-800 bg-slate-950 hover:border-indigo-500/50 transition-all p-8 rounded-2xl text-center flex flex-col items-center justify-center min-h-[180px] relative group cursor-pointer">
              <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files)} className="absolute inset-0 opacity-0 cursor-pointer" />
              <div className="text-3xl mb-2">📁</div>
              <p className="text-xs font-semibold text-slate-300">{videoFile ? `Selected: ${videoFile.name}` : 'ड्रैग करें या वीडियो फ़ाइल लोड करने के लिए क्लिक करें'}</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">टारगेट भाषा चुनें (Target Language):</label>
              <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 focus:outline-none focus:border-indigo-500">
                <option value="">-- 22 भाषाओं का ड्रॉपडाउन --</option>
                {supportedLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-black">{lang.name}</option>
                ))}
              </select>
            </div>

            <button onClick={startDubbingPipeline} disabled={loading} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-600/20">
              {loading ? 'पाइपलाइन चालू है...' : '🚀 AI Dubbing शुरू करें'}
            </button>
          </div>

          {/* राइट साइड: रियल-टाइम प्रोग्रेस मॉनिटर और 5-शेयर बॉक्स */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* लाइव पाइपलाइन स्टेटस */}
            <div className="border border-slate-900 bg-slate-950/50 p-4 rounded-xl space-y-4 min-h-[120px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Pipeline Status</div>
              {progress > 0 ? (
                <div className="space-y-2">
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                  </div>
                  <p className="text-xs font-mono text-slate-400 bg-slate-900/40 p-2 rounded border border-slate-900">{statusText}</p>
                </div>
              ) : (
                <p className="text-xs text-slate-500">कोई टास्क एक्टिव नहीं है।</p>
              )}
            </div>

            {/* 🎁 5-Share Campaign (नया बदला हुआ नियम) */}
            <div className="border border-slate-800 bg-slate-900/60 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-slate-200">🎁 5-Share Viral Bonus</h4>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isClaimed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{isClaimed ? 'Completed' : 'Pending'}</span>
              </div>
              <p className="text-[11px] text-slate-400">बस 5 दोस्तों को व्हाट्सएप या टेलीग्राम पर लिंक शेयर करें और पाएं 1 फ्री क्रेडिट!</p>
              
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-slate-500"><span>शेयर प्रोग्रेस</span><span>{sharesCount} / 5 क्लिक</span></div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900">
    
