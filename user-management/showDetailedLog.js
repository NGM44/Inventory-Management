export function showDetailedLog(){
    let target = document.getElementById('detailed-log');
    let p1 = document.createElement('p');
    p1.innerHTML = "14 February 2021 Fixture HDD-00015 property Vendor changed, Seagate => Seagate2 by Owner";
    let p2 = document.createElement('p');
    p2.innerHTML = "31 January 2021 Fixture HDD-00015 assigned to Araceli Holland by Owner";
    let p3 = document.createElement('p');
    p3.innerHTML = "31 January 2021 Fixture HDD-00015 status changed to Assigned by Owner";
    let p4 = document.createElement('p');
    p4.innerHTML = "30 January 2021 Fixture HDD-00015 extracted from Computer PC-00015 by Owner";
    target.append(p1,p2,p3,p4);
    let link = document.getElementById('detailed-log-link');
    target.removeChild(link);
}