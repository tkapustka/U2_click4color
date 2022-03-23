

button.addEventListener(`click`, async () => {
    let response = await axios.get('https://x-colors.herokuapp.com/api/random')
    console.log(response)
    let colorAppear = response.data.hex
    console.log(colorAppear)
    // colorHex.innerHTML = colorAppear
    document.body.style.background = colorAppear
})