
const verseRequest = async (verseParams) => {

    const response = await fetch(`https://api.esv.org/v3/passage/text/?q=${verseParams}&include-passage-references=true&include-first-verse-numbers=true`, {
        method: 'GET',
        headers: {
            'Authorization': config.api_auth
        }
    })
    const json = await response.json();
    console.log(json);
}


export default verseRequest;