//làm tròn đến số nguyên gần nhất vd : trên 0.5 làm lên , dưới 0.5 làm xuống
console.log('Math.round',Math.round(4.3) , Math.round(4.5));

// làm tròn lên phần nguyên lớn nhât vd 4,2 ->>5
console.log('Math.celi')
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));

//làm tròn xuống phần nguyên vd 4.9 --> 4 , -4.2 --> -5
console.log(
Math.floor(4.9),
Math.floor(4.7),
Math.floor(4.4),
Math.floor(4.2),
Math.floor(-4.2)
);

//trunc : trả về phần nguyên của x , vd 4.9 -->4 , -4.2 --> -4
console.log(
Math.trunc(4.9),
Math.trunc(4.7),
Math.trunc(4.4),
Math.trunc(4.2),
Math.trunc(-4.2)
);

//Math.sign(x) Trả về nếu x là âm, null hoặc dương: vd dương trả về 1 , âm trả về -1 , 0 trả về 0
console.log('Math.sign',
Math.sign(-4),
Math.sign(0),
Math.sign(4),
Math.sign(-20),
Math.sign(100)
);