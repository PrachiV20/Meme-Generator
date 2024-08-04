const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn "
  );
  
  
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");

  
  const updateDetails = (url, title) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();
  
// EMOJI 
  const btn = document.querySelector("#emoji");
const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "👀",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
];

btn.addEventListener("mouseover", () => {
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
})