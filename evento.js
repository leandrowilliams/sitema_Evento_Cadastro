let QuantidadePalestrantes = 2
let QuantidadeParticipantes = 98
let totalpublico = QuantidadePalestrantes + QuantidadeParticipantes

/*solicitar data do evento()*/
let dataEvento = window.prompt("Qual seria a data do Evento?")
if (dataEvento < dataAtual){
    window.alert("Evento n�o permitido!!! ")
    window.alert("Motivo: A data est� Inv�lida!!! ")
}else{
let anoNascimento = window.prompt("Digite o ano de nascimento, por favor? ")
let idade = ano - anoNascimento
if (idade < 18){
    window.alert("Evento n�o permitido para menores. ")
    window.alert("Motivo: Menor de 18 anos!!! ")
}else{
window.alert(`${QuantidadePalestrantes} Palestrantes e ${QuantidadeParticipantes} Participantes = total ${totalpublico}`)

if (totalpublico > 100){
    window.alert("O evento n�o poder� ser cadastrado mais. Volte sempre.")
    window.alert("Motivo: Limite de 100 pessoas atingido!!! ")
    window.alert("Fique de olho no pr�ximo evento que vai acontecer. ")
}
    else{
        window.alert("Cadastro efetuado com sucesso! ")
        window.alert("Aproveite o evento. ")
        window.alert("Volte sempre. ")
    }
}
}