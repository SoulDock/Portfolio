window.addEventListener("load", ()=>{
    const LOADER = document.querySelector(".loader");
    LOADER.classList.add("loader--hidden")
    LOADER.addEventListener("transitionend", ()=>{
        document.body.removeChild(LOADER)
        document.querySelector(".title_subtext").classList.add("title_subtext--animated")
    })
})