class Estimate{
    //생성자
    constructor(param){
        this.unit = param;
        }
    //견적
    getEstimate(unittype, width, height) {
        //let priceInfo = this.unit.find(function(val){return val.type == unittype})
        let priceInfo = this.unit.find(val => val.type == unittype);
        return unittype+' : '+priceInfo.price * width * height;
    }
    //추가
    addUnit(unit){
        this.unit.push(unit);
    }
}
let unitInfo = [{type:'wood',price:100},
                {type:'iron',price:300},
                {type:'plastic',price:200}];
const estimator = new Estimate(unitInfo);

// add glass
estimator.addUnit({type:'glass',price:500});                

let result = estimator.getEstimate('glass',20,20)
document.write(result);

//object타입으로해보자
let obj = {
    // unit:unitInfo,
    // getEstimate:function(){},
    // addUnit:function(){} 아래방법을 이렇게해도됨
};
obj.unit = unitInfo;
obj.getEstimate = function(unitType,width,height){
    let priceInfo = this.unit.find(item => item.type==unitType)
    return unitType+priceInfo.price*height*width;
}
obj.addUnit = function(unit){
    this.unit.push(unit);
}
let result2 = obj.getEstimate('wood',20,20);
console.log(result2);
