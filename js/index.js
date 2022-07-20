$("#no").click(function () {
    var offset = $("#no").offset();

    var topOffset = getRandomIntInclusive(-50, 50);
    var leftOffset = getRandomIntInclusive(-50, 50);
  
    // get offset of top and left
    var top = offset.top + topOffset;
    var left = offset.left + leftOffset;

    $("#no").offset({top: top, left: left});
});

$("#yes").click(function () {
    $(".label").replaceWith("<div class='label'>I knew it :3</div>");
    $("#yes").hide();
    $("#no").hide();
});

/**
 * Generates a random number between the range of the min and max number (min and max are inclusive)
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {*} min the minimum number
 * @param {*} max the maximum number
 * @returns a random number between the range of min and max
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}