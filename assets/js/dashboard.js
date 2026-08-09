/* ============================================================
   DASHBOARD HELPERS
   Small dependency-free chart renderers (CSS bars, not a canvas
   library) so the site has zero external runtime dependencies.
   ============================================================ */

// Renders a horizontal funnel: [{label, value}] largest first
function renderFunnel(containerId, stages) {
  const max = stages[0].value;
  const el = document.getElementById(containerId);
  el.innerHTML = stages.map((s, i) => {
    const pct = Math.round((s.value / max) * 100);
    const conv = i === 0 ? 100 : Math.round((s.value / stages[i - 1].value) * 100);
    return `
      <div class="skill-row">
        <div class="flex-between">
          <span><b>${s.label}</b></span>
          <span class="muted" style="font-family:var(--mono);font-size:.78rem;">${s.value} ${i > 0 ? `· ${conv}% conv.` : ''}</span>
        </div>
        <div class="skill-bar"><i style="width:${pct}%;"></i></div>
      </div>`;
  }).join("");
}

// Renders a simple vertical bar comparison chart: [{label, value, max}]
function renderBars(containerId, items, colorVar = "--brick") {
  const el = document.getElementById(containerId);
  el.innerHTML = `<div style="display:flex;align-items:flex-end;gap:14px;height:180px;padding-top:10px;">` +
    items.map(it => {
      const h = Math.max(4, Math.round((it.value / it.max) * 150));
      return `
        <div style="flex:1;text-align:center;display:flex;flex-direction:column;justify-content:flex-end;height:100%;">
          <span style="font-family:var(--mono);font-size:.72rem;color:var(--slate-soft);">${it.value}</span>
          <div style="background:var(${colorVar});border-radius:4px 4px 0 0;height:${h}px;margin-top:4px;"></div>
          <span style="font-size:.72rem;margin-top:6px;color:var(--slate-soft);">${it.label}</span>
        </div>`;
    }).join("") + `</div>`;
}
