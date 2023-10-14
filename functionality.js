// let inputValue = $("#item-input").val();
const list = $(".list");

// function addItem() {
//   // This function will be executed when the button is clicked
//   console.log("click");
// }

function addItem() {
  let inputValue = $("#item-input").val();
  if (inputValue !== "") {
    let newLi = $("<li>");
    let newSpan = $("<span>").text(inputValue);
    newSpan.addClass("text");
    newLi.append(newSpan);
    newLi.addClass("item");
    $(".scrollable").append(newLi);
    let newImg = $("<img>");
    newImg.attr("src", "icons/icons8-trash-can.svg");
    newImg.attr("width", "30px");
    newImg.addClass("trash");
    newLi.append(newImg);
    $("#item-input").val("");
  }
}

$("#item-input").on("keypress", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});

$("#add-item").on("click", function () {
  addItem();
});

$(".scrollable").on("click", "li .text", function () {
  $(this).toggleClass("check");
});

$(".scrollable").on("click", "li .trash", function () {
  $(this).parent().remove();
});

$(".clear").on("click", function () {
  if ($(".item").length > 0) {
    $(".item").remove();
  }
});
