/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package quiz;

import app.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;


/**
 * @author levi
 * updated 2/2/2020
 */
@WebServlet("/QuizServlet")
public class Lab03Servlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        /* restore view state */
        PrintWriter out = response.getWriter();
        HttpSession sess = request.getSession();
        Quiz sessQuiz = (Quiz) sess.getAttribute("quiz");

        String action = request.getParameter("btnNext");
        if(action != null && action.equals("Restart") && sess != null) {
            sess.invalidate();
            sessQuiz = null;
            sess = request.getSession(true);
        }
        if (sessQuiz == null) {
            sessQuiz = new Quiz();
            sess.setAttribute("quiz", sessQuiz);
            request.getRequestDispatcher("quiz.jsp").forward(request, response);
            return;
        }

        String age = request.getParameter("age");
        if(age != null){
            try{
                sess.setAttribute("age", Integer.parseInt(age));
            }catch (Exception ex){
                sessQuiz.setErrorMessage("Age is not number");
            }
        }

        /*  get an input from user */
        String answer = request.getParameter("txtAnswer");
        System.out.println("Answer is: " + answer);

        /* convert and validate inputs */
        //nothing to do for now

        /* update model */
        sessQuiz.setUserAnswer(answer);

        /* execute model and get navigation string */
        String navigate = sessQuiz.processAnswer();

        /* render response */
        if (navigate.equals("donePage")) {
            response.sendRedirect(request.getContextPath() + "/done.jsp");
        } else {
            request.getRequestDispatcher("quiz.jsp").forward(request, response);
        }
    }

    /**
     * Used Refactor>Introduce Method to create this method.  Worked great!
     *
     * @param sessQuiz
     * @param out
     */
    private void genQuizPage(Quiz sessQuiz, PrintWriter out) {

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
        out.print(sessQuiz.getCurrentQuestion() + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        out.print("<p style='color:red'>" + sessQuiz.getErrorMessage() + "</p>");
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

    /**
     * Returns a short description of the servlet.
     */
    public String getServletInfo() {
        return "Short description";
    }
    // </editor-fold>
}
