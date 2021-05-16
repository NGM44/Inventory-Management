import memory from "../memory.js";

export function enterData(item, newData)
{
    let biglist= document.querySelector(".biglist");

    let card= document.createElement("div");
    card.setAttribute('class', "individual-links main-item");

    let integerId= parseInt(item.id);
    card.setAttribute('id',integerId);

    let statusbox= document.createElement("div");
    statusbox.setAttribute('class',"status");
    let status= document.createElement("div");
    let statusClassName= "statustag status " + item.status.toLowerCase() + "-inventory";
    status.setAttribute('class', statusClassName);
    status.innerText= item.status;
    statusbox.appendChild(status);
    card.appendChild(statusbox);

    let serial= document.createElement("div");
    serial.setAttribute('class',"serial");
    serial.innerText= item.serial;
    card.appendChild(serial);

    let type= document.createElement("div");
    type.setAttribute('class',"type");
    type.innerText= item.type;
    card.appendChild(type);

    let name= document.createElement("div");
    name.setAttribute('class',"name");
    name.innerText= item.name;
    card.appendChild(name);

    let assigned= document.createElement("div");
    assigned.setAttribute('class',"assigned-to");
    assigned.innerText= item.assignedto;
    card.appendChild(assigned);

    let from= document.createElement("div");
    from.setAttribute('class',"from");
    from.innerText= item.from;
    card.appendChild(from);

    
    if(newData) biglist.prepend(card);
    else biglist.appendChild(card);
    card.addEventListener('click', displayright,true);
}

export function displayright(event)
{
    let user= memory.data.find(element => element.id == event.currentTarget.id);
    let title= document.querySelector(".titleHere");
    title.innerHTML= user.name;

    let statusValues= ["Alloted", "Broken", "Deprecated","Allotted"];
    let status= document.createElement("select");
    for(let item of statusValues)
    {
        let opt= document.createElement("option");
        opt.innerText= item;
        if(item==user.status) status.selectedIndex=item;
        status.appendChild(opt);
    }
    
    status.value= user.status;
    let ins= document.querySelector(".itemDetails");
    ins.innerHTML="";
    let stalab= document.createElement("label");
    stalab.innerText= "Status : ";
    ins.appendChild(stalab);
    ins.appendChild(status);

    let asslab= document.createElement("label");
    asslab.innerText= "Assigned-to";
    
    let arrusers=[];
    for(let item of memory.data) arrusers.push(item.assignedto);

    let assigned= document.createElement("select");
    for(let item of arrusers)
    {
        let opt= document.createElement("option");
        opt.innerText= item;
        assigned.appendChild(opt);
    }
    assigned.value= user.assignedto;
    assigned.style.marginBottom="10px";

    ins.appendChild(document.createElement("div"));
    ins.appendChild(asslab);
    ins.appendChild(assigned);

    let serial= document.createElement("span");
    serial.setAttribute('class',"block-item");
    serial.innerText= "Serial : " + user.serial;

    let type= document.createElement("span");
    type.setAttribute('class',"block-item");
    type.innerText= "Type : " + user.type;

    let name= document.createElement("span");
    name.setAttribute('class',"block-item");
    name.innerText= "Name : " + user.name;

    let from= document.createElement("span");
    from.setAttribute('class',"block-item");
    from.innerText= "From : " + user.from;

    ins.appendChild(serial);
    ins.appendChild(type);
    ins.appendChild(name);
    ins.appendChild(from);

    let screenWidth= window.matchMedia("(max-width: 768px)");
    let dashboard= document.querySelector(".dashboard");
    let itemEdit= document.querySelector(".itemEdit");
    if(screenWidth.matches)
    {
        dashboard.style.width="100%";
        itemEdit.style.display="block";
        itemEdit.style.width="100%";
        itemEdit.style.zIndex="10";
    }
    else
    {
        dashboard.style.width="73%";
        itemEdit.style.display="block";
        itemEdit.style.width="27%";
    }
}
