export const MiscServices = {
  transitionLabel(hide, show, input) {
    const hiding  = document.getElementById(hide)
    const showing = document.getElementById(show)
    const inputText = document.getElementById(input)
    console.log(inputText.value)
    if(window.getComputedStyle(showing).display === "none" && inputText.value === "") {
      hiding.style.display = "none"
      showing.style.display = "block"
    }
  },

}

export default {
  MiscServices
}