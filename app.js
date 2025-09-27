function calculate() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value) || 0;
    const reformCost = parseFloat(document.getElementById('reformCost').value) || 0;
    
    const totalCost = purchasePrice + reformCost;
    
    const resultDiv = document.getElementById('result');
    
    if (purchasePrice > 0) {
        resultDiv.innerHTML = `
            <h3>Resultado da Calculadora</h3>
            <p>Valor da Compra: R$ ${purchasePrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
            <p>Custo de Reforma: R$ ${reformCost.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
            <p><b>Investimento Total: R$ ${totalCost.toLocaleString('en-US', {minimumFractionDigits: 2})}</b></p>
        `;
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, insira o valor da compra.</p>';
    }
}