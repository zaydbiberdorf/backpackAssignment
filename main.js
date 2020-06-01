// constructor object
class backpack{
    constructor(color, size){
        this.color = color;
        this.size = size;
        this.items = [];
        this.open = false    
    }
    // methods
    openBag(){
        this.open = true;
        console.log("the backpack is open");
    }
    closeBag(){
        this.open = false;
        console.log("the backpack is closed");
    }
    putIn(item){
        this.items.push(item);
        console.log(item + " was put into the bag");
    }
    takeOut(item){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] == item){
                this.items.splice(0, 1);
                console.log(item + " was taken out of the backpack");
            }
        }
    }    
 
}

let smallBlue = new backpack("blue", "small");
smallBlue.openBag();
smallBlue.putIn("lunch");
smallBlue.putIn("jacket");
smallBlue.closeBag();
smallBlue.openBag();
smallBlue.takeOut("jacket");
smallBlue.closeBag();
console.log(smallBlue);