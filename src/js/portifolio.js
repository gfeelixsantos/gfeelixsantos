
async function getData() {
    const url = 'https://github.com/gfeelixsantos?tab=repositories'

    await fetch(url, {mode: "no-cors", method:'GET'})
        .then( response => response.text())
        .then( data => console.log(data))

}
getData()