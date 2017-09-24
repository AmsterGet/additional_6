module.exports = function zeros(expression) {
    var mas=expression.split("*");
    var count2=0,count5=0;
    for(var j=0;j<mas.length;j++){
        var s=mas[j], num,i,p;
        if (s[s.length-2]==='!') {
            num=+(s.slice(0,-2));
            if (num%2===0) {
                for(i=2;i<=num;i+=2) {
                    p=i;
                    while (p%2===0){count2++; p=Math.trunc((p/2));}
                    while (p%5===0){count5++; p=Math.trunc((p/5));}
                }
            }
            else {
                for (i=1;i<=num;i+=2) {
                    p=i;
                    while (p%5===0){count5++; p=Math.trunc((p/5));}
                }
            }
        }
        else {
            num=+(s.slice(0,-1));
            for(i=1;i<=num;i++){
                p=i;
                while (p%2===0){count2++; p=Math.trunc((p/2));}
                while (p%5===0){count5++; p=Math.trunc((p/5));}
            }
        }
    }
    if (count2<count5) return count2;
    return count5;
};