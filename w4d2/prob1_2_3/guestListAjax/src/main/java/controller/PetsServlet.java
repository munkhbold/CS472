package controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/PetsServlet")
public class PetsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        String html = "";
        String animal = request.getParameter("animal");
        if(animal.equals("kitty")){
            for(int i=1; i<6; i++){
                html += "<img src=\"resources/images/pets/kitty" + i + ".jpeg\">";
            }
        }else{
            for(int i=1; i<5; i++){
                html += "<img src=\"resources/images/pets/puppy" + i + ".jpeg\">";
            }
        }
        out.write(html);
    }
}
