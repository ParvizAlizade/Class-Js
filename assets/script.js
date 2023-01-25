class CustomMatch{
    constructor(num){
        this.num=num;
    }
    plus(num2){
        this.num+=num2;
        return this;
    }
    minus(num3){
        this.num-=num3;
        return this;
    }
    multiply(num4){
        this.num*=num4;
        return this;
    }
    divide(num5){
        this.num/=num5;
        return this;
    }
}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);
