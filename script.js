const modal = document.getElementById('modal');
const open = document.getElementById('openModal');
const close = document.getElementById('closeModal');
const close2 = document.getElementById('closeModal2');

open.addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
});
close.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
});
close2.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
});

document.getElementById('copy').addEventListener('click', async () => {
  const text = `Resumen: El Día Mundial de la Ciencia para la Paz y el Desarrollo promueve la ciencia como fuerza para el bienestar humano, la paz y el progreso sostenible. Recomendaciones: ferias locales, cursos de alfabetización científica y financiación de proyectos comunitarios.`;
  try {
    await navigator.clipboard.writeText(text);
    alert('Resumen copiado al portapapeles');
  } catch (e) {
    alert('No se pudo copiar. Selecciona el texto manualmente.');
  }
});

document.getElementById('focusImpact').addEventListener('click', () => {
  document.getElementById('impacto')?.scrollIntoView({behavior:'smooth'});
});

document.getElementById('share').addEventListener('click', () => {
  window.print();
});

const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
  if (document.documentElement.style.getPropertyValue('--bg') == '#f6f8fb') {
    document.documentElement.style.setProperty('--bg','#0f1724');
    document.documentElement.style.setProperty('--accent','#00d4ff');
    toggle.textContent='Modo claro';
  } else {
    document.documentElement.style.setProperty('--bg','#f6f8fb');
    document.documentElement.style.setProperty('--accent','#0066cc');
    toggle.textContent='Modo oscuro';
  }
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.card').forEach(n => n.style.transition='none');
}
