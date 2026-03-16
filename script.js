// ========================
// ANIME DATA - 14 total
// ========================
const animeData = [
    {
        title: "Your Name",
        img: "https://m.media-amazon.com/images/S/pv-target-images/3b33b787082c712fa4a108355be493ebb42fcd4cd75ccfeb6ec3fae8d19ebf39.jpg",
        rating: "9.5/10", genre: "Drama, Romance,Master peice",
        date: "26 August 2016 (Japan)", duration: "1h 46min 38sec",
        quality: "1080P", badge: "1080P",
        desc: "a 2016 Japanese animated romantic fantasy film directed by Makoto Shinkai, focusing on two teenagers—Tokyo boy Taki and rural girl Mitsuha—who inexplicably swap bodies.",
        link: "https://drive.google.com/file/d/1a5QJYS5K3L-SOhO-9JLMj91VscbQf24A/view?usp=drive_link"
    },
    {
        title: "weathering with you",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSx5tPw_cc--fDzksEpNYYYaPEKeWF_w2wh_m7fuFhtTFlfWhJqtO13q1KAfvNqclxj2I9sw&s=10.jpg",
        rating: "9.5/10", genre: "Romance, Fantasy",
        date: "26 August 2016 (Japan)", duration: "1h 50min 03sec",
        quality: "720P", badge: "720P",
        desc: "Hodaka, a teenage runaway who moves to Tokyo during a time of relentless rain and befriends Hina, an orphan girl with the ability to clear the sky.",
        link: "https://drive.google.com/file/d/1d_SpMMDRaARCAPtcOpyiBTtDjz4B996T/view?usp=drive_link"
    },
    {
        title: "A Silent Voice",
        img: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
        rating: "8.9/10", genre: "Drama, Romance, Slice of Life",
        date: "September 17, 2016", duration: "2h 09min 23sec",
        quality: "1080P", badge: "1080P",
        desc: "A Silent Voice (Koe no Katachi) is a 2016 Kyoto Animation film following Shoya Ishida, a former elementary school bully who becomes an outcast after tormenting Shoko Nishimiya, a deaf transfer student. ",
        link: "https://drive.google.com/file/d/13ogPuqsXxQwme7pkkyXYrnDV7KoVmqrV/view?usp=drive_link"
    },
    {
        title: "I want to eat your pancreas",
        img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1541984865i/39863194.jpg",
        rating: "8.1/10", genre: " coming-of-age and drama",
        date: "1 september 2018", duration: "1h 45min 16sec",
        quality: "1080P", badge: "1080P",
        desc: "an unnamed, detached high school boy who discovers his popular classmate, Sakura Yamauchi, is secretly suffering from a terminal pancreatic disease.",
        link: "https://drive.google.com/file/d/123iCv4iu3v50gLTQpKJ5wfoiDk3fgqaW/view?usp=drive_link"
    },
                //   ----------------------------------------------------------------------next 10 are anime series-----------------------------

    {
        title: "5 Centimeters per Second",
        img: "https://m.media-amazon.com/images/M/MV5BMTI4MDIyNzQyNl5BMl5BanBnXkFtZTcwNDcyNTk2MQ@@._V1_.jpg",
        rating: "7.3/10", genre: "romantic drama,",
        date: "October 10, 2025 (Japan)", duration: "23min/ep",
        quality: "720P", badge: "720P",
        desc: "the long-distance, fading relationship between two childhood friends, Takaki Tono and Akari Shinohara.",
        link: "https://drive.google.com/file/d/1HZugwCm3Z-PGQXrkVJnAPEMXg1O3YM8i/view?usp=drive_link"
    },
    {
        title: "One Piece",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGFFVjtkJLbvDxxn76Mq7MoxhDmyZV_aXIw&s.jpg",
        rating: "9.0/10", genre: "Action, Adventure",
        date: "20 October 1999 (Japan)", duration: "24min/ep",
        quality: "720P", badge: "720P",
        desc: "A boy with rubber powers sets sail with his crew to find the legendary treasure One Piece and become King of the Pirates.",
        link: "#"
    },
    {
        title: "hello world",
        img: "https://w0.peakpx.com/wallpaper/70/887/HD-wallpaper-hello-world-anime-poster.jpg",
        rating: "8.7/10", genre: "Romance/Sci-fi",
        date: "September 20, 2019 (Japan)", duration: "1h 37min 43sec",
        quality: "720P", badge: "720P",
        desc: "teenage Naomi Katagaki meets his future self, Sensei, who traveled back in time to save Ruri Ichigyō, the classmate Naomi falls in love with, from a fatal, comatose-inducing, lightning-strike accident. ",
        link: "https://drive.google.com/file/d/1hMrLxuXbeYjIt0M4CzQ61wVuFgDXJicn/view?usp=drive_link"
    },
    {
        title: "grave of the fireflies",
        img: "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
        rating: "8.5/10", genre: "war drama and tragedy",
        date: " April 16, 1988.(Japan)", duration: "1h 28min 53sec",
        quality: "1080P", badge: "1080P",
        desc: "two young siblings, Seita and his little sister Setsuko, struggling to survive on their own in Japan during the final months of World War II. ",
        link: "https://drive.google.com/file/d/1zViz0gnqf62_XXNMoTeITkVkmmnHAI0O/view?usp=drive_link"
    },
    {
        title: "the tunnel to summer",
        img: "https://img.hankyung.com/photo/202308/BF.34289290.1.jpg",
        rating: "7.2/10", genre: "sci-fi, romance, and drama",
        date: "September 9, 2022 (Japan)", duration: "1h 21min 51sec",
        quality: "720P", badge: "720P",
        desc: "a bittersweet sci-fi romance about two teenagers, Kaoru and Anzu, who investigate the legendary Urashima Tunnel.",
        link: "https://drive.google.com/file/d/13tR6-t9GJwdEOQnGZZec0dqRVKhp8E92/view?usp=drive_link"
    },


// ----------------------------------------------------------5555555555555555555555555----------------------------+-------------------------------------------


    {
        title: "A whisker away",
        img: "https://m.media-amazon.com/images/M/MV5BZWFlZTRhMTMtYWM1Yy00NTViLWExZjktNjVjMWZiM2Y4N2JiXkEyXkFqcGc@._V1_.jpg",
        rating: "7.7/10", genre: "romantic fantasy",
        date: "June 18, 2020. (Japan)", duration: "1h 44min 27sec",
        quality: "720P", badge: "720P",
        desc: "Miyo Sasaki, a girl who uses a magical mask to turn into a cat named Taro to get close to her crush, Kento Hinode.",
        link: "https://drive.google.com/file/d/1SGfy2LdR1mhmDhwjtOj0qkhI7rrNAB5T/view?usp=drive_link"
    },
    {
        title: "To Me, The One Who Loved You",
        img: "https://m.media-amazon.com/images/M/MV5BYmFlNWQ4ZDgtY2JhMy00MmMyLTk2MzAtMGU2YzY2NWI5OWNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: "7.5/10", genre: "science fiction/romance",
        date: "7 October 2022 (Japan)", duration: "1h 38min 33sec",
        quality: "720P", badge: "720P",
        desc: " a sci-fi romance anime film exploring parallel worlds, focusing on Koyomi Hidaka, who attempts to escape with his love, Shiori Sato, after their parents' remarriage makes them stepsiblings.",
        link: "to-me-the-one-who-loved-you.html"
        
    },
    {
        title: "over the sky",
        img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Over_the_Sky_theatrical_release_poster.jpg",
        rating: "6.5/10", genre: "adolescent fantasy drama",
        date: "November 27, 2020. (Japan)", duration: "1h 35min 06sec",
        quality: "720P", badge: "720P",
        desc: "a 2020 Japanese animated fantasy film about Mio, a high school girl in Ikebukuro who gets into a traffic accident while trying to reconcile with her crush, Arata. ",
        link: "https://drive.google.com/file/d/1NjPJWKkqruLRkQ4RQWQQ59eeYsjD3nFV/view?usp=drive_link"
    },
    {
        title: "josee, the tiger and the fish",
        img: "https://resizing.flixster.com/-0x8zDhqrGyT796AAiu0G6fiSTk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4YWQ2Y2ZlLTYwMmQtNDgzZC1iNGVjLTNjOTBlNTRhOGM1Ny5qcGc=",
        rating: "7.5/10", genre: "anime, drama, and romance",
        date: "December 25, 2020 (Japan)", duration: "1h 38min 38sec 35sec",
        quality: "720P", badge: "720P",
        desc: "a heartfelt Japanese animated romance film about Josee .",
        link: "https://drive.google.com/file/d/1d0N9uVFLgmxFRs18hzc05zEraRiyQaCB/view?usp=drive_link"
    },
    {
        title: "the place promised in our early days ",
        img: "https://m.media-amazon.com/images/M/MV5BMTg5ODA4MTY1OV5BMl5BanBnXkFtZTcwODYwMzAzMQ@@._V1_.jpg",
        rating: "7.0/10", genre: "sci-fi romantic drama",
        date: "November 20, 2004. (Japan)", duration: "1h 30min 20sec",
        quality: "720P", badge: "720P",
        desc: "refers to the mysterious, colossal tower built by the Union in Hokkaido. Three teenagers promise to fly there to uncover its secrets, symbolizing a nostalgic, unreachable dream of unity, youth, and lost love.",
        link: "https://drive.google.com/file/d/123xqwo0YGoLaysW6FfjxKjq9-4MnOzQj/view?usp=drive_link"
    },

    // ===========================================10---------------15=======================================

     {
        title: "Fireworks",
        img: "https://upload.wikimedia.org/wikipedia/en/0/02/FireworksAnimeFilm.jpg",
        rating: "6.6/10", genre: "romance and drama",
        date: "August 18, 2017. (Japan)", duration: "1h 30min 03sec",
        quality: "720P", badge: "720P",
        desc: "a sci-fi romance anime film produced by Studio Shaft about Norimichi and Nazuna, classmates navigating young love in a seaside town.",
        link: "https://drive.google.com/file/d/14d1uZXUqidXRzW54Ob7j7Ac0C4pDdEAU/view?usp=drive_link"
    },
    {
        title: "To Me, The One Who Loved You",
        img: "https://m.media-amazon.com/images/M/MV5BYmFlNWQ4ZDgtY2JhMy00MmMyLTk2MzAtMGU2YzY2NWI5OWNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: "7.5/10", genre: "science fiction/romance",
        date: "7 October 2022 (Japan)", duration: "1h 38min 33sec",
        quality: "720P", badge: "720P",
        desc: " a sci-fi romance anime film exploring parallel worlds, focusing on Koyomi Hidaka, who attempts to escape with his love, Shiori Sato, after their parents' remarriage makes them stepsiblings.",
        link: "to-me-the-one-who-loved-you.html"
        
    },
    {
        title: "Dragon Ball Z",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGFFVjtkJLbvDxxn76Mq7MoxhDmyZV_aXIw&s.jpg",
        rating: "8.8/10", genre: "Action, Adventure",
        date: "26 April 1989 (Japan)", duration: "24min/ep",
        quality: "720P", badge: "720P",
        desc: "Goku and his friends defend Earth against powerful enemies including Saiyans, Frieza, and Cell in epic battles.",
        link: "#"
    },
    {
        title: "Bleach",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGFFVjtkJLbvDxxn76Mq7MoxhDmyZV_aXIw&s.jpg",
        rating: "8.2/10", genre: "Action, Supernatural",
        date: "5 October 2004 (Japan)", duration: "24min/ep",
        quality: "720P", badge: "720P",
        desc: "Ichigo Kurosaki gains the powers of a Soul Reaper and must protect humans from evil spirits called Hollows.",
        link: "https://t.me/onlyaboutanime/3820"
    },
    {
        title: "comming soon",
        img: "https://i.ibb.co/LX54Tm9F/Purple-Black-Illustrative-Anime-Story-Book-Cover-A4-Document.jpg",
        rating: "8.7/10", genre: "Action, Comedy",
        date: "5 October 2015 (Japan)", duration: "24min/ep",
        quality: "1080P", badge: "1080P",
        desc: "Small collection, Big quality Har anime carefully select ki gayi hai tumhare liye.",
        link: "movie.html"
    }
];

// ========================
// MODAL FUNCTIONS
// ========================
function openModal(index) {
    const anime = animeData[index];
    document.getElementById('modalImg').src            = anime.img;
    document.getElementById('modalTitle').innerText    = anime.title;
    document.getElementById('modalRating').innerText   = anime.rating;
    document.getElementById('modalGenre').innerText    = anime.genre;
    document.getElementById('modalDate').innerText     = anime.date;
    document.getElementById('modalDuration').innerText = anime.duration;
    document.getElementById('modalQuality').innerText  = anime.quality;
    document.getElementById('modalBadge').innerText    = anime.badge;
    document.getElementById('modalDesc').innerText     = anime.desc;

    // Download button - seedha link khulega
    const btn = document.querySelector('.modal-download');
    btn.disabled = false;
    btn.style.background = '';
    btn.innerHTML = '<i class="fa-solid fa-download"></i> Download Now';
    btn.onclick = function() {
        window.open(anime.link, '_blank');
    };

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalBtn() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function closeModal(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        closeModalBtn();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalBtn();
});

// ========================
// SLIDER
// ========================
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let current = 0;
let autoSlide;

slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { goToSlide(i); resetAutoSlide(); });
    dotsContainer.appendChild(dot);
});

function goToSlide(index) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.dot')[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.querySelectorAll('.dot')[current].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => { goToSlide(current + 1); resetAutoSlide(); });
document.querySelector('.prev').addEventListener('click', () => { goToSlide(current - 1); resetAutoSlide(); });

function startAutoSlide() { autoSlide = setInterval(() => goToSlide(current + 1), 3500); }
function resetAutoSlide() { clearInterval(autoSlide); startAutoSlide(); }
startAutoSlide();

// ========================
// MOBILE MENU
// ========================
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
});

// ========================
// CARD DOWNLOAD BUTTON
// ========================
function startDownload(btn) {
    btn.classList.add('downloading');
    btn.querySelector('.btn-icon').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    btn.querySelector('.btn-text').innerText = 'Downloading...';
    btn.disabled = true;
    setTimeout(() => {
        btn.querySelector('.btn-icon').innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        btn.querySelector('.btn-text').innerText = 'Downloaded!';
        btn.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
    }, 3000);
}