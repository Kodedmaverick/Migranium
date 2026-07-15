import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../data/nav.js';

const A = '/assets/';
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B', fontFamily: "'Shantell Sans', cursive" };

const MODULE_DESC = {
  workplace: 'Model your organization — locations, staff, rooms, services, permissions.',
  scheduler: 'The single source of truth for every appointment, booking to completion.',
  planner: 'Capacity planning that shapes availability before bookings ever occur.',
  queue: 'Orchestrate every patient journey from arrival to departure.',
  patients: 'A complete operational record for every patient in your organization.',
  forms: 'Digital intake, consent, and questionnaires — built once, used everywhere.',
  referrals: 'The full referral lifecycle, incoming and outgoing, tracked end to end.',
  messaging: 'The communication layer connecting patients, providers, and staff.',
  fax: 'Digital fax intake with AI classification, linking, and routing.',
  automation: 'Event-driven workflows that eliminate repetitive administrative work.',
  tasks: 'Operational tasks assigned, tracked, and completed in one place.',
  analytics: 'Organization-wide insight aggregated from every module, in real time.',
  display: 'Live queue and appointment displays for waiting rooms and staff areas.',
  kemi: 'The AI co-pilot embedded across the entire platform.',
  portal: 'Self-service booking, forms, and communication for patients.',
  integrations: 'EMRs, fax, calendars, telephony, e-signature, and custom APIs.',
};

const KEMI_QA = [
  { q: 'Find all patients waiting longer than 30 minutes.', a: '4 patients have been waiting over 30 minutes at Main Street Clinic. The longest is at 47 minutes, waiting for Dr. Osei (Room 3 is now free). Want me to notify the care team or re-route to an available provider?' },
  { q: "Show me Dr. Ahmed's next available appointment.", a: "Dr. Ahmed's next opening is Thursday at 2:40 PM (Downtown location, 20-minute follow-up). There's also a waitlist cancellation slot tomorrow at 9:00 AM. Should I book one?" },
  { q: "Summarize today's referrals.", a: '12 referrals received today: 7 processed, 3 pending review, 2 flagged urgent (cardiology). Average processing time is 22 minutes — 40% faster than last week. The 2 urgent referrals are assigned to Dr. Chen.' },
];

const SECURITY_ITEMS = ['Encryption in transit and at rest', 'Role-based permissions', 'Complete audit logs', 'Secure cloud infrastructure', 'Disaster recovery', 'Data retention controls', 'Consent management', 'Secure integrations'];
const STEPS = [['01 — Connect', 'Plug into what you use', 'EMRs, cloud fax, email, calendars, telephony, and e-signature connect securely — no rip-and-replace.'], ['02 — Configure', 'Model your organization', 'Locations, providers, rooms, services, hours, and permissions — your real-world structure, reflected in software.'], ['03 — Operate', 'Run the day in one place', 'Scheduling, queues, referrals, forms, fax, and messaging live in a single connected workspace.'], ['04 — Automate', 'Let the platform work', 'Automation handles the repetitive work, analytics measures it, and Kemi answers questions along the way.']];
const IMPACT = [['Fewer no-shows', 'Automated reminders, self-service rescheduling, and waitlist backfill keep schedules full without phone tag.'], ['Faster referral turnaround', 'Incoming faxes become classified, assigned, trackable referrals — with nothing sitting unread in a tray.'], ['Calmer waiting rooms', 'Live queues, wait-time visibility, and display boards keep patients informed and staff ahead of the day.']];
const BADGES = [['badge-hipaa', 'HIPAA', 'United States'], ['badge-phipa', 'PHIPA', 'Ontario, Canada'], ['badge-pipeda', 'PIPEDA', 'Canada'], ['badge-soc', 'AICPA SOC', 'Service organization controls']];

// Integration S-curve layout (viewBox 1120 x 420)
const HUBX = 560, HUBY = 210;
const INT_NODES = [
  { name: 'OSCAR Pro', logo: 'logo-oscarpro', slug: 'oscarpro', x: 96, y: 74 },
  { name: 'iFax', logo: 'logo-ifax', slug: 'ifax', x: 250, y: 74 },
  { name: 'Accuro', logo: 'logo-accuro', slug: 'accuro', x: 96, y: 210 },
  { name: 'Unite Fax', logo: 'logo-unitefax', slug: 'unitefax', x: 250, y: 210 },
  { name: 'Epic', logo: 'logo-epic', slug: 'epic', x: 96, y: 346 },
  { name: 'Cerner', logo: 'logo-cerner', slug: 'cerner', x: 250, y: 346 },
  { name: 'Gmail', logo: 'logo-gmail', slug: 'gmail', x: 870, y: 74 },
  { name: 'Google Calendar', logo: 'logo-gcal', slug: 'gcal', x: 1024, y: 74 },
  { name: 'Outlook', logo: 'logo-outlook', slug: 'outlook', x: 870, y: 210 },
  { name: 'Outlook Calendar', logo: 'logo-outlook-cal', slug: 'outlook-cal', x: 1024, y: 210 },
  { name: '3CX', logo: 'logo-3cx', slug: '3cx', x: 870, y: 346 },
  { name: 'DocuSeal', logo: 'logo-docuseal', slug: 'docuseal', x: 1024, y: 346 },
];
const INT_LANES = [];
const INT_FLOWS = [];
[74, 210, 346].forEach((y, r) => {
  INT_LANES.push(`M 96 ${y} H 250`);
  const lc = `M 250 ${y} C 400 ${y}, 430 ${HUBY}, ${HUBX} ${HUBY}`;
  INT_LANES.push(lc);
  const rc = `M ${HUBX} ${HUBY} C 690 ${HUBY}, 720 ${y}, 870 ${y}`;
  INT_LANES.push(rc);
  INT_LANES.push(`M 870 ${y} H 1024`);
  INT_FLOWS.push({ d: lc, delay: `${(r * 0.5).toFixed(2)}s` });
  INT_FLOWS.push({ d: rc, delay: `${(r * 0.5 + 0.25).toFixed(2)}s` });
});

export default function Home() {
  const [kemiIdx, setKemiIdx] = useState(0);
  const [hoveredInt, setHoveredInt] = useState(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSent, setDemoSent] = useState(false);

  const openDemo = () => { setDemoSent(false); setDemoOpen(true); };

  return (
    <>
      {/* HERO */}
      <section id="top" style={{ padding: '150px 32px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 17, fontWeight: 500, color: '#01B18B', transform: 'rotate(-1deg)', animation: 'fadeUp .8s cubic-bezier(.22,1,.36,1) both' }}>AI-powered healthcare operations</div>
          <h1 className="hero" style={{ fontSize: 64, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, margin: '22px auto 0', maxWidth: 900, color: '#032F57', textWrap: 'balance', animation: 'fadeUp .8s cubic-bezier(.22,1,.36,1) .08s both' }}>The operational layer for modern healthcare</h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: '#5A6B7B', maxWidth: 660, margin: '22px auto 0', textWrap: 'pretty', animation: 'fadeUp .8s cubic-bezier(.22,1,.36,1) .16s both' }}>Migranium sits above your EMR and unifies scheduling, patient flow, referrals, communication, and automation — so your team runs the clinic, not the software.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap', animation: 'fadeUp .8s cubic-bezier(.22,1,.36,1) .24s both' }}>
            <button onClick={openDemo} style={{ border: 'none', cursor: 'pointer', background: '#032F57', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, padding: '14px 26px', borderRadius: 12, boxShadow: '0 8px 24px rgba(3,47,87,.22)' }}>Book a Demo</button>
            <a href="#platform" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(3,47,87,.16)', background: '#fff', color: '#032F57', fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 12 }}>Explore the platform <span style={{ fontSize: 16 }}>→</span></a>
          </div>
          <div style={{ position: 'relative', maxWidth: 1060, margin: '64px auto 0', animation: 'fadeUp 1s cubic-bezier(.22,1,.36,1) .32s both' }}>
            <div style={{ border: '1px solid rgba(3,47,87,.12)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 40px 90px rgba(3,47,87,.18)', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px', borderBottom: '1px solid rgba(3,47,87,.08)', background: '#FAFCFC' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E5EAEE' }} /><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E5EAEE' }} /><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E5EAEE' }} />
                <span style={{ marginLeft: 14, fontSize: 11.5, color: '#8CA0B0', background: '#fff', border: '1px solid rgba(3,47,87,.08)', borderRadius: 6, padding: '3px 40px' }}>app.migranium.com</span>
              </div>
              <img src={A + 'screen-scheduler.png'} alt="Migranium Scheduler" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={{ padding: '130px 32px 60px', background: '#fff', scrollMarginTop: 60 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={kicker}>Platform</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0', textWrap: 'balance' }}>One layer above your clinical systems — not another silo beside them</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A6B7B', margin: '18px 0 0', textWrap: 'pretty' }}>Your EMR holds the clinical record. Migranium coordinates everything around it: who arrives when, what happens next, which documents move where, and who needs to know. Information flows in from your existing systems and becomes an actionable workflow — not another inbox.</p>
          </div>
          <div className="feat-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 56 }}>
            {STEPS.map(([n, t, d]) => (
              <div key={n} style={{ border: '1px solid rgba(3,47,87,.10)', borderRadius: 16, padding: 26 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#01B18B', fontFamily: "'Shantell Sans', cursive" }}>{n}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57', marginTop: 10 }}>{t}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#5A6B7B', margin: '8px 0 0' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={{ padding: '90px 32px', background: '#F7FAFA', scrollMarginTop: 60 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 640 }}>
              <div style={kicker}>Features</div>
              <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0' }}>Sixteen modules. One platform.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A6B7B', margin: '16px 0 0' }}>Every module shares the same patients, providers, and data — so a fax becomes a referral, a referral becomes an appointment, and an appointment becomes a measured outcome.</p>
            </div>
            <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 15, color: '#01B18B', transform: 'rotate(-1.5deg)', whiteSpace: 'nowrap', paddingBottom: 8 }}>enable only what you need</div>
          </div>
          <div className="feat-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 44 }}>
            {MODULES.map((m) => (
              <Link key={m.slug} to={`/features/${m.slug}`} style={{ display: 'block', background: '#fff', border: '1px solid rgba(3,47,87,.08)', borderRadius: 14, padding: '20px 20px 18px', transition: 'border-color .15s, box-shadow .15s', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(1,177,139,.5)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(3,47,87,.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(3,47,87,.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ width: 46, height: 46, borderRadius: 12, background: '#F4F6F9', border: '1px solid rgba(3,47,87,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={A + m.icon + '.png'} alt="" style={{ width: 30, height: 30 }} /></span>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#032F57', marginTop: 12 }}>{m.name}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.55, color: '#5A6B7B', margin: '6px 0 0' }}>{MODULE_DESC[m.slug]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KEMI */}
      <section id="kemi" style={{ padding: '100px 32px', background: '#CFC4F6', scrollMarginTop: 60 }}>
        <div className="hero-2col" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <span style={{ width: 76, height: 76, background: '#fff', borderRadius: 20, boxShadow: '0 8px 24px rgba(3,47,87,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><img src={A + 'glyph-kemi.png'} alt="Kemi" style={{ width: 46, height: 46 }} /></span>
            <div style={{ ...kicker, color: '#032F57' }}>Kemi · AI Co-pilot</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0', textWrap: 'balance' }}>Ask. Don't navigate.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(11,27,43,.72)', margin: '18px 0 0', textWrap: 'pretty' }}>Kemi is embedded across the entire platform. It understands your organization's data, respects every permission boundary, and turns questions into answers — and answers into actions.</p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Context-aware', ' — a receptionist and a physician get different answers to the same question, based on role and permissions.'], ['Action-oriented', ' — books appointments, assigns tasks, routes faxes, and starts automations, not just answers.'], ['Responsible by design', ' — Kemi supports human decision-making; clinical judgment stays with your professionals.']].map(([b, rest]) => (
                <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ flex: 'none', marginTop: 7, width: 7, height: 7, borderRadius: 2, background: '#032F57' }} /><div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(11,27,43,.8)' }}><strong style={{ color: '#032F57' }}>{b}</strong>{rest}</div></div>
              ))}
            </div>
            <Link to="/features/kemi" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontSize: 15, fontWeight: 600, color: '#032F57' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#01B18B')} onMouseLeave={(e) => (e.currentTarget.style.color = '#032F57')}>Read more about Kemi <span style={{ fontSize: 17 }}>→</span></Link>
          </div>
          <div>
            <div style={{ background: '#fff', border: '1px solid rgba(3,47,87,.08)', borderRadius: 20, padding: 26, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 24px 60px rgba(3,47,87,.12)' }}>
              {KEMI_QA.map((k, i) => (
                <button key={i} onClick={() => setKemiIdx(i)} style={{ textAlign: 'left', cursor: 'pointer', background: kemiIdx === i ? 'rgba(207,196,246,.25)' : '#FAFBFC', border: `1px solid ${kemiIdx === i ? '#032F57' : 'rgba(3,47,87,.12)'}`, color: '#0B1B2B', fontFamily: 'Inter, sans-serif', fontSize: 13.5, fontWeight: 500, padding: '12px 16px', borderRadius: 12 }}>&ldquo;{k.q}&rdquo;</button>
              ))}
              <div style={{ background: '#022340', border: '1px solid rgba(114,244,232,.25)', borderRadius: 14, padding: 18, marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#72F4E8', fontFamily: "'Shantell Sans', cursive" }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#72F4E8' }} />Kemi</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,.9)', marginTop: 10 }}>{KEMI_QA[kemiIdx].a}</div>
              </div>
              <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, color: '#032F57', textAlign: 'right', transform: 'rotate(-1deg)' }}>try clicking a prompt ↑</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" style={{ padding: '100px 32px', background: '#fff', scrollMarginTop: 60 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <div style={kicker}>Integrations</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0' }}>Keep your systems. Connect your workflows.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A6B7B', margin: '16px 0 0', textWrap: 'pretty' }}>Migranium works alongside the tools you already rely on. Information from connected systems becomes part of your operational workflow — automatically and securely.</p>
          </div>
          <div className="int-diagram" style={{ position: 'relative', height: 420, marginTop: 48 }} onMouseLeave={() => setHoveredInt(null)}>
            <svg viewBox="0 0 1120 420" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
              {INT_LANES.map((d, i) => <path key={i} d={d} fill="none" stroke="rgba(3,47,87,.12)" strokeWidth="1.5" />)}
              {INT_FLOWS.map((f, i) => <path key={i} d={f.d} fill="none" stroke="#72F4E8" strokeWidth="2.5" strokeLinecap="round" style={{ strokeDasharray: '26 400', strokeDashoffset: 426, animation: `dashFlow 3s linear ${f.delay} infinite` }} />)}
            </svg>
            {INT_NODES.map((n) => (
              <Link key={n.slug} to={`/integrations/${n.slug}`} onMouseEnter={() => setHoveredInt(n.name)} style={{ position: 'absolute', left: `${(n.x / 1120 * 100).toFixed(2)}%`, top: `${(n.y / 420 * 100).toFixed(2)}%`, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
                <div style={{ position: 'relative', width: 66, height: 66, background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 16, boxShadow: '0 6px 20px rgba(3,47,87,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {hoveredInt === n.name && <svg width="86" height="86" viewBox="0 0 86 86" style={{ position: 'absolute', left: -10, top: -10, overflow: 'visible', pointerEvents: 'none' }}><rect x="3" y="3" width="80" height="80" rx="21" fill="none" stroke="#72F4E8" strokeWidth="3.5" strokeLinecap="round" style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: 'ringDraw .55s cubic-bezier(.22,1,.36,1) forwards' }} /></svg>}
                  <span style={{ width: 40, height: 40, backgroundImage: `url(${A + n.logo}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'block' }} />
                </div>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#5A6B7B', background: 'rgba(255,255,255,.92)', padding: '1px 7px', borderRadius: 6, whiteSpace: 'nowrap' }}>{n.name}</span>
              </Link>
            ))}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
              <div style={{ width: 120, height: 120, borderRadius: 30, background: '#fff', border: '1px solid rgba(3,47,87,.08)', boxShadow: '0 20px 56px rgba(3,47,87,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={A + 'migranium-blue.png'} alt="Migranium" style={{ width: 74 }} /></div>
            </div>
          </div>
          {/* mobile fallback: logo grid */}
          <div className="int-fallback" style={{ display: 'none', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 32 }}>
            {INT_NODES.map((n) => (
              <Link key={n.slug} to={`/integrations/${n.slug}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '18px 8px', border: '1px solid rgba(3,47,87,.1)', borderRadius: 14, background: '#fff', textDecoration: 'none' }}>
                <span style={{ width: 36, height: 36, backgroundImage: `url(${A + n.logo}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'block' }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#5A6B7B', textAlign: 'center', lineHeight: 1.3 }}>{n.name}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: '#8CA0B0' }}>EMRs · Fax · Communication · Calendars · Telephony · E-Signature · Custom APIs</div>
            <div style={{ fontSize: 14, color: '#5A6B7B', marginTop: 14 }}>Don't see your system? <a href="#quote" style={{ fontWeight: 600, fontFamily: "'Shantell Sans', cursive" }}>Talk to our team →</a></div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" style={{ padding: '100px 32px', background: '#F7FAFA', scrollMarginTop: 60 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ maxWidth: 680 }}>
            <div style={kicker}>Customer Impact</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0' }}>Operations you can feel — and measure</h2>
          </div>
          <div className="cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
            {IMPACT.map(([t, d]) => (
              <div key={t} style={{ background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 18, padding: 28 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#032F57' }}>{t}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#5A6B7B', margin: '10px 0 0' }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="impact-quote" style={{ marginTop: 24, background: '#032F57', borderRadius: 20, padding: '44px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 20, lineHeight: 1.55, color: '#fff', fontWeight: 500, textWrap: 'pretty' }}>&ldquo;What used to take us 4 days of manual work every week, Migranium now does in 15 minutes. We processed over 2,000 new patient intakes in minutes. The platform is user friendly, and the team is incredibly supportive.&rdquo;</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#72F4E8', marginTop: 16, fontFamily: "'Shantell Sans', cursive" }}>Dan Muldoon, Director, TMC+ (Thompson Medical Clinic)</div>
            </div>
            <div style={{ width: 96, height: 96, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><img src={A + 'logo-tmc.png'} alt="Thompson Medical Clinic" style={{ width: 72, height: 72, objectFit: 'contain' }} /></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <Link to="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid rgba(3,47,87,.16)', color: '#032F57', fontSize: 14.5, fontWeight: 600, padding: '13px 26px', borderRadius: 12 }}>Read more customer stories <span style={{ fontSize: 16 }}>→</span></Link>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" style={{ padding: '100px 32px', background: '#fff', scrollMarginTop: 60 }}>
        <div className="hero-2col" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
          <div>
            <div style={kicker}>Security &amp; Compliance</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 800, color: '#032F57', margin: '14px 0 0', textWrap: 'balance' }}>Built for healthcare's highest standards</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A6B7B', margin: '18px 0 0', textWrap: 'pretty' }}>Patient information is protected at every layer — in transit, at rest, and in every workflow. Security isn't a feature of Migranium; it's the foundation.</p>
            <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px 24px', marginTop: 28 }}>
              {SECURITY_ITEMS.map((s) => <div key={s} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.5, color: '#0B1B2B' }}><span style={{ flex: 'none', marginTop: 5, color: '#01B18B', fontWeight: 700 }}>✓</span>{s}</div>)}
            </div>
            <Link to="/security" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontSize: 15, fontWeight: 600, color: '#032F57' }}>Explore security &amp; compliance <span style={{ fontSize: 16 }}>→</span></Link>
          </div>
          <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, alignContent: 'center' }}>
            {BADGES.map(([img, name, region]) => (
              <div key={name} style={{ border: '1px solid rgba(3,47,87,.12)', borderRadius: 16, padding: 26, textAlign: 'center' }}>
                <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={A + img + '.png'} alt={name} style={{ maxHeight: 64, maxWidth: 120, objectFit: 'contain' }} /></div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#032F57', marginTop: 12 }}>{name}</div>
                <div style={{ fontSize: 11.5, color: '#5A6B7B', marginTop: 4 }}>{region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section id="quote" style={{ padding: '40px 32px 110px', background: '#fff', scrollMarginTop: 60 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', background: '#032F57', borderRadius: 28, padding: '72px 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(114,244,232,.18)' }} />
          <div style={{ position: 'absolute', right: 20, top: 40, width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(114,244,232,.12)' }} />
          <div style={{ maxWidth: 640, position: 'relative' }}>
            <h2 style={{ fontSize: 40, lineHeight: 1.14, letterSpacing: '-0.025em', fontWeight: 800, color: '#fff', margin: 0, textWrap: 'balance' }}>Every healthcare organization is different. Your implementation should be too.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,.72)', margin: '18px 0 0', textWrap: 'pretty' }}>Tell us about your organization — clinics, providers, workflows, and systems — and our implementation team will prepare a proposal built around how you actually operate.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
              <Link to="/get-started" style={{ background: '#72F4E8', color: '#032F57', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700, padding: '14px 26px', borderRadius: 12 }}>Get a Custom Quote</Link>
              <button onClick={openDemo} style={{ cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 12 }}>Book a Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO MODAL */}
      {demoOpen && (
        <div onClick={() => setDemoOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(2,30,56,.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeIn .2s ease both' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 22, padding: 40, width: 440, maxWidth: '100%', boxShadow: '0 40px 100px rgba(2,30,56,.4)', animation: 'menuIn .28s cubic-bezier(.22,1,.36,1) both' }}>
            {demoSent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(1,177,139,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', color: '#01B18B', fontSize: 24, fontWeight: 700 }}>✓</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#032F57', marginTop: 18 }}>Request received</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#5A6B7B', margin: '10px 0 0' }}>Our team will reach out shortly to schedule your personalized demo.</p>
                <button onClick={() => setDemoOpen(false)} style={{ marginTop: 22, border: 'none', cursor: 'pointer', background: '#032F57', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, padding: '12px 24px', borderRadius: 10 }}>Done</button>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57' }}>Book a demo</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#5A6B7B', margin: '8px 0 0' }}>See how Migranium fits your organization. 30 minutes, no obligation.</p>
                <form onSubmit={(e) => { e.preventDefault(); setDemoSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
                  <input name="name" required placeholder="Full name" style={demoInput} />
                  <input name="email" type="email" required placeholder="Work email" style={demoInput} />
                  <input name="org" required placeholder="Organization" style={demoInput} />
                  <select name="size" style={{ ...demoInput, color: '#0B1B2B', background: '#fff' }}><option>1 location</option><option>2–5 locations</option><option>6–20 locations</option><option>20+ locations</option></select>
                  <button type="submit" style={{ border: 'none', cursor: 'pointer', background: '#032F57', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, padding: 13, borderRadius: 10, marginTop: 6 }}>Request demo</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const demoInput = { fontFamily: 'Inter, sans-serif', fontSize: 14, padding: '12px 14px', border: '1px solid rgba(3,47,87,.16)', borderRadius: 10 };
