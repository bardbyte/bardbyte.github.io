// Minimal theme toggle. The inline snippet in <head> applies the saved (or
// OS-preferred) theme before first paint; this wires up the button.
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const root = document.documentElement;

    function render() {
        const dark = root.classList.contains('dark');
        btn.textContent = dark ? '☀' : '☾';
        btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    btn.addEventListener('click', () => {
        const dark = root.classList.toggle('dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        render();
    });

    render();
});
