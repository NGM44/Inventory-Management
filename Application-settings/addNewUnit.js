export function addNewUnit() {
    let namevalue = document.getElementById("name");
    let snamevalue = document.getElementById("sname");
    let commentvalue = document.getElementById("comments");
    let properties_tabel = document.querySelector(".properties-add-content");
    let parts_tabel = document.querySelector(".parts-add-content");
    namevalue.value = "";
    snamevalue.value = "";
    commentvalue.value = "";
    properties_tabel.innerHTML = "";
    parts_tabel.innerHTML = "";
    namevalue.focus();
  }