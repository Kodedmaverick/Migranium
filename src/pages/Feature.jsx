import { useParams, Link } from 'react-router-dom';
import { MODULES_DATA } from '../data/features.js';
import { useDemo } from '../components/DemoModal.jsx';

export default function Feature() {
  const { slug } = useParams();
  const openDemo = useDemo();
  const bySlug = {};
  MODULES_DATA.forEach((m, i) => { m._i = i; bySlug[m.slug] = m; });
  const mod = bySlug[slug] || MODULES_DATA[0];
  const hasShot = !!mod.shot;

  const related = (mod.related || []).map((s) => ({ name: bySlug[s].name, icon: bySlug[s].icon, slug: s }));
  const prev = MODULES_DATA[(mod._i - 1 + MODULES_DATA.length) % MODULES_DATA.length];
  const next = MODULES_DATA[(mod._i + 1) % MODULES_DATA.length];

  const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B', fontFamily: "'Shantell Sans', cursive" };

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#8CA0B0', marginBottom: 20 }}>
            <Link to="/features/workplace" style={{ color: '#5A6B7B', fontWeight: 500 }}>Features</Link><span>/</span><span style={{ color: '#032F57', fontWeight: 600 }}>{mod.name}</span>
          </div>
          <div className="hero-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div style={{ animation: 'fadeUp .7s cubic-bezier(.22,1,.36,1) both' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 60, height: 60, borderRadius: 16, background: '#fff', border: '1px solid rgba(3,47,87,.08)', boxShadow: '0 6px 20px rgba(3,47,87,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={mod.icon} alt="" style={{ width: 36, height: 36 }} /></span>
                <span style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B' }}>{mod.kicker}</span>
              </div>
              <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '22px 0 0', textWrap: 'balance' }}>{mod.name}</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px 0 0', textWrap: 'pretty' }}>{mod.tagline}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
                <button onClick={openDemo} style={{ cursor: 'pointer', border: 'none', fontFamily: 'Inter, sans-serif', background: '#032F57', color: '#fff', fontSize: 15, fontWeight: 600, padding: '13px 24px', borderRadius: 12 }}>Book a Demo</button>
                <a href="#capabilities" style={{ border: '1px solid rgba(3,47,87,.16)', color: '#032F57', fontSize: 15, fontWeight: 600, padding: '13px 22px', borderRadius: 12 }}>See capabilities</a>
              </div>
            </div>
            <div style={{ animation: 'fadeUp .7s cubic-bezier(.22,1,.36,1) .1s both' }}>
              {hasShot ? (
                <div style={{ border: '1px solid rgba(3,47,87,.12)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 70px rgba(3,47,87,.16)', background: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 14px', borderBottom: '1px solid rgba(3,47,87,.07)', background: '#FAFCFC' }}>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E5EAEE' }} /><span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E5EAEE' }} /><span style={{ width: 9, height: 9, borderRadius: '50%', background: '#E5EAEE' }} />
                    <span style={{ marginLeft: 12, fontSize: 11, color: '#8CA0B0', background: '#fff', border: '1px solid rgba(3,47,87,.08)', borderRadius: 6, padding: '3px 32px' }}>app.migranium.com</span>
                  </div>
                  <img src={mod.shot} alt={`${mod.name} interface`} style={{ display: 'block', width: '100%', height: 'auto' }} />
                </div>
              ) : (
                <div style={{ borderRadius: 20, background: 'linear-gradient(150deg,#032F57,#075a86)', padding: 40, boxShadow: '0 30px 70px rgba(3,47,87,.22)', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(114,244,232,.2)' }} />
                  <span style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={mod.icon} alt="" style={{ width: 38, height: 38, filter: 'brightness(0) invert(1)' }} /></span>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginTop: 22 }}>{mod.name}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                    {(mod.panelChips || []).map((c) => (
                      <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: '12px 15px' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#72F4E8', flex: 'none' }} /><span style={{ fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,.92)' }}>{c}</span></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: '64px 32px 40px' }}>
        <div className="sidebar-layout" style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 56, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#8CA0B0', marginBottom: 12 }}>All features</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 1, borderLeft: '1px solid rgba(3,47,87,.1)' }}>
              {MODULES_DATA.map((m) => {
                const active = m.slug === mod.slug;
                return (
                  <Link key={m.slug} to={`/features/${m.slug}`} style={{ fontSize: 13, lineHeight: 1.35, color: active ? '#032F57' : '#5A6B7B', fontWeight: active ? 700 : 500, padding: '7px 0 7px 14px', marginLeft: -1, borderLeft: `2px solid ${active ? '#01B18B' : 'transparent'}`, background: active ? 'rgba(1,177,139,.05)' : 'transparent' }}>{m.name}</Link>
                );
              })}
            </nav>
          </aside>

          <article style={{ minWidth: 0 }}>
            <div style={kicker}>Overview</div>
            <h2 style={{ fontSize: 32, lineHeight: 1.18, letterSpacing: '-0.02em', fontWeight: 800, color: '#032F57', margin: '12px 0 0', textWrap: 'balance' }}>{mod.overviewHead}</h2>
            {mod.overview.map((p, i) => <p key={i} style={{ fontSize: 16, lineHeight: 1.72, color: '#48586A', margin: '18px 0 0', maxWidth: 760, textWrap: 'pretty' }}>{p}</p>)}

            <div style={{ marginTop: 56 }}>
              <div style={kicker}>Design principles</div>
              <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 20 }}>
                {mod.principles.map((pr) => (
                  <div key={pr.title} style={{ border: '1px solid rgba(3,47,87,.10)', borderRadius: 16, padding: 24 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57' }}>{pr.title}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.62, color: '#5A6B7B', margin: '8px 0 0' }}>{pr.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="capabilities" style={{ marginTop: 56, scrollMarginTop: 96 }}>
              <div style={kicker}>Key capabilities</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 20, border: '1px solid rgba(3,47,87,.10)', borderRadius: 16, overflow: 'hidden' }}>
                {mod.capabilities.map((cap) => (
                  <div key={cap.title} className="cap-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: '20px 24px', borderBottom: '1px solid rgba(3,47,87,.06)', background: '#fff' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#032F57' }}>{cap.title}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: '#5A6B7B', margin: 0 }}>{cap.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 56 }}>
              <div style={kicker}>Benefits</div>
              <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px', marginTop: 20, maxWidth: 820 }}>
                {mod.benefits.map((b) => (
                  <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.55, color: '#0B1B2B' }}><span style={{ flex: 'none', marginTop: 4, color: '#01B18B', fontWeight: 700 }}>✓</span>{b}</div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 56 }}>
              <div style={kicker}>Works with</div>
              <p style={{ fontSize: 14, color: '#5A6B7B', margin: '10px 0 0' }}>Every module shares the same patients, providers, and data. {mod.name} connects directly with:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {related.map((r) => (
                  <Link key={r.slug} to={`/features/${r.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(3,47,87,.14)', borderRadius: 999, padding: '8px 14px', fontSize: 13, fontWeight: 600, color: '#032F57', background: '#fff' }}>
                    <img src={r.icon} alt="" style={{ width: 18, height: 18 }} />{r.name}</Link>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(3,47,87,.1)' }}>
              <Link to={`/features/${prev.slug}`} style={{ flex: 1, border: '1px solid rgba(3,47,87,.12)', borderRadius: 14, padding: '16px 20px' }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#8CA0B0' }}>← Previous</div><div style={{ fontSize: 15, fontWeight: 700, color: '#032F57', marginTop: 4 }}>{prev.name}</div></Link>
              <Link to={`/features/${next.slug}`} style={{ flex: 1, border: '1px solid rgba(3,47,87,.12)', borderRadius: 14, padding: '16px 20px', textAlign: 'right' }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#8CA0B0' }}>Next →</div><div style={{ fontSize: 15, fontWeight: 700, color: '#032F57', marginTop: 4 }}>{next.name}</div></Link>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', background: '#032F57', borderRadius: 24, padding: '56px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(114,244,232,.15)' }} />
          <h2 style={{ fontSize: 32, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0, position: 'relative' }}>See {mod.name} in your workflow</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '14px auto 0', maxWidth: 520, position: 'relative' }}>Book a 30-minute demo and we'll show you how {mod.name} fits into how your organization actually operates.</p>
          <div style={{ marginTop: 28, position: 'relative' }}><button onClick={openDemo} style={{ cursor: 'pointer', border: 'none', fontFamily: 'Inter, sans-serif', display: 'inline-block', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 30px', borderRadius: 12 }}>Book a Demo</button></div>
        </div>
      </section>
    </>
  );
}
