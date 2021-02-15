const initMovieBtn = document.querySelector("#init-movie > button");
const audioEl = document.querySelector("audio");
const body = document.querySelector("body");

initMovieBtn.addEventListener("click", (event) => {

    const parentElement = event.path[1];

    console.log(parentElement);
    
    window.scrollTo(0, 0);

    body.style.overflow = "hidden";

    parentElement.style.opacity = 0;
    parentElement.style.display = "none";

    document.querySelectorAll("#long-time-ago, #star-wars-logo, #intro-resume > div").forEach(el => {

        el.style.animationPlayState = "running";

    });

    setTimeout(() => {
        audioEl.play();
    }, 7500);

});