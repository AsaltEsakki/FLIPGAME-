// Get Sections
let section = document.querySelector("section");
let player_live_count = document.querySelector("span");
let player_live = 6;

//Linking The Text
player_live_count.style.color = "white"
player_live_count.textContent = player_live;

//Generating Data...
//To get images in DOM we Just Generate an Array Of Object To generate an array of Object Of
//Image and Src...
const getData = () => [
  { imgSrc: "./image/img-1.png", name: "First" },
  { imgSrc: "./image/img-2.png", name: "Second" },
  { imgSrc: "./image/img-3.png", name: "Third" },
  { imgSrc: "./image/img-4.png", name: "Fourth" },
  { imgSrc: "./image/img-5.png", name: "Fifth" },
  { imgSrc: "./image/img-6.png", name: "Sixth" },
  { imgSrc: "./image/img-7.png", name: "Seventh" },
  { imgSrc: "./image/img-8.png", name: "Eighth" },
  { imgSrc: "./image/img-1.png", name: "First" },
  { imgSrc: "./image/img-2.png", name: "Second" },
  { imgSrc: "./image/img-3.png", name: "Third" },
  { imgSrc: "./image/img-4.png", name: "Fourth" },
  { imgSrc: "./image/img-5.png", name: "Fifth" },
  { imgSrc: "./image/img-6.png", name: "Sixth" },
  { imgSrc: "./image/img-7.png", name: "Seventh" },
  { imgSrc: "./image/img-8.png", name: "Eighth" },
];
// Randamising The Images...!!

const Random = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Generate A Component
const Card_Generate = () => {
  const data = Random();
  // console.log(data);
  data.forEach((elem, index) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    image.classList = "image";
    back.classList = "back";
    // console.log(elem);

    // Adding cards To Sections...!!--> Append
    image.src = elem.imgSrc;
    card.setAttribute("name", elem.name);

    section.appendChild(card);
    card.appendChild(image);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggle");
      const click_play = new Audio("Mouse-Click.mp3");
      click_play.play();
      check_card(e);
    });
  });

  const check_card = (e) => {
    setTimeout(() => {
      const click_play = new Audio("Mouse-Click.mp3");
      audio.play();
    }, 100);
    const card_click = e.target;
    card_click.classList.add("flip_back");
    const flip_cards = document.querySelectorAll(".flip_back");
    const toggle_cards = document.querySelectorAll(".toggle");
    console.log(flip_cards);

    if (flip_cards.length === 2) {
      //Choosen Correct Option...!!!

      if (
        flip_cards[0].getAttribute("name") ===
        flip_cards[1].getAttribute("name")
      ) {
        console.log("matched");

        flip_cards.forEach((card) => {
          card.classList.remove("flip_back");
          card.style.pointerEvents = "none";
          let audio = new Audio("correct.mp3");
          audio.play();
        });
      }
      //Choosen Wrong Option...!!!
      else {
        console.log("wrong");

        flip_cards.forEach((card) => {
          card.classList.remove("flip_back");
          setTimeout(() => card.classList.remove("toggle"), 1000);
        });
        player_live--;
        player_live_count.textContent = player_live;

        // If You LOOSE YHE GAME...!!!

        if (player_live === 0) {
          restart();
          player_live_count.textContent = "🤣🤣You Loos Again...!!! 🤣🤣";
          setTimeout(() => {
            let audio = new Audio("wrong.mp3");
            audio.play();
          }, 1000);
        }
      }
    }

    // If Game WON...!!!
    if (toggle_cards.length === 16) {
      player_live_count.textContent = " You WoN The Game...!!!!";
      const audio = new Audio("Crore.mp3");
      audio.play();
      restart();
    }
  };
};
const restart = () => {
  let cardData = Random();
  let img = document.querySelectorAll(".image");
  let cards = document.querySelectorAll(".card");

  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggle");
    // Randomizing the Images...!!!
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      img[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  player_live = 6;

  setTimeout(() => {
    player_live_count.textContent = player_live;
  }, 3000);
};

Card_Generate();
