import { Link } from 'react-router-dom';
import { useDemo } from './DemoModal.jsx';

const A = '/assets/';

const COLUMNS = [
  { head: 'Platform', to: '/#platform', groups: [
    { title: 'The platform', to: '/#platform', items: [
      { name: 'Overview', to: '/#platform' }, { name: 'How it works', to: '/#platform' },
      { name: 'Kemi AI', to: '/features/kemi' }, { name: 'Integrations', to: '/#integrations' },
    ]},
    { title: 'Trust', to: '/security', items: [
      { name: 'Security', to: '/security' }, { name: 'Compliance', to: '/compliance' },
    ]},
  ]},
  { head: 'Features', to: '/features/workplace', groups: [
    { title: 'Operations', to: '/features/scheduler', items: [
      { name: 'Scheduler', to: '/features/scheduler' }, { name: 'Planner', to: '/features/planner' },
      { name: 'Queue Management', to: '/features/queue' }, { name: 'Display', to: '/features/display' },
    ]},
    { title: 'Workflow', to: '/features/referrals', items: [
      { name: 'Referrals', to: '/features/referrals' }, { name: 'Forms', to: '/features/forms' },
      { name: 'Fax', to: '/features/fax' }, { name: 'Automation', to: '/features/automation' },
      { name: 'Task Manager', to: '/features/tasks' },
    ]},
  ]},
  { head: 'Resources', to: '/faq', groups: [
    { title: 'Learn', to: '/case-studies', items: [
      { name: 'Case Studies', to: '/case-studies' }, { name: 'Testimonials', to: '/testimonials' },
      { name: 'FAQs', to: '/faq' },
    ]},
    { title: 'Integrations', to: '/integrations/oscarpro', items: [
      { name: 'OSCAR Pro', to: '/integrations/oscarpro' }, { name: 'Accuro', to: '/integrations/accuro' },
      { name: 'Epic', to: '/integrations/epic' }, { name: 'All integrations', to: '/integrations/oscarpro' },
    ]},
  ]},
  { head: 'Company', to: '/', groups: [
    { title: 'About', to: '/', items: [
      { name: 'About Migranium', to: '/' }, { name: 'Contact', to: '/get-started' },
      { name: 'Careers', to: '/' }, { name: 'Partners', to: '/' },
    ]},
    { title: 'Get started', to: '/get-started', items: [
      { name: 'Get a Custom Quote', to: '/get-started' }, { name: 'Login', to: '/login' },
    ]},
  ]},
];

const SOCIAL = [['social-x', 'X'], ['social-linkedin', 'LinkedIn'], ['social-instagram', 'Instagram']];

export default function Footer() {
  const openDemo = useDemo();
  return (
    <footer style={{ background: '#08121C', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="jfooter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>
          {COLUMNS.map((col) => (
            <div key={col.head}>
              <Link to={col.to} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,.14)' }}>
                {col.head}<span style={{ fontSize: 15, color: 'rgba(255,255,255,.5)' }}>→</span>
              </Link>
              {col.groups.map((g) => (
                <div key={g.title} style={{ marginTop: 24 }}>
                  <Link to={g.to} style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{g.title}</Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
                    {g.items.map((it) => (
                      <Link key={it.name} to={it.to} style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#72F4E8')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.55)')}>{it.name}</Link>
                    ))}
                  </div>
                </div>
              ))}
              {col.head === 'Company' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
                  <Link to="/get-started" style={{ textAlign: 'center', border: '1px solid rgba(255,255,255,.25)', color: '#fff', fontSize: 13.5, fontWeight: 600, padding: '11px 16px', borderRadius: 10 }}>Get a Custom Quote</Link>
                  <button onClick={openDemo} style={{ cursor: 'pointer', textAlign: 'center', border: 'none', background: '#72F4E8', color: '#032F57', fontFamily: 'Inter, sans-serif', fontSize: 13.5, fontWeight: 700, padding: '11px 16px', borderRadius: 10 }}>Book a Demo</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="jfooter-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginTop: 72, flexWrap: 'wrap' }}>
          <img src={A + 'migranium-white.png'} alt="Migranium" style={{ height: 30 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 14 }}>
              {SOCIAL.map(([img, label]) => (
                <a key={label} href="#" aria-label={label} style={{ width: 20, height: 20, display: 'block', backgroundImage: `url(${A + img}.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'brightness(0) invert(1)', opacity: .7 }} />
              ))}
            </div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.4)' }}>© 2026 Migranium, Inc.</div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <Link to="/privacy" style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>Terms of Service</Link>
              <Link to="/payment-terms" style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>Payment Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
