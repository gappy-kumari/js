//encapsulation
class computer//define a class to impliment emcapsulation
{
    //attribute[static(at once),instance(object)]
        price=undefined;
        model=undefined;//instance member variable(object)
        static company="hp";//static member variable(class)

    //function[static,instance,constructor:automatically call,self called(implicitlly call)]
    //constructor doesn't return any value
    constructor()//constructor
    {
        //this:coulor object
        this.model=prompt("enter model of computer : ");
        this.price=parseInt(prompt("enter price of product : "));
        this.amount=this.price*18/100+this.price;

    }
    buy()//instance function
    {
        document.write("model = "+ this.model+"<br>");
        document.write("price = "+ this.price+"<br>");
        document.write("amount = "+ this.amount+"<br>");


    }

}
let c1=new computer();
let c2=new computer();
c1.buy();
c2.buy();
