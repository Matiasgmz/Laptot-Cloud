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

// For Gif 

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
// For logo Gif 

const ratio = 0.6;
const option = {
    threshold: ratio,
}

const handleIntersect = function (entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealGifLeftVisible')
        }
        else {
            entry.target.classList.remove('revealGifLeftVisible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.revealGifLeft').forEach(function (r) {
    observer.observe(r)
});