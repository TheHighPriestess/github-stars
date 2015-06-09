!function() {
  'use strict';

  var ENDPOINT  = 'https://api.github.com/search/users?q=followers:%3E',
      $results  = $('#results'),
      $warning  = $('#warning');

  $('#myform').submit(function(e) {
    e.preventDefault();
    var userInput = $('.searchquery').val();

    $warning.text(userInput === '' ?
                  "Oops! You didn't enter anything." :
                  "These Github stars have more than " + userInput + " followers!");

    $.getJSON(ENDPOINT + userInput, function(followers) {
      var links = followers.items.map(function(follow, index, list) {
        return '<li><a class=results-link href="' + follow.html_url + '">' + follow.login + '</a></li>';
      });

      $results.html(links.join(''));
    });
  });
}();
