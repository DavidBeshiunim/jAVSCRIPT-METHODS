var text = "aWesoMe";

document.write(text.toUpperCase());

document.write("<br>");

document.write(text.toLowerCase());

document.write("<br>");

document.write(text.startsWith("aWe"));

document.write("<br>");

document.write("<br>");

for (var i = 1; i <= 100; i = i + 1) {

    document.write(i + " ");

}

document.write("<br>");
document.write("<br>");

var day = new Date().getDay();
document.write(day);
var display_day;


switch (day) {
    case 0:
        display_day = "sunday";
        break;

    case 1:
        display_day = "monday";
        break;

    case 2:
        display_day = "tuesday";
        break;

    case 3:
        display_day = "wednesday";
        break;

    case 4:
        display_day = "thursday";
        break;

    case 5:
        display_day = "friday";
        break;

    case 6:
        display_day = "saturday";
        break;
    default:
        display_day = "Invalid day";
}

document.write("<br>")
document.write("today is " + display_day);