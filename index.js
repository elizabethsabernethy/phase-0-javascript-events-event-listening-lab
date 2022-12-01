function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        return alert('I was clicked!');
        }
   return input.addEventListener('click', clickAlert);
}
addingEventListener();