import { useMemo, useState } from "react";
import { Calculator, Landmark, PiggyBank, Percent, TrendingUp } from "lucide-react";

const inr = (n) =>
  isFinite(n) ? "₹" + Math.round(n).toLocaleString("en-IN") : "—";
const num = (v) => (v === "" || isNaN(+v) ? 0 : +v);

function NumField({ label, value, onChange, suffix, step = "any", min = 0 }) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="relative">
        <input
          className="input pr-14"
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Result({ rows, big }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl bg-primary p-6 text-onprimary sm:p-8">
      <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">{big[0]}</div>
      <div className="mt-1 break-words font-display text-4xl font-bold sm:text-5xl">{big[1]}</div>
      <div className="mt-6">
        {rows.map(([l, v]) => (
          <div key={l} className="flex items-center justify-between gap-4 border-t border-onprimary/20 py-3 text-sm">
            <span className="opacity-80">{l}</span>
            <b className="text-right font-display text-base">{v}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function Seg({ options, value, onChange }) {
  return (
    <div className="inline-flex rounded-xl border border-line bg-canvas p-1">
      {options.map(([v, l]) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition ${value === v ? "bg-primary text-onprimary shadow" : "text-muted hover:text-brand"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ---------- Simple & Compound interest ---------- */
function Interest() {
  const [type, setType] = useState("compound");
  const [p, setP] = useState("100000");
  const [r, setR] = useState("8");
  const [y, setY] = useState("5");
  const [freq, setFreq] = useState("4");

  const out = useMemo(() => {
    const P = num(p), R = num(r) / 100, T = num(y);
    const total = type === "simple" ? P * (1 + R * T) : P * Math.pow(1 + R / +freq, +freq * T);
    return { total, interest: total - P, P };
  }, [type, p, r, y, freq]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid content-start gap-4">
        <Seg value={type} onChange={setType} options={[["simple", "Simple"], ["compound", "Compound"]]} />
        <NumField label="Principal amount" value={p} onChange={setP} suffix="₹" />
        <div className="grid gap-4 sm:grid-cols-2">
          <NumField label="Interest rate (p.a.)" value={r} onChange={setR} suffix="%" />
          <NumField label="Time period" value={y} onChange={setY} suffix="years" />
        </div>
        {type === "compound" && (
          <div>
            <label className="label">Compounding</label>
            <select className="input" value={freq} onChange={(e) => setFreq(e.target.value)}>
              <option value="1">Yearly</option>
              <option value="2">Half-yearly</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>
        )}
      </div>
      <Result
        big={["Maturity amount", inr(out.total)]}
        rows={[["Principal", inr(out.P)], ["Total interest", inr(out.interest)]]}
      />
    </div>
  );
}

/* ---------- Loan EMI ---------- */
function Emi() {
  const [p, setP] = useState("1000000");
  const [r, setR] = useState("9");
  const [y, setY] = useState("5");

  const out = useMemo(() => {
    const P = num(p), n = num(y) * 12, i = num(r) / 12 / 100;
    if (!P || !n) return { emi: 0, total: 0, interest: 0 };
    const emi = i === 0 ? P / n : (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    return { emi, total: emi * n, interest: emi * n - P };
  }, [p, r, y]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid content-start gap-4">
        <NumField label="Loan amount" value={p} onChange={setP} suffix="₹" />
        <div className="grid gap-4 sm:grid-cols-2">
          <NumField label="Interest rate (p.a.)" value={r} onChange={setR} suffix="%" />
          <NumField label="Tenure" value={y} onChange={setY} suffix="years" />
        </div>
      </div>
      <Result
        big={["Monthly EMI", inr(out.emi)]}
        rows={[["Principal", inr(num(p))], ["Total interest", inr(out.interest)], ["Total payable", inr(out.total)]]}
      />
    </div>
  );
}

/* ---------- SIP ---------- */
function Sip() {
  const [m, setM] = useState("10000");
  const [r, setR] = useState("12");
  const [y, setY] = useState("10");

  const out = useMemo(() => {
    const M = num(m), n = num(y) * 12, i = num(r) / 12 / 100;
    const invested = M * n;
    const value = i === 0 ? invested : M * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    return { invested, value, gain: value - invested };
  }, [m, r, y]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid content-start gap-4">
        <NumField label="Monthly investment" value={m} onChange={setM} suffix="₹" />
        <div className="grid gap-4 sm:grid-cols-2">
          <NumField label="Expected return (p.a.)" value={r} onChange={setR} suffix="%" />
          <NumField label="Duration" value={y} onChange={setY} suffix="years" />
        </div>
        <p className="text-xs leading-relaxed text-muted">Returns on market-linked investments are not guaranteed. This is an illustration only.</p>
      </div>
      <Result
        big={["Expected value", inr(out.value)]}
        rows={[["Amount invested", inr(out.invested)], ["Estimated gains", inr(out.gain)]]}
      />
    </div>
  );
}

/* ---------- GST ---------- */
function Gst() {
  const [amt, setAmt] = useState("10000");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState("add");

  const out = useMemo(() => {
    const A = num(amt), R = num(rate) / 100;
    if (mode === "add") return { base: A, gst: A * R, total: A + A * R };
    const base = A / (1 + R);
    return { base, gst: A - base, total: A };
  }, [amt, rate, mode]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid content-start gap-4">
        <Seg value={mode} onChange={setMode} options={[["add", "Add GST"], ["remove", "Remove GST"]]} />
        <NumField label={mode === "add" ? "Amount (excl. GST)" : "Amount (incl. GST)"} value={amt} onChange={setAmt} suffix="₹" />
        <div>
          <label className="label">GST rate</label>
          <div className="flex flex-wrap gap-2">
            {["5", "12", "18", "28"].map((x) => (
              <button
                key={x}
                type="button"
                onClick={() => setRate(x)}
                className={`btn ${rate === x ? "btn-primary" : "btn-ghost"} px-4 py-2`}
              >
                {x}%
              </button>
            ))}
          </div>
        </div>
      </div>
      <Result
        big={[mode === "add" ? "Total with GST" : "Amount before GST", inr(mode === "add" ? out.total : out.base)]}
        rows={[["Base amount", inr(out.base)], [`GST (${num(rate)}%)`, inr(out.gst)], ["CGST + SGST (each)", inr(out.gst / 2)]]}
      />
    </div>
  );
}

const tabs = [
  ["interest", "Interest", Percent, Interest],
  ["emi", "Loan EMI", Landmark, Emi],
  ["sip", "SIP", TrendingUp, Sip],
  ["gst", "GST", Calculator, Gst]
];

export default function Calculators() {
  const [tab, setTab] = useState("interest");
  const Active = tabs.find((t) => t[0] === tab)[3];

  return (
    <section id="calculators" className="section">
      <div className="container-x">
        <div className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-12">
          <div className="eyebrow">Free tools</div>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">
            Quick <span className="text-brand">financial calculators</span>
          </h2>
          <p className="max-w-xl leading-relaxed text-muted">
            Estimate interest, loan EMIs, SIP growth and GST in seconds. For a plan tailored to you, talk to us.
          </p>
        </div>

        <div className="card p-4 shadow-card sm:p-8">
          <div role="tablist" className="mb-6 flex gap-2 overflow-x-auto pb-1">
            {tabs.map(([id, label, Icon]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`btn shrink-0 ${tab === id ? "btn-primary" : "btn-ghost"}`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>
          <div key={tab} className="animate-pop">
            <Active />
          </div>
          <p className="mt-6 flex items-start gap-2 text-xs text-muted">
            <PiggyBank size={14} className="mt-0.5 shrink-0" />
            Results are estimates for general guidance and not financial or tax advice.
          </p>
        </div>
      </div>
    </section>
  );
}
