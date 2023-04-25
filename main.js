const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let chanllenge_value = "";
let hight_point = 0;
const input = $(".input");
let done = 0;

let start = true;
function main() {
  random_value();
  handle_input();
  input.onkeyup = () => {
    if (input.value != "" && start === true) {
      handle_time();
      start = false;
    }
  };
  handle_close_mess();
}
const random_value = () => {
  const render_value = $(".chanllenge_value");
  chanllenge_value = "";

  for (let i = 0; i <= 7; i++) {
    const rd = Math.floor(Math.random() * 10);
    chanllenge_value += rd;
  }
  render_value.innerHTML = "";
  render_value.innerHTML = chanllenge_value;
};
const handle_input = () => {
  const point = $(".sum-point");
  const hight_poin = $(".qs");
  input;
  input.addEventListener("change", (e) => {
    let value = e.target.value;
    if (value === chanllenge_value) {
      random_value();
      input.value = "";
      done += 1;
      point.innerHTML = "";
      point.innerHTML = done;
      if (done > hight_point) {
        hight_point = done;
        hight_poin.innerHTML = "";
        hight_poin.innerHTML = hight_point;
      }
    } else {
      input.style.animation = "animation 0.5s ease-in-out";
      setTimeout(() => {
        input.style.animation = "";
      }, 600);
    }
  });
};
const handle_time = () => {
  const endTime = $(".time");
  const mess = $(".mess");
  const sumPoint = $(".sumPoint-number");
  const point = $(".sum-point");

  let number = 60;
  let time = setInterval(() => {
    number -= 1;
    endTime.innerHTML = "";
    endTime.innerHTML = number;
    if (number === 0) {
      clearInterval(time);
      number = 60;
      endTime.innerHTML = number;
      sumPoint.innerHTML = done;
      done = 0;
      point.innerHTML = done;
      mess.style.display = "grid";
      input.value = "";
      input.innerHTML = "";
      start = true;
      input.setAttribute("disabled", " ");
    }
  }, 1000);
};
const handle_close_mess = () => {
  const close = $(".close");
  const mess = $(".mess");
  const sumPoint = $(".sumPoint-number");

  close.onclick = () => {
    mess.style.display = "none";
    sumPoint.innerHTML = "";
    input.removeAttribute("disabled", " ");
  };
};
const clickMenu = () => {};
main();
