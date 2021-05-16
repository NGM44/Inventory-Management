export function removeSlide()
{
    let formError= document.querySelectorAll(".form-error");
    for(let item of formError) item.style.display="none";

    let dashboard= document.querySelector(".dashboard");
    dashboard.style.width="100%";
    let addunit= document.querySelector(".addunit");
    addunit.style.display="none";
    addunit.style.width="0%";

    let clearForm= document.querySelector(".details");
    clearForm.reset();
}

export function addSlide()
{
    let dashboard= document.querySelector(".dashboard");
    let addunit= document.querySelector(".addunit");
    const screenWidth= window.matchMedia("(max-width: 768px)");
    if(screenWidth.matches)
    {
        dashboard.style.width="100%";
        addunit.style.display="block";
        addunit.style.width="100%";
        addunit.style.zIndex="10";
    }
    else
    {
        dashboard.style.width="73%";
        addunit.style.display="block";
        addunit.style.width="27%";
    }
}