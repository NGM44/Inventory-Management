export function displayReport(item){
    let biglist= document.querySelector(".biglist-report");
    
    let card= document.createElement("div");
    card.setAttribute('class', "individual-links-report main-item-report");

    let statusBox= document.createElement("div");
    statusBox.setAttribute('class',"status-report");

    let status= document.createElement("div");
    status.setAttribute('class',item.status.toLowerCase());
    status.innerText= item.status;
    statusBox.appendChild(status);
    card.appendChild(statusBox);

    let serial= document.createElement("div");
    serial.setAttribute('class',"serial-report hiddenview-mob-report");
    serial.innerText= item.id;
    card.appendChild(serial);

    let type= document.createElement("div");
    type.setAttribute('class',"type-report ");
    type.innerText= item.type;
    card.appendChild(type);

    let name= document.createElement("div");
    name.setAttribute('class',"name-report");
    name.innerText= item.name;
    card.appendChild(name);

    let assigned= document.createElement("div");
    assigned.setAttribute('class',"assigned-to-report hiddenview-mob-report");
    assigned.innerText= item.assignedto;
    card.appendChild(assigned);

    let from= document.createElement("div");
    from.setAttribute('class',"from-report");
    from.innerText= item.from;
    card.appendChild(from);

    card.setAttribute('id',item.id);

    biglist.appendChild(card);
    
}