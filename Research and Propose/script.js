const influencers = [

{
name:"Cristiano Ronaldo",
platform:"Instagram",
followers:"650M+",
engagement:"3.5%",
audience:"Global Sports Audience",
icon:"⚽",
reason:"Strong athletic image, worldwide reach and premium sports branding."
},

{
name:"Virat Kohli",
platform:"Instagram",
followers:"300M+",
engagement:"4.2%",
audience:"Indian Youth & Cricket Fans",
icon:"🏏",
reason:"Fitness-focused personality and strong trust among Indian consumers."
},

{
name:"Khaby Lame",
platform:"TikTok",
followers:"160M+",
engagement:"5.8%",
audience:"Gen Z Global Audience",
icon:"🎭",
reason:"Massive viral appeal and high engagement among younger audiences."
},

{
name:"LeBron James",
platform:"Instagram",
followers:"160M+",
engagement:"2.8%",
audience:"Basketball Community",
icon:"🏀",
reason:"Long-standing Nike ambassador and influential athlete."
},

{
name:"MrBeast",
platform:"YouTube",
followers:"400M+",
engagement:"7%",
audience:"Youth & Entertainment",
icon:"🎬",
reason:"Exceptional engagement and huge global visibility."
}

];

const grid =
document.getElementById(
"influencerGrid"
);

function renderCards(data){

grid.innerHTML = "";

data.forEach(item=>{

grid.innerHTML += `

<div class="card">

<div class="avatar">
${item.icon}
</div>

<h3>${item.name}</h3>

<div class="badge">
${item.platform}
</div>

<div class="metrics">

<div class="metric">
<strong>${item.followers}</strong>
<br>
Followers
</div>

<div class="metric">
<strong>${item.engagement}</strong>
<br>
Engagement
</div>

</div>

<div class="reason">

<strong>Audience:</strong>
${item.audience}
<br><br>

<strong>Why Nike?</strong>
${item.reason}

</div>

</div>

`;

});

}

renderCards(influencers);

document
.getElementById("searchInput")
.addEventListener("input",e=>{

const value =
e.target.value.toLowerCase();

const filtered =
influencers.filter(i=>

i.name
.toLowerCase()
.includes(value)

);

renderCards(filtered);

});

document
.getElementById("platformFilter")
.addEventListener("change",e=>{

const value =
e.target.value;

if(value==="all"){

renderCards(influencers);
return;
}

renderCards(

influencers.filter(
i=>i.platform===value
)

);

});

document
.getElementById("themeToggle")
.addEventListener("click",()=>{

document.body.classList.toggle(
"light"
);

});