/*
 * Quiz has a set of questions that can be presented to a person.
 * it also tracks the number of correct responses.
 * also tracks where in the quiz the person is at.
 */

package app;

import java.util.ArrayList;

/**
 * @author levi
 */
public class Quiz {
    private ArrayList<Question> questions = new ArrayList<Question>();
    private int numCorrect = 0;
    /* 0 based index for the current question */
    private int currentQuestionIndex = 0;
    private String userAnswer;
    private String errorMessage = "";

    private String[] grades;
    private int[] results;
    /**
     * Create a new Quiz with questions
     */
    public Quiz() {
        grades = new String[]{"f", "D", "C", "B", "A"};
        results = new int[5];
        questions.add(new Question("[3 1 4 1 5]", "9", "PI"));
        questions.add(new Question("[1 1 2 3 5]", "8", "Fibonacci"));
        questions.add(new Question("[1, 4, 9, 16, 25]", "36", "self multiply"));
        questions.add(new Question("[2, 3, 5, 7, 11]", "13", "Prime"));
        questions.add(new Question("[1 2 4 8 16]", "32", "n * 2"));
    }

    /**
     * Get hint of current question
     */
    public String hint(){
        return questions.get(currentQuestionIndex).getHint();
    }

    /**
     * Grade after quiz done
     */
    public String grade(){
        int correct= 0;
        for (int i=0; i<results.length; i++){
            if (results[i] != -1){
                correct++;
            }
        }
        return grades[correct];
    }
    /**
     * processAnswer is a special method that sets state in processing the input answer and then
     * returns a string indicating which page to navigate to next.
     * Precondition:  setUserAnswer should have been called before this.
     * 2/2/2020kl
     */
    public String processAnswer() {    /* i.e., if answer is correct then increment the question index and score */
        if ((userAnswer == null) || !isCorrect(userAnswer)) {
            results[currentQuestionIndex] = -1;
            setErrorMessage("Your last answer was not correct! Please try again.");
        } else {
            setErrorMessage("");
            markAnswerCorrect();
        }

        /* NEED TO see if are at end of quiz and go to finish page if so? */
        if (questions.size() == currentQuestionIndex) {
            System.out.println("have finished quiz");
            return "donePage";
        } else {
            /* get a question and print it out */
            return "quizPage";
        }
    }


    /**
     * return true or false if answer is correct or false for current question
     *
     * @param ans
     * @return
     */
    public boolean isCorrect(String ans) {
        if (ans.equals(questions.get(currentQuestionIndex).getAnswer())) {
            return true;
        } else {
            return false;
        }

    }

    /**
     * increment the currentQuestion index
     * and also increment the score (should be called if
     * answer is correct.
     */
    public void markAnswerCorrect() { //String ans) {
        //if (isCorrect(ans)) {
        currentQuestionIndex++;
        numCorrect++;
        //}

    }

    /**
     * getter
     *
     * @return
     */
    public int getNumCorrect() {
        return numCorrect;
    }

    /**
     * getter
     */
    public int getCurrentQuestionIndex() {
        return this.currentQuestionIndex;
    }

    /**
     * return the text for the current question
     */
    public String getCurrentQuestion() {
        return questions.get(currentQuestionIndex).getQuestion();
    }


    public String getUserAnswer() {
        return userAnswer;
    }

    public void setUserAnswer(String userAnswer) {
        this.userAnswer = userAnswer;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
