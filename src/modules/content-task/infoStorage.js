const initialLists = JSON.parse(localStorage.getItem('dynamicLists')) || ['list1', 'list2', 'list3'];
function loadList(listName) {
    fetch(`${listName}.json`)
        .then(response => response.json())
        .then(data => {
            displayList(data);
        })
        .catch(error => {
            console.error('Error loading list:', error);
        });
}
export { loadList };