const pie = 3.14;

function mul(a, b){
    return a*b;
}

function circleArea(r){
    return pie*r*r;
}

module.exports.multiply = mul;
module.exports.areaOfCircle = circleArea;