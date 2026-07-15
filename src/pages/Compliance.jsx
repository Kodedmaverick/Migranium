import { Link } from 'react-router-dom';

const FRAMEWORKS = [
  { name: 'HIPAA', region: 'United States', full: 'Health Insurance Portability and Accountability Act', img: 'badge-hipaa', body: 'Migranium supports the privacy, security, and breach-notification requirements that govern how protected health information is stored, transmitted, and accessed in the United States.' },
  { name: 'PHIPA', region: 'Ontario, Canada', full: 'Personal Health Information Protection Act', img: 'badge-phipa', body: 'The platform aligns with PHIPA\u2019s rules for the collection, use, and disclosure of personal health information, including consent, access, and safeguarding obligations.' },
  { name: 'PIPEDA', region: 'Canada', full: 'Personal Information Protection and Electronic Documents Act', img: 'badge-pipeda', body: 'Migranium follows PIPEDA\u2019s fair-information principles for handling personal information in the course of commercial activity across Canada.' },
  { name: 'SOC', region: 'Industry', full: 'AICPA Service Organization Controls', img: 'badge-soc', body: 'Our controls are designed around the AICPA Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy — the framework independent auditors use to evaluate service organizations.' },
];

const TOC = [
  { name: 'Our approach', href: '#approach' },
  { name: 'Protected Health Information', href: '#phi' },
  { name: 'Consent & patient rights', href: '#consent' },
  { name: 'Data residency & transfers', href: '#residency' },
  { name: 'Shared responsibility', href: '#shared' },
];

const SECTIONS = [
  { id: 'approach', title: 'Our approach to compliance', paras: ['Healthcare organizations operate under some of the strictest data-protection obligations of any industry. Migranium is built so that meeting those obligations is the default, not an extra project — encryption, access control, audit logging, consent capture, and retention rules are part of the platform\u2019s foundation.', 'Compliance is also a shared, ongoing effort. We provide the controls, documentation, and safeguards; your organization configures roles, manages access, and sets the policies that fit your regulatory context. Together these keep patient data protected end to end.'], items: [] },
  { id: 'phi', title: 'Protected Health Information (PHI)', paras: ['PHI is any health-related information that can identify an individual, directly or indirectly — health card numbers, medical history, or details shared while using the platform.'], items: [
    { k: 'Collected only when needed — ', v: 'PHI such as health card numbers is captured only when a provider integrates their EMR, or through consented custom intake fields.' },
    { k: 'Encrypted in transit — ', v: 'all PHI transfers use TLS 1.2 or higher.' },
    { k: 'Purpose-limited — ', v: 'PHI is used only for scheduling, workflow automation, and queue management as authorized by the healthcare provider.' },
    { k: 'Kept in sync, not duplicated — ', v: 'EMR synchronization keeps records accurate without creating uncontrolled copies.' },
  ]},
  { id: 'consent', title: 'Consent & patient rights', paras: ['Patients retain meaningful control over their information. Where custom forms collect additional PHI, completion constitutes informed consent, and patients can exercise their rights at any time.'], items: [
    { k: 'Refuse or withdraw consent — ', v: 'patients may decline collection or withdraw consent by contacting their provider or Migranium.' },
    { k: 'Access & correction — ', v: 'patients can request access to their PHI or corrections to inaccurate information.' },
    { k: 'Electronic consent — ', v: 'e-signature integrations capture legally recognized consent for treatment, privacy, and procedures.' },
    { k: 'Transparency — ', v: 'our Privacy Policy explains what is collected, why, and how it is handled.' },
  ]},
  { id: 'residency', title: 'Data residency & transfers', paras: ['We are transparent about where data is processed and stored. When information is transferred to or processed in another country, it may be subject to that jurisdiction\u2019s laws, and we require any service provider we engage to uphold privacy and security standards consistent with our policies and applicable Canadian legislation.', 'Organizations with specific data-residency requirements should raise them early so we can confirm the right configuration for your regulatory environment.'], items: [] },
  { id: 'shared', title: 'Shared responsibility model', paras: ['Strong compliance is a partnership. The points below reflect how responsibilities are divided between Migranium and your organization.'], items: [
    { k: 'Migranium provides — ', v: 'encryption, audit logging, secure infrastructure, consent tooling, retention controls, and framework-aligned safeguards.' },
    { k: 'Your organization manages — ', v: 'user roles and permissions, credential hygiene, and the policies specific to your jurisdiction.' },
    { k: 'Together we maintain — ', v: 'accurate records, appropriate access, and a defensible audit trail across the patient journey.' },
  ]},
];

const kicker = { fontSize: 12.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#01B18B', fontFamily: "'Shantell Sans', cursive" };

export default function Compliance() {
  return (
    <>
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B' }}>Trust &amp; Compliance</div>
          <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '14px 0 0', maxWidth: 820, textWrap: 'balance' }}>Compliance you can build a practice on</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px 0 0', maxWidth: 660, textWrap: 'pretty' }}>Migranium is designed to meet the regulatory and industry frameworks that govern healthcare data across North America. Compliance is engineered into the platform — not bolted on afterwards.</p>
        </div>
      </section>

      <section style={{ padding: '64px 32px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
            {FRAMEWORKS.map((fw) => (
              <div key={fw.name} style={{ border: '1px solid rgba(3,47,87,.10)', borderRadius: 20, padding: 30, display: 'flex', gap: 20, alignItems: 'flex-start', background: '#fff' }}>
                <span style={{ width: 64, height: 64, flex: 'none', borderRadius: 14, background: '#F7FAFA', border: '1px solid rgba(3,47,87,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={`/assets/${fw.img}.png`} alt={fw.name} style={{ maxWidth: 42, maxHeight: 42, objectFit: 'contain' }} /></span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}><span style={{ fontSize: 18, fontWeight: 800, color: '#032F57' }}>{fw.name}</span><span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#01745F', background: 'rgba(1,177,139,.10)', borderRadius: 6, padding: '3px 9px' }}>{fw.region}</span></div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#5A6B7B', marginTop: 4 }}>{fw.full}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.62, color: '#5A6B7B', margin: '12px 0 0' }}>{fw.body}</p>
                </div>
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
              <div style={{ fontSize: 16, fontWeight: 700, color: '#032F57' }}>Requesting documentation</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5A6B7B', margin: '10px 0 0' }}>Evaluating Migranium for your organization and need compliance documentation, a Data Processing Agreement, or a Business Associate Agreement? Reach our team at <a href="mailto:compliance@migranium.com" style={{ fontWeight: 600 }}>compliance@migranium.com</a> or <Link to="/get-started" style={{ fontWeight: 600 }}>start a conversation</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', background: '#032F57', borderRadius: 24, padding: '52px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(114,244,232,.15)' }} />
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <h2 style={{ fontSize: 28, lineHeight: 1.16, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0 }}>See how we handle your data</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '12px 0 0' }}>Read the technical and organizational safeguards behind every Migranium workflow.</p>
          </div>
          <Link to="/security" style={{ position: 'relative', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 28px', borderRadius: 12, whiteSpace: 'nowrap' }}>Explore security →</Link>
        </div>
      </section>
    </>
  );
}
