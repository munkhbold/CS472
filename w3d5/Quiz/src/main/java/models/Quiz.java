package models;

import java.util.Arrays;

public class Quiz {
    private int questions[][];
    private int[] answers;
    private int currentInx;
    public Quiz(){
        currentInx = 0;
        questions = new int[][]{
                {3, 1, 4, 1, 5},
                {1, 1, 2, 3, 5},
                {1, 4, 9, 16, 25},
                {2, 3, 5, 7, 11},
                {1, 2, 4, 8, 16}
        };
        answers = new int[]{9,8,36,13,32};
    }

    public boolean isCorrect(String num){
        return answers[currentInx] == Integer.parseInt(num);
    }

    public int getNumQuestions(){
        return questions.length;
    }

    public int getNumCorrect(){
        return currentInx;
    }

    public int getCurrentQuestionIndex(){
        return currentInx;
    }

    public String getCurrentQuestion(){
        return Arrays.toString(questions[currentInx]);
    }

    public void scoreAnswer(){
        if (currentInx <= questions.length)
            currentInx++;
    }

    public boolean questionsLeft(){
        return getNumCorrect() >= getNumQuestions();
    }

    public String getAnswer(){
        return Integer.toString(answers[currentInx]);
    }
}
