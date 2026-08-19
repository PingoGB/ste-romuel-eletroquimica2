/* Shared navigation plus the glossary's small local search. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const terms = [
  { name: 'Eletroquímica', definition: 'A eletroquímica é o ramo da química que estuda a relação entre a eletricidade e as reações químicas.', example: 'uma pilha transforma energia química em energia elétrica.' },
  { name: 'Reação de oxirredução (Redox)', definition: 'É uma reação química em que ocorre transferência de elétrons entre substâncias, envolvendo simultaneamente oxidação e redução.', example: 'na reação entre zinco e cobre, o zinco perde elétrons e o cobre recebe esses elétrons.' },
  { name: 'Oxidação', definition: 'A oxidação é o processo em que uma espécie química perde elétrons, aumentando seu número de oxidação.', example: 'Zn → Zn²⁺ + 2e⁻. O zinco perde dois elétrons e sofre oxidação.' },
  { name: 'Redução', definition: 'A redução é o processo em que uma espécie química ganha elétrons, diminuindo seu número de oxidação.', example: 'Cu²⁺ + 2e⁻ → Cu. O cobre recebe dois elétrons e sofre redução.' },
  { name: 'Número de Oxidação (NOX)', definition: 'O número de oxidação é um valor que indica a carga que um átomo apresenta ou apresentaria em uma substância, dependendo da situação. Em uma substância simples, o NOX é sempre 0; em um íon simples, o NOX é igual à sua carga; em compostos, ele é determinado por regras específicas e ajuda a identificar se um elemento sofreu oxidação ou redução.', example: 'no NaCl, o Na possui NOX +1 e o Cl possui NOX −1. Já no O₂, como o oxigênio está em uma substância simples, seu NOX é 0.' },
  { name: 'Agente oxidante', definition: 'O agente oxidante é a espécie química que recebe elétrons de outra substância, provocando sua oxidação e sofrendo redução.', example: 'na reação entre zinco e cobre, o Cu²⁺ é o agente oxidante porque recebe elétrons do zinco.' },
  { name: 'Agente redutor', definition: 'O agente redutor é a espécie química que doa elétrons para outra substância, provocando sua redução e sofrendo oxidação.', example: 'na reação entre zinco e cobre, o Zn é o agente redutor porque doa elétrons ao Cu²⁺.' },
  { name: 'Elétron', definition: 'O elétron é uma partícula subatômica de carga elétrica negativa que pode ser transferida entre átomos durante uma reação de oxirredução.', example: 'quando o zinco sofre oxidação, ele libera dois elétrons: Zn → Zn²⁺ + 2e⁻.' },
  { name: 'Ânodo', definition: 'O ânodo é o eletrodo onde ocorre a oxidação, ou seja, onde uma espécie química perde elétrons.', example: 'em uma pilha de zinco e cobre, o eletrodo de zinco é o ânodo.' },
  { name: 'Cátodo', definition: 'O cátodo é o eletrodo onde ocorre a redução, ou seja, onde uma espécie química recebe elétrons.', example: 'em uma pilha de zinco e cobre, o eletrodo de cobre é o cátodo.' },
  { name: 'Eletrólito', definition: 'O eletrólito é uma substância que, quando dissolvida em água ou fundida, permite a condução de corrente elétrica por meio do movimento de íons.', example: 'o sal de cozinha (NaCl), quando dissolvido em água, forma íons que permitem a condução de eletricidade.' },
  { name: 'Ponte salina', definition: 'A ponte salina é um dispositivo que permite a movimentação de íons entre as soluções de uma célula eletroquímica, mantendo o equilíbrio de cargas.', example: 'em uma pilha de zinco e cobre, a ponte salina permite a movimentação de íons entre os dois compartimentos.' },
  { name: 'Pilha (célula galvânica)', definition: 'Uma pilha é um dispositivo que transforma a energia química de uma reação espontânea em energia elétrica.', example: 'uma pilha comum de controle remoto produz energia elétrica a partir de reações químicas.' },
  { name: 'Eletrólise', definition: 'A eletrólise é um processo em que a energia elétrica é utilizada para provocar uma reação química não espontânea.', example: 'na eletrólise da água, a eletricidade pode ser usada para separar a água em hidrogênio e oxigênio.' },
  { name: 'Diferença de potencial (ddp)', definition: 'A diferença de potencial é a diferença de energia elétrica entre dois pontos, responsável por impulsionar o movimento de cargas em um circuito.', example: 'uma pilha de 1,5 V apresenta uma diferença de potencial de 1,5 volt entre seus terminais.' },
  { name: 'Corrente elétrica', definition: 'A corrente elétrica é o movimento ordenado de cargas elétricas através de um material.', example: 'quando uma pilha é conectada a uma lâmpada por fios, a corrente elétrica percorre o circuito e faz a lâmpada acender.' },
  { name: 'Potencial de redução', definition: 'O potencial de redução indica a tendência de uma espécie química receber elétrons e sofrer redução.', example: 'o Cu²⁺ possui maior tendência a receber elétrons que o Zn²⁺, por isso o cobre sofre redução em uma pilha de zinco e cobre.' }
];

const termList = document.querySelector('#term-list');
const termLinks = document.querySelector('#term-links');
if (termList && termLinks) {
  terms.forEach((term, index) => {
    const id = `termo-${index + 1}`;
    const card = document.createElement('article');
    card.className = 'term-card'; card.id = id; card.dataset.term = term.name.toLowerCase();
    card.innerHTML = `<h2>${term.name}</h2><p class="placeholder">${term.definition}</p><p class="example">Exemplo: ${term.example}</p>`;
    termList.append(card);
    const link = document.createElement('a'); link.href = `#${id}`; link.textContent = term.name;
    termLinks.append(link);
  });

  const search = document.querySelector('#term-search');
  const status = document.querySelector('#search-status');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase(); let visible = 0;
    document.querySelectorAll('.term-card').forEach(card => {
      const matches = card.dataset.term.includes(query); card.hidden = !matches;
      if (matches) visible += 1;
    });
    status.textContent = query ? `${visible} termo${visible === 1 ? '' : 's'} encontrado${visible === 1 ? '' : 's'}.` : '';
  });
}
