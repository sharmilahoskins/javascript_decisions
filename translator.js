var lang

function translate(lang) {
  if (lang === "en") {
    alert("Hello World")
  }
  else if (lang === "bin") {
    alert("01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100")
  }
  else if (lang === "fr") {
    alert("Bonjour Monde")
  }
  else if (lang === "hex") {
    alert("48656c6c6f207800000000")
  }
}

function input() {
  lang = prompt("What translation would you like?\n'en' for English\n'bin' for Binary\n'fr' for French\n'hex' for Hexadecimal")

  translate(lang)
}

input()
