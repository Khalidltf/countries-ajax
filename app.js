const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  console.log("clicked");

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("success 200 ok");
      const countries = JSON.parse(this.response);
      countries.forEach((country) => {
        const div = document.createElement("div");
        div.classList.add("cardContent");
        const img = document.createElement("img");
        img.src = country.flags.png;
        img.alt = country.flags.alt;
        div.insertAdjacentHTML("beforeend", `<h4>${country.name.common}</h4>`);
        div.append(img);
        document.getElementById("card").appendChild(div);
      });
      button.disabled = true;
      button.textContent = "clicked";
    }
  };

  xhr.send();
});
