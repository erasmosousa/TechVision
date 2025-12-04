// Garantir que o loading aparece imediatamente
document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    loading.classList.remove('hidden');
});

// Depois que a página termina de carregar
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');

    // Tempo mínimo de 200ms para o usuário enxergar o loading
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 200);
});
