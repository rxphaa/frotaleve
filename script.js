// Função para abrir a janela modal
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

// Função para fechar a janela modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Fechar a janela modal se o usuário clicar fora da área do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}




// var modal = document.getElementById('pdfModal');
// var iframe = document.getElementById('pdfViewer');

function exibirPDFModal() {
   document.getElementById('pdfModal').style.display = 'flex';
   document.getElementById('pdfViewer').src = 'politicafrotaleve.pdf'; // Substitua 'seuarquivo.pdf' pelo caminho correto do seu arquivo PDF
}

function fecharPDFModal() {
    document.getElementById('pdfModal').style.display = 'none';
    iframe.src = '';  // Limpar o src para interromper a exibição do PDF
}

// Fechar a modal se o usuário clicar fora da área do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        fecharPDFModal();
    }
}

console.log()