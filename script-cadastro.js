async function cadastrarMeme() {
    const url = 'https://6733b38fa042ab85d117ba7a.mockapi.io/apiu/memes'

    const linkDigitado = document.querySelector('#linkImagem').value
    const tituloDigitado = document.querySelector('#titulo').value
    let dadosMeme = {
        linkImagem: linkDigitado,
        dataCadastro: new Date(),
        titulo: tituloDigitado,
        likes: 0
    }
    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dadosMeme)
    })
    alert('Meme cadastrado com sucesso!')
       
}