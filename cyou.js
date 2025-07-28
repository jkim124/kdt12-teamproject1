const loc = window.location.search;
const videonum = document.getElementById("ply");

switch (loc) {
  case "?video=1":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/8Cx3Glnj59o?si=siwCOKnHtHQekE_p";
    const videoinfo = document.querySelector("#info");
    const videoinfofo = document.querySelector("#infotext");
    const videocoment = document.querySelector("#comment");
    console.log(videoinfo);
    videoinfo.classList.add("infoblock");
    console.log(videoinfofo);
    videoinfofo.classList.add("infoblock2");
    videocoment.classList.add("infoblock3");
    break;
  case "?video=2":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/AI0MS-3D_co?si=n2CJoKZFUKDfLTIN";
    const videoinfo2 = document.querySelector("#info2");
    videoinfo2.classList.add("infoblock");
    const videoinfofo2 = document.querySelector("#infotext2");
    const videocoment2 = document.querySelector("#comment2");
    videoinfofo2.classList.add("infoblock2");
    videocoment2.classList.add("infoblock3");
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

/*
vn.innerHTML = (
  <iframe
    id="ply"
    width="1200"
    height="800"
    src="https://www.youtube.com/embed/AuaABDWFs_8?si=GEV4568DR0qsGlut"
    title="음악"
  ></iframe>
);

document.getElementById("ply").innerHTML = (
  <iframe
    id="ply"
    width="1200"
    height="800"
    src="https://www.youtube.com/embed/AuaABDWFs_8?si=GEV4568DR0qsGlut"
    title="음악"
  ></iframe>
);*/
