$(function() {

  //variables for main ul list
  var newsLists = $('.tech-news');
  //variables for url
  var techUrl = 'https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=52e7052a3e1341c8b763300db97b5a34';
    
    /* Create my new arrays for Loops form API*/
    
    var newArr_img =[];    
    var newArr_url =[];
    var newArr_title =[];
    var newArr_description =[];
    var newArr_author =[];
    var newArr_published =[];
    
    function insertContentArr(news) {
       for (var i = 0; i < news.length; i++) {
           newArr_img.push(news[i].urlToImage);       
           newArr_url.push(news[i].url);  
           newArr_title.push(news[i].title);           
           newArr_description.push(news[i].description);           
           newArr_author.push(news[i].author);           
           newArr_published.push(news[i].publishedAt);           
       }
    }
    
    /* Insert News to DOM  */
    
    function insertContent1(news) {
        for (var i = 0; i < news.length; i++) {
            var img1 = $('.num1 img');
            img1.attr('src', news[i].urlToImage);

            var url_img1 = $('.num1 .news_img_link'); 
            url_img1.attr('href', news[i].url);

            var title1 = $('.num1 h3');
            title1.text(news[i].title);

            var url_title1 = $('.num1 .news_title_link');
            url_title1.attr('href', news[i].url);

            var description1 = $('.num1 .news_description');
            description1.text(news[i].description);

            var author1 = $('.num1 .news_author');
            author1.text('Author: '+news[i].author);

            var date1 = $('.num1 .news_date');
            date1.text('Publicated: '+news[i].publishedAt);
        }
    } 

  /* Load news and insert them into the DOM*/
    
    function loadNews() {
        $.ajax({
            url: techUrl
        }).done(function(response){
    		insertContent1(response.articles);
            insertContentArr(response.articles);
    	 }).fail(function(error) {
           console.log(error);
        })
    }
  loadNews();
    
    
    
//nie kasować
});
