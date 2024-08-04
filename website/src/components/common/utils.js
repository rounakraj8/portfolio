
const capitalizeEachWord = (string) => {

    const words = string.split(" ");

    return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

}


export { capitalizeEachWord };