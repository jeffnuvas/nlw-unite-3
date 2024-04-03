
let participantes = [
  {
    nome: "Jeferson Silveira",
    email: "jeferson-rs@espm.br",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@espm.br",
    dataInscricao: new Date(2024, 2, 15, 17, 21),
    dataCheckin: null
  },
  {
    nome: "Luciana Souza",
    email: "luciana@example.com",
    dataInscricao: new Date(2024, 2, 18, 10, 35),
    dataCheckin: new Date(2024, 2, 25, 21, 45)
  },
  {
    nome: "Pedro Garcia",
    email: "pedro@example.com",
    dataInscricao: new Date(2024, 2, 20, 14, 50),
    dataCheckin: new Date(2024, 2, 25, 19, 30)
  },
  {
    nome: "Carolina Oliveira",
    email: "carolina@example.com",
    dataInscricao: new Date(2024, 2, 19, 16, 15),
    dataCheckin: null
  },
  {
    nome: "Rafael Santos",
    email: "rafael@example.com",
    dataInscricao: new Date(2024, 2, 21, 12, 40),
    dataCheckin: null
  },
  {
    nome: "Marina Oliveira",
    email: "marina@example.com",
    dataInscricao: new Date(2024, 2, 16, 9, 30),
    dataCheckin: new Date(2024, 2, 25, 19, 15)
  },
  {
    nome: "Gustavo Silva",
    email: "gustavo@example.com",
    dataInscricao: new Date(2024, 2, 17, 15, 20),
    dataCheckin: new Date(2024, 2, 25, 21, 00)
  },
  {
    nome: "Ana Rodrigues",
    email: "ana@example.com",
    dataInscricao: new Date(2024, 2, 23, 11, 10),
    dataCheckin: new Date(2024, 2, 25, 20, 30)
  },
  {
    nome: "Fernando Oliveira",
    email: "fernando@example.com",
    dataInscricao: new Date(2024, 2, 24, 18, 55),
    dataCheckin: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckin = dayjs(Date.now())
  .to(participante.dataCheckin)

  if(participante.dataCheckin == null) {
    dataCheckin = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckin(event)"
      >
        Confirmar check-in
      </buttton>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckin}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ''
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (Event) => {
  Event.preventDefault()

  const dadosDoFormulario = new FormData(Event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null
  }

  //verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
 
  )

  if(participanteExiste) {
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulário
  Event.target.querySelector('[name="nome"]').value = ""
  Event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckin = (Event) => {
  //confirmar se realmente quer o checkin
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
  
  //encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == Event.target.dataset.email
  )
  // atualizar o checkin do participante
  participante.dataCheckin = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)

}