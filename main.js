
//switch comments in blue action
function changeTheComment(comment) {

     $('#regard').html(comment.content);
     $('#person').html(comment.createdBy);

     $("#dots i.selected").removeClass("selected");
     $(comment.id).addClass("selected");
}

//active the form
 function sendComment() {
      var userName = $("#user_name").val();
      //var userName = document.getElementById("user_name").value;
      var userEmail = $("#user_email").val();
      alert ("Thank you for yor comment, " + userName + "." +
      "\nWe will answer you by your email, " + userEmail);
}