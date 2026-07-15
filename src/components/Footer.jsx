import { Link } from 'react-router-dom';

const A = '/assets/';

export default function Footer() {
  const cols = [
    { name: 'Platform', items: [
      { name: 'Overview', to: '/#platform' }, { name: 'How it works', to: '/#platform' },
      { name: 'Kemi AI', to: '/features/kemi' }, { name: 'Integrations', to: '/#integrations' },
      { name: 'Security', to: '/security' },
    ]},
    { name: 'Features', items: [
      { name: 'Scheduler', to: '/features/scheduler' }, { name: 'Queue Management', to: '/features/queue' },
      { name: 'Referrals', to: '/features/referrals' }, { name: 'Forms', to: '/features/forms' },
      { name: 'Automation', to: '/features/automation' }, { name: 'All modules', to: '/features/workplace' },
    ]},
    { name: 'Resources', items: [
      { name: 'FAQs', to: '/faq' }, { name: 'Testimonials', to: '/testimonials' },
      { name: 'Case Studies', to: '/case-studies' }, { name: 'Security', to: '/security' },
      { name: 'Compliance', to: '/compliance' },
    ]},
    { name: 'Company', items: [
      { name: 'About', to: '/' }, { name: 'Contact', to: '/get-started' },
      { name: 'Careers', to: '/' }, { name: 'Partners', to: '/' },
    ]},
  ];

  const social = ['social-instagram', 'social-linkedin', 'social-x'];

  return (
    <footer style={{ background: '#021E38', padding: '72px 32px 40px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 48 }}>
          <div>
            <img src={A + 'migranium-white.png'} alt="Migranium" style={{ height: 24, display: 'block' }} />
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,.55)', margin: '16px 0 0', maxWidth: 240 }}>The AI-powered operational layer for modern healthcare organizations.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {social.map((s) => (
                <a key={s} href="#" aria-label={s} style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: 16, height: 16, display: 'block', backgroundImage: `url(${A + s}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'brightness(0) invert(1)', opacity: .75 }} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.name}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 14 }}>{col.name}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {col.items.map((it) => (
                  <Link key={it.name} to={it.to} style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#72F4E8')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}>{it.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 56, paddingTop: 24, gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>© 2026 Migranium. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link to="/terms" style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Terms of Service</Link>
            <Link to="/privacy" style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Privacy Policy</Link>
            <Link to="/payment-terms" style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Payment Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
