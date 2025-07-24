const loc = window.location.search;
const videonum = document.getElementById("ply");
console.log(loc);
document.querySelector("#ply").src;

switch (loc) {
  case "?video=1":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/_roRB6X-1eU?si=BsK01nhiGxruHuhC";
    break;
  case "?video=2":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/_roRB6X-1eU?si=BsK01nhiGxruHuhC";
    break;
  default:
    console.log("입력값이 없어요");
}

function reload() {
  (location || window.location || document.location).reload();
  console.log("리로드!!");
}

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
