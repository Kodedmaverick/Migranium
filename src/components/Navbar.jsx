import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MODULES, INTEGRATION_CATS } from '../data/nav.js';

const A = '/assets/';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const timer = useRef(null);

  const openNow = (name) => { if (timer.current) clearTimeout(timer.current); setOpenMenu(name); };
  const closeSoon = () => { if (timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => setOpenMenu(null), 180); };
  const closeMobile = () => { setMobileOpen(false); setMobileSection(null); };

  const impact = [
    { name: 'Testimonials', desc: 'In their own words', to: '/testimonials' },
    { name: 'Case Studies', desc: 'Documented operational outcomes', to: '/case-studies' },
  ];
  const resources = [
    { name: 'FAQs', desc: 'Common questions, answered', to: '/faq' },
    { name: 'Security', desc: 'Our security practices', to: '/security' },
    { name: 'Compliance', desc: 'HIPAA, PHIPA, PIPEDA, SOC', to: '/compliance' },
  ];

  const linkStyle = { display: 'block', padding: '8px 12px', borderRadius: 999, fontSize: 13.5, fontWeight: 500, color: '#0B1B2B' };
  const panel = { background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 20, boxShadow: '0 24px 60px rgba(3,47,87,.14)', padding: 12, animation: 'menuIn .18s cubic-bezier(.22,1,.36,1) both' };

  const SimpleMenu = ({ items }) => (
    <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 14 }}>
      <div style={{ ...panel, width: 260 }}>
        {items.map((it) => (
          <Link key={it.name} to={it.to} onClick={() => setOpenMenu(null)} style={{ display: 'block', padding: '9px 12px', borderRadius: 10, color: '#0B1B2B' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(1,177,139,.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
            <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600 }}>{it.name}</span>
            <span style={{ display: 'block', fontSize: 11.5, color: '#5A6B7B', marginTop: 2 }}>{it.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div style={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center', pointerEvents: 'none', padding: '0 16px' }}>
        <div style={{ pointerEvents: 'auto', position: 'relative', maxWidth: '100%' }} onMouseLeave={closeSoon}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,.82)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(3,47,87,.10)', borderRadius: 999, padding: '8px 8px 8px 18px', boxShadow: '0 8px 30px rgba(3,47,87,.08)' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: 14 }}><img src={A + 'migranium-blue.png'} alt="Migranium" style={{ height: 22, display: 'block' }} /></Link>

            {/* desktop links */}
            <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {/* Features */}
              <div onMouseEnter={() => openNow('features')} style={{ position: 'relative' }}>
                <Link to="/features/workplace" style={linkStyle}>Features</Link>
                {openMenu === 'features' && (
                  <div style={{ position: 'fixed', top: 64, left: '50%', transform: 'translateX(-50%)', paddingTop: 14, maxWidth: 'calc(100vw - 32px)' }}>
                    <div style={{ ...panel, padding: 20, overflowX: 'auto' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(180px,215px))', gap: 4 }}>
                        {MODULES.map((m) => (
                          <Link key={m.slug} to={`/features/${m.slug}`} onClick={() => setOpenMenu(null)} style={{ display: 'flex', gap: 10, padding: '10px 12px', borderRadius: 12, color: '#0B1B2B', alignItems: 'flex-start' }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(1,177,139,.06)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                            <span style={{ flex: 'none', width: 34, height: 34, borderRadius: 9, background: '#F4F6F9', border: '1px solid rgba(3,47,87,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img src={A + m.icon + '.png'} alt="" style={{ width: 22, height: 22 }} /></span>
                            <span><span style={{ display: 'block', fontSize: 13, fontWeight: 600 }}>{m.name}</span><span style={{ display: 'block', fontSize: 11.5, color: '#5A6B7B', lineHeight: 1.45, marginTop: 2 }}>{m.short}</span></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Integrations */}
              <div onMouseEnter={() => openNow('integrations')} style={{ position: 'relative' }}>
                <Link to="/integrations/oscarpro" style={linkStyle}>Integrations</Link>
                {openMenu === 'integrations' && (
                  <div style={{ position: 'fixed', top: 64, left: '50%', transform: 'translateX(-50%)', paddingTop: 14, maxWidth: 'calc(100vw - 32px)' }}>
                    <div style={{ ...panel, padding: 22, overflowX: 'auto' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(150px,170px))', gap: '20px 24px' }}>
                        {INTEGRATION_CATS.map((cat) => (
                          <div key={cat.name}>
                            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#5A6B7B', marginBottom: 8 }}>{cat.name}</div>
                            {cat.items.map((it) => (
                              <Link key={it.name} to={`/integrations/${it.slug}`} onClick={() => setOpenMenu(null)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', margin: '0 -8px', borderRadius: 8, fontSize: 13, fontWeight: 500, color: '#0B1B2B' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(1,177,139,.06)'; e.currentTarget.style.color = '#01B18B'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0B1B2B'; }}>
                                {it.logo && <span style={{ width: 16, height: 16, flex: 'none', display: 'block', backgroundImage: `url(${A + it.logo}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />}{it.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Customer Impact */}
              <div onMouseEnter={() => openNow('impact')} style={{ position: 'relative' }}>
                <Link to="/testimonials" style={linkStyle}>Customer Impact</Link>
                {openMenu === 'impact' && <SimpleMenu items={impact} />}
              </div>

              {/* Resources */}
              <div onMouseEnter={() => openNow('resources')} style={{ position: 'relative' }}>
                <Link to="/faq" style={linkStyle}>Resources</Link>
                {openMenu === 'resources' && <SimpleMenu items={resources} />}
              </div>

              <div style={{ width: 1, height: 20, background: 'rgba(3,47,87,.12)', margin: '0 6px' }} />
              <Link to="/login" style={{ padding: '8px 14px', borderRadius: 999, fontSize: 13.5, fontWeight: 500, color: '#032F57' }}>Login</Link>
              <Link to="/get-started" style={{ background: '#032F57', color: '#fff', fontSize: 13.5, fontWeight: 600, padding: '10px 18px', borderRadius: 999 }}>Get Started</Link>
            </div>

            {/* mobile hamburger */}
            <button className="only-mobile" aria-label="Open menu" onClick={() => setMobileOpen(true)}
              style={{ cursor: 'pointer', border: 'none', background: 'transparent', padding: 8, marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ width: 22, height: 2, background: '#032F57', borderRadius: 2 }} />
              <span style={{ width: 22, height: 2, background: '#032F57', borderRadius: 2 }} />
              <span style={{ width: 22, height: 2, background: '#032F57', borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </div>

      {/* mobile full-screen overlay */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#fff', animation: 'overlayIn .2s ease both', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(3,47,87,.08)' }}>
            <Link to="/" onClick={closeMobile}><img src={A + 'migranium-blue.png'} alt="Migranium" style={{ height: 24 }} /></Link>
            <button aria-label="Close menu" onClick={closeMobile} style={{ cursor: 'pointer', border: 'none', background: 'transparent', fontSize: 28, lineHeight: 1, color: '#032F57', padding: 4 }}>&times;</button>
          </div>
          <nav style={{ padding: '18px 24px 32px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <MobileGroup title="Features" open={mobileSection === 'features'} onToggle={() => setMobileSection(mobileSection === 'features' ? null : 'features')}>
              {MODULES.map((m) => (
                <Link key={m.slug} to={`/features/${m.slug}`} onClick={closeMobile} style={mobileSub}>{m.name}</Link>
              ))}
            </MobileGroup>
            <MobileGroup title="Integrations" open={mobileSection === 'integrations'} onToggle={() => setMobileSection(mobileSection === 'integrations' ? null : 'integrations')}>
              {INTEGRATION_CATS.flatMap((c) => c.items).filter((it, i, arr) => arr.findIndex((x) => x.slug === it.slug) === i).map((it) => (
                <Link key={it.name} to={`/integrations/${it.slug}`} onClick={closeMobile} style={mobileSub}>{it.name}</Link>
              ))}
            </MobileGroup>
            <MobileGroup title="Customer Impact" open={mobileSection === 'impact'} onToggle={() => setMobileSection(mobileSection === 'impact' ? null : 'impact')}>
              {impact.map((it) => <Link key={it.name} to={it.to} onClick={closeMobile} style={mobileSub}>{it.name}</Link>)}
            </MobileGroup>
            <MobileGroup title="Resources" open={mobileSection === 'resources'} onToggle={() => setMobileSection(mobileSection === 'resources' ? null : 'resources')}>
              {resources.map((it) => <Link key={it.name} to={it.to} onClick={closeMobile} style={mobileSub}>{it.name}</Link>)}
            </MobileGroup>
            <div style={{ height: 1, background: 'rgba(3,47,87,.08)', margin: '14px 0' }} />
            <Link to="/login" onClick={closeMobile} style={{ fontSize: 17, fontWeight: 600, color: '#032F57', padding: '12px 0' }}>Login</Link>
            <Link to="/get-started" onClick={closeMobile} style={{ textAlign: 'center', background: '#032F57', color: '#fff', fontSize: 16, fontWeight: 700, padding: '15px', borderRadius: 12, marginTop: 8 }}>Get Started</Link>
          </nav>
        </div>
      )}
    </>
  );
}

const mobileSub = { fontSize: 15, color: '#48586A', padding: '9px 0 9px 14px', borderLeft: '2px solid rgba(3,47,87,.1)' };

function MobileGroup({ title, open, onToggle, children }) {
  return (
    <div>
      <button onClick={onToggle} style={{ width: '100%', cursor: 'pointer', border: 'none', background: 'transparent', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700, color: '#032F57' }}>
        {title}<span style={{ fontSize: 20, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s', color: '#01B18B' }}>+</span>
      </button>
      {open && <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: 12 }}>{children}</div>}
    </div>
  );
}
