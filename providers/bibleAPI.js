const verseRequest = async (verseParams) => {

    console.log('verseParams', verseParams);
    const response = await fetch(`https://bible-api.com/${verseParams}`);
    //const response = await fetch('http://labs.bible.org/api/?passage=John%203:16');
    const json = await response.json();
    console.log(json);
}


export default verseRequest;