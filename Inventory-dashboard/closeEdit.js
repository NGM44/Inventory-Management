export function closeEditslide()
{
    let dashboard= document.querySelector(".dashboard");
    dashboard.style.width="100%";
    let itemEdit= document.querySelector(".itemEdit");
    itemEdit.style.display="none";
    itemEdit.style.width="0%";
}