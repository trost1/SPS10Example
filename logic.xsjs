function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello World from Arnold Trost User " + getUsername();
$.response.setBody(result);
