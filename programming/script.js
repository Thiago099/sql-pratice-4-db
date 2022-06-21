const card = document.getElementById('content')
const card_children = Array
.prototype
.slice
.call(card.children)
.sort((a, b) => a.getElementsByTagName('title')[0].innerText.localeCompare(b.getElementsByTagName('title')[0].innerText));
for (item of card_children) {
  card.appendChild(item)
}
function filter(e){
  text = e.target.value.toLowerCase()
  card.innerHTML = ''
  for (item of card_children) {
    if (item.getElementsByTagName('title')[0].innerHTML.toLowerCase().includes(text)) {
      card.appendChild(item)
    }
  }
}
document
  .getElementById('search')
  .addEventListener('keyup', filter)