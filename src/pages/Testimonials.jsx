import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDemo } from '../components/DemoModal.jsx';

const REVIEWS = [
  { title: 'Reliable, Scalable, and Adaptable', body: "I confidently recommend Migranium to any organization seeking a reliable, scalable, and adaptable solution. Its robust design, ease of use, and excellent support have been critical in enhancing our service delivery.", name: 'Tiffany Budhoo', role: 'System Planner', initials: 'TB', avatarBg: '#CFC4F6' },
  { title: 'Effortless Patient Management', body: "As a doctor managing numerous patients, I've finally found the solution in Migranium. It's streamlined our patient management and the analytics are invaluable for resource planning and enhancing care efficiency.", name: 'Dr. Majlessi K', role: 'Physician, Network Medicals', initials: 'MK', avatarBg: '#C9F2E7' },
  { title: 'We Now Work More Efficiently!', body: "Migranium has streamlined our busy clinic's workflow. With over 70 patients daily, reducing wait times was crucial. Now, our patients are happier, and we can work more efficiently. It's been a real game-changer!", name: 'Shirleyann J', role: 'Clinic Administrator', initials: 'SJ', avatarBg: '#CDEFF7' },
  { title: 'Smarter Visits with Migranium', body: "Migranium has significantly improved my clinic visit experience. Before, I faced long, uncertain waits; now, I can see exactly when it's my turn and can use my time productively. I'm very happy with this!", name: 'Ghazela Amran', role: 'Patient', initials: 'GA', avatarBg: '#F6D9C4' },
];

export default function Testimonials() {
  const openDemo = useDemo();
  const [limit, setLimit] = useState(3);
  const visible = REVIEWS.slice(0, limit);
  const remaining = REVIEWS.length - limit;

  return (
    <>
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B' }}>Customer Impact</div>
          <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '14px auto 0', maxWidth: 800, textWrap: 'balance' }}>In their own words</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px auto 0', maxWidth: 600, textWrap: 'pretty' }}>Administrators, physicians, and patients on what changed when their organization ran on Migranium.</p>
          <div style={{ display: 'flex', gap: 36, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            {[['40 hrs', 'saved per week, on average'], ['10,000+', 'patient intakes processed'], ['70+', 'patients/day, calmer clinics']].map(([n, l], i) => (
              <div key={i}><div style={{ fontSize: 34, fontWeight: 800, color: '#032F57', letterSpacing: '-0.02em' }}>{n}</div><div style={{ fontSize: 13, color: '#5A6B7B', marginTop: 2 }}>{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: '64px 32px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ background: '#032F57', borderRadius: 24, padding: '52px 56px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 44, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -50, top: -50, width: 240, height: 240, borderRadius: '50%', border: '1px solid rgba(114,244,232,.14)' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#72F4E8', fontFamily: "'Shantell Sans', cursive" }}>Featured story</div>
              <div style={{ fontSize: 23, lineHeight: 1.5, color: '#fff', fontWeight: 500, marginTop: 16, textWrap: 'pretty' }}>&ldquo;What used to take us 4 days of manual work every week, Migranium now does in 15 minutes. We processed over 2,000 new patient intakes in minutes. The platform is user friendly, and the team is incredibly supportive.&rdquo;</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
                <span style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><img src="/assets/logo-tmc.png" alt="TMC+" style={{ width: 34, height: 34, objectFit: 'contain' }} /></span>
                <div><div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Dan Muldoon</div><div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)' }}>Director, TMC+ (Thompson Medical Clinic)</div></div>
              </div>
              <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, background: '#72F4E8', color: '#032F57', fontSize: 14, fontWeight: 700, padding: '11px 20px', borderRadius: 10 }}>Read the full case study →</Link>
            </div>
            <div className="hide-mobile" style={{ position: 'relative', fontSize: 150, lineHeight: .7, color: 'rgba(114,244,232,.22)', fontFamily: 'Georgia, serif', alignSelf: 'flex-start' }}>&rdquo;</div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: '36px 32px 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div className="cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {visible.map((r) => (
              <div key={r.name} style={{ background: '#fff', border: '1px solid rgba(3,47,87,.10)', borderRadius: 18, padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 3, color: '#F4A020', fontSize: 15 }}>★★★★★</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#032F57', marginTop: 14 }}>{r.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: '#5A6B7B', margin: '10px 0 0', flex: 1, textWrap: 'pretty' }}>&ldquo;{r.body}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(3,47,87,.08)' }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: r.avatarBg, color: '#032F57', fontSize: 12.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{r.initials}</span>
                  <div><div style={{ fontSize: 13, fontWeight: 700, color: '#0B1B2B' }}>{r.name}</div><div style={{ fontSize: 12, color: '#8CA0B0' }}>{r.role}</div></div>
                </div>
              </div>
            ))}
          </div>
          {remaining > 0 ? (
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <button onClick={() => setLimit(limit + 3)} style={{ cursor: 'pointer', background: '#fff', border: '1px solid rgba(3,47,87,.18)', color: '#032F57', fontFamily: 'Inter, sans-serif', fontSize: 14.5, fontWeight: 600, padding: '13px 28px', borderRadius: 12 }}>View more stories ({remaining})</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: 36, fontFamily: "'Shantell Sans', cursive", fontSize: 15, color: '#01B18B' }}>that's everyone — for now ✦</div>
          )}
        </div>
      </section>

      <section style={{ padding: '40px 32px 100px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', background: '#F7FAFA', border: '1px solid rgba(3,47,87,.08)', borderRadius: 24, padding: '52px 48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 30, lineHeight: 1.14, letterSpacing: '-0.02em', fontWeight: 800, color: '#032F57', margin: 0, textWrap: 'balance' }}>See what Migranium can do for your organization</h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 26, flexWrap: 'wrap' }}>
            <button onClick={openDemo} style={{ cursor: 'pointer', border: 'none', fontFamily: 'Inter, sans-serif', background: '#032F57', color: '#fff', fontSize: 15, fontWeight: 600, padding: '14px 26px', borderRadius: 12 }}>Book a Demo</button>
            <Link to="/case-studies" style={{ border: '1px solid rgba(3,47,87,.16)', color: '#032F57', fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 12 }}>Read case studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
