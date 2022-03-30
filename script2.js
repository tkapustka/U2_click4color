

const type = document.getElementById('colorHeadline')

type.addEventListener(`click`, async () => {
    let response = await axios.get('https://www.colr.org/json/color/random')
    let colorAppearHex = response.data.new_color
    let hex = colorAppearHex.replace(/^|,\s*/g, "$&#")
    document.getElementById("colorHeadline").style.color = hex
    document.getElementById('colorTextHex').innerText = hex
})