import { Link } from 'react-router-dom';

const UPCOMING = [
  { tag: 'Multi-location', title: 'Coordinating patient flow across a growing network', body: 'How a multi-site group unified queues, displays, and referrals under one operational layer.' },
  { tag: 'Referrals', title: 'Turning a fax backlog into same-day referral processing', body: 'AI-assisted intake and automated routing applied to a high-volume specialty practice.' },
  { tag: 'Patient experience', title: 'Cutting waiting-room anxiety with live displays', body: 'Wait-time visibility and self-service check-in in a busy family medicine clinic.' },
];

export default function CaseStudies() {
  return (
    <>
      <section style={{ background: '#032F57', padding: '120px 32px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -80, top: -40, width: 340, height: 340, borderRadius: '50%', border: '1px solid rgba(114,244,232,.12)' }} />
        <div style={{ position: 'absolute', right: 60, top: 120, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(114,244,232,.09)' }} />
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#72F4E8' }}>Case Studies</div>
          <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, color: '#fff', margin: '14px 0 0', maxWidth: 820, textWrap: 'balance' }}>Documented outcomes from real healthcare operations</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '18px 0 0', maxWidth: 620, textWrap: 'pretty' }}>How organizations rebuilt their busiest workflows on Migranium — and what changed once they did.</p>
        </div>
      </section>

      {/* FEATURED CASE */}
      <section style={{ padding: '0 32px' }}>
        <div style={{ maxWidth: 1120, margin: '-44px auto 0', position: 'relative' }}>
          <div style={{ background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 24, boxShadow: '0 30px 80px rgba(3,47,87,.14)', overflow: 'hidden' }}>
            <div style={{ background: '#043A68', padding: '44px 48px', display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
              <span style={{ width: 72, height: 72, borderRadius: 16, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><img src="/assets/logo-tmc.png" alt="TMC+" style={{ width: 52, height: 52, objectFit: 'contain' }} /></span>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#72F4E8' }}>Thompson Medical Centre (TMC+)</div>
                <h2 style={{ fontSize: 30, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: '8px 0 0', textWrap: 'balance' }}>New patient intake processing, from <span style={{ color: '#72F4E8' }}>4 days</span> to <span style={{ color: '#72F4E8' }}>15 minutes</span></h2>
              </div>
            </div>

            <div className="metric-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(3,47,87,.08)' }}>
              {[['20 hrs → 20 min', 'Weekly intake processing time'], ['2,000+', 'Intakes processed in minutes'], ['7,500', 'Intake forms received per quarter'], ['40 hrs/wk', 'Saved on administrative work']].map(([n, l], i) => (
                <div key={i} style={{ padding: '26px 24px', borderRight: i < 3 ? '1px solid rgba(3,47,87,.08)' : 'none' }}><div style={{ fontSize: 30, fontWeight: 800, color: '#032F57', letterSpacing: '-0.02em' }}>{n}</div><div style={{ fontSize: 12.5, color: '#5A6B7B', marginTop: 4 }}>{l}</div></div>
              ))}
            </div>

            <div className="case-body" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr' }}>
              <div style={{ padding: '40px 44px', borderRight: '1px solid rgba(3,47,87,.08)' }}>
                <Timeline color="#B23B4E" icon="⚑" title="The Challenge" line>
                  <p style={p}>Thompson Medical Centre receives up to 7,500 intake forms from prospective patients each quarter. Every form had to be reviewed manually, a query run to assign them, and staff had to call patients to confirm booked appointments.</p>
                  <p style={p}>The process consumed roughly 20 hours of staff time per week and offered no clear visibility into who had been contacted or what stage they were at.</p>
                </Timeline>
                <Timeline color="#032F57" icon="💡" title="The Solution" line>
                  <p style={p}>With Migranium, the entire workflow collapses into a few clicks:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                    {['Staff bulk-assign and bulk-approve incoming forms.', 'Patient records are created automatically in the EMR.', 'Each patient receives a direct booking link with built-in reminders.'].map((t) => (
                      <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.55, color: '#0B1B2B' }}><span style={{ color: '#01B18B', fontWeight: 700, flex: 'none' }}>→</span>{t}</div>
                    ))}
                  </div>
                  <p style={p}>Migranium also provides a live dashboard showing what has been actioned and what still needs follow-up.</p>
                </Timeline>
                <Timeline color="#01745F" icon="📊" title="The Results">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 12 }}>
                    {['Intake processing time: 20 hours → ~20 minutes', 'Form review and patient creation: automated', 'Booking: patient self-serve via direct link, with reminders', 'Follow-up: full visibility on status, no manual tracking'].map((t) => (
                      <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.5, color: '#0B1B2B' }}><span style={{ color: '#01B18B', fontWeight: 700, flex: 'none' }}>✓</span>{t}</div>
                    ))}
                  </div>
                </Timeline>
              </div>
              <div style={{ padding: '40px 40px', background: '#F7FAFA', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 64, lineHeight: .6, color: 'rgba(3,47,87,.18)', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <div style={{ fontSize: 18, lineHeight: 1.55, color: '#032F57', fontWeight: 500, marginTop: 8, textWrap: 'pretty' }}>What used to take us <em style={{ color: '#01745F', fontStyle: 'italic' }}>4 days of manual work every week</em>, Migranium now does in <strong>15 minutes.</strong></div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: '#48586A', marginTop: 14 }}>We processed over <strong style={{ color: '#032F57' }}>2,000+</strong> new patient intakes in <strong>minutes</strong>. The platform is user friendly, and the team is incredibly supportive.</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 22 }}>
                  <span style={{ width: 42, height: 42, borderRadius: 10, background: '#fff', border: '1px solid rgba(3,47,87,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><img src="/assets/logo-tmc.png" alt="TMC+" style={{ width: 30, height: 30, objectFit: 'contain' }} /></span>
                  <div><div style={{ fontSize: 14, fontWeight: 700, color: '#0B1B2B' }}>Dan Muldoon</div><div style={{ fontSize: 12.5, color: '#8CA0B0' }}>Director, TMC+</div></div>
                </div>
              </div>
            </div>

            <div style={{ background: '#032F57', padding: '30px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>Clinics using Migranium save an average of <span style={{ color: '#72F4E8' }}>40 hrs/week</span> on administrative work</div>
              <Link to="/get-started" style={{ background: '#72F4E8', color: '#032F57', fontSize: 14, fontWeight: 700, padding: '12px 22px', borderRadius: 10, whiteSpace: 'nowrap' }}>Tell us your workflow →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MORE */}
      <section style={{ padding: '64px 32px 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: 0 }}>More stories on the way</h2>
            <span style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, color: '#01B18B' }}>we're documenting them now ✎</span>
          </div>
          <div className="cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 24 }}>
            {UPCOMING.map((u) => (
              <div key={u.title} style={{ border: '1px dashed rgba(3,47,87,.2)', borderRadius: 18, padding: 26, background: '#FAFCFC' }}>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#8CA0B0', background: 'rgba(3,47,87,.05)', borderRadius: 6, padding: '4px 10px' }}>{u.tag}</span>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57', marginTop: 14 }}>{u.title}</div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#8CA0B0', margin: '8px 0 0' }}>{u.body}</p>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: '#8CA0B0', marginTop: 16 }}>Coming soon</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#5A6B7B', margin: '28px 0 0' }}>Are you a Migranium customer with a story to share? <Link to="/get-started" style={{ fontWeight: 600, fontFamily: "'Shantell Sans', cursive" }}>We'd love to feature you →</Link></p>
        </div>
      </section>
    </>
  );
}

const p = { fontSize: 14, lineHeight: 1.65, color: '#48586A', margin: '10px 0 0' };

function Timeline({ color, icon, title, line, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 18 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ width: 38, height: 38, flex: 'none', borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{icon}</span>
        {line && <span style={{ flex: 1, width: 2, background: 'rgba(3,47,87,.12)', marginTop: 6 }} />}
      </div>
      <div style={{ paddingBottom: line ? 30 : 0 }}>
        <div style={{ fontSize: 17, fontWeight: 800, color }}>{title}</div>
        {children}
      </div>
    </div>
  );
}
