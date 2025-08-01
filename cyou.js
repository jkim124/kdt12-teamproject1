const loc = window.location.search;
const videonum = document.getElementById("ply");
const texta = document.querySelector("#commenttext");
const profilehead = document.getElementById("profile_head");
const profilebutton = document.getElementById("profile_bt");

switch (loc) {
  case "?video=1":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/CP8jRf1XC48?autoplay=1&mute=0";
    const videoinfo = document.querySelector("#info");
    const videoinfofo = document.querySelector("#infotext");
    videoinfo.classList.add("infoblock");
    videoinfofo.classList.add("infoblock");
    break;
  case "?video=2":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/BsZAsGu_tnM?autoplay=1&mute=0";
    const videoinfo2 = document.querySelector("#info2");
    const videoinfofo2 = document.querySelector("#infotext2");
    videoinfo2.classList.add("infoblock");
    videoinfofo2.classList.add("infoblock");
    break;
  case "?video=3":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/4iA__wS4gjU?autoplay=1&mute=0";
    const videoinfo3 = document.querySelector("#info3");
    const videoinfofo3 = document.querySelector("#infotext3");
    videoinfo3.classList.add("infoblock");
    videoinfofo3.classList.add("infoblock");
    break;
  case "?video=4":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/QJAewX4fnPc?autoplay=1&mute=0";
    const videoinfo4 = document.querySelector("#info4");
    const videoinfofo4 = document.querySelector("#infotext4");
    videoinfo4.classList.add("infoblock");
    videoinfofo4.classList.add("infoblock");
    break;
  case "?video=5":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/PMTSstSfwzk?autoplay=1&mute=0";
    const videoinfo5 = document.querySelector("#info5");
    const videoinfofo5 = document.querySelector("#infotext5");
    videoinfo5.classList.add("infoblock");
    videoinfofo5.classList.add("infoblock");
    break;
  case "?video=6":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/dUXOHNHszfU?autoplay=1&mute=0";
    const videoinfo6 = document.querySelector("#info6");
    const videoinfofo6 = document.querySelector("#infotext6");
    videoinfo6.classList.add("infoblock");
    videoinfofo6.classList.add("infoblock");
    break;
  case "?video=7":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/c-ufViauofo?autoplay=1&mute=0";
    const videoinfo7 = document.querySelector("#info7");
    const videoinfofo7 = document.querySelector("#infotext7");
    videoinfo7.classList.add("infoblock");
    videoinfofo7.classList.add("infoblock");
    break;
  case "?video=8":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/GQw1riwVPyU?autoplay=1&mute=0";
    const videoinfo8 = document.querySelector("#info8");
    const videoinfofo8 = document.querySelector("#infotext8");
    videoinfo8.classList.add("infoblock");
    videoinfofo8.classList.add("infoblock");
    break;
  case "?video=9":
    document.querySelector("#ply").src =
      "https://www.youtube.com/embed/O9U65Ik4GrU?autoplay=1&mute=0";
    const videoinfo9 = document.querySelector("#info9");
    const videoinfofo9 = document.querySelector("#infotext9");
    videoinfo9.classList.add("infoblock");
    videoinfofo9.classList.add("infoblock");
    break;
  default:
    console.log("입력값이 없어요");
}

function reload() {
  (location || window.location || document.location).reload();
  console.log("리로드!!");
}

profilebutton.addEventListener("change", function () {
  if (this.checked) {
    profilehead.style.display = "none";
  } else {
    profilehead.style.display = "block";
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
  console.error("텍스트에어리어 확장 메인페이지에선 동작안함");
}

try {
  texta.addEventListener("focus", function () {
    this.placeholder = "";
  });
  texta.addEventListener("blur", function () {
    if (this.value === "") {
      texta.placeholder = "댓글 추가...";
    }
  });
} catch (error) {
  console.error("플레이스홀더리셋 메인페이지에선 동작안함");
}

try {
  const likee = document.getElementsByClassName("likebtn");
  const hatee = document.getElementsByClassName("hatebtn");
  let likenum = Number(
    document.getElementsByClassName("likecnt")[Number(loc.slice(-1)) - 1]
      .textContent
  );
  let lfg = 0;
  let hfg = 0;
  likee[Number(loc.slice(-1)) - 1].addEventListener("click", function () {
    if (lfg == 1) {
      //라이크버튼 오프
      document.getElementsByClassName("likebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML =
        '<i class="fa-regular fa-thumbs-up">' +
        "</i>" +
        '<p class="likecnt">' +
        "</p>";
      lfg = 0;
      if (likenum > 0) {
        document.getElementsByClassName("likecnt")[
          Number(loc.slice(-1)) - 1
        ].textContent = likenum;
      } else {
        document.getElementsByClassName("likecnt")[
          Number(loc.slice(-1)) - 1
        ].textContent = null;
      }
    } else if (hfg == 1) {
      //싫어요 버튼 on일땐 싫어요 버튼 해체
      //좋아요 버튼 on으로
      document.getElementsByClassName("likebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML =
        '<i class="fa-solid fa-thumbs-up">' +
        "</i>" +
        '<p class="likecnt">' +
        "</p>";
      document.getElementsByClassName("hatebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML = '<i class="fa-regular fa-thumbs-down">' + "</i>";
      lfg = 1;
      hfg = 0;
      document.getElementsByClassName("likecnt")[
        Number(loc.slice(-1)) - 1
      ].textContent = likenum + 1;
    } else {
      //라이크 버튼 온
      document.getElementsByClassName("likebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML =
        '<i class="fa-solid fa-thumbs-up">' +
        "</i>" +
        '<p class="likecnt">' +
        "</p>";
      lfg = 1;
      document.getElementsByClassName("likecnt")[
        Number(loc.slice(-1)) - 1
      ].textContent = likenum + 1;
    }
  });

  hatee[Number(loc.slice(-1)) - 1].addEventListener("click", function () {
    if (hfg == 1) {
      //헤이트버튼 오프
      document.getElementsByClassName("hatebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML = '<i class="fa-regular fa-thumbs-down">' + "</i>";
      hfg = 0;
    } else if (lfg == 1) {
      //좋아요 버튼 on일땐 좋아요 버튼 해체
      //싫어요 버튼 on
      document.getElementsByClassName("hatebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML = '<i class="fa-solid fa-thumbs-down">' + "</i>";
      document.getElementsByClassName("likebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML =
        '<i class="fa-regular fa-thumbs-up">' +
        "</i>" +
        '<p class="likecnt">' +
        "</p>";
      hfg = 1;
      lfg = 0;
      if (likenum > 0) {
        document.getElementsByClassName("likecnt")[
          Number(loc.slice(-1)) - 1
        ].textContent = likenum;
      } else {
        document.getElementsByClassName("likecnt")[
          Number(loc.slice(-1)) - 1
        ].textContent = null;
      }
    } else {
      //헤이트 버튼 온
      document.getElementsByClassName("hatebtn")[
        Number(loc.slice(-1)) - 1
      ].innerHTML = '<i class="fa-solid fa-thumbs-down">' + "</i>";
      hfg = 1;
    }
  });
} catch (error) {
  console.error("좋아요싫어요 버튼 메인페이지에선 동작안함");
}

function commentsb() {
  const savetext = document.querySelector("#commenttext").value;
  document.querySelector("#commenttext").value = "";
  document.getElementById("combt").disabled = true;
  document.activeElement.blur();
  document.querySelector("#commentul").innerHTML =
    '<li class="comli">' +
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
    document.querySelector("#commentul").innerHTML;
  texta.placeholder = "댓글 추가...";
}

function refresharea() {
  document.querySelector("#commenttext").value = "";
  document.getElementById("combt").disabled = true;
  document.activeElement.blur();
  texta.placeholder = "댓글 추가...";
}
