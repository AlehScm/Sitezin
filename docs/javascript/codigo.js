document.getElementById('grupoexistente').addEventListener('change', function () {
  var grupoInput = document.getElementById('grupo');
  if (this.value) {
    grupoInput.style.display = 'none';
  } else {
    grupoInput.style.display = 'block';
  }
});

document.getElementById('addProduto').addEventListener('click', function () {
  var produtosDiv = document.getElementById('produtos');
  var novoProdutoDiv = document.createElement('div');
  novoProdutoDiv.className = 'produto';

  var nomeProdutoInput = document.createElement('input');
  nomeProdutoInput.type = 'text';
  nomeProdutoInput.className = 'produto';
  nomeProdutoInput.name = 'produto[]'; // Modificado para array
  nomeProdutoInput.placeholder = 'Nome do Produto';
  nomeProdutoInput.required = true;
  novoProdutoDiv.appendChild(nomeProdutoInput);
  
  var precoProdutoInput = document.createElement('input');
  precoProdutoInput.type = 'number';
  precoProdutoInput.className = 'preco';
  precoProdutoInput.name = 'preco[]'; // Modificado para array
  precoProdutoInput.placeholder = 'Preço do Produto';
  precoProdutoInput.step = '0.01';
  precoProdutoInput.required = true;
  novoProdutoDiv.appendChild(precoProdutoInput);

  var excluirProdutoBtn = document.createElement('button');
  excluirProdutoBtn.textContent = 'Excluir';
  excluirProdutoBtn.addEventListener('click', function () {
    produtosDiv.removeChild(novoProdutoDiv);
  });
  novoProdutoDiv.appendChild(excluirProdutoBtn);

  produtosDiv.appendChild(novoProdutoDiv);
});

//grupo javascript

$.ajax({
  url: 'https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/grupos/',
  type: 'GET',
  success: function (grupos) {
    var select = $('#grupoexistente');
    grupos.forEach(function (grupo) {
      var option = new Option(grupo, grupo);
      select.append($(option));
    });
  },
  error: function (error) {
    console.log(error);
  }
});

// segunda parte javascript
// Preencher o selectGrupo com os dados dos grupos
$.ajax({
  url: 'https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/grupos/',
  type: 'GET',
  success: function (grupos) {
    grupos.forEach(function (grupo) {
      var option = new Option(grupo, grupo);
      selectGrupo.append(option);
    });
  },
  error: function (error) {
    console.log(error);
  }
});

// Adicionar um ouvinte de eventos ao selectGrupo para preencher o selectProduto quando um grupo é selecionado
selectGrupo.addEventListener('change', function () {
  // Limpar o selectProduto
  while (selectProduto.firstChild) {
    selectProduto.removeChild(selectProduto.firstChild);
  }
  // Obter os dados dos produtos para o grupo selecionado
  var grupoSelecionado = this.value;
  $.ajax({
    url: 'https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/produtos/' + grupoSelecionado,
    type: 'GET',
    success: function (produtos) {
      produtos.forEach(function (produto) {
        var option = new Option(produto.nome, produto.id); // Use o ID do produto como o valor
        selectProduto.append(option);
      });
    },
    error: function (error) {
      console.log(error);
    }
  });
})


// Suponha que seu SVG tenha um id de 'svgGrupo' para grupos e 'svgProduto' para produtos
$('#svgGrupo').click(function() {
  var grupoSelecionado = $('#selectGrupo').val();

  $.ajax({
    url: 'https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/grupos/' + grupoSelecionado,
    type: 'DELETE',
    success: function(response) {
      console.log(response.message);
      // Recarregar os grupos após a exclusão
      carregarGrupos();
    },
    error: function(error) {
      console.log(error);
    }
  });
});

$('#svgProduto').click(function() {
  var produtoSelecionado = $('#selectProduto').val();

  $.ajax({
    url: 'https://refactored-succotash-g4qp549jvww6cvjg9-5000.app.github.dev/produtos/' + produtoSelecionado,
    type: 'DELETE',
    success: function(response) {
      console.log(response.message);
      // Recarregar os produtos após a exclusão
      carregarProdutos();
    },
    error: function(error) {
      console.log(error);
    }
  });
});


