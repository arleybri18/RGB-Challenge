$(function(){
    // create a variable random between 0 and 2, for later compare with the index
    var correct;
    var score = 0;
    // initialize game
    game();

    // binding clicks
    $('.option').on('click', guess);

    // button for close and reinitialize game
    $('.close a').on('click', function(){
        $('.result').hide();
        $('.option').removeClass('scale');
        game();
    });

    function game() {
        correct = Math.floor(Math.random() * 2);
        // iterate over each div with class .option
        $('.option').each(function (index) {
            var color = generateColor();
            // change css for the selected div
            $(this).css('background-color', color);

            // asign the correct color to div question 
            if (index == correct) {
                $('.question').text(color);
            }
        });
    }

    function guess() {
        $(this).addClass('scale');
        var index = $('.option').index(this);
        if (index == correct) {
            $('.result.won').show();
            score++;
        } else {
            $('.result.lost').show();
            score = 0;
        }
        $('.score span').text(score);
    }


    function generateColor(){
        return 'rgb(' + random() + ',' + random() + ',' + random() + ')';
    }
    
    function random(){
        return Math.floor(Math.random() * 255);
    }
});