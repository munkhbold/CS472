package quiz;

import app.Quiz;

import java.util.Scanner;

/**
 * @since 4/8/09
 * @author levi
 * This class is a "desktop" version of the quiz lab.  It is in the web application becaucse I 
 * created this version after the web application was completed.  It uses the exact same classes 
 * for the business logic as does the web application.
 */
public class TestRunner {



    public static void main(String[] args)
{
        try {
            Quiz quiz = new Quiz();

            Scanner sc = new Scanner(System.in);
            boolean questionsLeft = true;

                while (questionsLeft) { // They have to keep trying until get the right number.
                    /* print out the current score and the question */
                    System.out.println();
                    System.out.println("Your score is:  " + quiz.getNumCorrect());
                    System.out.println("Next sequence is:  " + quiz.getCurrentQuestion());

                    System.out.println("Enter the next number for the given sequence.");
                    String answer = sc.nextLine();

                    /* update model */
                    quiz.setUserAnswer(answer);


                    /* execute model and get navigation string */
                    String navigate = quiz.processAnswer();

                    /* give error message if wrong */
                    System.out.println(quiz.getErrorMessage());

                    if (navigate.equals("donePage")) {
                        System.out.println("Congratulations, you have completed the quiz!");
                        questionsLeft = false;
                    }



                    /* 5/12/2011kl refactor note: should be able to refactor to keep more
                     * business logic in the model.  E.g., quiz should take the answer
                     * and then return a navigation result for either:  error message,
                     * next question, or finished.
                     */
                }
        }
        catch (Exception ex)
        {
            System.out.format("%s: %s", ex.getClass().getName(), ex.getMessage());
        }
    }
}
