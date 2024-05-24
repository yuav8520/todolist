function handleHover(e) {
    const item=e.target;
    item.style.background = "grey";
}
function handleUnhover(e) {
    const item=e.target;
    item.style.background = "white";
}
export { handleHover, handleUnhover };