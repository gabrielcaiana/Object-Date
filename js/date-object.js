  // Cria uma variável para conter um novo objeto Date (o padrão é agora)
  let hoje = new Date();
  // Cria uma variável para armazenar o ano
  let ano = hoje.getFullYear();
  //Obtem o elemento footer atravès de seu  ID
  let el = document.getElementById('footer');
  el.innerHTML = `<p>Copyright &copy ${ano}</p>`;
