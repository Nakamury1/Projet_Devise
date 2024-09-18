function fetchDevise(){
  return fetch(`https://v6.exchangerate-api.com/v6/a710cf5c7f9d8afe873e8a0b/latest/${deviseEntree.value}`)
    .then((response) => response.json())
}

let choice = [ "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL",
]
let sommeC = document.getElementById("somme")
let deviseEntree = document.getElementById("devise_input")
let deviseSortie = document.getElementById("devise_output")
let resultat = document.getElementById("resultat")

function Autocomplete() {
  for (let i = 0; i < choice.length; i++) {
      deviseEntree.innerHTML += `<option>${choice[i]}</option>`
      deviseSortie.innerHTML += `<option>${choice[i]}</option>`
  }
}

async function DeviseResult(){
  const data = await fetchDevise()
  let donnees = data.conversion_rates;
  let result = sommeC.value * donnees[deviseSortie.value]
  resultat.innerHTML =
  `
  <p>Résultat de la conversion: ${result.toFixed(2)}</p> 
  `
}

Autocomplete()
deviseEntree.addEventListener("input", (e) => DeviseResult())
deviseSortie.addEventListener("input", (e) => DeviseResult())
sommeC.addEventListener("input", (e) => DeviseResult())