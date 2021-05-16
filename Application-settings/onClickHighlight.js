export function onClickHighlight(event){
    let menu_buttons=document.querySelectorAll(".resources-list-element");
    for(let i of menu_buttons){   
        i.classList.remove("highlight");
        }
    for(let i of menu_buttons){   
    if(i.innerText===event.target.innerText){
        i.classList.toggle("highlight");
    }}
}