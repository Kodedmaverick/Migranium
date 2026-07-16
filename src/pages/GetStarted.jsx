import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDemo } from '../components/DemoModal.jsx';

const CHALLENGES = ['Long patient wait times', 'Inefficient scheduling', 'Manual appointment booking', 'Referral bottlenecks', 'Fax overload', 'Paper-based intake forms', 'Poor patient communication', 'Missed appointments', 'High no-show rates', 'Duplicate data entry', 'Multiple disconnected systems', 'Poor reporting and analytics', 'Lack of workflow automation', 'Provider workload imbalance', 'Capacity planning difficulties', 'Manual task management', 'Poor queue visibility', 'Limited patient self-service', 'Slow patient check-in', 'Consent form management', 'Difficult document management', 'Limited operational visibility', 'Multi-location coordination', 'Staff communication challenges', 'Poor patient engagement', 'Limited AI capabilities', 'Limited system integrations', 'Difficult provider scheduling', 'Compliance and audit concerns', 'Other'];

const MODULES = [
  ['Workplace', 'glyph-workplace'], ['Scheduler', 'glyph-scheduler'], ['Planner', 'glyph-planner'], ['Queue Management', 'glyph-queue'],
  ['Patients', 'glyph-patients'], ['Forms', 'glyph-forms'], ['Referrals', 'glyph-referrals'], ['Messaging', 'glyph-messaging'],
  ['Fax', 'glyph-fax'], ['Task Manager', 'glyph-taskmanager'], ['Automation', 'glyph-automation'], ['Analytics', 'glyph-analytics'],
  ['Display', 'glyph-display'], ['Kemi AI', 'glyph-kemi'], ['Patient Portal', 'glyph-patients'], ['Integrations', 'glyph-integrations'],
];

const STEP_NAMES = ['Organization', 'Challenges', 'Modules', 'Details'];
const EMPTY = { org: '', contact: '', email: '', phone: '', country: '', orgType: '', emr: '', locations: '', providers: '', staff: '', challenges: [], challengeOther: '', modules: [], timeline: '', migrate: '', training: '', notes: '' };

const inputStyle = { width: '100%', boxSizing: 'border-box', marginTop: 6, fontFamily: 'Inter, sans-serif', fontSize: 14, padding: '11px 13px', border: '1px solid rgba(3,47,87,.16)', borderRadius: 10 };
const labelText = { fontSize: 12.5, fontWeight: 600, color: '#0B1B2B' };

export default function GetStarted() {
  const navigate = useNavigate();
  const openDemo = useDemo();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState('fwd');
  const [submitted, setSubmitted] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [f, setF] = useState(() => {
    try { const s = JSON.parse(localStorage.getItem('mig_getstarted') || '{}'); return { ...EMPTY, ...(s.f || {}) }; } catch { return EMPTY; }
  });

  const patch = (p) => setF((prev) => { const nf = { ...prev, ...p }; try { localStorage.setItem('mig_getstarted', JSON.stringify({ f: nf })); } catch {} return nf; });
  const toggleArr = (key, val) => { const arr = f[key].slice(); const i = arr.indexOf(val); if (i >= 0) arr.splice(i, 1); else arr.push(val); patch({ [key]: arr }); };
  const step0Valid = () => f.org.trim() && f.contact.trim() && /.+@.+\..+/.test(f.email.trim());

  const next = () => {
    if (step === 0 && !step0Valid()) { setShowErr(true); return; }
    if (step >= 3) { submit(); return; }
    setStep(step + 1); setDir('fwd'); setShowErr(false); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => { if (step === 0) return; setStep(step - 1); setDir('back'); setShowErr(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const submit = () => {
    // TODO(dev): replace this localStorage stub with a POST to your backend/CRM + internal notification.
    try { const leads = JSON.parse(localStorage.getItem('mig_leads') || '[]'); leads.push({ ts: new Date().toISOString(), ...f }); localStorage.setItem('mig_leads', JSON.stringify(leads)); } catch {}
    setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const jumpDemo = (e) => { if (e) e.preventDefault(); openDemo(); };

  const pill = (val, cur) => ({ cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: val === cur ? 700 : 500, padding: '9px 16px', borderRadius: 999, border: `1px solid ${val === cur ? '#01B18B' : 'rgba(3,47,87,.16)'}`, background: val === cur ? 'rgba(1,177,139,.08)' : '#fff', color: val === cur ? '#01745F' : '#48586A', transition: 'all .16s' });

  if (submitted) {
    return (
      <section style={{ minHeight: '100vh', padding: '112px 24px 72px', background: '#F7FAFA' }}>
        <div style={{ maxWidth: 640, margin: '24px auto 0', textAlign: 'center', animation: 'fadeUp .6s cubic-bezier(.22,1,.36,1) both' }}>
          <div style={{ width: 82, height: 82, borderRadius: '50%', background: 'rgba(1,177,139,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', animation: 'popIn .5s both' }}><span style={{ fontSize: 38, color: '#01B18B', fontWeight: 700 }}>✓</span></div>
          <h1 className="hero" style={{ fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '24px 0 0', textWrap: 'balance' }}>Thank you{f.contact ? `, ${f.contact.trim().split(' ')[0]}` : ''}!</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#48586A', margin: '16px 0 0', textWrap: 'pretty' }}>We've received your implementation requirements and shared them with our team. Our specialists will review your workflow, evaluate your requirements, and prepare a personalized implementation proposal and custom quote.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 999, padding: '11px 22px', marginTop: 24, boxShadow: '0 6px 20px rgba(3,47,87,.06)' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#01B18B' }} /><span style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14.5, fontWeight: 600, color: '#032F57' }}>Expect to hear from us within 2–3 business days</span></div>
          <div style={{ background: '#032F57', borderRadius: 20, padding: 32, marginTop: 36, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(114,244,232,.15)' }} />
            <div style={{ position: 'relative', maxWidth: 360 }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>Want to talk sooner?</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.72)', margin: '8px 0 0' }}>Schedule a personalized product demonstration while your custom proposal is being prepared.</p>
            </div>
            <button onClick={jumpDemo} style={{ position: 'relative', cursor: 'pointer', fontFamily: 'Inter, sans-serif', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 26px', borderRadius: 12, border: 'none', whiteSpace: 'nowrap' }}>Book a Demo</button>
          </div>
          <div style={{ marginTop: 28 }}><Link to="/" style={{ fontSize: 14, fontWeight: 600, color: '#5A6B7B' }}>← Back to homepage</Link></div>
          <details style={{ marginTop: 28, textAlign: 'left', background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 14, padding: '6px 20px' }}>
            <summary style={{ cursor: 'pointer', fontSize: 13.5, fontWeight: 600, color: '#032F57', padding: '14px 0' }}>Review your submission</summary>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: '#48586A', padding: '0 0 16px' }}>
              <div><strong style={{ color: '#032F57' }}>Organization:</strong> {f.org || '—'}</div>
              <div><strong style={{ color: '#032F57' }}>Contact:</strong> {f.contact || '—'} · {f.email || '—'}</div>
              <div><strong style={{ color: '#032F57' }}>EMR:</strong> {f.emr || '—'} · <strong style={{ color: '#032F57' }}>Locations:</strong> {f.locations || '—'} · <strong style={{ color: '#032F57' }}>Providers:</strong> {f.providers || '—'}</div>
              <div style={{ marginTop: 6 }}><strong style={{ color: '#032F57' }}>Challenges:</strong> {f.challenges.length ? f.challenges.join(', ') : '—'}</div>
              <div style={{ marginTop: 6 }}><strong style={{ color: '#032F57' }}>Modules:</strong> {f.modules.length ? f.modules.join(', ') : '—'}</div>
              <div style={{ marginTop: 6 }}><strong style={{ color: '#032F57' }}>Timeline:</strong> {f.timeline || '—'}</div>
            </div>
          </details>
        </div>
      </section>
    );
  }

  return (
    <section style={{ minHeight: '100vh', padding: '112px 24px 72px', background: '#F7FAFA' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B' }}>Get started</div>
          <h1 className="hero" style={{ fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '10px 0 0', textWrap: 'balance' }}>Let's build your implementation plan</h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5A6B7B', margin: '12px 0 0', textWrap: 'pretty' }}>A few questions about your organization and workflows. Our specialists use your answers to prepare a personalized implementation proposal and custom quote — no automated pricing, no sales pressure.</p>
        </div>

        {/* progress */}
        <div style={{ maxWidth: 760, margin: '36px auto 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            {STEP_NAMES.map((n, i) => (
              <div key={n} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ height: 5, borderRadius: 999, background: i <= step ? '#01B18B' : 'rgba(3,47,87,.10)', transition: 'background .3s' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 20, height: 20, flex: 'none', borderRadius: '50%', background: i < step ? '#01B18B' : (i === step ? '#032F57' : 'rgba(3,47,87,.07)'), color: i <= step ? '#fff' : '#8CA0B0', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s' }}>{i < step ? '✓' : i + 1}</span>
                  <span className="hide-mobile" style={{ fontSize: 12, fontWeight: 600, color: i === step ? '#032F57' : '#8CA0B0', whiteSpace: 'nowrap' }}>{n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* card */}
        <div style={{ background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 22, boxShadow: '0 24px 60px rgba(3,47,87,.10)', padding: 40, margin: '28px auto 0', maxWidth: 760, minHeight: 420, display: 'flex', flexDirection: 'column' }}>
          <div key={`step-${step}`} style={{ flex: 1, animation: `${dir === 'back' ? 'stepInBack' : 'stepIn'} .38s cubic-bezier(.22,1,.36,1) both` }}>
            {step === 0 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B' }}>Step 1 of 4</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: '8px 0 0' }}>Organization information</h2>
                <p style={{ fontSize: 14, color: '#5A6B7B', margin: '6px 0 0' }}>Tell us who you are and the shape of your organization.</p>
                <div className="gs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
                  <label><span style={labelText}>Organization name *</span><input value={f.org} onChange={(e) => patch({ org: e.target.value })} placeholder="e.g. Thompson Medical Centre" style={inputStyle} /></label>
                  <label><span style={labelText}>Contact name *</span><input value={f.contact} onChange={(e) => patch({ contact: e.target.value })} placeholder="Your full name" style={inputStyle} /></label>
                  <label><span style={labelText}>Work email *</span><input type="email" value={f.email} onChange={(e) => patch({ email: e.target.value })} placeholder="you@clinic.com" style={inputStyle} /></label>
                  <label><span style={labelText}>Phone number</span><input value={f.phone} onChange={(e) => patch({ phone: e.target.value })} placeholder="(555) 000-0000" style={inputStyle} /></label>
                  <label><span style={labelText}>Country</span><input value={f.country} onChange={(e) => patch({ country: e.target.value })} placeholder="Canada" style={inputStyle} /></label>
                  <label><span style={labelText}>Organization type</span><select value={f.orgType} onChange={(e) => patch({ orgType: e.target.value })} style={{ ...inputStyle, background: '#fff', color: '#0B1B2B' }}><option value="">Select…</option><option>Family / Primary care clinic</option><option>Specialty clinic</option><option>Multi-location group</option><option>Hospital / Health system</option><option>Diagnostic / Imaging centre</option><option>Allied health / Therapy</option><option>Other</option></select></label>
                  <label><span style={labelText}>Current EMR</span><select value={f.emr} onChange={(e) => patch({ emr: e.target.value })} style={{ ...inputStyle, background: '#fff', color: '#0B1B2B' }}><option value="">Select…</option><option>OSCAR Pro</option><option>Accuro</option><option>Epic</option><option>Cerner</option><option>Other</option><option>None yet</option></select></label>
                  <label><span style={labelText}>Number of locations</span><select value={f.locations} onChange={(e) => patch({ locations: e.target.value })} style={{ ...inputStyle, background: '#fff', color: '#0B1B2B' }}><option value="">Select…</option><option>1</option><option>2–5</option><option>6–20</option><option>20+</option></select></label>
                  <label><span style={labelText}>Number of providers</span><select value={f.providers} onChange={(e) => patch({ providers: e.target.value })} style={{ ...inputStyle, background: '#fff', color: '#0B1B2B' }}><option value="">Select…</option><option>1–3</option><option>4–10</option><option>11–30</option><option>30+</option></select></label>
                  <label><span style={labelText}>Approx. number of staff</span><select value={f.staff} onChange={(e) => patch({ staff: e.target.value })} style={{ ...inputStyle, background: '#fff', color: '#0B1B2B' }}><option value="">Select…</option><option>1–5</option><option>6–15</option><option>16–50</option><option>50+</option></select></label>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B' }}>Step 2 of 4</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: '8px 0 0' }}>What are you trying to solve?</h2>
                <p style={{ fontSize: 14, color: '#5A6B7B', margin: '6px 0 0' }}>Select every operational challenge that applies. This shapes what we prioritize.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 22 }}>
                  {CHALLENGES.map((c) => {
                    const on = f.challenges.includes(c);
                    return <button key={c} onClick={() => toggleArr('challenges', c)} style={{ cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: on ? 700 : 500, padding: '9px 15px', borderRadius: 999, border: `1px solid ${on ? '#01B18B' : 'rgba(3,47,87,.16)'}`, background: on ? 'rgba(1,177,139,.08)' : '#fff', color: on ? '#01745F' : '#48586A', transition: 'all .16s', display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ fontSize: 13 }}>{on ? '✓' : '+'}</span>{c}</button>;
                  })}
                </div>
                {f.challenges.includes('Other') && <input value={f.challengeOther} onChange={(e) => patch({ challengeOther: e.target.value })} placeholder="Tell us more about your challenge…" style={{ ...inputStyle, marginTop: 16 }} />}
                <div style={{ fontSize: 12.5, color: '#8CA0B0', marginTop: 16 }}>{f.challenges.length} selected</div>
              </>
            )}
            {step === 2 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B' }}>Step 3 of 4</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: '8px 0 0' }}>Which modules interest you?</h2>
                <p style={{ fontSize: 14, color: '#5A6B7B', margin: '6px 0 0' }}>Pick the ones you'd like to explore. Not sure yet? Select a few — we'll advise.</p>
                <div className="gs-mods" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 22 }}>
                  {MODULES.map(([name, icon]) => {
                    const on = f.modules.includes(name);
                    return (
                      <button key={name} onClick={() => toggleArr('modules', name)} style={{ cursor: 'pointer', fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '16px 8px', borderRadius: 14, border: `1.5px solid ${on ? '#01B18B' : 'rgba(3,47,87,.12)'}`, background: on ? 'rgba(1,177,139,.06)' : '#fff', transition: 'all .16s', position: 'relative' }}>
                        {on && <span style={{ position: 'absolute', top: 7, right: 7, width: 17, height: 17, borderRadius: '50%', background: '#01B18B', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'popIn .3s both' }}>✓</span>}
                        <span style={{ width: 38, height: 38, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={`/assets/${icon}.png`} alt="" style={{ width: 32, height: 32 }} /></span>
                        <span style={{ display: 'block', fontSize: 12, fontWeight: 600, color: on ? '#032F57' : '#5A6B7B', marginTop: 8 }}>{name}</span>
                      </button>
                    );
                  })}
                </div>
                <div style={{ fontSize: 12.5, color: '#8CA0B0', marginTop: 16 }}>{f.modules.length} selected</div>
              </>
            )}
            {step === 3 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B' }}>Step 4 of 4</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: '8px 0 0' }}>A few implementation details</h2>
                <p style={{ fontSize: 14, color: '#5A6B7B', margin: '6px 0 0' }}>Almost done — this helps us scope your rollout accurately.</p>
                <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <span style={labelText}>Desired implementation timeline</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                      {['Immediately', '1–3 months', '3–6 months', 'Just exploring'].map((t) => <button key={t} onClick={() => patch({ timeline: t })} style={pill(t, f.timeline)}>{t}</button>)}
                    </div>
                  </div>
                  <div className="gs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div><span style={labelText}>Migrating from another platform?</span><div style={{ display: 'flex', gap: 8, marginTop: 8 }}>{['Yes', 'No', 'Not sure'].map((o) => <button key={o} onClick={() => patch({ migrate: o })} style={pill(o, f.migrate)}>{o}</button>)}</div></div>
                    <div><span style={labelText}>Need onboarding or training?</span><div style={{ display: 'flex', gap: 8, marginTop: 8 }}>{['Yes', 'No', 'Not sure'].map((o) => <button key={o} onClick={() => patch({ training: o })} style={pill(o, f.training)}>{o}</button>)}</div></div>
                  </div>
                  <label><span style={labelText}>Anything else you'd like us to know?</span><textarea value={f.notes} onChange={(e) => patch({ notes: e.target.value })} rows={4} placeholder="Workflows, constraints, integrations, timelines, questions…" style={{ ...inputStyle, resize: 'vertical' }} /></label>
                </div>
              </>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 32, paddingTop: 22, borderTop: '1px solid rgba(3,47,87,.08)' }}>
            <button onClick={back} style={{ cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, padding: '12px 20px', borderRadius: 11, border: '1px solid rgba(3,47,87,.16)', background: '#fff', color: '#032F57', visibility: step === 0 ? 'hidden' : 'visible' }}>← Back</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {showErr && step === 0 && <span style={{ fontSize: 12.5, color: '#B23B4E' }}>Please fill the required fields</span>}
              <button onClick={next} style={{ cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, padding: '12px 26px', borderRadius: 11, border: 'none', background: step >= 3 ? '#01B18B' : '#032F57', color: '#fff' }}>{step >= 3 ? 'Submit request' : 'Next →'}</button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: 12.5, color: '#8CA0B0', marginTop: 20 }}>Prefer to talk first? <a href="/#quote" onClick={jumpDemo} style={{ fontWeight: 600 }}>Book a demo instead →</a></div>
      </div>
    </section>
  );
}
