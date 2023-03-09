const medida = prompt("Escreva o valor em metros");
const unidade = prompt(
  "Para qual unidade deve ser convertido?" +
    "\nmm" +
    "\ncm" +
    "\ndm" +
    "\ndam" +
    "\nhm" +
    "\nkm"
);

switch (unidade) {
  case "mm":
    alert(medida * 1000);
    break;
  case "cm":
    alert(medida * 100);
    break;
  case "dm":
    alert(medida * 10);
    break;
  case "dam":
    alert(medida / 10);
    break;
  case "hm":
    alert(medida / 100);
    break;
  case "km":
    alert(medida / 1000);
    break;
  default:
    alert("Insira uma medida correta");
}
