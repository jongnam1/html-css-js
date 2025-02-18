let dice = [
  "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826866.png",
  "https://cdn-icons-png.flaticon.com/128/1626/1626822.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826868.png",
]

let myDice = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img")
  img.alt = `${index + 1}번째 주사위`
  return img
})

let comDice = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img")
  img.alt = `${index + 1}번째 주사위`
  return img
})

const divs = document.querySelectorAll("#root > div")

const makeNumber = () => Math.floor(Math.random() * 6)

divs.forEach((div, index) => {
  div.innerHTML = null

  if (index === 0) {
    myDice.forEach((img) => {
      img.src = dice[makeNumber()]
      div.appendChild(img)
    })
  } else {
    comDice.forEach((img) => {
      img.src = dice[makeNumber()]
      div.appendChild(img)
    })
  }
})

const button = document.querySelector("button")

const body = document.querySelector("body")
const div = document.createElement("div")
const p1 = document.createElement("p")
const p2 = document.createElement("p")
div.append(p1, p2)
div.style.display = "none"
div.className = "score"

body.append(div)

button.onclick = () => {
  div.style.display = "none"
  let time = 0
  myDice.forEach((img) => {
    img.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(1800deg)" }],
      { duration: 3000 }
    )
  })
  comDice.forEach((img) => {
    img.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(1800deg)" }],
      { duration: 3000 }
    )
  })

  const id = setInterval(() => {
    myDice.forEach((img) => {
      img.src = dice[makeNumber()]
    })
    comDice.forEach((img) => {
      img.src = dice[makeNumber()]
    })
  }, 100)

  const countId = setInterval(() => {
    if (time === 3) {
      clearInterval(id)
      clearInterval(countId)
      time = 0

      let myScore = 0
      let comScore = 0

      myDice.forEach((img) => {
        const index = dice.findIndex((item) => item === img.src)
        if (index >= 0) {
          myScore += index + 1
        }
      })
      comDice.forEach((img) => {
        const index = dice.findIndex((item) => item === img.src)
        if (index >= 0) {
          comScore += index + 1
        }
      })

      p1.innerText = `${myScore} : ${comScore}`
      p2.innerText =
        myScore === comScore
          ? "비김"
          : `You ${myScore > comScore ? "Win" : "Lose"}`

      div.style.display = "block"

      return
    }
    time += 1
  }, 1000)
}
