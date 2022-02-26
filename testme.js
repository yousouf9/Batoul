 function callMe(scores){
       // Write your code here
    let minScores = [];
    let maxScores = [];
    
    let currentMaxValue = 0;
    let currentMinValue = 0;
    
    for(let i=0; i<scores.length; i++){
         
         if(i === 0){
             currentMaxValue = scores[i]
             currentMinValue = scores[i];
             console.log(currentMaxValue, currentMinValue)
             continue;
         }
         
        if(currentMaxValue < scores[i] && currentMaxValue !== scores[i]){
            maxScores.push(scores[i]);
            currentMaxValue =scores[i]
        }
        if(currentMinValue > scores[i]){
            minScores.push(scores[i]);
            currentMinValue = scores[i];
        }
        
        
    }
    
    return [maxScores.length, minScores.length]
 }

 console.log(callMe([10, 5, 20, 20, 4, 5, 2, 25, 1]))