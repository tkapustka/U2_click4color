

// window.onload = function firstColor() {
//     let colorAppearHex = response.data.hex
//     axios.get('https://x-colors.herokuapp.com/api/random')
//     document.body.style.background = colorAppearHex
// }
    




const button = document.getElementById('colorImage')
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
    document.getElementById('colorTextHex').innerText = colorAppearHex
    document.getElementById('colorTextRgb').innerText = colorAppearRgb
    document.getElementById('colorTextHsl').innerText = colorAppearHsl
})

