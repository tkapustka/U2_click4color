
const button = document.getElementById('color')
// const colorHex = document.querySelector('colorText')
const colorHex = document.querySelector('colorText')


button.addEventListener(`click`, async () => {
    let response = await axios.get('https://x-colors.herokuapp.com/api/random')
    console.log(response)
    let colorAppearHex = response.data.hex
    let colorAppearRgb = response.data.rgb
    let colorAppearHsl = response.data.hsl
    console.log(colorAppearHex)
    document.body.style.background = colorAppearHex
    // colorHex.innerText(colorAppear)
    document.getElementById('colorTextHex').innerText = colorAppearHex
    document.getElementById('colorTextRgb').innerText = colorAppearRgb
    document.getElementById('colorTextHsl').innerText = colorAppearHsl
})
