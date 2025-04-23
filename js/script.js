async function esperarElemento(id, tentativas = 10, intervalo = 200) {
  return new Promise((resolve, reject) => {
    let tentativasFeitas = 0;
    const verificar = setInterval(() => {
      const el = document.querySelector(id);
      if (el) {
        clearInterval(verificar);
        resolve(el);
      } else if (++tentativasFeitas >= tentativas) {
        clearInterval(verificar);
        reject(`Elemento ${id} não encontrado.`);
      }
    }, intervalo);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await esperarElemento('#formBusca');

    const form = document.querySelector('#formBusca');
    const input = document.querySelector('#inputBusca');
    const resultado = document.querySelector('#resultadoBusca');

    console.log("Form, input e resultado carregados!");

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const termo = input.value.trim();
      if (termo) {
        resultado.textContent = `Você buscou por: "${termo}"`;
      } else {
        resultado.textContent = "";
      }
    });
  } catch (erro) {
    console.error(erro);
  }
});
