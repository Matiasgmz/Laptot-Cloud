// For text Gif 

const ratioForGif = 0.6;
const optionForGif = {
    threshold: ratioForGif,
}

const handleIntersectForGif = function (entriesForGif) {
    entriesForGif.forEach(function (entryForGif) {
        if (entryForGif.intersectionRatio > ratioForGif) {
            entryForGif.target.classList.add('revealGifRightVisible')
        }
        else {
            entryForGif.target.classList.remove('revealGifRightVisible')
        }
    });
}

const observerForGif = new IntersectionObserver(handleIntersectForGif, optionForGif)
document.querySelectorAll('.revealGifRight').forEach(function (m) {
    observerForGif.observe(m)
});

// For logo Gif 

const ratio = 0.6;
const option = {
    threshold: ratio,
}

const handleIntersect = function (entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
        }
        else {
            entry.target.classList.remove('reveal-visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
});