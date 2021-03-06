var $home = $("<div class =\"homedesign\"><header><h1>Love Vs The Earth</h1><h2>Select a User</h2></header><div class=\"characters_select \"><div class=\"easy hvr-grow user\"><img id =\"easy_character\"src=\"http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png\" alt=\"Easy_Character\" /><p>Easy Mode</p></div><div class=\"hard user hvr-grow\"><img id =\"hard_character\" src=\"http://img13.deviantart.net/cb85/i/2011/126/d/5/hippie_mom_by_ydocnameloc-d3frct2.png\" alt=\"hard_character\" /><p>Hard Mode</p></div></div></div>");

var $welcome = $("<div class=\"welcome\"><h1 id =\"namePrompt\"></h1><p>This is a game of chance.</p><ol><li>Click \"go\" and your randomly selected good deed will battle the earth's bad deed.</li><li>The two actions will battle head to head. </li><li> If your action is greater then the value of the earth’s action, you win that round.</li><li>If the earth’s action has more value, the earth wins that round and subtracts that value from the total.</li><li>To save the world you must get 10 positivity points.</li><li>You lose if you let the earth get to negative 10 points.</li><li>Good luck and may the goodwill of men (and women) be with you. </li></ol></p><button class=\"hvr-grow\"id =\"beginButton\" type=\"button\" name=\"button\">Begin</button><button class=\"hvr-grow\" id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button></div>");

var $battle = $("<div class=\"battle\"><h1>Battle</h1><div class=\"user\"><img src=\"http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png\" id = \"user-image\" alt=\"user\" /></div><div class=\"arena\"><p>Points</p><button id=\"go_button\" type=\"button\"name=\"button\">Go</button></div><div class=\"computer\"><img src=\"http://www.villa-ilona.eu/.cm4all/iproc.php/globe-308335_1280.png/downsize_1280_0/globe-308335_1280.png\" id = \"computer-icon\"></div></div><div class=\"icon-container\"><div class=\"battle_icon_user\" id = \"user-icons\"><img src=\"http://previews.123rf.com/images/lenm/lenm1204/lenm120400031/13131936-Illustration-of-a-Smiley-Offering-Hugs-and-Kisses-Stock-Illustration-kiss.jpg\" id=\"user-icon-1\"/><img src=\"http://cliparting.com/wp-content/uploads/2016/05/Tree-clipart-2.png\" id=\"user-icon-2\" /><img src=\"http://www.iconsplace.com/icons/preview/blue/listen-256.png\" id=\"user-icon-3\" /></div><div id=\"computer_icons_all\"class=\"computer_icon_battle\"><img src=\"https://cdn3.iconfinder.com/data/icons/glypho-signs/64/user-waiting-room-512.png\" id =\"earth-icon-3\" /><img src=\"https://cdn4.iconfinder.com/data/icons/automotive-maintenance/100/automotive-flat-tire-22-512.png\" id =\"earth-icon-2\" /><img src=\"https://fancyladydoctor.files.wordpress.com/2015/04/thief-512.png\" id =\"earth-icon-1\" /></div></div><button id =\"homeButton\"type=\"button\" name=\"button\">Back Home</button></div>");

var $result = $("<div class=\"result\"></div><div class=\"end\"><h1>Copy about \"you win\" or \"you lose\"</h1><button type=\"button\" id =\"homeButton\" name=\"button\">Play Again</button></div>");

var $scoreboard = $("<div class='scoreboard'></div>");

var username;
var player;
var love = 0;
var endGame;

function PlayerConstructor(points1, message1, points2, message2, points3, message3) {
    this.actions = [{
        pointVal: points1,
        str: message1
    }, {
        pointVal: points2,
        str: message2
    }, {
        pointVal: points3,
        str: message3
    }];
}

var earth = new PlayerConstructor(-1, 'You were robbed!', -2, 'You got a flat tire!', -3, 'You missed your flight and are now stuck in the terminal for 5 hours!');

PlayerConstructor.prototype.getIndex = function() {
    return Math.floor(Math.random() * this.actions.length);
};

function renderHome() {
    $(".wrapper").empty();
    $(".wrapper").append($home);

    $("img").on('click', function() {
        var imgSrc;
        var userImg1;
        var userImg2;
        var userImg3;

        if (this.alt === 'Easy_Character') {
            player = new PlayerConstructor(2, 'You hugged a stranger!', 4, 'You planted a tree!', 6, 'You lent an empathetic ear!');
            imgSrc = 'http://www.clipartbest.com/cliparts/dT8/ojg/dT8ojgLxc.png';
            userImg1 = 'http://previews.123rf.com/images/lenm/lenm1204/lenm120400031/13131936-Illustration-of-a-Smiley-Offering-Hugs-and-Kisses-Stock-Illustration-kiss.jpg';
            userImg2 = 'http://cliparting.com/wp-content/uploads/2016/05/Tree-clipart-2.png';
            userImg3 = 'http://www.iconsplace.com/icons/preview/blue/listen-256.png';

        } else {
            player = new PlayerConstructor(2, 'You fed the hungry!', 3, 'You planned a 5k for local charity!', 4, 'You adopted an orphan!');
            imgSrc = 'http://img13.deviantart.net/cb85/i/2011/126/d/5/hippie_mom_by_ydocnameloc-d3frct2.png';
            userImg1 = './assets/images/TGW_categoryicons_food_234.png';
            userImg2 = './assets/images/running-man-xxl.png';
            userImg3 = './assets/images/baby-xxl.png';
        }
        // render the easy character page
        username = prompt("Hello peace-maker. What is your name?");
        if (username === null || username === "") {
          alert('You must tell us your name!');
          $(".wrapper").empty();
          renderHome();
        } else {
        $(".wrapper").empty();
        $(".wrapper").append($welcome);
        $('html, body').animate({ scrollTop: 0 }, 0);
        $("#namePrompt").text("Greetings " + username + ", You are our only chance to save the world from negativity.");
        $("#homeButton").on('click', renderHome);

        $("#beginButton").on('click', function() {
            love = 0;
            $(".wrapper").empty();
            $(".wrapper").append($battle);
            $('#homeButton').addClass('battle-page');
            $("#computer-icons_all img").removeClass('selected-icon');
            $("#user-icons img").removeClass('selected-icon');
            $('html, body').animate({ scrollTop: 0 }, 0);
            $(".arena").children('p').text('');
            $('#user-image').attr('src', imgSrc);
            $("#user-icon-1").attr('src', userImg1);
            $("#user-icon-2").attr('src', userImg2);
            $("#user-icon-3").attr('src', userImg3);
            $('#computer-icon').attr('src', 'assets/images/earth.png');
            $('#go_button').on('click', function() {
                var playerIndex = player.getIndex();
                if (playerIndex === 0) {
                  $('#user-icon-1').addClass('selected-icon');
                  $('#user-icon-2').removeClass('selected-icon');
                  $('#user-icon-3').removeClass('selected-icon');
                } else if (playerIndex === 1) {
                  $('#user-icon-2').addClass('selected-icon');
                  $('#user-icon-1').removeClass('selected-icon');
                  $('#user-icon-3').removeClass('selected-icon');
                } else if (playerIndex === 2) {
                  $('#user-icon-3').addClass('selected-icon');
                  $('#user-icon-1').removeClass('selected-icon');
                  $('#user-icon-2').removeClass('selected-icon');
                }
                var earthIndex = earth.getIndex();
                if (earthIndex === 0) {
                  $('#earth-icon-1').addClass('selected-icon');
                  $('#earth-icon-2').removeClass('selected-icon');
                  $('#earth-icon-3').removeClass('selected-icon');
                } else if (earthIndex === 1) {
                  $('#earth-icon-2').addClass('selected-icon');
                  $('#earth-icon-1').removeClass('selected-icon');
                  $('#earth-icon-3').removeClass('selected-icon');
                } else if (earthIndex === 2) {
                  $('#earth-icon-3').addClass('selected-icon');
                  $('#earth-icon-2').removeClass('selected-icon');
                  $('#earth-icon-1').removeClass('selected-icon');
                }
                love += player.actions[playerIndex].pointVal + earth.actions[earthIndex].pointVal;
                $('.arena').children('p').text(player.actions[playerIndex].str + " but " + earth.actions[earthIndex].str).append(" You received " + (player.actions[playerIndex].pointVal + earth.actions[earthIndex].pointVal) + " points").append($scoreboard);
                $scoreboard.text(love);

                if (love >= 10 || love <= -10) {
                    $(".wrapper").empty();
                    $(".wrapper").append($result);
                    $('#homeButton').removeClass('battle-page');
                    $('html, body').animate({ scrollTop: 0 }, 0);
                    if (love > 0) {
                        $('h1').text('You won!');
                    } else {
                        $('h1').text('You lost!');
                    }
                    $("#homeButton").on('click', renderHome);
                }
            });
            $("#homeButton").on('click', renderHome);


        });
      }
    });
}


$(document).ready(function() {

    renderHome();

});
