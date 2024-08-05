let generatememeBtn=document.querySelector(".generate-meme-btn");

const memeImage=document.querySelector("img");

const memeAuthor=document.querySelector(".meme-author");
const memTitle=document.querySelector(".meme-title");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memTitle.innerHTML = title;
    memeAuthor.innerHTML=author;

}
const generateMeme=()=>{
    console.log("clicked");
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{
    updateDetails(data.url,data.title,data.author);
    });
};
if(generatememeBtn)
{

    generatememeBtn.addEventListener("click",generateMeme)
}
else{
    console.log("can not find")
}