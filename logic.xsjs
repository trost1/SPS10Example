function getUsername(){
   var username =  $.session.getUsername();
   return username;
}
var result = "Hello World from Arnold User " + getUsername();
$.response.setBody(result);
