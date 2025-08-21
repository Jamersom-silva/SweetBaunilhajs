document.addEventListener("DOMContentLoaded", function() {
  // Caminho absoluto relativo à raiz do site
  fetch('/includes/footer.html')
    .then(response => {
      if (!response.ok) throw new Error('Footer não encontrado');
      return response.text();
    })
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Erro ao carregar footer:', error));
});
