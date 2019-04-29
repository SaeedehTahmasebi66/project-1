
//switch comments in blue action
function changeTheComment(comment) {

     $('#regard').html(comment.content);
     $('#person').html(comment.createdBy);

     $("#dots i.selected").removeClass("selected");
     $(comment.id).addClass("selected");
}