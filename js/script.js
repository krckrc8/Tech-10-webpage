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
            var img1 = $('.num1 img');
            img1.attr('src', news[0].urlToImage);

            var url_img1 = $('.num1 .news_img_link');
            url_img1.attr('href', news[0].url);

            var title1 = $('.num1 h3');
            title1.text(news[0].title);

            var url_title1 = $('.num1 .news_title_link');
            url_title1.attr('href', news[0].url);

            var description1 = $('.num1 .news_description');
            description1.text(news[0].description);

            var author1 = $('.num1 .news_author');
            author1.text('Author: '+news[0].author);

            var date1 = $('.num1 .news_date');
            date1.text('Publicated: '+news[0].publishedAt);
    }
        function insertContent2(news) {
            var img2 = $('.num2 img');
            img2.attr('src', news[1].urlToImage);

            var url_img2 = $('.num2 .news_img_link');
            url_img2.attr('href', news[1].url);

            var title2 = $('.num2 h3');
            title2.text(news[1].title);

            var url_title2 = $('.num2 .news_title_link');
            url_title2.attr('href', news[1].url);

            var description2 = $('.num2 .news_description');
            description2.text(news[1].description);

            var author2 = $('.num2 .news_author');
            author2.text('Author: '+news[1].author);

            var date2 = $('.num2 .news_date');
            date2.text('Publicated: '+news[1].publishedAt);
    }

  /* Load news and insert them into the DOM*/

    function loadNews() {
        $.ajax({
            url: techUrl
        }).done(function(response){
    		insertContent1(response.articles);
    		insertContent2(response.articles);
            insertContentArr(response.articles);
    	 }).fail(function(error) {
           console.log(error);
        })
    }
  loadNews();



//nie kasować
});

