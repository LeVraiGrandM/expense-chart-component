const bars = document.querySelectorAll(".bar");
const days = document.querySelectorAll(".day");
const barValues = document.querySelectorAll(".bar-value");
const date = new Date();

fetch("data.json")
   .then((res) => res.json())
   .then((data) => {
      for (let i = 0; i < bars.length; i++) {
         bars[i].style.gridRowStart = 80 - Math.floor(data[i].amount);
      }
      for (let i = 0; i < days.length; i++) {
         days[i].innerHTML = data[i].day;
      }
      for (let i = 0; i < barValues.length; i++) {
         barValues[i].innerHTML = `$ ${data[i].amount}`;
      }
   });

bars[date.getDay() - 1].style.backgroundColor = "hsl(186, 34%, 60%)";
bars.forEach((bar) => {
   bar.addEventListener("mouseover", (e) => {
      bar.style.backgroundColor = "hsl(10, 79%, 75%)";
      bar.style.cursor = "pointer";
   });
   bar.addEventListener("mouseout", () => {
      bar.style.backgroundColor = "hsl(10, 79%, 65%)";
      bars[date.getDay() - 1].style.backgroundColor = "hsl(186, 34%, 60%)";
   });
});
