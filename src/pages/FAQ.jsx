import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDemo } from '../components/DemoModal.jsx';

const DATA = [
  { id: 'platform', name: 'Platform & Product', items: [
    { q: 'What exactly is Migranium?', a: 'Migranium is an AI-powered operational layer that sits above your EMR and unifies scheduling, patient flow, referrals, communication, forms, fax, and automation into one connected workspace. Your EMR holds the clinical record; Migranium coordinates everything around it.' },
    { q: 'Does Migranium replace my EMR?', a: 'No. Migranium works alongside your EMR rather than replacing it. The EMR remains your clinical system of record, while Migranium coordinates operational activities and stays synchronized through integrations.' },
    { q: 'Which modules are included?', a: 'Migranium is made up of sixteen modules — Workplace, Scheduler, Planner, Queue Management, Patients, Forms, Referrals, Messaging, Fax, Automation, Task Manager, Analytics, Display, Kemi, Patient Portal, and Integrations. Organizations enable only the modules they need.' },
    { q: 'What is Kemi?', a: 'Kemi is Migranium\u2019s embedded AI co-pilot. It understands your organization\u2019s data and permissions, answers operational questions in natural language, and can take action — booking appointments, assigning tasks, routing faxes, and starting automations — while clinical judgment stays with your professionals.' },
    { q: 'Can it support multiple locations?', a: 'Yes. Migranium is built for organizations of every size, from a single clinic to multi-site networks. Locations, providers, rooms, and services are modeled in the Workplace module and referenced consistently across every workflow.' },
  ]},
  { id: 'security', name: 'Security & Compliance', items: [
    { q: 'Is Migranium HIPAA and PHIPA compliant?', a: 'Yes. Migranium is designed for healthcare\u2019s highest standards and supports HIPAA (United States), PHIPA (Ontario), PIPEDA (Canada), and AICPA SOC service organization controls. Patient information is protected in transit, at rest, and in every workflow.' },
    { q: 'How is patient data protected?', a: 'Data is encrypted in transit and at rest, access is governed by role-based permissions, and every action is captured in complete audit logs. Migranium runs on secure cloud infrastructure with disaster recovery and configurable data retention controls.' },
    { q: 'Who can see patient information?', a: 'Access is controlled through Roles & Permissions. Users only see information appropriate to their responsibilities — a receptionist and a physician have different levels of access, and Kemi filters every response according to the same permission model.' },
    { q: 'How is Personal Health Information (PHI) handled?', a: 'PHI such as health card numbers is collected only when a provider integrates their EMR, and custom form fields collect additional PHI only with patient consent. All PHI transfers are encrypted using TLS 1.2+, and Migranium does not process or store PHI beyond what is necessary for operational purposes.' },
  ]},
  { id: 'integrations', name: 'Integrations', items: [
    { q: 'Which systems does Migranium integrate with?', a: 'Migranium connects to EMRs (OSCAR Pro, Accuro, Epic, Cerner), cloud fax (iFax, Unite Fax), telephony (3CX), e-signature (DocuSeal), email (Outlook, Gmail), and calendars (Google Calendar, Outlook Calendar) — plus custom integrations through configurable APIs.' },
    { q: 'What if my system isn\u2019t listed?', a: 'Migranium provides a flexible integration framework that supports custom third-party connections through configurable REST APIs and webhooks, so you can connect proprietary applications and internal systems. Talk to our team about your specific stack.' },
    { q: 'Do integrations sync in real time?', a: 'Yes. Information received from connected systems immediately becomes part of your operational workflow, and actions performed within Migranium update connected systems automatically, keeping data consistent across your technology ecosystem.' },
    { q: 'Will I need to re-enter data between systems?', a: 'No. The point of integration is to eliminate duplicate data entry. Demographics, appointments, referrals, and documents flow between Migranium and connected systems automatically.' },
  ]},
  { id: 'billing', name: 'Billing & Getting Started', items: [
    { q: 'How is Migranium priced?', a: 'Migranium offers several subscription plans, each with its own services and pricing, and some organizations receive custom rates based on negotiated agreements. Because every healthcare organization operates differently, our team prepares a proposal built around how you actually operate.' },
    { q: 'What payment methods are accepted?', a: 'Migranium accepts major credit and debit cards and payments through Stripe, a secure payment gateway. Subscriptions are billed on a recurring basis — monthly, annually, or another agreed cycle.' },
    { q: 'Can I cancel anytime?', a: 'Yes. You can cancel your subscription at any time through your account settings. Upon cancellation you won\u2019t be billed for the subsequent cycle, though no refunds are given for partially used periods.' },
    { q: 'How does implementation work?', a: 'Implementation typically begins with configuring the Workplace module — your organization, locations, providers, rooms, and services — after which every operational module immediately has access to your resources. Our team supports you through setup and rollout.' },
  ]},
];

export default function FAQ() {
  const openDemo = useDemo();
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  return (
    <>
      <section style={{ background: '#F7FAFA', borderBottom: '1px solid rgba(3,47,87,.08)', padding: '120px 32px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Shantell Sans', cursive", fontSize: 14, fontWeight: 600, color: '#01B18B' }}>Resources</div>
          <h1 className="hero" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800, color: '#032F57', margin: '14px auto 0', maxWidth: 700, textWrap: 'balance' }}>Frequently asked questions</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px auto 0', maxWidth: 560, textWrap: 'pretty' }}>Everything about how Migranium works, connects, secures your data, and gets billed. Can't find it? <Link to="/get-started" style={{ fontWeight: 600 }}>Talk to our team.</Link></p>
        </div>
      </section>

      <section style={{ padding: '56px 32px 40px' }}>
        <div className="sidebar-layout" style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '210px 1fr', gap: 48, alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: '#8CA0B0', marginBottom: 12 }}>Categories</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {DATA.map((s) => <a key={s.id} href={`#${s.id}`} style={{ fontSize: 13.5, fontWeight: 500, color: '#5A6B7B', padding: '7px 12px', borderRadius: 9 }}>{s.name}</a>)}
            </nav>
          </aside>

          <div>
            {DATA.map((sec) => (
              <div key={sec.id} id={sec.id} style={{ marginBottom: 44, scrollMarginTop: 96 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em', color: '#032F57', margin: '0 0 16px' }}>{sec.name}</h2>
                <div style={{ border: '1px solid rgba(3,47,87,.10)', borderRadius: 16, overflow: 'hidden' }}>
                  {sec.items.map((it, i) => {
                    const key = `${sec.id}-${i}`;
                    const isOpen = !!open[key];
                    return (
                      <div key={key} style={{ borderBottom: '1px solid rgba(3,47,87,.07)' }}>
                        <button onClick={() => toggle(key)} style={{ width: '100%', cursor: 'pointer', background: isOpen ? '#FAFCFC' : '#fff', border: 'none', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 22px', fontFamily: 'Inter, sans-serif' }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#032F57' }}>{it.q}</span>
                          <span style={{ flex: 'none', width: 24, height: 24, borderRadius: '50%', background: isOpen ? '#032F57' : 'rgba(3,47,87,.06)', color: isOpen ? '#fff' : '#032F57', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 600, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform .2s' }}>+</span>
                        </button>
                        {isOpen && <div style={{ padding: '0 22px 20px' }}><p style={{ fontSize: 14, lineHeight: 1.7, color: '#48586A', margin: 0, maxWidth: 680, textWrap: 'pretty' }}>{it.a}</p></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 32px 100px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', background: '#032F57', borderRadius: 24, padding: 48, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(114,244,232,.15)' }} />
          <h2 style={{ fontSize: 28, lineHeight: 1.16, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0, position: 'relative' }}>Still have questions?</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', margin: '12px auto 0', maxWidth: 480, position: 'relative' }}>Our implementation team is happy to walk through how Migranium fits your organization.</p>
          <div style={{ marginTop: 24, position: 'relative' }}><button onClick={openDemo} style={{ cursor: 'pointer', border: 'none', fontFamily: 'Inter, sans-serif', display: 'inline-block', background: '#72F4E8', color: '#032F57', fontSize: 15, fontWeight: 700, padding: '14px 28px', borderRadius: 12 }}>Book a Demo</button></div>
        </div>
      </section>
    </>
  );
}
