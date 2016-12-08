$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/ckweb1230.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      for(course of response.courses.completed) {
      	var $htmlContent = $("<div>", {"class": "course"});
      	$htmlContent.prepend("<h3>" + course.title + "</h3>");
      	$htmlContent.append("<img src='" + course.badge + "'>");
      	$htmlContent.append("<a href='" + course.url + "' target='_blank' class='btn btn-primary'>See Course</a>");
      	$("#badges").append($htmlContent);
      }
    }
  });

});
