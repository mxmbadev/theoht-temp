// toggle-blocks
$('div.pricing-cards a.trigger-toggle').on('click', function(e){
    e.preventDefault();
    const idToShow = $(this).attr("href");
    const htmlBlock = $(`#${idToShow}`);

    if(htmlBlock.css('display') == "none"){
      $('.toggle-blocks div').hide();  
      htmlBlock.show();
    }else{
      htmlBlock.hide();
    }
})

// modals
var modal = document.getElementById("pricingModal");
var tyModal = document.getElementById("thankYouModal");
var btn = document.getElementById("pricing");
var tyBtn = document.getElementById("thankYou");
var banner = document.getElementById("pricingBanner");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
tyBtn.onclick = function() {
  tyModal.style.display = "block";
}
banner.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == tyModal) {
    tyModal.style.display = "none";
  }
}