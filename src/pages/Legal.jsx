import { Link } from 'react-router-dom';
import { LEGAL } from '../data/legal.js';

const CROSS = {
  terms: [{ label: 'Privacy Policy →', to: '/privacy' }, { label: 'Payment Terms →', to: '/payment-terms' }],
  privacy: [{ label: 'Terms of Service →', to: '/terms' }, { label: 'Payment Terms →', to: '/payment-terms' }],
  payment: [{ label: 'Terms of Service →', to: '/terms' }, { label: 'Privacy Policy →', to: '/privacy' }],
};

export default function Legal({ doc }) {
  const d = LEGAL[doc];
  if (!d) return null;

  return (
    <>
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '112px 32px 52px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B', letterSpacing: '.02em' }}>Legal</div>
          <h1 className="hero" style={{ fontSize: 46, lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '12px 0 0' }}>{d.title}</h1>
          {d.subtitle && <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#5A6B7B', maxWidth: 640, margin: '14px 0 0', textWrap: 'pretty' }} dangerouslySetInnerHTML={{ __html: d.subtitle }} />}
        </div>
      </section>

      <section style={{ padding: '52px 32px 96px' }}>
        <div className="sidebar-layout" style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '236px 1fr', gap: 56, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#8CA0B0', marginBottom: 12 }}>On this page</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 3, borderLeft: '1px solid rgba(3,47,87,.1)' }}>
              {d.toc.map((t) => <a key={t.id} href={`#${t.id}`} style={{ fontSize: 12.5, lineHeight: 1.4, color: '#5A6B7B', padding: '5px 0 5px 14px', marginLeft: -1, borderLeft: '2px solid transparent' }}>{t.name}</a>)}
            </nav>
          </aside>

          <article style={{ maxWidth: 760, minWidth: 0 }}>
            <div dangerouslySetInnerHTML={{ __html: d.html }} />
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 48, paddingTop: 28, borderTop: '1px solid rgba(3,47,87,.1)' }}>
              {CROSS[doc].map((c) => <Link key={c.to} to={c.to} style={{ fontSize: 14, fontWeight: 600, color: '#032F57', border: '1px solid rgba(3,47,87,.16)', padding: '10px 18px', borderRadius: 10 }}>{c.label}</Link>)}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
