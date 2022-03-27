const type = document.getElementById('typeColorButton')

type.addEventListener(`click`, async () => {
    let response = await axios.get('https://x-colors.herokuapp.com/api/random')
    console.log("hello")
    document.body.style.background = colorAppearHex
    document.getElementById("headline-color").style.color = colorAppearHex
})