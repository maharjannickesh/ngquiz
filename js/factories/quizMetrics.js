(function(){
    
    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);
    
        QuizMetrics.$inject = ['DataService'];
    
        function QuizMetrics(DataService){
            var quizObj = {
                quizActive: false,
                resultActive : false,
                changeState: changeState,
                correctAnswers: [],
                markQuiz: markQuiz,
                numCorrect: 0
            };
            
            return quizObj;
            
            function changeState(metrics, state){
                if (metrics === 'quiz'){
                quizObj.quizActive = state;
                }else if(metrics === "results"){
                    quizObj.resultActive = state;
                }else{
                    return false;
                }
            }
            
            function markQuiz(){
                quizObj.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    }else{
                        DataService.quizQuestions[i].correct = false;
                    }
                }
            }
        }
    
})();