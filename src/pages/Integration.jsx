import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { INTEGRATIONS_DATA } from '../data/integrations.js';

const MOD_ICON = { patients: 'glyph-patients', scheduler: 'glyph-scheduler', referrals: 'glyph-referrals', fax: 'glyph-fax', tasks: 'glyph-taskmanager', messaging: 'glyph-messaging', forms: 'glyph-forms', portal: 'glyph-patients', planner: 'glyph-planner', workplace: 'glyph-workplace', automation: 'glyph-automation' };
const MOD_NAME = { patients: 'Patients', scheduler: 'Scheduler', referrals: 'Referrals', fax: 'Fax', tasks: 'Task Manager', messaging: 'Messaging', forms: 'Forms', portal: 'Patient Portal', planner: 'Planner', workplace: 'Workplace', automation: 'Automation' };
const ORDER = ['EMR', 'Cloud Fax', 'Telephony', 'E-Signature', 'Email', 'Calendar', 'Custom'];

export default function Integration() {
  const { slug } = useParams();
  const bySlug = {};
  INTEGRATIONS_DATA.forEach((x) => (bySlug[x.slug] = x));
  const intg = bySlug[slug] || INTEGRATIONS_DATA[0];
  const hasLogo = !!intg.logo;

  const groups = ORDER.map((cat) => ({
    name: cat,
    items: INTEGRATIONS_DATA.filter((x) => x.category === cat),
  })).filter((g) => g.items.length);

  const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B', fontFamily: "'Shantell Sans', cursive" };

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '120px 32px 56px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#8CA0B0', marginBottom: 20, flexWrap: 'wrap' }}>
            <Link to="/integrations/oscarpro" style={{ color: '#5A6B7B', fontWeight: 500 }}>Integrations</Link><span>/</span><span style={{ color: '#5A6B7B' }}>{intg.category}</span><span>/</span><span style={{ color: '#032F57', fontWeight: 600 }}>{intg.name}</span>
          </div>
          <div className="hero-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'center' }}>
            <div style={{ animation: 'fadeUp .7s cubic-bezier(.22,1,.36,1) both' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(1,177,139,.08)', border: '1px solid rgba(1,177,139,.2)', borderRadius: 999, padding: '6px 14px', fontSize: 12, fontWeight: 700, letterSpacing: '.04em', color: '#01745F', textTransform: 'uppercase' }}>{intg.category}</div>
              <h1 className="hero" style={{ fontSize: 50, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '20px 0 0', textWrap: 'balance' }}>{intg.name}</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px 0 0', textWrap: 'pretty', maxWidth: 560 }}>{intg.tagline}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
                <Link to="/get-started" style={{ background: '#032F57', color: '#fff', fontSize: 15, fontWeight: 600, padding: '13px 24px', borderRadius: 12 }}>Connect {intg.name}</Link>
                <Link to="/integrations/oscarpro" style={{ border: '1px solid rgba(3,47,87,.16)', color: '#032F57', fontSize: 15, fontWeight: 600, padding: '13px 22px', borderRadius: 12 }}>All integrations</Link>
              </div>
            </div>
            <div style={{ animation: 'fadeUp .7s cubic-bezier(.22,1,.36,1) .1s both' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 20, padding: 32, boxShadow: '0 24px 60px rgba(3,47,87,.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 82, height: 82, borderRadius: 20, background: '#F7FAFA', border: '1px solid rgba(3,47,87,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {hasLogo ? <img src={intg.logo} alt={intg.name} style={{ maxWidth: 48, maxHeight: 48, objectFit: 'contain' }} /> : <span style={{ fontSize: 15, fontWeight: 800, color: '#032F57' }}>API</span>}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#5A6B7B', textAlign: 'center' }}>{intg.name}</span>
                  </div>
                  <svg width="72" height="40" viewBox="0 0 72 40" style={{ flex: 'none' }}>
                    <path d="M4 20 H68" fill="none" stroke="rgba(3,47,87,.14)" strokeWidth="2" />
                    <path d="M4 20 H68" fill="none" stroke="#72F4E8" strokeWidth="2.5" strokeLinecap="round" style={{ strokeDasharray: '16 90', strokeDashoffset: 106, animation: 'dashFlow 2.4s linear infinite' }} />
                    <path d="M60 13 L68 20 L60 27" fill="none" stroke="#01B18B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13 L4 20 L12 27" fill="none" stroke="#01B18B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 82, height: 82, borderRadius: 20, background: '#032F57', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(3,47,87,.24)' }}><img src="/assets/migranium-white.png" alt="Migranium" style={{ width: 52 }} /></div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#5A6B7B' }}>Migranium</span>
                  </div>
                </div>
                <div style={{ marginTop: 22, borderTop: '1px solid rgba(3,47,87,.08)', paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#8CA0B0' }}>Connection status</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#01745F' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#01B18B' }} />Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: '60px 32px 40px' }}>
        <div className="sidebar-layout" style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 56, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#8CA0B0', marginBottom: 12 }}>All integrations</div>
            {groups.map((g) => (
              <div key={g.name} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: '#01B18B', marginBottom: 4 }}>{g.name}</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 1, borderLeft: '1px solid rgba(3,47,87,.1)' }}>
                  {g.items.map((x) => {
                    const active = x.slug === intg.slug;
                    return <Link key={x.slug} to={`/integrations/${x.slug}`} style={{ fontSize: 13, lineHeight: 1.35, color: active ? '#032F57' : '#5A6B7B', fontWeight: active ? 700 : 500, padding: '6px 0 6px 14px', marginLeft: -1, borderLeft: `2px solid ${active ? '#01B18B' : 'transparent'}`, background: active ? 'rgba(1,177,139,.05)' : 'transparent' }}>{x.name}</Link>;
                  })}
                </nav>
              </div>
            ))}
          </aside>

          <article style={{ minWidth: 0 }}>
            <div style={kicker}>Overview</div>
            <h2 style={{ fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 800, color: '#032F57', margin: '12px 0 0', textWrap: 'balance' }}>{intg.overviewHead}</h2>
            {intg.overview.map((p, i) => <p key={i} style={{ fontSize: 16, lineHeight: 1.72, color: '#48586A', margin: '18px 0 0', maxWidth: 760, textWrap: 'pretty' }}>{p}</p>)}

            <div style={{ marginTop: 52 }}>
              <div style={kicker}>What syncs</div>
              <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px', marginTop: 18, maxWidth: 820 }}>
                {intg.syncs.map((sy) => <div key={sy} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.55, color: '#0B1B2B' }}><span style={{ flex: 'none', marginTop: 4, color: '#01B18B', fontWeight: 700 }}>✓</span>{sy}</div>)}
              </div>
            </div>

            <div style={{ marginTop: 52 }}>
              <div style={kicker}>How it works</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 20, maxWidth: 760 }}>
                {intg.steps.map((st, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 18, alignItems: 'start', paddingBottom: 22 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
                      <span style={{ width: 34, height: 34, flex: 'none', borderRadius: '50%', background: '#032F57', color: '#fff', fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{st.n}</span>
                      <span style={{ flex: 1, width: 2, background: 'rgba(3,47,87,.1)', marginTop: 4 }} />
                    </div>
                    <div style={{ paddingTop: 5 }}><div style={{ fontSize: 15, fontWeight: 700, color: '#032F57' }}>{st.title}</div><p style={{ fontSize: 14, lineHeight: 1.6, color: '#5A6B7B', margin: '5px 0 0' }}>{st.body}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 32, background: '#F7FAFA', border: '1px solid rgba(3,47,87,.08)', borderRadius: 16, padding: '26px 28px', maxWidth: 820 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(1,177,139,.12)', color: '#01745F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>🔒</span><div style={{ fontSize: 15, fontWeight: 700, color: '#032F57' }}>Secure by default</div></div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5A6B7B', margin: '12px 0 0' }}>{intg.security}</p>
            </div>

            <div style={{ marginTop: 52 }}>
              <div style={kicker}>Powers these modules</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {(intg.modules || []).map((m) => (
                  <Link key={m} to={`/features/${m}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(3,47,87,.14)', borderRadius: 999, padding: '8px 14px', fontSize: 13, fontWeight: 600, color: '#032F57', background: '#fff' }}>
                    <img src={`/assets/${MOD_ICON[m]}.png`} alt="" style={{ width: 18, height: 18 }} />{MOD_NAME[m]}</Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', background: '#032F57', borderRadius: 24, padding: '52px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(114,244,232,.15)' }} />
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <h2 style={{ fontSize: 28, lineHeight: 1.16, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0 }}>Don't see the system you use?</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '12px 0 0' }}>Our custom integration framework connects proprietary applications and internal systems through configurable APIs and webhooks.</p>
          </div>
          <Link to="/get-started" style={{ position: 'relative', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 28px', borderRadius: 12, whiteSpace: 'nowrap' }}>Talk to our team</Link>
        </div>
      </section>
    </>
  );
}
