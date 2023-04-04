document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function() {
      var query = document.getElementById('query').value;
      if (query) {
        searchPKULaw(query);
      }
    });
  });
  
  function searchPKULaw(query) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        displayResults(response);
      }
    };
    xhr.open('GET', 'http://www.pkulaw.com/Search/Result?Keyword=' + encodeURIComponent(query), true);
    xhr.send();
  }
  
  function displayResults(html) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = html;
  }
  function searchPKULaw(query) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        displayResults(response);
      }
    };
    var gptXhr = new XMLHttpRequest();
    gptXhr.onreadystatechange = function() {
      if (gptXhr.readyState === 4 && gptXhr.status === 200) {
        var prompt = gptXhr.responseText.trim();
        xhr.open('GET', 'http://www.pkulaw.com/Search/Result?Keyword=' + encodeURIComponent(prompt), true);
        xhr.send();
      }
    };
    gptXhr.open('POST', 'http://localhost:5000/generate', true);
    gptXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    gptXhr.send('prompt=' + encodeURIComponent(query));
  }
  
  function displayResults(html) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = html;
  }
  function displayResults(html) {
    var resultsDiv = document.getElementById('results');
    var resultList = document.getElementById('result-list');
    resultList.innerHTML = html;
    var links = resultList.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('target', '_blank');
    }
  }