






const list = [];
document.querySelectorAll('.as-imagegrid-item-title').forEach(item => list.push(item.innerText.replace("\nSupport","")));
list