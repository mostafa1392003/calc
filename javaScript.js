let inDay = $("#day");
let inmonth = $("#month");
let inyear = $("#year");
let validDay = $("#validDay");
let validMonth = $("#validMonth");
let validyear = $("#validYear");
let calcedYear = $("#calcedYear");
let calcedMonth = $("#calcedMonth");
let calcedDay = $("#calcedDay");

function calc() {
  let calcDay = Number($(inDay).val());
  let calcMonth = Number($(inmonth).val());
  let calcyear = Number($(inyear).val());
  if (
    calcDay > 30 ||
    calcDay < 1 ||
    calcMonth > 12 ||
    calcMonth < 1 ||
    calcyear > 2023 ||
    calcyear < 1
  ) {
    if (calcDay > 30 || calcDay < 1) {
      $(inDay).css("border", "1px solid #f00");
      $("div.day p").css({
        color: "red",
      });
      $(validDay).css("display", "block");
    }
    if (calcMonth > 12 || calcMonth < 1) {
      $(inmonth).css("border", "1px solid #f00");
      $("div.month p").css({
        color: "red",
      });
      $(validMonth).css("display", "block");
    }

    if (calcyear > 2023 || calcyear < 1) {
      $(inyear).css("border", "1px solid #f00");
      $("div.year p").css({
        color: "red",
      });
      $(validyear).css("display", "block");
    }
  } else {
    $(inDay).css("border", "1px solid #aaa");
    $("div.day p").css({
      color: "#888",
    });
    $(validDay).css("display", "none");

    $(inmonth).css("border", "1px solid #aaa");
    $("div.month p").css({
      color: "#888",
    });
    $(validMonth).css("display", "none");
    $(inyear).css("border", "1px solid #aaa");
    $("div.year p").css({
      color: "#888",
    });
    $(validyear).css("display", "none");

    $(calcedYear).text( Number(2023-calcyear) );
    $(calcedMonth).text( Number(6-calcMonth) );
    $(calcedDay).text( Number(23-calcDay) );
    
    
  }
}
