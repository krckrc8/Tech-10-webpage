$(function() {
    
    
    /*Event on Comment Buttons -show conversation-*/
    
    var comments_plugin_0 = $ ('#a95a667d_1499170350');
    var comments_btn_0 = $('.num0 div.comments');
    comments_btn_0.on('click', function(){
        comments_plugin_0.toggle();
    });
    var comments_plugin_1 = $ ('#f820e4f3_1499171436');
    var comments_btn_1 = $('.num1 div.comments');
    comments_btn_1.on('click', function(){
        comments_plugin_1.toggle();
    });
    var comments_plugin_2 = $ ('#4057b1cd_1499171560');
    var comments_btn_2 = $('.num2 div.comments');
    comments_btn_2.on('click', function(){
        comments_plugin_2.toggle();
    });
    var comments_plugin_3 = $ ('#4a8024a6_1499172683');
    var comments_btn_3 = $('.num3 div.comments');
    comments_btn_3.on('click', function(){
        comments_plugin_3.toggle();
    });
    var comments_plugin_4 = $ ('#891cc0f1_1499172819');
    var comments_btn_4 = $('.num4 div.comments');
    comments_btn_4.on('click', function(){
        comments_plugin_4.toggle();
    });
    var comments_plugin_5 = $ ('#4fd98e7a_1499172964');
    var comments_btn_5 = $('.num5 div.comments');
    comments_btn_5.on('click', function(){
        comments_plugin_5.toggle();
    });
    var comments_plugin_6 = $ ('#5d43907f_1499173037');
    var comments_btn_6 = $('.num6 div.comments');
    comments_btn_6.on('click', function(){
        comments_plugin_6.toggle();
    });
    var comments_plugin_7 = $ ('#d584ee58_1499173087');
    var comments_btn_7 = $('.num7 div.comments');
    comments_btn_7.on('click', function(){
        comments_plugin_7.toggle();
    });
    var comments_plugin_8 = $ ('#5f092104_1499173152');
    var comments_btn_8 = $('.num8 div.comments');
    comments_btn_8.on('click', function(){
        comments_plugin_8.toggle();
    });
    var comments_plugin_9 = $ ('#57f13460_1499173285');
    var comments_btn_9 = $('.num9 div.comments');
    comments_btn_9.on('click', function(){
        comments_plugin_9.toggle();
    });
    
    /*Event on Imgs -zooming-*/
    
    var news_img_0 = $('.num0 img');
    news_img_0.on('hover', function(){
        console.log('ok');
        $(this).css({
            transform: "scale(1.05)",
        });
    });
    
   /* .animate({
            transform: "scale(1.05)",
        },500);*/
    
    /*.animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );*/
    
    //-------------AJAX------------------
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

    /*--------------POST NO 0-----------------*/
    function insertContent0(news) {
            var img0 = $('.num0 img');
            img0.attr('src', news[0].urlToImage);

            var url_img0 = $('.num0 .news_img_link');
            url_img0.attr('href', news[0].url);

            var title0 = $('.num0 h3');
            title0.text(news[0].title);

            var url_title0 = $('.num0 .news_title_link');
            url_title0.attr('href', news[0].url);

            var description0 = $('.num0 .news_description');
            description0.text(news[0].description);

            var author0 = $('.num0 .news_author');
            author0.text('Author: '+news[0].author);

            var date0 = $('.num0 .news_date');
            date0.text('Publicated: '+news[0].publishedAt);
    }
    
    /*--------------POST NO 1-----------------*/
        function insertContent1(news) {
            var img1 = $('.num1 img');
            img1.attr('src', news[1].urlToImage);

            var url_img1 = $('.num1 .news_img_link');
            url_img1.attr('href', news[1].url);

            var title1 = $('.num1 h3');
            title1.text(news[1].title);

            var url_title1 = $('.num1 .news_title_link');
            url_title1.attr('href', news[1].url);

            var description1 = $('.num1 .news_description');
            description1.text(news[1].description);

            var author1 = $('.num1 .news_author');
            author1.text('Author: '+news[1].author);

            var date1 = $('.num1 .news_date');
            date1.text('Publicated: '+news[1].publishedAt);
    }
    
    /*--------------POST NO 2-----------------*/
        function insertContent2(news) {
            var img2 = $('.num2 img');
            img2.attr('src', news[2].urlToImage);

            var url_img2 = $('.num2 .news_img_link');
            url_img2.attr('href', news[2].url);

            var title2 = $('.num2 h3');
            title2.text(news[2].title);

            var url_title2 = $('.num2 .news_title_link');
            url_title2.attr('href', news[2].url);

            var description2 = $('.num2 .news_description');
            description2.text(news[2].description);

            var author2 = $('.num2 .news_author');
            author2.text('Author: '+news[2].author);

            var date2 = $('.num2 .news_date');
            date2.text('Publicated: '+news[2].publishedAt);
    }    
    
    /*--------------POST NO 3-----------------*/
        function insertContent3(news) {
            var img3 = $('.num3 img');
            img3.attr('src', news[3].urlToImage);

            var url_img3 = $('.num3 .news_img_link');
            url_img3.attr('href', news[3].url);

            var title3 = $('.num3 h3');
            title3.text(news[3].title);

            var url_title3 = $('.num3 .news_title_link');
            url_title3.attr('href', news[3].url);

            var description3 = $('.num3 .news_description');
            description3.text(news[3].description);

            var author3 = $('.num3 .news_author');
            author3.text('Author: '+news[3].author);

            var date3 = $('.num3 .news_date');
            date3.text('Publicated: '+news[3].publishedAt);
    }
    
    /*--------------POST NO 4-----------------*/
        function insertContent4(news) {
            var img4 = $('.num4 img');
            img4.attr('src', news[4].urlToImage);

            var url_img4 = $('.num4 .news_img_link');
            url_img4.attr('href', news[4].url);

            var title4 = $('.num4 h3');
            title4.text(news[4].title);

            var url_title4 = $('.num4 .news_title_link');
            url_title4.attr('href', news[4].url);

            var description4 = $('.num4 .news_description');
            description4.text(news[4].description);

            var author4 = $('.num4 .news_author');
            author4.text('Author: '+news[4].author);

            var date4 = $('.num4 .news_date');
            date4.text('Publicated: '+news[4].publishedAt);
    }
    
    /*--------------POST NO 5-----------------*/
        function insertContent5(news) {
            var img5 = $('.num5 img');
            img5.attr('src', news[5].urlToImage);

            var url_img5 = $('.num5 .news_img_link');
            url_img5.attr('href', news[5].url);

            var title5 = $('.num5 h3');
            title5.text(news[5].title);

            var url_title5 = $('.num5 .news_title_link');
            url_title5.attr('href', news[5].url);

            var description5 = $('.num5 .news_description');
            description5.text(news[5].description);

            var author5 = $('.num5 .news_author');
            author5.text('Author: '+news[5].author);

            var date5 = $('.num5 .news_date');
            date5.text('Publicated: '+news[5].publishedAt);
    }   
    
    /*--------------POST NO 6-----------------*/
        function insertContent6(news) {
            var img6 = $('.num6 img');
            img6.attr('src', news[6].urlToImage);

            var url_img6 = $('.num6 .news_img_link');
            url_img6.attr('href', news[6].url);

            var title6 = $('.num6 h3');
            title6.text(news[6].title);

            var url_title6 = $('.num6 .news_title_link');
            url_title6.attr('href', news[6].url);

            var description6 = $('.num6 .news_description');
            description6.text(news[6].description);

            var author6 = $('.num6 .news_author');
            author6.text('Author: '+news[6].author);

            var date6 = $('.num6 .news_date');
            date6.text('Publicated: '+news[6].publishedAt);
    } 
    
    /*--------------POST NO 7-----------------*/
        function insertContent7(news) {
            var img7 = $('.num7 img');
            img7.attr('src', news[7].urlToImage);

            var url_img7 = $('.num7 .news_img_link');
            url_img7.attr('href', news[7].url);

            var title7 = $('.num7 h3');
            title7.text(news[7].title);

            var url_title7 = $('.num7 .news_title_link');
            url_title7.attr('href', news[7].url);

            var description7 = $('.num7 .news_description');
            description7.text(news[7].description);

            var author7 = $('.num7 .news_author');
            author7.text('Author: '+news[7].author);

            var date7 = $('.num7 .news_date');
            date7.text('Publicated: '+news[7].publishedAt);
    }
    
    /*--------------POST NO 8-----------------*/
        function insertContent8(news) {
            var img8 = $('.num8 img');
            img8.attr('src', news[8].urlToImage);

            var url_img8 = $('.num8 .news_img_link');
            url_img8.attr('href', news[8].url);

            var title8 = $('.num8 h3');
            title8.text(news[8].title);

            var url_title8 = $('.num8 .news_title_link');
            url_title8.attr('href', news[8].url);

            var description8 = $('.num8 .news_description');
            description8.text(news[8].description);

            var author8 = $('.num8 .news_author');
            author8.text('Author: '+news[8].author);

            var date8 = $('.num8 .news_date');
            date8.text('Publicated: '+news[8].publishedAt);
    }
    
    /*--------------POST NO 9-----------------*/
        function insertContent9(news) {
            var img9 = $('.num9 img');
            img9.attr('src', news[9].urlToImage);

            var url_img9 = $('.num9 .news_img_link');
            url_img9.attr('href', news[9].url);

            var title9 = $('.num9 h3');
            title9.text(news[9].title);

            var url_title9 = $('.num9 .news_title_link');
            url_title9.attr('href', news[9].url);

            var description9 = $('.num9 .news_description');
            description9.text(news[9].description);

            var author9 = $('.num9 .news_author');
            author9.text('Author: '+news[9].author);

            var date9 = $('.num9 .news_date');
            date9.text('Publicated: '+news[9].publishedAt);
    }

  /* Load news and insert them into the DOM*/

    function loadNews() {
        $.ajax({
            url: techUrl
        }).done(function(response){
    		insertContent0(response.articles);
    		insertContent1(response.articles);
    		insertContent2(response.articles);
    		insertContent3(response.articles);
    		insertContent4(response.articles);
    		insertContent5(response.articles);
    		insertContent6(response.articles);
    		insertContent7(response.articles);
    		insertContent8(response.articles);
    		insertContent9(response.articles);
            insertContentArr(response.articles);
    	 }).fail(function(error) {
           console.log(error);
        })
    }
  loadNews();



//nie kasować
});

