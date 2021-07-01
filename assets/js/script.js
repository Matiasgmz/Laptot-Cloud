const ratioForTabLeft = 0.6;
const optionForTabLeft = {
    threshold: ratioForTabLeft,
}

const handleIntersectForTabLeft = function (entriesForTabLeft) {
    entriesForTabLeft.forEach(function (entryForTabLeft) {
        if (entryForTabLeft.intersectionRatio > ratioForTabLeft) {
            entryForTabLeft.target.classList.add('revealGifLeftVisible')
        }
        else {
            entryForTabLeft.target.classList.remove('revealGifLeftVisible')
        }
    });
}

const observerForTabLeft = new IntersectionObserver(handleIntersectForTabLeft, optionForTabLeft)
document.querySelectorAll('.revealGifLeft').forEach(function (m) {
    observerForTabLeft.observe(m)
});