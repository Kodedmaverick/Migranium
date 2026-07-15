import { Link } from 'react-router-dom';

const PILLARS = [
  { icon: '🔐', title: 'Encryption', body: 'Data is encrypted in transit with TLS 1.2+ and at rest with industry-standard AES-256, so information is protected everywhere it travels and lives.' },
  { icon: '👤', title: 'Access control', body: 'Role-based permissions ensure every user — and Kemi AI — sees only the information appropriate to their responsibilities.' },
  { icon: '📋', title: 'Audit logging', body: 'Every view, change, and action is recorded in a complete, tamper-evident audit trail for accountability and investigation.' },
  { icon: '☁️', title: 'Resilient infrastructure', body: 'Secure cloud hosting with firewalls, monitoring, backups, and disaster recovery keeps your operations available and durable.' },
];

const TOC = [
  { name: 'Data encryption', href: '#encryption' },
  { name: 'Access & authentication', href: '#access' },
  { name: 'Auditing & monitoring', href: '#audit' },
  { name: 'Infrastructure & availability', href: '#infra' },
  { name: 'Data retention & recovery', href: '#retention' },
  { name: 'Organizational security', href: '#org' },
];

const SECTIONS = [
  { id: 'encryption', title: 'Data encryption', paras: ['All information you provide is stored behind firewalls on secure servers, and data in transit is encrypted using TLS 1.2 or higher. Sensitive data at rest is protected with strong, industry-standard encryption.', 'Personal Health Information (PHI) — such as health card numbers collected through EMR integrations or custom intake fields — is always transferred over encrypted channels and is never processed or stored beyond what is necessary for operational purposes.'], items: [] },
  { id: 'access', title: 'Access & authentication', paras: ['Access to data within Migranium is governed by granular, role-based permissions grouped into roles such as Administrator, Receptionist, Physician, and Manager. Users only reach the information and actions their role requires.'], items: [
    { k: 'Role-based access control — ', v: 'permissions are defined once and enforced consistently across every module.' },
    { k: 'Least privilege — ', v: 'users and integrations receive only the access they need to do their work.' },
    { k: 'Permission-aware AI — ', v: 'Kemi filters every response and action against the requesting user\u2019s permissions.' },
    { k: 'Credential protection — ', v: 'passwords are confidential to each user; organizations control account provisioning and revocation.' },
  ]},
  { id: 'audit', title: 'Auditing & monitoring', paras: ['Migranium maintains complete audit logging across the platform. Every record view, modification, communication, and automated action is captured, giving administrators the visibility they need for accountability, compliance, and investigation.', 'Systems are monitored on an ongoing basis, and we cooperate fully with lawful requests and investigations where required.'], items: [] },
  { id: 'infra', title: 'Infrastructure & availability', paras: ['Migranium runs on secure cloud infrastructure protected by firewalls and network controls. Services are designed for high availability, with monitoring and operational safeguards that keep your clinic running.', 'While no internet-based transmission can be guaranteed to be perfectly secure, we take commercially reasonable, layered measures to protect against unauthorized access, loss, and disruption.'], items: [] },
  { id: 'retention', title: 'Data retention & recovery', paras: ['Data is retained while your account is active and for a defined period after our relationship ends, consistent with our Terms of Service and legal obligations. Regular backups are created and retained for disaster recovery.', 'Backups exist solely for recovery and business continuity in the event of an emergency, and data is restored only when necessary. You can request deletion of personal information in line with our Privacy Policy.'], items: [] },
  { id: 'org', title: 'Organizational security', paras: ['Security is more than technology. We combine physical, electronic, and administrative measures, and the safety of your information also depends on how your organization manages its own access — which is why role management and credential hygiene are built into the platform.'], items: [
    { k: 'Administrative controls — ', v: 'documented internal practices govern how data is handled and who can access it.' },
    { k: 'Vendor diligence — ', v: 'service providers must meet privacy and security standards consistent with our policies.' },
    { k: 'Data minimization — ', v: 'we collect and retain only what is necessary to operate the service.' },
    { k: 'Responsible AI — ', v: 'Kemi supports human decisions; clinical judgment always remains with qualified professionals.' },
  ]},
];

const BADGES = [['HIPAA', 'badge-hipaa'], ['PHIPA', 'badge-phipa'], ['PIPEDA', 'badge-pipeda'], ['SOC', 'badge-soc']];
const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B', fontFamily: "'Shantell Sans', cursive" };

export default function Security() {
  return (
    <>
      <section style={{ background: '#032F57', padding: '120px 32px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -70, top: -30, width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(114,244,232,.12)' }} />
        <div style={{ position: 'absolute', right: 80, top: 120, width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(114,244,232,.09)' }} />
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#72F4E8' }}>Trust &amp; Security</div>
          <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, color: '#fff', margin: '14px 0 0', maxWidth: 820, textWrap: 'balance' }}>Security built for healthcare's highest standards</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '18px 0 0', maxWidth: 640, textWrap: 'pretty' }}>Patient information is among the most sensitive data an organization holds. Migranium protects it with layered technical, administrative, and physical safeguards — in transit, at rest, and in every workflow.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <Link to="/compliance" style={{ background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '13px 24px', borderRadius: 12 }}>View compliance →</Link>
            <Link to="/get-started" style={{ border: '1px solid rgba(255,255,255,.3)', color: '#fff', fontSize: 15, fontWeight: 600, padding: '13px 22px', borderRadius: 12 }}>Talk to our team</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div style={kicker}>How we protect your data</div>
            <h2 style={{ fontSize: 34, lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 800, color: '#032F57', margin: '12px 0 0', textWrap: 'balance' }}>Four layers of protection</h2>
          </div>
          <div className="cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 44 }}>
            {PILLARS.map((p) => (
              <div key={p.title} style={{ border: '1px solid rgba(3,47,87,.10)', borderRadius: 18, padding: 28, background: '#fff' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(1,177,139,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{p.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57', marginTop: 16 }}>{p.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#5A6B7B', margin: '8px 0 0' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 32px 40px' }}>
        <div className="sidebar-layout" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '230px 1fr', gap: 56, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#8CA0B0', marginBottom: 12 }}>On this page</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 3, borderLeft: '1px solid rgba(3,47,87,.1)' }}>
              {TOC.map((t) => <a key={t.href} href={t.href} style={{ fontSize: 12.5, lineHeight: 1.4, color: '#5A6B7B', padding: '6px 0 6px 14px', marginLeft: -1, borderLeft: '2px solid transparent' }}>{t.name}</a>)}
            </nav>
          </aside>
          <div style={{ minWidth: 0, maxWidth: 780 }}>
            {SECTIONS.map((sec) => (
              <div key={sec.id} id={sec.id} style={{ marginBottom: 48, scrollMarginTop: 96 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', color: '#032F57', margin: 0 }}>{sec.title}</h2>
                {sec.paras.map((p, i) => <p key={i} style={{ fontSize: 15, lineHeight: 1.72, color: '#48586A', margin: '14px 0 0', textWrap: 'pretty' }}>{p}</p>)}
                {sec.items.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 16 }}>
                    {sec.items.map((it, i) => <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.55, color: '#0B1B2B' }}><span style={{ flex: 'none', marginTop: 3, color: '#01B18B', fontWeight: 700 }}>✓</span><span><strong style={{ color: '#032F57' }}>{it.k}</strong>{it.v}</span></div>)}
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: '#F7FAFA', border: '1px solid rgba(3,47,87,.08)', borderRadius: 16, padding: '26px 28px' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57' }}>Reporting a vulnerability</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5A6B7B', margin: '10px 0 0' }}>We welcome responsible disclosure. If you believe you've found a security vulnerability in Migranium, contact us at <a href="mailto:security@migranium.com" style={{ fontWeight: 600 }}>security@migranium.com</a> and our team will respond promptly.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', background: '#032F57', borderRadius: 24, padding: '52px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: -50, bottom: -60, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(114,244,232,.14)' }} />
          <h2 style={{ fontSize: 30, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0, position: 'relative' }}>Compliant with the standards that matter</h2>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32, position: 'relative' }}>
            {BADGES.map(([name, img]) => (
              <div key={name} style={{ background: '#fff', borderRadius: 14, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 12, minWidth: 150 }}><img src={`/assets/${img}.png`} alt={name} style={{ height: 42, width: 'auto', objectFit: 'contain' }} /><span style={{ fontSize: 13, fontWeight: 700, color: '#032F57', textAlign: 'left' }}>{name}</span></div>
            ))}
          </div>
          <div style={{ marginTop: 30, position: 'relative' }}><Link to="/compliance" style={{ display: 'inline-block', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 28px', borderRadius: 12 }}>Read our compliance details →</Link></div>
        </div>
      </section>
    </>
  );
}
