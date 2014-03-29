$(function(){

	function getResult()
    {
        	$.ajax({
                headers: { 'Access-Control-Allow-Origin': '*' },
                crossDomain: true,
                type:"GET",
                url: "http://127.0.0.1:80/getwolframalpha/1+2",
                dataType:"json"
            }).done(function(response) {
                console.log(response);
            });
    }
    getResult();
});