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

// asc����
��һ�������ֵ���͵���������
�ڶ����������ֵ���͵������ĩβ - 1;
�Դ����ơ����� ���ɵõ�����С��������顣
// desc����

