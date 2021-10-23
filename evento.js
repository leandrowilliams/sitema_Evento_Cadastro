let QuantidadePalestrantes = 2
let QuantidadeParticipantes = 98
let totalpublico = QuantidadePalestrantes + QuantidadeParticipantes

/*solicitar data do evento()*/
let dataEvento = window.prompt("Qual seria a data do Evento?")
if (dataEvento < dataAtual){
    window.alert("Evento não permitido!!! ")
    window.alert("Motivo: A data está Inválida!!! ")
}else{
let anoNascimento = window.prompt("Digite o ano de nascimento, por favor? ")
let idade = ano - anoNascimento
if (idade < 18){
    window.alert("Evento não permitido para menores. ")
    window.alert("Motivo: Menor de 18 anos!!! ")
}else{
window.alert(`${QuantidadePalestrantes} Palestrantes e ${QuantidadeParticipantes} Participantes = total ${totalpublico}`)

if (totalpublico > 100){
    window.alert("O evento não poderá ser cadastrado mais. Volte sempre.")
    window.alert("Motivo: Limite de 100 pessoas atingido!!! ")
    window.alert("Fique de olho no próximo evento que vai acontecer. ")
}
    else{
        window.alert("Cadastro efetuado com sucesso! ")
        window.alert("Aproveite o evento. ")
        window.alert("Volte sempre. ")
    }
}
    let data_americana = "30/12/2021"
let data_brasileira = data_americana.split('/').reverse().join("/")
console.log(data_brasileira)
}
