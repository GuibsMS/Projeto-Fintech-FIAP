function toggleFooter() {
    const footer = document.getElementById('footer');
    footer.classList.toggle('hidden');

    const toggleButton = document.querySelector('.toggle-footer');
    if (footer.classList.contains('hidden')) {
        toggleButton.textContent = '⮝';
    } else {
        toggleButton.textContent = '⮟';
    }
}

function adicionarRecebimento() {
    const descricao = prompt("Descrição do Recebimento: ");
    if (!descricao) {
        alert("Insira uma descrição do seu Recebimento!");
        return;
    }

    const valor = parseFloat(prompt("Valor do Recebimento: "));
    if (!valor) return;
    else if (valor <= 0) {
        alert("Insira um número positivo!");
        return;
    }

    const data = prompt("Data do Recebimento (dd/mm/aa): ");
    if (!data) {
        alert("Insira uma data valida nesse formato (dd/mm/aa)!")
        return;
    }

    const transactionContainer = document.getElementById('transaction-container');
    const newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction', 'border', 'border-3', 'rounded', 'border', 'border-light');
    newTransaction.innerHTML = `<div class="row">
        < div class="col-12" >
                        <p class="text-light fs-5" style="font-weight: bold;">${data}</p>
                        <i class="bi bi-cash-coin text-light fs-2" style="font-size: 2rem;">${descricao}</i>
                        <h5 class="text-end text-light fs-4">+R$${valor}</h5>
                        <p class="fs-5 text-success" style="font-weight: bold;">Recebimento</p>
                    </div >
                </div >`;

    transactionContainer.appendChild(newTransaction);

    alert(`Recebimento adicionado: \nDescrição: ${descricao}\nValor: R$${valor}\nData: R${data}`);
}

function adicionarGasto() {
    const descricao = prompt("Descrição do seu Gasto: ");
    if (!descricao) {
        alert("Insira uma descrição do seu Gasto!");
        return;
    }

    const valor = parseFloat(prompt("Valor do seu Gasto: "));
    if (!valor) return;
    else if (valor <= 0) {
        alert("Insira um número valido!");
        return;
    }

    const data = prompt("Data do seu Gasto (dd/mm/aa): ");
    if (!data) {
        alert("Insira uma data valida nesse formato (dd/mm/aa)!")
        return;
    }

    const transactionContainer = document.getElementById('transaction-container');
    const newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction', 'border', 'border-3', 'rounded', 'border', 'border-light');
    newTransaction.innerHTML = `<div class="row">
        < div class="col-12" >
                        <p class="text-light fs-5" style="font-weight: bold;">${data}</p>
                        <i class="bi bi-box-arrow-left text-light fs-2" style="font-size: 2rem;">${descricao}</i>
                        <h5 class="text-end text-light fs-4">-R$${valor}</h5>
                        <p class="fs-5 text-danger" style="font-weight: bold;">Gasto</p>
                    </div >
                </div >`;

    transactionContainer.appendChild(newTransaction);

    alert(`Recebimento adicionado: \nDescrição: ${descricao}\nValor: R$${valor}\nData: R${data}`);
}