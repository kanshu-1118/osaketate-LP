const qa = document.querySelectorAll(".qa__tab");
const qa2 = document.querySelectorAll(".qa__tab__2");
const ya = document.querySelectorAll(".yazirusi");
console.log(qa2);

let count = 0
qa.forEach((e,i) => {
    qa[i].addEventListener("click",() => {
        if (count == 0) {
            qa2[i].style.height = "auto";
            qa2[i].style.padding = "32px 0";
            ya[i].src = `./img/Line-2.svg`
            count++;
        }else if (count == 1){
            qa2[i].style.height = "0px";
            qa2[i].style.padding = 0;
            ya[i].src = `./img/Polygon-1.svg`
            count = 0;
        };
    });
});