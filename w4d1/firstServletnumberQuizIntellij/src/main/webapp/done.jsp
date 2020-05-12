<%@ page import="app.Quiz" %><%--
  Created by IntelliJ IDEA.
  User: munkhbold
  Date: 5/11/20
  Time: 20:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="static/styles.css">
    <title>NumberQuiz is over</title>
</head>
<body>
    <p class="text-red">The number quiz is over!</p>
    Your Grade is

    <% Quiz sessQuiz = (Quiz) request.getSession().getAttribute("quiz"); %>
    <h3 class="text-red"><%=sessQuiz.grade()%></h3><br/>
    <a href="<%=request.getContextPath()%>/QuizServlet?btnNext=Restart"><button>Start Over!</button></a>
</body>
</html>
