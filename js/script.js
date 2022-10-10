let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@_";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value; // está passando o valor que estiver atualmente no input slider para a variável sizePassword | A função executa cada vez que o valor do slider é alterado, o atributo oninput faz isso acontecer || | O OnInput não é um elemento e sim um atributo/evento que dispara quando o usuário digita algo dentro de um elemento (pode ser o elemento <input>). |
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  // A propriedade length pega a quantidade de elementos da variável charset. (Obs: Caso a variável charset fosse um array, iria exibir a quantidade de elementos do array.) || length é uma propriedade de um objeto função , e indica quantos argumentos a função espera. || sliderElement.value é o valor do input que o usuário colocou. | Foi atribuida à variável n a quantidade de elementos da variável charset.
  // O método charAt() retorna o caractere especificado a partir de uma string. | Cada string tem um número, o charAt transforma o número dos métodos Math.random() e Math.floor() em string, que é passado para a variável charset e após para a variável pass.
  // O método Math. floor é usado para arredondar o número passado como um parâmetro para seu inteiro mais próximo na direção para baixo do arredondamento, ou seja, em direção ao valor menor. | Ex: se o valor passado como parâmentro for 6.67, esse método vai arredondar para 6
  // O Math.random() gera um número aleatório de 0 a 1 (caso não seja passado nenhum parâmetro, caso for passado, o random será entre 0 e o valor do parâmetro, nesse caso o valor é n.)

  containerPassword.classList.remove("hide");

  // Está sendo removido a classe hide da lista de classes do elemento containerPassword (não é necessário colocar o - que está no html para referenciá-lo) || classList é a lista de classes desse elemento (o containerPassword, que no caso é uma div que contém elementos de classe)

  password.innerHTML = pass;
  novaSenha = pass;
}

// async function copyPassword() {
//   await navigator.clipboard.writeText(novaSenha); // Copia o que está dentro da variável novaSenha
//   console.log(novaSenha);
//   alert("Senha copiada com sucesso!");
// } --> Estava tentando resolver o erro de não copiar a senha (estava acontecendo por causa de um erro no DOM)

function copyPassword() {
  navigator.clipboard
    .writeText(novaSenha)
    .then(() => alert("Senha copiada com sucesso!")); // O método then( ) é chamado após a promise ser resolvida. Em seguida, podemos decidir o que fazer com ela. 1° Copie a senha então execute o alert.
}

// Problema resolvido ;)
