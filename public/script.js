const VARIABLES = [
  {
    name: "DESCRPROD",
    data_type: "char",
    default_value: "NULL",
    character_maximum_length: "40"
  },
  {
    name: "CODGRUPOPROD",
    data_type: "int",
    default_value: "NULL",
    character_maximum_length: "NULL"
  },
  {
    name: "CODVOL",
    data_type: "char",
    default_value: "NULL",
    character_maximum_length: "2"
  },
  {
    name: "PESOBRUTO",
    data_type: "decimal",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "PESOLIQ",
    data_type: "decimal",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "ALERTAESTMIN",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "PROMOCAO",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMICMS",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "TEMISS",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMIPIVENDA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMIPICOMPRA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMIRF",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMINSS",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PERCINSS",
    data_type: "float",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "REDBASEINSS",
    data_type: "float",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "ATIVO",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "APRESDETALHE",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "CODMOEDA",
    data_type: "smallint",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "DTALTER",
    data_type: "datetime",
    default_value: "NULL",
    character_maximum_length: "NULL"
  },
  {
    name: "CODUSU",
    data_type: "smallint",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "CODVOLCOMPRA",
    data_type: "char",
    default_value: "('0')",
    character_maximum_length: "2"
  },
  {
    name: "HRDOBRADA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "ICMSGERENCIA",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "CODNAT",
    data_type: "int",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "CODCENCUS",
    data_type: "int",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "CODPROJ",
    data_type: "int",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "TEMCIAP",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "IMPLAUDOLOTE",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "DIMENSOES",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PADRAO",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "SOLCOMPRA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "CONFERE",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "REMETER",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMCOMISSAO",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "AP1RCTEGO",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "CALCULOGIRO",
    data_type: "char",
    default_value: "('E')",
    character_maximum_length: "1"
  },
  {
    name: "CONFCEGAPESO",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "REGRAWMS",
    data_type: "char",
    default_value: "('O')",
    character_maximum_length: "1"
  },
  {
    name: "GRUPOPIS",
    data_type: "char",
    default_value: "('TODOS')",
    character_maximum_length: "30"
  },
  {
    name: "GRUPOCOFINS",
    data_type: "char",
    default_value: "('TODOS')",
    character_maximum_length: "30"
  },
  {
    name: "GRUPOCSSL",
    data_type: "char",
    default_value: "('TODOS')",
    character_maximum_length: "30"
  },
  {
    name: "UTILIZAWMS",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "BALANCA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "GERAPLAPROD",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PRODUTONFE",
    data_type: "smallint",
    default_value: "(0)",
    character_maximum_length: "NULL"
  },
  {
    name: "TIPGTINNFE",
    data_type: "smallint",
    default_value: "(2)",
    character_maximum_length: "NULL"
  },
  {
    name: "FLEX",
    data_type: "varchar",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "IMPRIMIR",
    data_type: "varchar",
    default_value: "('0')",
    character_maximum_length: "1"
  },
  {
    name: "CONFIRMAIMP",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "QTDNFLAUDOSINT",
    data_type: "int",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "TIPCONTESTWMS",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "LISTALPM",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "ONEROSO",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "REFMERCMED",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TERMOLABIL",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "CONTROLADO",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "IDENCORRELATO",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "IDENCOSME",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PRODFALTA",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "STATUSMED",
    data_type: "int",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "MVAAJUSTADO",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "INFPUREZA",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "USASTATUSLOTE",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "ORIGEMFAT",
    data_type: "varchar",
    default_value: "('E')",
    character_maximum_length: "1"
  },
  {
    name: "USACODBARRASQTD",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "VALCAPM3",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "QTDPECAFRAC",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "UTILORDCORTE",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "IMPORDEMCORTE",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PERCTROCA",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "TEMCREDPISCOFINSDEPR",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "UTILSMARTCARD",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "RECUPAVARIA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "APRESFORM",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "CODBARCOMP",
    data_type: "varchar",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TEMMEDICAO",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "NATBCPISCOFINS",
    data_type: "char",
    default_value: "('D')",
    character_maximum_length: "1"
  },
  {
    name: "CONTARPORPESO",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PERMCOMPPROD",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "CODEXNCM",
    data_type: "smallint",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "QTDCST",
    data_type: "int",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "DIASCST",
    data_type: "int",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "PERCTOLVARCST",
    data_type: "int",
    default_value: "((100))",
    character_maximum_length: "NULL"
  },
  {
    name: "DTVALDIF",
    data_type: "char",
    default_value: "('X')",
    character_maximum_length: "1"
  },
  {
    name: "CODBARBALANCA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "VALCBGLOBAL",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "USAPONTOS",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "INTEGRAECONECT",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "ENQREINTEGRA",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "PERCCMTNAC",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "PERCCMTIMP",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "PRODUZAUT",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "USAIMPAGRUPMIN",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "RASTRESTOQUE",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "IMPETIQCONF",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "SERVPARAINDUST",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "ESTSEGQTD",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "ESTMAXQTD",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "DESVIOMAX",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "ARREDAGRUP",
    data_type: "float",
    default_value: "((0.5))",
    character_maximum_length: "NULL"
  },
  {
    name: "APLICASAZO",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "LOTECOMPMINIMO",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "AGRUPCOMPMINIMO",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "USASERIESEPWMS",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "GERACUSTCOMPSEG",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "FIXOAGENDA",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  },
  {
    name: "EXIBCOMPEXPKIT",
    data_type: "char",
    default_value: "('T')",
    character_maximum_length: "1"
  },
  {
    name: "PERCCMTFED",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "PERCCMTEST",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "PERCCMTMUN",
    data_type: "float",
    default_value: "((0))",
    character_maximum_length: "NULL"
  },
  {
    name: "TEMRASTROLOTE",
    data_type: "char",
    default_value: "('N')",
    character_maximum_length: "1"
  },
  {
    name: "TIPOCONTAGEM",
    data_type: "char",
    default_value: "('D')",
    character_maximum_length: "1"
  },
  {
    name: "CALCDIFAL",
    data_type: "char",
    default_value: "('S')",
    character_maximum_length: "1"
  }
];


/**
 * Array que contém uma lista de produtos que é renderizada na tabela. Cada item do array pode ser visto idividualmente
 * através do botão ver na página html
 */
var listaDeProdutos = [ /*{ id: int, descricao: string , caracteristicas: string, preco: float, img: string(url)}, */ ];
var ACTUAL_PAGE = 0
var TOTAL_PAGE = 0
/**
 * Realiza uma requisição AJAX para o servido para recuperar uma lista paginada de produtos.
 * Recupera parâmetros de paginação como: página atual, quantidade total de páginas, quantidade de itens por página.
 */


function getProdutos(paginaDesejada) {
  $.ajax({
    type: "GET",
    url: `http://127.0.0.1:3333/produto/${paginaDesejada}/3`,
    beforeSend: function() {
      console.log("Enviando...");
    }
  })
    .done(function(msg) {
      clearTabela()
      console.log(msg)
      console.log(`pagina desejada ${paginaDesejada}`)
      ACTUAL_PAGE = msg.page
      TOTAL_PAGE = msg.lastPage
      listaDeProdutos = msg.data
      popularTabela()
      makePaginacao();
    })
    .fail(function(jqXHR, textStatus, msg) {
      console.log("Erro: " + msg)
    });
}

/**
 * Função que faz a interface de navegação entre a paginação de produtos.
 */
function makePaginacao() {
  if(!TOTAL_PAGE == 0) {
    var list = document.getElementById("paginacao")
    for(var i = 1; i <= TOTAL_PAGE; i++) {
      var listItem = document.createElement("li")
      var linkItem = document.createElement("a")
      listItem.className = "page-item"
      linkItem.className = "page-link"

      linkItem.setAttribute("href", "#")
      linkItem.innerText = `${i}`

      listItem.appendChild(linkItem)
      listItem.addEventListener("click", () => { getProdutos(i) })
      list.appendChild(listItem)
      if(i == ACTUAL_PAGE) {
        listItem.className = "page-item active"
      }
    }
  }
}

function clearTabela() {
  var list = document.getElementById("tableBodyListProdutos")
  for(var i = 0; i < list.childNodes.length; i++) {
    list.removeChild(list.childNodes[i])
  }
}


/**
 * Exibe um pop-up de sucesso quando um produto é cadastrado com sucesso.
 * O pop-up some após 5 segundos.
 */
function onSave() {
  var alertaSucesso = document.getElementById("alerta-sucesso");
  alertaSucesso.setAttribute("class", "alert alert-success");
  alertaSucesso.innerHTML =
    ' Produto cadastrado com <span class="alert-link">sucesso</span>.';
  setTimeout(function() {
    var alert = document.getElementById("alerta-sucesso");
    alert.setAttribute("class", "");
    alert.innerHTML = "";
  }, 5000);
}

/** Exibe os dados de um determinado produto da listaDeProdutos no modal */
function setModalData(id) {
  let produto = null;
  for (i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].id == id) {
      produto = listaDeProdutos[i];
      break;
    }
  }
  document.getElementById("descmodal").setAttribute("value", produto.descricao);
  document.getElementById("codgrupoprod-modal").setAttribute("value", 5);
  document.getElementById("codvol-modal").setAttribute("value", 6);
  document.getElementById("preco-modal").setAttribute("value", produto.preco);
}


/**
 * Exibe os dados de um produto no modal de visualização.
 */
function ver(produto) {
  document.getElementById('img-ver').setAttribute('src', produto.img);
  console.log(`nome do produto ${produto.descricao}`);
  setModalData(produto.id);
  /*var div = document.getElementById("editMode")
    if(div.hasChildNodes()) {
        div.removeChild(div.childNodes[0])
    }*/
}

console.log(document.forms.length);


/**
 * Renderiza os campos de Produto como itens de formulário.
 * Para tal, utilizar o array VARIABLES que contem parcialmente o esquema da tabela Produto.
 * Recebe como parâmetro uma id de uma div que já é assumida que esteja dentro de um <form>.
 * Essa div serve como um container para os campos que serão renderizados.
 */
function renderForm(container) {
  var patt = /^(?:.*)\d*(?:.*)$/g
  VARIABLES.map(function(item) {
    var { name, data_type, character_maximum_length, default_value } = item;
    var form = document.getElementById(container);

    var formGroup = document.createElement("div");
    formGroup.className = "form-group";

    var label = document.createElement("label");
    label.setAttribute("for", name);
    label.innerHTML = `${name}*`;

    var input = document.createElement("input");
    input.className = "form-control";
    input.setAttribute("placeholder", `Informe ${name}`);
    input.id = name;

    if (data_type == "varchar" || data_type == "char") {
      input.setAttribute("type", "text");
      input.setAttribute("maxlength", character_maximum_length);

      if (default_value !== "NULL") {
        input.setAttribute("value", default_value.slice(2, default_value.length-2));
        console.log(`${name} -  Valor padrão ${default_value.slice(2, default_value.length-2)}`)
      }

    } else {
      input.setAttribute("type", "number");
      if (default_value !== "NULL") {
        //console.log(default_value.match(patt))
        //input.setAttribute("value", default_value.match(''));
      }
    }
    console.log(`${name} -  Valor padrão ${default_value}`)
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });
}

/**
 * Função utilizada para popular a tabela com a lista paginada de produtos
 */
function popularTabela() {
  var tBody = document.getElementById("tableBodyListProdutos"); // Recupera o elemento que é a <tbody> da <table>
  // Para cada produto na linha, crie uma entrada de dados na tabela
  for (var i = 0; i < listaDeProdutos.length; i++) {
    var tr = document.createElement("tr"); // Cria a linha para receber os dados.

    // Cria as celulas (colunas) da linha.
    var tdID = document.createElement("td");
    var tdImagem = document.createElement("td")
    var tdDescricao = document.createElement("td");
    var tdCaracteristicas = document.createElement("td");
    var tdPreco = document.createElement("td");
    var tdAcoes = document.createElement("td");

    var div = document.createElement("div");
    var btnVer = document.createElement("button");
    var btnEditar = document.createElement("button");
    var btnDeletar = document.createElement("button");

    tdAcoes.appendChild(div);
    div.appendChild(btnVer);
    div.appendChild(btnDeletar);

    //Seta e configura a imagem para a exibição na tabela.
    var img = document.createElement("img");
    img.setAttribute('src',listaDeProdutos[i].img)
    img.className="img-fluid";
    img.width = '100';
    img.height = '100';
    tdImagem.appendChild(img);

    var tdVer = document.createElement("a");
    tr.appendChild(tdID);
    tr.appendChild(tdImagem);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdCaracteristicas);
    tr.append(tdPreco);
    tr.appendChild(tdAcoes);
    tBody.appendChild(tr);
    tr.setAttribute("id", listaDeProdutos[i].id);

    /** Populando tabela */
    tdID.innerHTML = listaDeProdutos[i].id;
    tdDescricao.innerHTML = listaDeProdutos[i].descricao;
    tdCaracteristicas.innerHTML = listaDeProdutos[i].caracteristicas;
    tdPreco.innerHTML = listaDeProdutos[i].preco;

    btnVer.innerHTML = "Ver";
    btnDeletar.innerHTML = "Deletar";
    tdVer.innerHTML = "Ver";

    div.setAttribute("class", "btn-group");
    div.setAttribute("role", "group");
    div.setAttribute("aria-label", "Basic example");

    btnVer.setAttribute("class", "btn-outline-secondary btn-sm");
    btnVer.setAttribute("data-toggle", "modal");
    btnVer.setAttribute("data-target", "#exampleModal");
    btnVer.style.marginRight = "5px";
    btnDeletar.setAttribute("class", "btn btn-outline-secondary btn-sm");

    var func = {
      obj: listaDeProdutos[i],
      mostraId: function() {
        ver(this.obj);
      }
    };
    btnVer.addEventListener("click", func.mostraId.bind(func), false);
  }
}


getProdutos(1);
//popularTabela();
renderForm("adicionarProdForm");
renderForm("verProdutoForm");
