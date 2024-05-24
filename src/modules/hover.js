function handleHover(e,color) {//changes bck color when hoverd per request
    const item=e.target;
    item.style.background = color;
}
function handleUnhover(e,color) {//changes bck color when unhoverd per request
    const item=e.target;
    item.style.background = color;
}
export { handleHover, handleUnhover };