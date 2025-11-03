document.querySelectorAll('#copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.code-container').querySelector('pre').innerText;
    navigator.clipboard.writeText(code);
    btn.innerHTML = '<i class="bi bi-clipboard-check" style="color:blue;font-size:larger;"></i>';
    setTimeout(() => btn.innerHTML = '<i class="bi bi-clipboard"></i>', 1500);
  });
});
