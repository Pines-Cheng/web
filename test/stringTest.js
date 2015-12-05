/**
 * Created by spider on 15/12/4.
 */

/*//== vs ===
var a= 1;
var b='1' ;
console.log(a==b);
console.log(a===b);*/

//this 与prototype优先级

/* function a() {
     this.number = 10;
};

a.prototype.number = 20;
console.log(this);
console.log(new a().number);*/

//this  的指向


function show(){
    console.log(this);
}

a= {};
a.show=show;
a.show();


