// let inputValue = $("#item-input").val();
const list = $(".list");

// function addItem() {
//   // This function will be executed when the button is clicked
//   console.log("click");
// }

$("#add-item").on("click", function () {
  let inputValue = $("#item-input").val();
  if (inputValue !== "") {
    let newLi = $("<li>");
    newLi.text(inputValue);
    newLi.addClass("item");
    $(".scrollable").append(newLi);
    let newSpan = $("<span>");
    newSpan.html("\u00d7");
    newLi.append(newSpan);
  }
});

$(".scrollable").on("click", ".item", function () {
  $(this).addClass("check");
});
