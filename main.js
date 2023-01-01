const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");

const updateDetails = (url) => {
    memeImage.setAttribute("src", url)
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/minecraftmemes")
    .then((response) => response.json())
    .then(data => {
            updateDetails(data.url);
        });
};

generateMemeBtn.addEventListener("click", generateMeme)

generateMeme();