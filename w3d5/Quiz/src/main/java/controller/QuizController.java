package controller;

import models.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "/quiz")
public class QuizController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String answer = request.getParameter("txtAnswer");
        HttpSession s = (HttpSession)request.getSession();
        Quiz q = (Quiz)s.getAttribute("quiz");
        PrintWriter out = response.getWriter();

        // check if there're questions
        if(q.getNumCorrect() == q.getNumQuestions()) {
            genQuizOverPage(out);
            return;
        }

        // increase score if answer true
        boolean isCorrect = q.isCorrect(answer);
        if((answer != null) && q.isCorrect(answer)){
            q.scoreAnswer();
        }

        // show QuizOver page if there's no question
        if(q.getNumCorrect() == q.getNumQuestions()) {
            genQuizOverPage(out);
            return;
        }
        // show next question
        genQuizPage(q, out, q.getCurrentQuestion(), !isCorrect, answer);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession s = (HttpSession)request.getSession();
        Quiz q = (Quiz)s.getAttribute("quiz");
        // insert quiz into session
        if( q == null){
            q = new Quiz();
            s.setAttribute("quiz", q);
        }
        PrintWriter out = response.getWriter();

        // show QuizOver page if there's no question
        if(q.getNumCorrect() == q.getNumQuestions()) {
            genQuizOverPage(out);
        } else {
            // show next question
            genQuizPage(q, out, q.getCurrentQuestion(), false, q.getAnswer());
        }

    }
    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>	</body> ");
        out.print("</html> ");
    }
}
