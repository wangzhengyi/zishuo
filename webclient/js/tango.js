/**
 * Created by zhengyi.wzy on 2017/3/3.
 */
function h() {
    var h = $(window).height();
    $('.bg').css({'height': h - 30});
}
h();
$(window).resize(function () {
    h();
});
var search = $('.search');
var suggest = $('#search-suggest');
var search_text = $('.search-text');
search_text.on('input propertychange', function () {
    var search_text = $('.search-text').val();
//        var randNum = parseInt(Math.random()*100000);
//        https://cn.bing.com/AS/Suggestions?qry='+search_text+'&cvid='+randNum  返回ul整个html标签
    if (search_text.trim()) {
        $.ajax({
            type: 'GET',
            url: 'http://api.bing.com/qsonhs.aspx?type=cb&q=' + search_text, //callback要与下面的jsonp的值一致
            dataType: 'jsonp',
            jsonp: 'cb',//这里要看服务器那边的参数是什么，
                        //实际的url会转换成：http://api.bing.com/qsonhs.aspx?type=cb&q=搜索关键词&cb=jQuery3110057373895684477594_1479342920984&_=1479342920985
            success: function (data) {
//                console.log(data.AS.Results[0].Suggests);
                if (typeof(data.AS.Results) == 'undefined') {
                    suggest.html('');
                    suggest.stop().hide();
                } else {
                    var result_html = '';
                    $.each(data.AS.Results[0].Suggests, function (index, val) {
                        result_html += '<li url="' + val.Url + '">' + val.Txt + '</li>';
                    });
                    suggest.html('<ul>' + result_html + '</ul>');
                }
            },
            error: function (jqXHR) {
                console.log('发生错误:' + jqXHR.status);
            }
        });
        suggest.show().css({
            top: search.offset().top - 1,
            left: search.offset().left
        });
    } else {
        suggest.html('');
        suggest.stop().hide();
    }
});
$(document).click(function (event) {
//        console.log(event.target.className);
    if (event.target.className == 'search-text') {
        if ($('#search-suggest ul li').length) {
            suggest.show().css({
                top: search.offset().top - 1,
                left: search.offset().left
            });
        }
    } else {
        suggest.stop().hide();
    }
});
suggest.on('click', 'li', function () {
    var url = $(this).attr('url');
    location.href = url;
});
//    suggest.on('mouseover','li',function(){
//        search_text.val($(this).text());
//    });