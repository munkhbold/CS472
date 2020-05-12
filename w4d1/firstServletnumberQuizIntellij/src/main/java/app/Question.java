/**
 * Question has a question and associated (correct) answer
 */

package app;

/**
 *
 * @author levi
 */
public class Question {
    private String question;
    private String answer;
    private String hint;
    
    public Question(String question, String answer, String hint) {
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public String getHint() {
        return hint;
    }

}
