import { useState } from 'react';
import { Link } from 'react-router-dom';

const inputStyle = { width: '100%', boxSizing: 'border-box', marginTop: 8, fontFamily: 'Inter, sans-serif', fontSize: 14, padding: '12px 14px', border: '1px solid rgba(3,47,87,.16)', borderRadius: 10 };
const labelText = { fontSize: 13, fontWeight: 600, color: '#0B1B2B' };

function ProviderBtn({ children }) {
  return <button style={{ flex: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#fff', border: '1px solid rgba(3,47,87,.16)', borderRadius: 10, padding: '11px 8px', fontFamily: 'Inter, sans-serif', fontSize: 13.5, fontWeight: 600, color: '#0B1B2B' }}>{children}</button>;
}

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <section style={{ minHeight: '100vh', background: '#EAF0F2', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '112px 32px 60px' }} className="login-grid">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 440, maxWidth: '100%', background: '#fff', borderRadius: 16, padding: 36, boxShadow: '0 24px 60px rgba(3,47,87,.10)' }}>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#0B1B2B' }}>Sign in to my account</div>
          <div style={{ fontSize: 14, color: '#5A6B7B', marginTop: 8 }}>Don't have an account? <Link to="/get-started" style={{ fontWeight: 600 }}>Sign up</Link></div>

          <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 26 }}>
            <label style={{ display: 'block' }}><span style={labelText}>Email Address <span style={{ color: '#B23B4E' }}>*</span></span>
              <input type="email" required placeholder="Enter your email address" style={inputStyle} />
            </label>
            <label style={{ display: 'block', marginTop: 18 }}><span style={labelText}>Password <span style={{ color: '#B23B4E' }}>*</span></span>
              <div style={{ position: 'relative' }}>
                <input type={show ? 'text' : 'password'} required placeholder="Enter your password" style={inputStyle} />
                <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" style={{ position: 'absolute', right: 12, top: '55%', transform: 'translateY(-50%)', cursor: 'pointer', border: 'none', background: 'transparent', fontSize: 16, color: '#8CA0B0' }}>{show ? '🙈' : '👁'}</button>
              </div>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#48586A', cursor: 'pointer' }}><input type="checkbox" style={{ width: 16, height: 16 }} />Remember me for the next 30 days</label>
              <a href="#" style={{ fontSize: 13, fontWeight: 600, color: '#032F57', textDecoration: 'underline' }}>Forgot Password?</a>
            </div>

            <button type="submit" style={{ width: '100%', marginTop: 28, cursor: 'pointer', border: 'none', background: '#032F57', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700, padding: 14, borderRadius: 10 }}>Sign in</button>
          </form>

          <div style={{ textAlign: 'center', fontSize: 13, color: '#8CA0B0', margin: '20px 0 14px' }}>Or Sign in With</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ProviderBtn><span style={{ fontWeight: 800, color: '#4285F4' }}>G</span>Google</ProviderBtn>
            <ProviderBtn><span style={{ fontWeight: 800, color: '#00A4EF' }}>⊞</span>Microsoft</ProviderBtn>
            <ProviderBtn><span>🔑</span>SSO</ProviderBtn>
          </div>
        </div>
      </div>

      <div className="login-welcome" style={{ paddingLeft: 32 }}>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800, color: '#0B1B2B', margin: 0, textWrap: 'balance' }}>Welcome Back to Migranium</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5A6B7B', margin: '18px 0 0', maxWidth: 400 }}>Sign in to continue streamlining operations and elevating patient care.</p>
      </div>
    </section>
  );
}
