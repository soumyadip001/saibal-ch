// for open side nav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// for close side nav

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// for show sub menu

function opensubmenu() {
  $("#submenuleft").toggle("slow");
}

$(document).ready(function () {
  // for drop down add 'drop' class to li

  $("#withdrop .drop").click(function () {
    $(this)
      .toggleClass("activedrop")
      .siblings(".drop")
      .removeClass("activedrop");
  });

  // on menu click hide nav

  $("#withdrop li").click(function () {
    if (!$(this).hasClass("drop")) {
      closeNav();
    }
  });
});
