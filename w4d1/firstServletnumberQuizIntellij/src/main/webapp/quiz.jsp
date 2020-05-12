<%@ page import="app.Quiz" %><%--
  Created by IntelliJ IDEA.
  User: munkhbold
  Date: 5/11/20
  Time: 19:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="static/styles.css">
    <script src="static/scripts.js"></script>
    <title>Quiz</title>
</head>
<body>

<form method="post">
    		<h3>Have fun with NumberQuiz!</h3>
    <% Quiz sessQuiz = (Quiz) request.getSession().getAttribute("quiz"); %>
    <p>Your current score is: <%=sessQuiz.getNumCorrect() %><br/></p>
    <p <% if(request.getSession().getAttribute("age") != null )out.print("class=hide");%>>
        <label for="idAge">Age:</label>
        <input type="number" name="age" id="idAge" placeholder="Enter your age here">
    </p>
    <p>Guess the next number in the sequence! <%=sessQuiz.getCurrentQuestion() %></p>

    <p>Your answer:<input type="text" name="txtAnswer" value="" /></p> 

    <p class="text-red"><%= sessQuiz.getErrorMessage() %></p>
    <p><input type="submit" name="btnNext" value="Next" />
        <input type="submit" name="btnNext" value="Restart"/></p>
    <button id="btnHint" value="<%=sessQuiz.hint()%>">Hint</button>

</form>
</body>
</html>
