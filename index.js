//DOM elements
const adviceElement = document.getElementById('advice')
const new_advice=document.getElementById('new-advice')
const twitter = document.getElementById('twitter')

function randomBackgroundColor(){ //Choose randomly between 16777215 colors for the background
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = '#'+randomColor
}

async function getAdvice(){ //fetch advice from advice api
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    return data.slip.advice

}

function randomAdvice(){ //change the displayable text and change background color
    getAdvice().then((advice)=>{ 
    adviceElement.textContent=advice
    randomBackgroundColor()})}

function tweetAdvice() { //tweet advice functionality
    const tweetText = adviceElement.textContent;
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);
    window.open(tweetUrl);
    }

new_advice.addEventListener('click', randomAdvice) //event listener for clicking new advice
twitter.addEventListener('click',tweetAdvice) //event listener for clicking twitter logo

randomAdvice() //initialize advices
