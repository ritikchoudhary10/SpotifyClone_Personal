
// Initialize the variables
let songIndex=1;
let audioElement = new Audio('audio/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Bairiya by Arijit Singh", filePath:"audio/1.mp3",coverPath:"images/1.jpg" },
    {songName:"With You by AP Dhilon", filePath:"audio/2.mp3",coverPath:"images/1.jpg" },
    {songName:"You by Arman Malik", filePath:"audio/3.mp3",coverPath:"images/1.jpg" },
    {songName:"Tere Hawale by Arijit Singh and Shilpa Rao", filePath:"audio/4.mp3",coverPath:"images/1.jpg" },
    {songName:"Malang Sajna by Sachet Parampara", filePath:"audio/5.mp3",coverPath:"images/1.jpg" },
    {songName:"Maan Meri Jaan by King", filePath:"audio/6.mp3",coverPath:"images/1.jpg" },
    {songName:"Kesariya by Arjit Singh", filePath:"audio/7.mp3",coverPath:"images/1.jpg" },
    {songName:"Kahani Suno by Kaifi Khalil", filePath:"audio/8.mp3",coverPath:"images/1.jpg" },
    {songName:"Janiye by Vishal Mishra", filePath:"audio/9.mp3",coverPath:"images/1.jpg" },
    {songName:"Guli Mata by Saad Lamjarred", filePath:"audio/10.mp3",coverPath:"images/1.jpg" },
    {songName:"Naina Da Kya Kasoor by Ayushmaan Khurana", filePath:"audio/11.mp3",coverPath:"images/1.jpg" },
    {songName:"Ranjha by Jasleen Royal and B Praak", filePath:"audio/12.mp3",coverPath:"images/1.jpg" },
    {songName:"Rang Jo Lagyo Ramaiya by AtifAslam and Shreya Ghosal", filePath:"audio/13.mp3",coverPath:"images/1.jpg" },
    {songName:"Raatan Lambiyan by Jubin Nautiyal", filePath:"audio/14.mp3",coverPath:"images/1.jpg" },
    {songName:"Samjhawan by Arjit Singh and Shreya Ghosal", filePath:"audio/15.mp3",coverPath:"images/1.jpg" },
    {songName:"Lambiyaan Si Judaiyaan by Arjit Singh", filePath:"audio/16.mp3",coverPath:"images/1.jpg" },
    {songName:"Kuch Baatein by Payal Dev", filePath:"audio/17.mp3",coverPath:"images/1.jpg" },
    {songName:"Kachha Ghada Rahgir by Rahgir", filePath:"audio/18.mp3",coverPath:"images/1.jpg" },
    {songName:"Kaabil Hoon by Jubin Nautiyal", filePath:"audio/19.mp3",coverPath:"images/1.jpg" },
    {songName:"Humsafar by Akhil Sachdeva", filePath:"audio/20.mp3",coverPath:"images/1.jpg" },
    {songName:"Gul by Anuv Jain", filePath:"audio/21.mp3",coverPath:"images/1.jpg" },
    {songName:"Enna Sona by Arijit Singh", filePath:"audio/22.mp3",coverPath:"images/1.jpg" },
    {songName:"Doobey Gehraiyaan by OAFF,Savera", filePath:"audio/23.mp3",coverPath:"images/1.jpg" },
    {songName:"Chura Liya Hai Tumne Jo Dil Ko by R.D Burman", filePath:"audio/24.mp3",coverPath:"images/1.jpg" },
    {songName:"Bol Na Halke Halke by Rahat F A khan", filePath:"audio/25.mp3",coverPath:"images/1.jpg" },
    {songName:"Bol Do Na Zara", filePath:"audio/26.mp3",coverPath:"images/1.jpg" },
    {songName:"Be Intehaan by Pritam", filePath:"audio/27.mp3",coverPath:"images/1.jpg" },
    {songName:"Ban Ja Rani by Guru Randhawa", filePath:"audio/28.mp3",coverPath:"images/1.jpg" },
    {songName:"Bairiya by Arijit Singh", filePath:"audio/29.mp3",coverPath:"images/1.jpg" },
    {songName:"Baarishein by Anuv Jain", filePath:"audio/30.mp3",coverPath:"images/1.jpg" },
    {songName:"Ajj Din Chadheya by pritam", filePath:"audio/31.mp3",coverPath:"images/1.jpg" },
    {songName:"Agar Tum Saath Ho by Arijit Singh", filePath:"audio/32.mp3",coverPath:"images/1.jpg" },
    {songName:"Aaja Sanam Madhur Chandni Mein", filePath:"audio/33.mp3",coverPath:"images/1.jpg" },
    

    
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
        
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.remove('fa-play-circle');
        currentPlayingIcon.classList.add('fa-pause-circle');
       
      
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.remove('fa-pause-circle');
        currentPlayingIcon.classList.add('fa-play-circle');
        
        gif.style.opacity=0;
       
    }
    
})


audioElement.addEventListener('timeupdate',()=>{
    Progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=Progress;
})
myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
        masterPlay.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
        makeAllPlays()
       songIndex=parseInt(e.target.id)
       e.target.classList.remove('fa-play-circle');
       masterPlay.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       masterPlay.classList.add('fa-pause-circle');
       audioElement.src = `audio/${songIndex}.mp3`;
       masterSongName.innerText=songs[songIndex-1].songName;
       audioElement.currentTime=0;
       audioElement.play();
      
      
    
       gif.style.opacity=1;

       
})
})

document.getElementById('next').addEventListener('click',() =>{
    
    if(songIndex>songs.length -1){
        songIndex=1;
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.add('fa-pause-circle');
        currentPlayingIcon.classList.remove('fa-play-circle');
        const previousPlayingIcon =document.getElementById(songs.length);
        previousPlayingIcon.classList.add('fa-play-circle');
        previousPlayingIcon.classList.remove('fa-pause-circle');
        gif.style.opacity=1;

    }else{
        songIndex+=1;
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.add('fa-pause-circle');
        currentPlayingIcon.classList.remove('fa-play-circle');
        const previousPlayingIcon =document.getElementById(songIndex-1);
        previousPlayingIcon.classList.remove('fa-pause-circle');
        previousPlayingIcon.classList.add('fa-play-circle');
        gif.style.opacity=1;

    }
    audioElement.src = `audio/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
const currentPlayingIcon=document.getElementById(songIndex)
   currentPlayingIcon.classList.remove('fa-play-circle');
    currentPlayingIcon.classList.add('fa-pause-circle');

    gif.style.opacity=1;
    
})

document.getElementById('previous').addEventListener('click',() =>{
    if(songIndex<=1){
        songIndex=songs.length;
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.add('fa-pause-circle');
        currentPlayingIcon.classList.remove('fa-play-circle');
        const previousPlayingIcon=document.getElementById(1);
        previousPlayingIcon.classList.add('fa-play-circle');
        previousPlayingIcon.classList.remove('fa-pause-circle');

    }else{
        songIndex-=1;
        const currentPlayingIcon=document.getElementById(songIndex);
        currentPlayingIcon.classList.add('fa-pause-circle');
        currentPlayingIcon.classList.remove('fa-play-circle');
        const previousPlayingIcon=document.getElementById(songIndex+1);
        previousPlayingIcon.classList.add('fa-play-circle');
        previousPlayingIcon.classList.remove('fa-pause-circle');
    }
    audioElement.src = `audio/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


