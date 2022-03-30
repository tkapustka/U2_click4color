const color = document.querySelector('#colorImage')
const colorHex = document.querySelector('.colorText')


color.addEventListener(`click`, async () => {
    // let response = await axios.get('https://x-colors.herokuapp.com/api/random')
    let response = await axios.get('https://www.colr.org/json/color/random')
    let colorAppearHex = response.data.new_color
    let hex = colorAppearHex.replace(/^|,\s*/g, "$&#")
    document.body.style.background = hex
    document.querySelector('#colorTextHex').innerText = hex
    console.log(hex)
})