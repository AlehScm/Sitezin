fetch('https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/grupos/')
  .then(response => response.json())
  .then(grupos => {
    const cardapioDiv = document.getElementById('cardapio');
    grupos.forEach(grupo => {
      // Cria um novo div para cada grupo e tabela
      const grupoTabelaDiv = document.createElement('div');
      grupoTabelaDiv.className = 'grupo-tabela';

      // Cria um novo cabeçalho para cada grupo
      const grupoDiv = document.createElement('div');
      grupoDiv.className = 'grupo';
      grupoDiv.textContent = grupo;
      grupoTabelaDiv.appendChild(grupoDiv);

      // Cria uma nova tabela para cada grupo
      const tabela = document.createElement('table');
      tabela.className = 'tabela-produtos';

      // Adiciona uma linha de cabeçalho à tabela
      const cabecalho = tabela.createTHead();
      const linhaCabecalho = cabecalho.insertRow();
      const nomeCabecalho = linhaCabecalho.insertCell();
      nomeCabecalho.textContent = 'Nome';
      const precoCabecalho = linhaCabecalho.insertCell();
      precoCabecalho.textContent = 'Preço';

      // Busca os produtos para este grupo
      fetch(`https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/produtos/${grupo}`)
        .then(response => response.json())
        .then(produtos => {
          // Cria uma nova linha para cada produto
          produtos.forEach(produto => {
            const linha = tabela.insertRow();

            const nomeCelula = linha.insertCell();
            nomeCelula.textContent = produto.nome;

            const precoCelula = linha.insertCell();
            precoCelula.textContent = produto.preco;
          });
        });

      grupoTabelaDiv.appendChild(tabela);
      cardapioDiv.appendChild(grupoTabelaDiv);
    });
  });
