$("#coolMenu a.hideMenu").hide();

$(".menu ul").hide();

$("#coolMenu a").click(function() {

  $("#coolMenu a.showMenu").hide();

  $("#coolMenu a.hideMenu").show();

  $(".menu ul").show();
})

$("#coolMenu a.hideMenu").click(function() {

  $("#coolMenu a.showMenu").show();

  $("#coolMenu a.hideMenu").hide();

  $(".menu ul").hide();
})