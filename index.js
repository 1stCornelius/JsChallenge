  const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const Rating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
  

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      Rating.innerHTML = rating.innerHTML
    })
  })
})

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContainer.style.display = "block"
 
})