const loc = window.location.search;
const videonum = document.getElementById("ply");
const texta = document.querySelector("#commenttext");

switch (loc) {
  case "?video=1":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/8Cx3Glnj59o?si=siwCOKnHtHQekE_p";
    const videoinfo = document.querySelector("#info");
    const videoinfofo = document.querySelector("#infotext");
    videoinfo.classList.add("infoblock");
    videoinfofo.classList.add("infoblock");
    break;
  case "?video=2":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/AI0MS-3D_co?si=n2CJoKZFUKDfLTIN";
    const videoinfo2 = document.querySelector("#info2");
    const videoinfofo2 = document.querySelector("#infotext2");
    videoinfo2.classList.add("infoblock");
    videoinfofo2.classList.add("infoblock");
    break;
  case "?video=3":
    break;
  default:
    console.log("입력값이 없어요");
}

function reload() {
  (location || window.location || document.location).reload();
  console.log("리로드!!");
}

const profilebutton = document.getElementById("profile_bt");
const profilehead = document.getElementById("profile_head");

profilebutton.addEventListener("click", function () {
  if (profilehead.style.display === "none") {
    profilehead.style.display = "block";
  } else {
    profilehead.style.display = "none";
  }
});

try {
  texta.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    if (texta.value) {
      document.getElementById("combt").disabled = false;
    } else {
      document.getElementById("combt").disabled = true;
    }
  });
} catch (error) {
  console.error("메인페이지에선 동작안함"); // 에러 메시지 출력
}

function commentcnt() {}

function commentsb() {
  const savetext = document.querySelector("#commenttext").value;
  document.querySelector("#commenttext").value = "";
  document.getElementById("combt").disabled = true;
  document.activeElement.blur();
  document.querySelector("#commentlist").innerHTML =
    "<li>" +
    '<img class="rimg" src="./image/profile.PNG">' +
    '<div class ="rdiv">' +
    '<i class="fa-solid fa-ellipsis-vertical">' +
    "</i>" +
    "</div>" +
    '<p class ="rp">' +
    "JYKIM" +
    "</p>" +
    '<p class ="rp">' +
    savetext +
    "</p>" +
    "</li>" +
    document.querySelector("#commentlist").innerHTML;
}
function refresharea() {
  document.querySelector("#commenttext").value = "";
  document.getElementById("combt").disabled = true;
  document.activeElement.blur();
}
