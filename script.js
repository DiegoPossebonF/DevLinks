function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'Imagem de Diego com camisa branca e gravata roxo claro')
    } else {
        img.setAttribute('src', 'assets/avatar-dark.png')
        img.setAttribute('alt', 'Imagem de Diego e Melissa em um casamento bebendo cerveja')
    }
}

function changeFooter() {
    const footerTxt = document.getElementById('footer-txt')

    footerTxt.classList.toggle('change')

    if(footerTxt.classList.contains('change')) {
        footerTxt.innerHTML = 'Alterado para estudo por Diego'
    } else {
        footerTxt.innerHTML = 'Feito com ♥ pela Rocketseat'
    }
    
}