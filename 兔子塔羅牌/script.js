const rabbitTarotDeck = [
    { name: "魔術師", meaning: "創造力、技能、才能的體現", image: "images/magician.jpg" },
    { name: "女祭司", meaning: "直覺、神秘、內在知識", image: "images/high-priestess.jpg" },
    { name: "女皇", meaning: "豐饒、母性、感性", image: "images/empress.jpg" },
    { name: "皇帝", meaning: "權威、領導力、父性", image: "images/emperor.jpg" },
    { name: "教皇", meaning: "傳統、信仰、教育", image: "images/hierophant.jpg" }
];

const drawButton = document.getElementById('drawButton');
const cardResult = document.getElementById('cardResult');
const cardImage = document.getElementById('cardImage');
const cardName = document.getElementById('cardName');
const cardMeaning = document.getElementById('cardMeaning');

drawButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * rabbitTarotDeck.length);
    const drawnCard = rabbitTarotDeck[randomIndex];

    cardImage.src = drawnCard.image;
    cardImage.alt = `${drawnCard.name}的圖片`;
    cardName.textContent = drawnCard.name;
    cardMeaning.textContent = drawnCard.meaning;
    cardResult.classList.remove('hidden');
});

