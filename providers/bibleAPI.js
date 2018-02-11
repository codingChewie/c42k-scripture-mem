
const verseRequest = async (verseParams) => {

    const response = await fetch(`https://api.esv.org/v3/passage/text/?q=${verseParams}&include-first-verse-numbers=true`, {
        method: 'GET',
        headers: {
            'Authorization': config.api_auth
        }
    })
    const json = await response.json();
    var Canonical = json.canonical;

    if (Canonical != verseParams){
        console.log("Verse not found did you mean: " + Canonical +"?");
    }
    else{
        console.log("Here is your verse:" + json.Passages[]);
    }

    console.log(json);
}


export default verseRequest;