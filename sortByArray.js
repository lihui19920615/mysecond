function orderArrayByRule(rule, Array){
    var srcArrayLen = Array.length;
    var tmpNumber, i, j;
    
    for(i = 0; i < srcArrayLen; i++){
        
        for(j = 0; j < srcArrayLen - i - 1; j++){
            if("asc" === rule){
                if(Array[j] > Array[j + 1]){
                    tmpNumber = Array[j];
                    Array[j] = Array[j + 1];
                    Array[j + 1] = tmpNumber;
                }
            }else{
                if(Array[j] < Array[j + 1]){
                    tmpNumber = Array[j];
                    Array[j] = Array[j + 1];
                    Array[j + 1] = tmpNumber;
                }
            }
        }
    }
    
    return Array;
}

// asc升序
第一步将最大值推送到数组的最后；
第二步将次最大值推送到数组的末尾 - 1;
以此类推。。。 即可得到，从小到大的数组。
// desc降序

