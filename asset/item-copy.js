$( document ).ready(function() {
	/*By default the url is set to the Location origin Property of the current Location Object, ie window.location.origin
	if the admin url contains a pathname, you have to set the complete url manually*/	
	var urlAdmin = window.location.origin;

    /*User key_identity and key_credential, activate the API keys tab of the user edit page to get them	*/
	var keyIdentity = "your_key_identity";
	var keyCredential = "your_key_credential";
	
$(".tablesaw-cell-content").each(function() {
  var itemId =  $(this).children("input").attr("value");
  $(this).children("ul").prepend('<li><a class="o-icon-add item-copy" href="" title="Copy this Resource" aria-label="Copy this Resource" data-url="'+urlAdmin+'/api/items/'+itemId+'"></a></li>');
});

  $('.item-copy').click(function(e){
    e.preventDefault();
    $.ajax({
    "async": true,
    "crossDomain": true,
    "url": $(this).data('url'),
    "method": "GET",
    "headers": {
    "content-type": "application/json"
     }}).done(function (response) {
     var content = response;
      $.ajax({
  "async": true,
  "crossDomain": true,
  "url": urlAdmin+"/api/items?key_identity="+keyIdentity +"&key_credential="+keyCredential,
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
    "data": JSON.stringify(content)}).done(function (response) {
        alert('Resource successfully copied !');
		window.location.href = urlAdmin+"/admin/item";
});
});
  });
});
