<%--
  Created by IntelliJ IDEA.
  User: munkhbold
  Date: 5/12/20
  Time: 22:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <title>Pet Gallery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="resources/js/ajaxpets.js"></script>
</head>
<body>
<div>
    <label><input type="radio" name="animal" id="kitties" value="kitties"/> Kitties</label>
    <label><input type="radio" name="animal" id="puppies" value="puppies"/> Puppies</label>
</div>
<div id="pictures">
</div>
</body>
</html>
