const verseRequest = async (verseParams) => {
    const response = await fetch('http://labs.bible.org/api/?passage=John%203:16');
    const json = await response.json();
    console.log(json);
}


export default verseRequest;