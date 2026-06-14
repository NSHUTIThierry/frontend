import { useState, useEffect, useRef } from "react";

const GREEN = "#1B6B35";
const GREEN_LIGHT = "#E8F5EC";
const GREEN_DARK = "#134D27";
const BORDER = "#D1E8D9";

const Logo = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 8 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={GREEN} />
        <path d="M16 8 C12 12 10 16 12 20 C14 16 18 14 22 16 C20 12 18 8 16 8Z" fill="white" />
        <path d="M16 20 C14 22 12 24 10 24 C12 22 14 20 16 20Z" fill="white" opacity="0.7" />
      </svg>
      <div>
        <div style={{ fontWeight: 700, fontSize: 18, color: GREEN, lineHeight: 1 }}>AgriConnect</div>
        <div style={{ fontSize: 10, color: GREEN, letterSpacing: 2, fontWeight: 600 }}>RWANDA</div>
      </div>
    </div>
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: "white", borderRadius: 16, border: `1px solid ${BORDER}`,
    padding: "32px 28px", maxWidth: 400, width: "100%", margin: "0 auto", ...style
  }}>
    {children}
  </div>
);

const Input = ({ label, type = "text", placeholder, value, onChange, hint }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2D4A35", marginBottom: 6 }}>{label}</label>
    <input
      type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}
      style={{
        width: "100%", boxSizing: "border-box", border: `1px solid ${BORDER}`, borderRadius: 8,
        padding: "10px 14px", fontSize: 14, color: "#1a1a1a", outline: "none",
        fontFamily: "inherit", background: "#FAFFFE"
      }}
    />
    {hint && <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{hint}</div>}
  </div>
);

const Btn = ({ children, onClick, outline, disabled, style = {} }) => (
  <button onClick={onClick} disabled={disabled} style={{
    width: "100%", padding: "13px 0", borderRadius: 10, fontSize: 15, fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer", border: outline ? `2px solid ${GREEN}` : "none",
    background: outline ? "white" : disabled ? "#a0c4a8" : GREEN,
    color: outline ? GREEN : "white", fontFamily: "inherit", transition: "opacity 0.15s",
    opacity: disabled ? 0.7 : 1, ...style
  }}>{children}</button>
);

const Step = ({ n, label, active, done }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
    <div style={{
      width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: 12, fontWeight: 700,
      background: done ? GREEN : active ? GREEN : "#E0E0E0",
      color: done || active ? "white" : "#999", border: active && !done ? `2px solid ${GREEN}` : "none"
    }}>
      {done ? "✓" : n}
    </div>
    <div style={{ fontSize: 10, color: active || done ? GREEN : "#999", fontWeight: active ? 700 : 400, textAlign: "center" }}>{label}</div>
  </div>
);

const StepBar = ({ steps, current }) => (
  <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 24 }}>
    {steps.map((s, i) => (
      <div key={i} style={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
        <Step n={i + 1} label={s} active={i === current} done={i < current} />
        {i < steps.length - 1 && (
          <div style={{ flex: 1, height: 2, background: i < current ? GREEN : "#E0E0E0", marginTop: 13 }} />
        )}
      </div>
    ))}
  </div>
);

const roles = [
  { id: "farmer", icon: "🌾", title: "Farmer", desc: "I grow crops / livestock and sell my products" },
  { id: "buyer", icon: "🛒", title: "Buyer (End-User)", desc: "I want to buy agricultural products" },
  { id: "agronomist", icon: "🔬", title: "Agronomist", desc: "I provide agricultural advice and support" },
  { id: "officer", icon: "🏛️", title: "Government Officer", desc: "I work with government agriculture services" },
  { id: "coop", icon: "🤝", title: "Cooperative Leader", desc: "I manage a cooperative or farmer group" },
];

function LoginPage({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", color: "#1a1a1a", fontSize: 22, marginBottom: 4 }}>Welcome Back!</h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginTop: 0, marginBottom: 24 }}>Log in to continue to your account</p>
      <Input label="Email or Phone Number" placeholder="Enter your email or phone number" value={email} onChange={setEmail} />
      <Input label="Password" type="password" placeholder="Enter your password" value={pass} onChange={setPass} />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 20, marginTop: -8 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 6, color: "#444" }}>
          <input type="checkbox" /> Remember me
        </label>
        <span style={{ color: GREEN, cursor: "pointer", fontWeight: 600 }}>Forgot Password?</span>
      </div>
      <Btn onClick={() => email && pass ? onLogin() : null}>Login</Btn>
      <div style={{ textAlign: "center", margin: "16px 0", color: "#aaa", fontSize: 13 }}>or</div>
      <Btn outline>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Login with Google
        </span>
      </Btn>
      <p style={{ textAlign: "center", fontSize: 13, marginTop: 20, color: "#666" }}>
        Don't have an account? <span style={{ color: GREEN, cursor: "pointer", fontWeight: 700 }} onClick={onRegister}>Register here</span>
      </p>
    </Card>
  );
}

function RegisterPage({ onBack, onNext }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pass: "", confirm: "", agreed: false });
  const set = k => v => setForm(f => ({ ...f, [k]: v }));
  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", color: "#1a1a1a", fontSize: 22, marginBottom: 4 }}>Create Your Account</h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginTop: 0, marginBottom: 24 }}>Fill in your details to get started</p>
      <Input label="Full Name" placeholder="Enter your full name" value={form.name} onChange={set("name")} />
      <Input label="Email or Phone Number" placeholder="Enter your email or phone number" value={form.email} onChange={set("email")} />
      <Input label="Phone Number" placeholder="Enter your phone number" value={form.phone} onChange={set("phone")} />
      <Input label="Password" type="password" placeholder="Create a strong password" value={form.pass} onChange={set("pass")} />
      <Input label="Confirm Password" type="password" placeholder="Confirm your password" value={form.confirm} onChange={set("confirm")} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 20, fontSize: 13, color: "#444" }}>
        <input type="checkbox" checked={form.agreed} onChange={e => setForm(f => ({ ...f, agreed: e.target.checked }))} style={{ marginTop: 2 }} />
        <span>I agree to the <span style={{ color: GREEN }}>Terms & Conditions</span> and <span style={{ color: GREEN }}>Privacy Policy</span></span>
      </div>
      <Btn onClick={onNext}>Continue</Btn>
      <p style={{ textAlign: "center", fontSize: 13, marginTop: 16, color: "#666" }}>
        Already have an account? <span style={{ color: GREEN, cursor: "pointer", fontWeight: 700 }} onClick={onBack}>Login here</span>
      </p>
    </Card>
  );
}

function RolePage({ onNext }) {
  const [selected, setSelected] = useState(null);
  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", color: "#1a1a1a", fontSize: 20, marginBottom: 4 }}>Select Your Role</h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: 13, marginTop: 0, marginBottom: 20 }}>Choose how you will use the platform</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {roles.map(r => (
          <div key={r.id} onClick={() => setSelected(r.id)} style={{
            display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 10, cursor: "pointer",
            border: `1.5px solid ${selected === r.id ? GREEN : BORDER}`,
            background: selected === r.id ? GREEN_LIGHT : "white", transition: "all 0.15s"
          }}>
            <span style={{ fontSize: 22 }}>{r.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: selected === r.id ? GREEN_DARK : "#1a1a1a" }}>{r.title}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{r.desc}</div>
            </div>
            <span style={{ color: selected === r.id ? GREEN : "#ccc", fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: 12, color: "#999", marginBottom: 16 }}>Select the role that best describes you.</p>
      <Btn onClick={() => onNext(selected)} disabled={!selected}>Continue</Btn>
    </Card>
  );
}

function RoleSpecificInfo({ role, onNext }) {
  const roleLabel = roles.find(r => r.id === role)?.title || "Farmer";
  const steps = ["Basic Info", "Role Info", "Location", "Complete"];

  const farmerFields = [
    { label: "Full Name", placeholder: "Enter your full name", key: "name" },
    { label: "Phone Number", placeholder: "Enter your phone number", key: "phone" },
    { label: "National ID (16 digits)", placeholder: "Enter your National ID", key: "nid" },
    { label: "Date of Birth", placeholder: "Select your date of birth", key: "dob", type: "date" },
  ];
  const buyerFields = [
    { label: "Business / Company Name", placeholder: "Enter business name", key: "biz" },
    { label: "TIN (9 digits)", placeholder: "Enter Tax Identification Number", key: "tin" },
    { label: "Contact Person", placeholder: "Enter contact person name", key: "contact" },
    { label: "Phone Number", placeholder: "Enter phone number", key: "phone" },
  ];
  const agronFields = [
    { label: "Full Name", placeholder: "Enter your full name", key: "name" },
    { label: "Phone Number", placeholder: "Enter your phone number", key: "phone" },
    { label: "Employee ID", placeholder: "Enter your employee ID", key: "eid" },
    { label: "Work Email (.gov.rw)", placeholder: "Enter your work email", key: "email" },
  ];
  const officerFields = [
    { label: "Full Name", placeholder: "Enter your full name", key: "name" },
    { label: "Employee ID", placeholder: "Enter your employee ID", key: "eid" },
    { label: "Work Email (.gov.rw)", placeholder: "Enter your work email", key: "email" },
    { label: "Ministry / Department", placeholder: "Select department", key: "dept", type: "select" },
  ];
  const coopFields = [
    { label: "Full Name", placeholder: "Enter your full name", key: "name" },
    { label: "Phone Number", placeholder: "Enter your phone number", key: "phone" },
    { label: "Cooperative Name", placeholder: "Enter cooperative name", key: "coop" },
    { label: "Role in Cooperative", placeholder: "Select your role", key: "role", type: "select" },
  ];

  const fieldMap = { farmer: farmerFields, buyer: buyerFields, agronomist: agronFields, officer: officerFields, coop: coopFields };
  const fields = fieldMap[role] || farmerFields;
  const [vals, setVals] = useState({});

  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", fontSize: 17, color: "#1a1a1a", marginBottom: 4 }}>{roleLabel} Registration</h2>
      <StepBar steps={steps} current={0} />
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, color: GREEN, fontSize: 15, marginBottom: 14 }}>Basic Information</div>
        {fields.map(f => (
          f.type === "select" ? (
            <div key={f.key} style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2D4A35", marginBottom: 6 }}>{f.label}</label>
              <select style={{ width: "100%", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", fontSize: 14, fontFamily: "inherit", background: "#FAFFFE", color: "#1a1a1a" }}>
                <option>{f.placeholder}</option>
              </select>
            </div>
          ) : (
            <Input key={f.key} label={f.label} type={f.type || "text"} placeholder={f.placeholder}
              value={vals[f.key] || ""} onChange={v => setVals(p => ({ ...p, [f.key]: v }))} />
          )
        ))}
      </div>
      <Btn onClick={onNext}>Next</Btn>
    </Card>
  );
}

function IDVerificationPage({ onNext }) {
  const [step, setStep] = useState(0);
  const steps = ["ID Scan", "Face Scan", "Review", "Complete"];
  const [frontOk, setFrontOk] = useState(false);
  const [backOk, setBackOk] = useState(false);
  const [faceOk, setFaceOk] = useState(false);

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setFaceOk(true), 2000);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", fontSize: 18, color: "#1a1a1a", marginBottom: 2 }}>Verify Your Identity</h2>
      <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginBottom: 16, marginTop: 0 }}>We need to verify your identity to keep our platform trusted and secure</p>
      <StepBar steps={steps} current={step} />

      {step === 0 && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: "#1a1a1a" }}>Scan National ID (16 digits)</div>
          <div style={{ fontSize: 13, color: "#666", marginBottom: 14 }}>Capture a clear photo of your National ID card</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            {["Front of ID", "Back of ID"].map((side, i) => {
              const ok = i === 0 ? frontOk : backOk;
              const setOk = i === 0 ? setFrontOk : setBackOk;
              return (
                <div key={side}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#444", marginBottom: 6 }}>{side}</div>
                  <div onClick={() => setOk(true)} style={{
                    background: ok ? GREEN_LIGHT : "#f5f5f5", border: `2px dashed ${ok ? GREEN : "#ccc"}`,
                    borderRadius: 10, height: 80, display: "flex", flexDirection: "column", alignItems: "center",
                    justifyContent: "center", cursor: "pointer", color: ok ? GREEN : "#aaa", fontSize: 13, gap: 4
                  }}>
                    {ok ? <><span style={{ fontSize: 24 }}>✓</span><span style={{ fontSize: 11 }}>Captured</span></> : <><span style={{ fontSize: 24 }}>📷</span><span style={{ fontSize: 11 }}>Tap to capture</span></>}
                  </div>
                  {ok && <button onClick={() => i === 0 ? setFrontOk(false) : setBackOk(false)} style={{ fontSize: 11, color: "#888", background: "none", border: "none", cursor: "pointer", marginTop: 4, padding: 0 }}>Retake</button>}
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: "#1a1a1a" }}>Take a Selfie (Liveness Detection)</div>
            <div style={{ fontSize: 12, color: "#666", marginBottom: 10 }}>Follow the instructions to take a clear selfie</div>
            <div style={{ background: GREEN_LIGHT, border: `2px dashed ${GREEN}`, borderRadius: 10, height: 100, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 30 }}>😊</span>
              <span style={{ fontSize: 11, color: GREEN, fontWeight: 600 }}>✓ Face detected &nbsp; ✓ Blink detected &nbsp; ✓ Liveness verified</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888", marginBottom: 16, justifyContent: "center" }}>
            🔒 Your information is encrypted and secure
          </div>
          <Btn onClick={() => setStep(1)} disabled={!frontOk || !backOk}>Continue</Btn>
        </div>
      )}

      {step === 1 && (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>{faceOk ? "✅" : "🤳"}</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#1a1a1a" }}>{faceOk ? "Liveness Verified!" : "Scanning your face..."}</div>
          <div style={{ fontSize: 13, color: "#666", marginBottom: 24 }}>{faceOk ? "Your face has been successfully verified." : "Please look straight at the camera and blink once."}</div>
          {faceOk && <Btn onClick={() => setStep(2)}>Continue</Btn>}
        </div>
      )}

      {step === 2 && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14, color: GREEN }}>Review Your Information</div>
          {[["National ID", "1234 5678 9012 3456"], ["Name", "Jean Baptiste Nkurunziza"], ["Date of Birth", "15 Mar 1990"], ["Face Match", "✓ Verified"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${BORDER}`, fontSize: 14 }}>
              <span style={{ color: "#666" }}>{k}</span>
              <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 20 }}>
            <Btn onClick={onNext}>Confirm & Continue</Btn>
          </div>
        </div>
      )}
    </Card>
  );
}

function OTPPage({ onNext }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const t = setInterval(() => setTimer(v => v > 0 ? v - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const handleDigit = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const newCode = [...code];
    newCode[i] = v;
    setCode(newCode);
    if (v && i < 5) refs[i + 1].current?.focus();
  };

  const full = code.every(c => c !== "");

  return (
    <Card>
      <Logo />
      <h2 style={{ textAlign: "center", fontSize: 20, color: "#1a1a1a", marginBottom: 4 }}>Verify Your Phone</h2>
      <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginBottom: 8, marginTop: 0 }}>Enter the 6-digit code sent to</p>
      <p style={{ textAlign: "center", fontWeight: 700, fontSize: 15, color: "#1a1a1a", marginBottom: 24, marginTop: 0 }}>
        +250 788 123 456 &nbsp;<span style={{ color: GREEN, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Change</span>
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
        {code.map((c, i) => (
          <input key={i} ref={refs[i]} maxLength={1} value={c}
            onChange={e => handleDigit(i, e.target.value)}
            onKeyDown={e => e.key === "Backspace" && !c && i > 0 && refs[i - 1].current?.focus()}
            style={{
              width: 44, height: 52, textAlign: "center", fontSize: 22, fontWeight: 700,
              border: `2px solid ${c ? GREEN : BORDER}`, borderRadius: 10, fontFamily: "inherit",
              background: c ? GREEN_LIGHT : "white", color: GREEN, outline: "none"
            }}
          />
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginBottom: 24 }}>
        Resend code in 00:{String(timer).padStart(2, "0")}
        {timer === 0 && <span style={{ color: GREEN, fontWeight: 700, cursor: "pointer" }}> Resend</span>}
      </p>
      <Btn onClick={onNext} disabled={!full}>Verify</Btn>
      <p style={{ textAlign: "center", fontSize: 13, marginTop: 14, color: "#666" }}>
        Didn't receive the code? <span style={{ color: GREEN, cursor: "pointer", fontWeight: 700 }}>Resend</span>
      </p>
    </Card>
  );
}

function SuccessPage({ onDashboard }) {
  return (
    <Card>
      <Logo />
      <div style={{ textAlign: "center", padding: "16px 0 24px" }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%", border: `4px solid ${GREEN}`,
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 40
        }}>✓</div>
        <h2 style={{ fontSize: 22, color: "#1a1a1a", marginBottom: 8 }}>Account Created Successfully!</h2>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>Your identity has been verified and your account is now active.</p>
        <div style={{ background: GREEN_LIGHT, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", marginBottom: 24, textAlign: "left" }}>
          <div style={{ fontWeight: 700, color: GREEN, fontSize: 15, marginBottom: 4 }}>Welcome to AgriConnect</div>
          <div style={{ fontSize: 13, color: "#444" }}>You can now access all platform features.</div>
        </div>
        <Btn onClick={onDashboard}>Go to Dashboard</Btn>
      </div>
    </Card>
  );
}

function Dashboard({ onLogout }) {
  return (
    <Card style={{ maxWidth: 440 }}>
      <Logo />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#1a1a1a" }}>Dashboard</div>
          <div style={{ fontSize: 13, color: "#666" }}>Welcome, Jean Baptiste!</div>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15 }}>JB</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[["🌱", "My Farm", "Manage crops"], ["📦", "My Products", "List & sell"], ["💰", "Sales", "Track orders"], ["📊", "Analytics", "View reports"]].map(([icon, t, d]) => (
          <div key={t} style={{ background: GREEN_LIGHT, borderRadius: 12, padding: "14px 12px", border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: GREEN_DARK }}>{t}</div>
            <div style={{ fontSize: 12, color: "#666" }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#f9f9f9", borderRadius: 10, padding: "12px 14px", marginBottom: 20, border: `1px solid ${BORDER}` }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 8 }}>Account Status</div>
        {[["Identity", "✅ Verified"], ["Phone", "✅ Verified"], ["Role", "🌾 Farmer"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "4px 0" }}>
            <span style={{ color: "#666" }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      <Btn outline onClick={onLogout}>Logout</Btn>
    </Card>
  );
}

export default function AgriConnectAuth({ onLogin, onLogout }) {
  const [screen, setScreen] = useState("login");
  const [role, setRole] = useState(null);

  const go = (s) => setScreen(s);

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return (
          <LoginPage
            onLogin={() => go("dashboard")}
            onRegister={() => go("register")}
          />
        );
      case "register":
        return (
          <RegisterPage
            onBack={() => go("login")}
            onNext={() => go("role")}
          />
        );
      case "role":
        return (
          <RolePage
            onNext={(selectedRole) => {
              setRole(selectedRole);
              go("roleInfo");
            }}
          />
        );
      case "roleInfo":
        return (
          <RoleSpecificInfo
            role={role}
            onNext={() => go("idVerify")}
          />
        );
      case "idVerify":
        return (
          <IDVerificationPage
            onNext={() => go("otp")}
          />
        );
      case "otp":
        return (
          <OTPPage
            onNext={() => go("success")}
          />
        );
      case "success":
        return (
          <SuccessPage
            onDashboard={() => go("dashboard")}
          />
        );
      case "dashboard":
        return (
          <Dashboard
            onLogout={() => {
              setRole(null);
              go("login");
            }}
          />
        );
      default:
        return (
          <LoginPage
            onLogin={() => go("dashboard")}
            onRegister={() => go("register")}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #E8F5EC 0%, #F0FAF3 50%, #E8F5EC 100%)", padding: "32px 16px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 440, margin: "0 auto" }}>
        {renderScreen()}
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[["🔒", "Verified Identity"], ["🔐", "Secure Auth"], ["👥", "Role-Based Access"], ["🛡️", "Trusted Platform"]].map(([icon, label]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#666" }}>
              <span>{icon}</span><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
