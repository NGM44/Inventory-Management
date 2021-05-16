export function searchedData() {
  let search_box_value = document.querySelector(".search-box");
  let item_name = document.querySelectorAll(".resources-list-element-name");
  let empty_span=document.querySelector(".no_results")
  let list_container=document.querySelector(".resources-list");
	for (let i of item_name) {
		if (i.innerText.toLowerCase().includes(search_box_value.value.toLowerCase())) {
			i.parentNode.style.display = 'flex';
             empty_span.style.display='none';
		} else {
			i.parentNode.style.display = 'none';
            if(list_container.innerText===""){
            empty_span.style.display='block';
      }
		}
	}
}