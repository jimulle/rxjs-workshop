# Autocomplete example

We will leverage the simple (and free) [wikipedia api](https://www.mediawiki.org/w/api.php?action=help&modules=opensearch) to create an autocomplete example using RxJS

### Requirements:
<ul>
    <li>Debounce requests [wait until typing stops - 750ms] (debounce)</li>
    <li>Text must be 3 or more characters long (filter)</li>
    <li>Keep track of how many times we hit wikipedia API (counter)</li>
    <li>Use live-server to serve up the page</li>
</ul>

