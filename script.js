// Cotação de moedas do dia
const USD = 5.19
const EUR = 6.23
const GBP = 7.17

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")


// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    // Desativa o comportamento padrão de recarregamento da página
    event.preventDefault()

    // Identificando a moeda selecionada para conversão
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}