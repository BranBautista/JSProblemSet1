var p = document.getElementById("paragraph");

window.p.changeStyle2 = function (colorParagraph = 'yellowgreen', fontSize = '2rem', backgroundColor = 'teal') {
    this.style.color = colorParagraph;
    this.style.fontSize = fontSize;
    this.style.backgroundColor = backgroundColor;
}

window.p.changeStyle2();
