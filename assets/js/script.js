// For text Gif 

const ratioForTextGif = 0.6;
const optionForTextGif = {
    threshold: ratioForTextGif,
}

const handleIntersectForTextGif = function (entriesForTextGif) {
    entriesForTextGif.forEach(function (entryForTextGif) {
        if (entryForTextGif.intersectionRatio > ratioForTextGif) {
            entryForTextGif.target.classList.add('revealGifRightVisible')
        }
        else {
            entryForTextGif.target.classList.remove('revealGifRightVisible')
        }
    });
}

const observerForTextGif = new IntersectionObserver(handleIntersectForTextGif, optionForTextGif)
document.querySelectorAll('.revealGifRight').forEach(function (m) {
    observerForTextGif.observe(m)
});

// For Gif Computer

const ratioForGif = 0.6;
const optionForGif = {
    threshold: ratioForGif,
}

const handleIntersectForGif = function (entriesForGif) {
    entriesForGif.forEach(function (entryForGif) {
        if (entryForGif.intersectionRatio > ratioForGif) {
            entryForGif.target.classList.add('reveal-visible')
        }
        else {
            entryForGif.target.classList.remove('reveal-visible')
        }
    });
}

const observerForGif = new IntersectionObserver(handleIntersectForGif, optionForGif)
document.querySelectorAll('.reveal').forEach(function (m) {
    observerForGif.observe(m)
});

// For Logo Gif 

const ratioLogo = 0.6;
const optionLogo = {
    threshold: ratioLogo,
}

const handleIntersectLogo = function (entriesLogo) {
    entriesLogo.forEach(function (entryLogo) {
        if (entryLogo.intersectionRatio > ratioLogo) {
            entryLogo.target.classList.add('revealGifLeftVisible')
        }
        else {
            entryLogo.target.classList.remove('revealGifLeftVisible')
        }
    });
}

const observerLogo = new IntersectionObserver(handleIntersectLogo, optionLogo)
document.querySelectorAll('.revealGifLeft').forEach(function (r) {
    observerLogo.observe(r)
});

// For Tablette gif 


const ratioTablette = 0.6;
const optionTablette = {
    threshold: ratioTablette,
}

const handleIntersectTablette = function (entriesTablette) {
    entriesTablette.forEach(function (entryTablette) {
        if (entryTablette.intersectionRatio > ratioTablette) {
            entryTablette.target.classList.add('revealGifTabletteVisible')
        }
        else {
            entryTablette.target.classList.remove('revealGifTabletteVisible')
        }
    });
}

const observerTablette = new IntersectionObserver(handleIntersectTablette, optionTablette)
document.querySelectorAll('.revealGifTablette').forEach(function (r) {
    observerTablette.observe(r)
});