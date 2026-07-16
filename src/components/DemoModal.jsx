import { createContext, useContext, useState } from 'react';

const A = '/assets/';
const DemoCtx = createContext(() => {});
export const useDemo = () => useContext(DemoCtx);

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Calendar() {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [picked, setPicked] = useState(null);

  const first = new Date(view.y, view.m, 1);
  const startCol = (first.getDay() + 6) % 7; // Monday-first
  const daysIn = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startCol; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(d);

  const isPast = (d) => { const dt = new Date(view.y, view.m, d); const t = new Date(); t.setHours(0, 0, 0, 0); return dt < t; };
  const isToday = (d) => d === today.getDate() && view.m === today.getMonth() && view.y === today.getFullYear();
  const shift = (n) => setView((v) => { const nm = v.m + n; return { y: v.y + Math.floor(nm / 12), m: ((nm % 12) + 12) % 12 }; });

  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 700, color: '#0B1B2B', letterSpacing: '-0.01em' }}>Select a Date &amp; Time</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 26 }}>
        <button onClick={() => shift(-1)} aria-label="Previous month" style={navBtn}>‹</button>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0B1B2B', minWidth: 130, textAlign: 'center' }}>{MONTHS[view.m]} {view.y}</div>
        <button onClick={() => shift(1)} aria-label="Next month" style={navBtn}>›</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, marginTop: 18 }}>
        {DAYS.map((d) => <div key={d} style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#8CA0B0', padding: '4px 0' }}>{d}</div>)}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const past = isPast(d);
          const sel = picked === d;
          return (
            <button key={i} disabled={past} onClick={() => setPicked(d)} style={{
              aspectRatio: '1', border: 'none', borderRadius: '50%', cursor: past ? 'default' : 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: past ? 400 : 600,
              background: sel ? '#032F57' : (past ? 'transparent' : 'rgba(1,177,139,.10)'),
              color: sel ? '#fff' : (past ? '#C3CDD6' : '#032F57'),
              position: 'relative', transition: 'background .15s',
            }}>
              {d}
              {isToday(d) && !sel && <span style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: '#01B18B' }} />}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0B1B2B' }}>Time zone</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, fontSize: 13.5, color: '#48586A' }}><span>🌐</span>West Africa Time ({String(today.getHours()).padStart(2, '0')}:{String(today.getMinutes()).padStart(2, '0')}) ▾</div>
      </div>
    </div>
  );
}

const navBtn = { cursor: 'pointer', border: 'none', background: 'transparent', fontSize: 22, lineHeight: 1, color: '#032F57', padding: '2px 8px', borderRadius: 8 };

export function DemoProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <DemoCtx.Provider value={() => setOpen(true)}>
      {children}
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(2,30,56,.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeIn .2s ease both' }}>
          <div onClick={(e) => e.stopPropagation()} className="demo-card" style={{ background: '#fff', borderRadius: 16, width: 960, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 40px 100px rgba(2,30,56,.4)', animation: 'menuIn .28s cubic-bezier(.22,1,.36,1) both', display: 'grid', gridTemplateColumns: '340px 1fr', position: 'relative' }}>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, zIndex: 2, cursor: 'pointer', border: 'none', background: 'rgba(3,47,87,.06)', width: 30, height: 30, borderRadius: '50%', fontSize: 18, color: '#032F57' }}>&times;</button>
            {/* left panel */}
            <div className="demo-left" style={{ borderRight: '1px solid rgba(3,47,87,.1)', padding: '32px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ paddingBottom: 24, borderBottom: '1px solid rgba(3,47,87,.08)', textAlign: 'center' }}>
                <img src={A + 'migranium-blue.png'} alt="Migranium" style={{ height: 30 }} />
              </div>
              <div style={{ paddingTop: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#5A6B7B' }}>hello@migranium.com</div>
                <div style={{ fontSize: 26, fontWeight: 800, color: '#0B1B2B', letterSpacing: '-0.02em', marginTop: 4 }}>Book a Demo</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18, fontSize: 14, fontWeight: 600, color: '#0B1B2B' }}><span>🕐</span>30 min</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 12, fontSize: 14, color: '#48586A', lineHeight: 1.5 }}><span>📹</span>Web conferencing details provided upon confirmation.</div>
              </div>
              <a href="/privacy" style={{ marginTop: 'auto', paddingTop: 24, fontSize: 13, fontWeight: 600, color: '#01B18B' }}>Privacy Policy</a>
            </div>
            {/* right panel */}
            <div style={{ padding: '32px 34px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 108, height: 108, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 20, right: -34, transform: 'rotate(45deg)', background: '#3E4A57', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 40px' }}>Powered by Calendly</div>
              </div>
              <Calendar />
            </div>
          </div>
        </div>
      )}
    </DemoCtx.Provider>
  );
}
