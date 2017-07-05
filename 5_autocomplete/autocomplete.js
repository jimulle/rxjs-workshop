(function (global, $, Rx) {

  // Search Wikipedia for a given term
  function searchWikipedia (term) {
    return $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        format: 'json',
        search: term,
        suggest: true
      }
    });
  }

  function main() {
    var textinput = $('#textInput'),
        wikilist = $('#wikipediaList'),
        hits = $('#hits');

    // Get all distinct key up events from the input and only fire if long enough and distinct
    var keyup = Rx.Observable.fromEvent(textinput, 'keyup')
      .map(function (e) {
        return e.target.value; // Project the text from the input
      })
      .filter(function (text) {
        return text.length > 2; // Only if the text is longer than 2 characters
      })
      .debounceTime(250 /* Pause for 250ms */ )
      .distinctUntilChanged(); // Only if the value has changed

    // clear suggestions on blur
    var blur = Rx.Observable.fromEvent(textinput, 'blur')
      .subscribe(
        function () {
          wikilist.empty();
        }
      );

    var searcher = keyup.switchMap(searchWikipedia);

    searcher.subscribe(
      function (data) {
        wikilist
          .empty()
          .append ($.map(data[1], function (v) { return $('<option>').text(v); }));
        hits
          .html( parseInt( hits.html() ) + 1 );
      },
      function (error) {
        wikilist.empty();
        console.log('Error:' + error);
      });
  }

  $(main);

}(window, jQuery, Rx));
