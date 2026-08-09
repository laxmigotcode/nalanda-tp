/* ============================================================
   AUTH — demo-only session handling via localStorage.
   Swap this module for real JWT/session-cookie calls to your
   backend when wiring this up to a production API.
   ============================================================ */

function tpLogin(role, name, email) {
  const session = { role, name, email, loggedInAt: Date.now() };
  localStorage.setItem("tp_session", JSON.stringify(session));
  return session;
}

function tpLogout() {
  localStorage.removeItem("tp_session");
  window.location.href = "index.html";
}

function tpRequireSession(requiredRole) {
  const session = JSON.parse(localStorage.getItem("tp_session") || "null");
  if (!session || (requiredRole && session.role !== requiredRole)) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector("[data-logout]");
  if (logoutBtn) logoutBtn.addEventListener("click", tpLogout);
});
