// objeto JS
const participante = {
  nome: "Jeferson Silveira",
  email: "jeferson-rs@espm.br",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00)
}

//array
let participantes = [
  {
  nome: "Jeferson Silveira",
  email: "jeferson-rs@espm.br",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00)
},
]

  let output = ''
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }