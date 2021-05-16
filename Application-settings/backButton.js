export function backButton()
{
    let search_box=document.querySelector(".search-box");
    let search_button=document.querySelector(".search-button");
    let new_unit_button=document.querySelector(".add-new-unit");
    let back_button=document.querySelector(".back-button");
    search_box.style.display="none";
    search_button.style.display="block";
    new_unit_button.style.display="block";
    back_button.style.display="none";

}