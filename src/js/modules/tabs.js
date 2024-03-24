export default function openTab(e, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
	  tablinks[i].classList.remove("active");
  }
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  e.target.classList.add("active")
  document.getElementById(tabName).classList.add("active");
}
