package controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.TimeUnit;

@WebServlet("/BootsServlet")
public class BootsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String bid = request.getParameter("bootId");
        String delay = request.getParameter("delay");
        try {
            TimeUnit.SECONDS.sleep(Integer.parseInt(delay));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        out.write( "resources/images/boots/boots" + bid + ".jpg");
    }
}
