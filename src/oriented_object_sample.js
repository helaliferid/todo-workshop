// 4 Objects

class Car{
    engine=null;
    constructor(brand,matricule,engine){
      this.brand=brand;
      this.matricule=matricule; 
      this.engine=engine; 
    }

    get Brand(){
        return this.brand;
    }

    set Brand (newValue){
        this.brand=newValue;
    }

    start(){
        this.engine.start();
    }

    accelerate(dv){
       console.log('Accelerate the speed of the car');
       this.engine.accelerate(10);
       console.log(this.engine.speed);
    };

    deccelerate(dv){
        console.log('Deccelerate the speed of the car');
       this.engine.deccelerate(10);
       console.log(this.engine.speed);
    }
}

class Engine{
    #speed=0;
    constructor(speed){
        this.speed=speed;
    }
    start(){
        console.log("the engine is starting now ...")    
    }
    accelerate(dv){
        this.speed+=dv;
        console.log(`the engine is accelerating now ... @ ${this.speed}`)  
      
    };

    //TODO: interdire deccelarate de dimnuee la vitess < 0; 
    deccelerate(dv){
        this.speed-=dv;
        console.log(`the engine is deccelerating now ... @ ${this.speed}`)  
    }
}

class Wheel {

}

class Application{
    run(){
        console.log('Car System is Starting ...')
    }
}

app=new Application();
app.run();