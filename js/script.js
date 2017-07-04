$(function() {

  //variables for main ul list
  var newsLists = $('.tech-news');
  //variables for url
  var techUrl = 'https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=52e7052a3e1341c8b763300db97b5a34';


    /* Insert Movies to DOM  */
    function insertContent1(news) {
        var img1 = $('.num1 img');
        img1.attr('src', news[0].urlToImage);
        
        var title1 = $('.num1 h3');
        title1.text(news[0].title);
        
        var description1 = $('.num1 .news_description');
        description1.text(news[0].description);
        
        var author1 = $('.num1 .news_author');
        author1.text('Author: '+news[0].author);
        
        var date1 = $('.num1 .news_date');
        date1.text('Publicated: '+news[0].publishedAt);
    } 

  /* Load movies and insert them into the DOM
  */
  function loadNews() {
        $.ajax({
            url: techUrl
        }).done(function(response){
    		insertContent1(response.articles);
    	 }).fail(function(error) {
           console.log(error);
       })
  }

  loadNews();
    
    
    
//nie kasować
});
