

const type = document.getElementById('headline-color')

type.addEventListener(`click`, async () => {
    let response = await axios.get('https://x-colors.herokuapp.com/api/random')
    console.log(response)
    let colorAppearHex = response.data.hex
    document.body.style.background = colorAppearHex
    document.getElementById("headline-color").style.color = colorAppearHex
})