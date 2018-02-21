
const verseRequest = async (verseParams) => {

    const response = await fetch(`https://api.esv.org/v3/passage/text/?q=${verseParams}&include-first-verse-numbers=true`, {
        method: 'GET',
        headers: {
            'Authorization': config.api_auth
        }
    })
    
    const json = await response.json();
    var Canonical = json.canonical;

    let displayData = {
        verse: json.query,
        passage: json.passages[0]
    }

    console.log(displayData);

    return displayData;
}


export default verseRequest;