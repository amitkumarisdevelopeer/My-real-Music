const music=new Audio('audio/1.mp3');
music.play(1);

const songs=[
    {
        id: "1",
        songName: `
        Apna Bana le <br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/1.jpg"
    },
    {
        id: "2",
        songName: `
        Kaun Tujhe<br>
        <div class="subtitle">Palak Muchhal</div></h5>
        `,
        poster:"img/2.jpg"
    },
    {
        id: "3",
        songName: `
        Satranga<br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/3.jpg"
    },
    {
        id: "4",
        songName: `
        Pehle Bhi main <br>
        <div class="subtitle">Vishal Mishra</div></h5>
        `,
        poster:"img/4.jpg"
    },
    {
        id: "5",
        songName: `
        Humdard <br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/5.jpg"
    },
    {
        id: "6",
        songName: `
        Kesariya <br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/6.jpg"
    },
    {
        id: "7",
        songName: `
        Tu hi Aashisiqui<br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/7.jpg"
    },
    {
        id: "8",
        songName: `
        Kabhi Sham Dhale <br>
        <div class="subtitle">Mohammad Faiz</div></h5>
        `,
        poster:"img/8.jpg"
    },
    {
        id: "9",
        songName: `
        Baarish Ban Jana <br>
        <div class="subtitle">Stebin Ben and Payal Dev</div></h5>
        `,
        poster:"img/9.jpg"
    },
    {
        id: "10",
        songName: `
        Raatan Lambiyan <br>
        <div class="subtitle">Jubin Nautiyal</div></h5>
        `,
        poster:"img/10.jpg"
    },
    {
        id: "11",
        songName: `
        Fitoor<br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/11.jpg"
    },
    {
        id: "12",
        songName: `
        Kabhi Tumhe <br>
        <div class="subtitle">Darshan Raval</div></h5>
        `,
        poster:"img/12.jpg"
    },
    {
        id: "13",
        songName: `
        Zihaal E Mushkil<br>
        <div class="subtitle">Vishal Mishra</div></h5>
        `,
        poster:"img/13.jpg"
    },
    {
        id: "14",
        songName: `
        Shukriyan <br>
        <div class="subtitle">Jubin Nautiyal</div></h5>
        `,
        poster:"img/14.jpg"
    },
    {
        id: "15",
        songName: `
        Chura Liay<br>
        <div class="subtitle">Sachet & Parampara</div></h5>
        `,
        poster:"img/15.jpg"
    },
    {
        id: "16",
        songName: `
        Muskurane ki wajah<br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/16.jpg"
    },
    {
        id: "17",
        songName: `
        Bhula Diya <br>
        <div class="subtitle">Darshan Raval</div></h5>
        `,
        poster:"img/17.jpg"
    },
    {
        id: "18",
        songName: `
        Papa Meri Jaan<br>
        <div class="subtitle">Sonu Nigam</div></h5>
        `,
        poster:"img/18.jpg"
    },
    {
        id: "19",
        songName: `
        Dil Jhoom <br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/19.jpg"
    },
    {
        id: "20",
        songName: `
        Tum hi ho <br>
        <div class="subtitle">Arijit Singh</div></h5>
        `,
        poster:"img/20.jpg"
    },
    {
        id: "21",
        songName: `
        Pyaar Karte ho na <br>
        <div class="subtitle">stebin Ben</div></h5>
        `,
        poster:"img/21.jpg"
    },
    {
        id: "22",
        songName: `
        Tu hi Rab tu hi dua <br>
        <div class="subtitle">Tusli Kumar & Rahat Fateh Ali Khan</div></h5>
        `,
        poster:"img/22.jpg"
    },
]


Array.from(document.getElementsByClassName("songItem")).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterPlay=document.getElementById("masterPlay")
let wave=document.getElementById("wave")
masterPlay.addEventListener("click",function(){
    if(music.paused||music.currentTime<=0){
        music.play()
        wave.classList.add("active1")
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
    }
    else{
        music.pause()
        wave.classList.remove("active1")
        masterPlay.classList.add("bi-play-fill")
        masterPlay.classList.remove("bi-pause-fill")
       
       

       
    }
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el)=>{
        el.classList.add("bi-play-circle-fill")
        el.classList.remove("bi-pause-circle-fill")
    })
}

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName("songItem")).forEach((el)=>{
        el.style.background='rgb(105,105,105,0.0)'
    })
}
let index=0
let poster_master_play=document.getElementById("poster_master_play")
let title=document.getElementById("title")
Array.from(document.getElementsByClassName("playListPlay ")).forEach((e)=>{
    e.addEventListener("click",function(el){
         index=el.target.id
        music.src=`audio/${index}.mp3`
        poster_master_play.src=`img/${index}.jpg`
        music.play()
        masterPlay.classList.remove("bi-play-fill")
        masterPlay.classList.add("bi-pause-fill")
        
        let songTitles=songs.filter((els)=>{
            return els.id==index
        });

        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index-1].style.background='rgb(105,105,105,0.1)'
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')
    })


})


let currentStart=document.getElementById("currentStart")
let currentEnd=document.getElementById("currentEnd")
let seek=document.getElementById("seek")
let bar2=document.getElementById("bar2")
let dot=document.getElementsByClassName("dot")[0]
music.addEventListener("timeupdate",()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    currentEnd.innerText=`${min1}:${sec1}`

    let min2=Math.floor(music_curr/60)
    let sec2=Math.floor(music_curr%60)

    currentStart.innerText=`${min2}:${sec2}`

  let progressBar=parseInt((music_curr/music_dur)*100)
   seek.value=progressBar
   let seekbar=seek.value
   bar2.style.width=`${seekbar}%`
   dot.style.left=`${seekbar}%`

})

seek.addEventListener("change",()=>{
    music.currentTime=seek.value*music.duration/100
})

let vol_icon=document.getElementById("vol_icon")
let vol=document.getElementById("vol")
let vol_bar=document.getElementsByClassName("vol_bar")[0]
let vol_dot=document.getElementById("vol_dot")


vol.addEventListener("change",()=>{
    if(vol.value==0){
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.add("bi-volume-off-fill")
    }
    if(vol.value>0){
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.add("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-off-fill")
    }
    if(vol.value>50){
        vol_icon.classList.add("bi-volume-up-fill")
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-off-fill")
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`
    vol_dot.style.left=`${vol_a}%`
    music.volume=vol_a/100
})
let back=document.getElementById("back")
let next=document.getElementById("next")
back.addEventListener("click",()=>{
    index-=1

  if(index<1){
    index=Array.from(document.getElementsByClassName("songItem")).length;
  }
    music.src=`audio/${index}.mp3`
    poster_master_play.src=`img/${index}.jpg`
    music.play()
    
    
    let songTitles=songs.filter((els)=>{
        return els.id==index
    });

    songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
    });

makeAllBackground();
Array.from(document.getElementsByClassName("songItem"))[index-1].style.background='rgb(105,105,105,0.1)'
makeAllPlays();
el.target.classList.remove('bi-play-circle-fill')
el.target.classList.add('bi-pause-circle-fill')
wave.classList.add('active1')
})

next.addEventListener("click",()=>{
    index++;
    music.src=`audio/${index}.mp3`
    poster_master_play.src=`img/${index}.jpg`
    music.play()
    
    
    let songTitles=songs.filter((els)=>{
        return els.id==index
    });

    songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
    });

makeAllBackground();
Array.from(document.getElementsByClassName("songItem"))[index-1].style.background='rgb(105,105,105,0.1)'
makeAllPlays();
el.target.classList.remove('bi-play-circle-fill')
el.target.classList.add('bi-pause-circle-fill')
wave.classList.add('active1')
})










let pop_song_left=document.getElementById("pop_song_left");
let pop_song_right=document.getElementById("pop_song_right");
let pop_song=document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click",function(){
    pop_song.scrollLeft+=330;
})
pop_song_left.addEventListener("click",function(){
    pop_song.scrollLeft-=330;
})





let pop_art_left=document.getElementById("pop_art_left");
let pop_art_right=document.getElementById("pop_art_right");
let item=document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click",function(){
    item.scrollLeft+=330;
})
pop_art_left.addEventListener("click",function(){
    item.scrollLeft-=330;

})