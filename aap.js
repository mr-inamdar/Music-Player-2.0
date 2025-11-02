const musiq = new Audio('song/1.mp3');
// musiq.play();

const songs =[
    {
        id: 1,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Sajdaa-My name is Khan</span> &nbsp; <span lang='hindi'>सजदा-माई नेम इस खान</span> &nbsp; <span lang='urdu'>سجدہ-مائی نیم از خان</span></marquee>
        <div class="subtitle">Shankar Ehsaan Loy, Rahat Fateh Ali Khan, Shankar Mahadevan & Richa Sharma</div>`,
        poster: "banners/1.jpg",
        title:"Shankar Ehsaan Loy, Rahat Fateh Ali Khan, Shankar Mahadevan & Richa Sharma-Sajdaa-My name is Khan"
    },
    {
        id: 2,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Jogi-Shaadi Mein Zaroor Aana</span> &nbsp; <span lang='hindi'>जोगी-शादी में जरूर आना</span> &nbsp; <span lang='urdu'>جوگی-شادی میں ضرور آنا</span></marquee>
        <div class="subtitle">Yasser Desai & Aakanksha Sharma</div>`,
        poster: "banners/2.jpg",
        title:"Yasser Desai & Aakanksha Sharma-Jogi-Shaadi Mein Zaroor Aana"
    },
    {
        id: 3,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Humsafar-Saiyaara</span> &nbsp; <span lang='hindi'>हमसफर-सैयारा</span> &nbsp; <span lang='urdu'>ہم سفر-سایارا</span></marquee>
        <div class="subtitle">Sachet-Parampara, Sachet Tandon, Parampara Tandon & Irshad Kamil</div>`,
        poster: "banners/3.jpg",
        title:"Sachet-Parampara, Sachet Tandon, Parampara Tandon & Irshad Kamil-Humsafar-Saiyaara"
    },
    {
        id: 4,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Khoobsurat-Stree</span> &nbsp; <span lang='hindi'>खूबसूरत-स्त्री</span> &nbsp; <span lang='urdu'>خوبصورت-ستری</span></marquee>
        <div class="subtitle">Sachin-Jigar, Vishal Mishra & Amitabh Bhattacharya</div>`,
        poster: "banners/4.jpg",
        title:"Sachin-Jigar, Vishal Mishra & Amitabh Bhattacharya-Khoobsurat-Stree"
    },
    {
        id: 4,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Jeene Laga Hoon-Ramaiya Vastavaiya</span> &nbsp; <span lang='hindi'>जीने लगा हूँ-रमैया वस्तावैया</span> &nbsp; <span lang='urdu'>جینے لگا ہوں-رمایہ وسٹاوایا</span></marquee>
        <div class="subtitle">Atif Aslam & Shreya Ghoshal</div>`,
        poster: "banners/4.jpg",
        title:"Atif Aslam & Shreya Ghoshal-Jeene Laga Hoon-Ramaiya Vastavaiya"
    },
    {
        id: 6,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Varoon-Mirzapur</span> &nbsp; <span lang='hindi'>वरूण-मिर्जापुर</span> &nbsp; <span lang='urdu'>وروں-مرزاپور</span></marquee>
        <div class="subtitle">Anand Bhaskar (feat. Romy & Ginny Diwan)</div>`,
        poster: "banners/6.jpg",
        title:"Anand Bhaskar (feat. Romy & Ginny Diwan)-Varoon-Mirzapur"
    },
    {
        id: 7,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>High On You</span> &nbsp; <span lang='hindi'>हाइ ऑन यू</span> &nbsp; <span lang='urdu'>ہائی آن یو</span></marquee>
        <div class="subtitle">Jind Universe</div>`,
        poster: "banners/7.jpg",
        title:"Darshan Raval-Mahiye Jinna Sona"
    },
    {
        id: 8,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Ya Nabi صلى الله عليه وسلم Salam Alacka-Darood O Salam</span> &nbsp; <span lang='hindi'>या नबी ﷺ सलाम अलैका-दरूद ओ सलाम</span> &nbsp; <span lang='urdu'>یا نبی ﷺ سلام علیک-درود و سلام</span></marquee>
        <div class="subtitle">Gulam Waris</div>`,
        poster: "banners/8.webp",
        title:"Gulam Waris-Ya Nabi صلى الله عليه وسلم Salam Alacka-Darood O Salam"
    },
    {
        id: 9,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Ehsaas</span> &nbsp; <span lang='hindi'>एहसास</span> &nbsp; <span lang='urdu'>احساس</span></marquee>
        <div class="subtitle">Faheem Abdullah, Duha Shah, Vaibhav Pani & Hyder Dar</div>`,
        poster: "banners/9.jpg",
        title:"Faheem Abdullah, Duha Shah, Vaibhav Pani & Hyder Dar-Ehsaas"
    },{
        id: 10,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Ashiyan</span> &nbsp; <span lang='hindi'>आशियां</span> &nbsp; <span lang='urdu'>آشیانہ</span></marquee>
        <div class="subtitle">Pritam, Shreya Ghoshal & Nikhil Paul George</div>`,
        poster: "banners/10.jpg",
        title:"Pritam, Shreya Ghoshal & Nikhil Paul George-Ashiyan"
    },{
        id: 11,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Bulleya-Sultan</span> &nbsp; <span lang='hindi'>बिल्लेया सुलतान</span> &nbsp; <span lang='urdu'>بلییا  سلطان</span></marquee>
        <div class="subtitle">Vishal and Sheykhar & Papon</div>`,
        poster: "banners/11.jpg",
        title:"Vishal and Sheykhar & Papon-Bulleya-Sultan"
    },{
        id: 12,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Neno Ne Baandhi</span> &nbsp; <span lang='hindi'>नेनो ने बांधी</span> &nbsp; <span lang='urdu'>نینو نے باندھی</span></marquee>
        <div class="subtitle">Yasser Desai & Arko</div>`,
        poster: "banners/12.jpg",
        title:"Yasser Desai & Arko-Neno Ne Baandhi"
    },{
        id: 13,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Ishq-E-Jaan</span> &nbsp; <span lang='hindi'>इश्क-ए-जान</span> &nbsp; <span lang='urdu'>عشقِ جان</span></marquee>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "banners/13.jpg",
        title:"Rahat Fateh Ali Khan-Ishq-E-Jaan"
    },{
        id: 14,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Mera Pyar Tera Pyar-Jalebi</span> &nbsp; <span lang='hindi'>मेरा प्यार तेरा प्यार-जलेबी</span> &nbsp; <span lang='urdu'>میرا پیار تیرا پیار-جلّبی</span></marquee>
        <div class="subtitle">Jeet Gannguli & Arijit Singh</div>`,
        poster: "banners/14.jpg",
        title:"Jeet Gannguli & Arijit Singh-Mera Pyar Tera Pyar-Jalebi"
    },{
        id: 15,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Do U Know-Housefull 2</span> &nbsp; <span lang='hindi'>ढू यूं नो-हाउसफुल २</span> &nbsp; <span lang='urdu'>ڈو یوں نو-ہاؤسفول٢</span></marquee>
        <div class="subtitle">Shaan & Shreya Ghoshal</div>`,
        poster: "banners/15.jpg",
        title:"Shaan & Shreya Ghoshal-Do U Know-Housefull 2"
    },{
        id: 16,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>DIL KAA JO HAAL HAI-BESHARAM</span> &nbsp; <span lang='hindi'>दिल का जो हाल है-बेशरम</span> &nbsp; <span lang='urdu'>دل کا جو حال ہے—بےشرم</span></marquee>
        <div class="subtitle">ABHIJEET BHATTACHARYA, SHREYA GHOSHAL, LALIT PANDIT & RAJEEV BARNWAL </div>`,
        poster: "banners/16.jpg",
        title:"ABHIJEET BHATTACHARYA, SHREYA GHOSHAL, LALIT PANDIT & RAJEEV BARNWAL-DIL KAA JO HAAL HAI-BESHARAM"
    },{
        id: 17,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Tu Hi Yaar Mera (From "Pati Patni Aur Woh")</span> &nbsp; <span lang='hindi'>तू ही यार मेरा-'पति पत्नी और वह'</span> &nbsp; <span lang='urdu'>تو ہی یار میرا-پتی پتنی اور وہ'</span></marquee>
        <div class="subtitle">Arijit Singh, Neha Kakkar & Rochak</div>`,
        poster: "banners/17.jpg",
        title:"Arijit Singh, Neha Kakkar & Rochak-Tu Hi Yaar Mera (From 'Pati Patni Aur Woh')"
    },{
        id: 18,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Laapata-Ek Tha Tiger</span> &nbsp; <span lang='hindi'>लापता-एक था टाइगर</span> &nbsp; <span lang='urdu'>لاپتہ-ایک تھا ٹائیگر</span></marquee>
        <div class="subtitle">KK and Palak Muchhal</div>`,
        poster: "banners/18.jpg",
        title:"KK and Palak Muchhal-Laapata-Ek Tha Tiger"
    },{
        id: 19,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>Nakhre</span> &nbsp; <span lang='hindi'>नखरे</span> &nbsp; <span lang='urdu'>ناخرے</span></marquee>
        <div class="subtitle">Akki On The Mic</div>`,
        poster: "banners/19.jpg",
        title:"Akki On The Mic-Nakhre"
    },
    {
        id: 20,
        songName: `<marquee behavior="lang" direction="-1"><span lang='en'>ONE BOTTLE DOWN</span> &nbsp; <span lang='hindi'>वन बॉटल डाउन</span> &nbsp; <span lang='urdu'>ون بوتل ڈاؤن</span></marquee>
        <div class="subtitle">LIL GOLU & YO YO HONEY SINGH</div>`,
        poster: "banners/20.jpg",
        title:"LIL GOLU & YO YO HONEY SINGH-ONE BOTTLE DOWN"
    }
];

// search data start
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');

    card.href = `#${id}`;
    card.innerHTML = `
                    <img src=${poster} alt="">
                    <div class="content">
                        ${songName}
                    </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');


    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display = "flex";
        } else{
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = 'none';
        } else{
            search_results.style.display = '';
        }
    }
})

Array.from(document.getElementsByClassName("song_item")).forEach((e, i) =>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let master_play_icon = document.getElementById("master_play_icon");
let wave = document.getElementById("wave");

function toggel_play_pause(){
    if (musiq.paused || musiq.currentTime <= 0) {
        musiq.play();
        wave.classList.add("active");
        master_play_icon.classList.remove("bi-play-circle");
        master_play_icon.classList.add("bi-pause-circle");
    } else {
        musiq.pause();
        wave.classList.remove("active");
        master_play_icon.classList.remove("bi-pause-circle");
        master_play_icon.classList.add("bi-play-circle");
    }
};

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName("song_item")).forEach((el)=>{
        el.style.background ='rgb(105, 105, 105, 0)'
    })
}
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el)=>{
        el.classList.remove("bi-pause-circle-fill");
        el.classList.add("bi-play-circle-fill");
    })
}

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
let main_title = document.querySelector(".content marquee h1");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        musiq.src = `song/${index}.mp3`;
        poster_master_play.src = songs[index-1].poster;
        title.innerHTML = songs[index-1].songName;
        main_title.innerText = songs[index-1].title;
        toggel_play_pause();
        makeAllBackground();
        Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
        makeAllPlays();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
    })
})
// index++;

let current_time = document.getElementById("current_time");
let current_end = document.getElementById("current_end");
let seek = document.getElementById("seek");

musiq.addEventListener('timeupdate',()=>{
    let musiq_curr = musiq.currentTime;
    let musiq_dur = musiq.duration;
    let mint1 = Math.floor(musiq_dur/60);
    let sec1 = Math.floor(musiq_dur%60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    current_end.innerText = `${mint1}:${sec1}`;

    let mint2 = Math.floor(musiq_curr / 60);
    let sec2 = Math.floor(musiq_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    current_time.innerText = `${mint2}:${sec2}`;

    let progress_bar = parseInt((musiq_curr / musiq_dur) * 100);
    seek.value = progress_bar;
});

seek.addEventListener("change", ()=>{
    musiq.currentTime = seek.value * musiq.duration / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol_input = document.getElementById("vol_input");

vol_input.addEventListener('change',()=>{
    if (vol_input.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
    } else if(vol_input.value <= 50 && vol_input.value > 0){
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-down-fill");
    }else if(vol_input.value > 50 && vol_input.value <= 100){
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    let vol = vol_input.value;
    musiq.volume = vol / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", ()=>{
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("song_item")).length;
    } else {
        index -= 1; 
    }
    musiq.src = `song/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster;
    title.innerHTML = songs[index-1].songName;
    main_title.innerText = songs[index-1].title;
    toggel_play_pause();
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
});

next.addEventListener("click",()=>{
    index++;
    if (index > Array.from(document.getElementsByClassName("song_item")).length) {
        index = 1;
    }
    musiq.src = `song/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster;
    title.innerHTML = songs[index-1].songName;
    main_title.innerText = songs[index-1].title;
    toggel_play_pause();
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
})


let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_songs = document.getElementsByClassName("pop_songs")[0];

pop_song_right.addEventListener("click", ()=>{
    pop_songs.scrollLeft += 330;
})
pop_song_left.addEventListener("click", ()=>{
    pop_songs.scrollLeft -= 330;
})
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", ()=>{
    item.scrollLeft -= 330;
});

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    switch (a) {
        case 'next':
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-file-earmark-music');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case 'repeat':
            shuffle.classList.add('bi-shuffle');
            shuffle.classList.remove('bi-file-earmark-music');
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.innerHTML = 'random';
            break;
        case 'random':
            shuffle.classList.add('bi-file-earmark-music');
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_musiq = ()=>{
    // index++;
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    musiq.src = `song/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster;
    title.innerHTML = songs[index-1].songName;
    main_title.innerText = songs[index-1].title;
    toggel_play_pause();
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}
const repeat_musiq = ()=>{
    index;
    musiq.src = `song/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster;
    title.innerHTML = songs[index-1].songName;
    main_title.innerText = songs[index-1].title;
    toggel_play_pause();
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}
const random_musiq = ()=>{
    // index++;
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    musiq.src = `song/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster;
    title.innerHTML = songs[index-1].songName;
    main_title.innerText = songs[index-1].title;
    toggel_play_pause();
    makeAllBackground();
    Array.from(document.getElementsByClassName("song_item"))[index-1].style.background ='rgb(105, 105, 105, 0.1)';
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
}
musiq.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_musiq();
            break;
        case 'next':
            next_musiq();
            break;
        case 'random':
            random_musiq();
            break;
    }
});
let options = document.getElementById("options");
const display_manubar = ()=>{
    options.style.right = "0px";
}
const hide_manubar = ()=>{
    options.style.right = "-300px";
}
const media_query_for_mobile = window.matchMedia("(max-width: 399px)");
let playlist = document.querySelector(".menu_side");
let song_side = document.querySelector(".song_side");

function handleHashChange() {
  const isMobile = media_query_for_mobile.matches;
  const hash = location.hash;

  if (isMobile) {
    switch (hash) {
      case "#playlist":
        showSection({ playList: true });
        break;
      default:
        showSection({ home: true });
        break;
    }
  } else {
    // Desktop view: show all except search
    showSection({ desktop: true });
  }
}
function showSection({ playList = false, home = false, desktop = false }) {
  song_side.style.display = (home || desktop) ? "block" : "none";
  playlist.style.display = (playList || desktop) ? "block" : "none";
}

const display_playlist = ()=>{
    if (media_query_for_mobile.matches) location.hash = "#playlist";
}
window.addEventListener("load", handleHashChange);
window.addEventListener("hashchange", handleHashChange);

media_query_for_mobile.addEventListener("change", handleHashChange);
