class Car:
    #Class attribute
    counter_of_cars=0
    
    # Constructor
    def __init__(self,brand,matricule,engine):
        self.brand=brand
        self.matricule=matricule
        self.engine=engine

    def get_brand(self):
        return self.brand
    
    def set_brand(self,value):
        self.brand=value

    def description(self):
        return f"Car : {self.brand} Matricule: {self.matricule}"
    
    def start(self):
        print (f"{self.brand} is starting now");
        print (f"{self.engine.start()}")
    
    def accelerate(self,dv):
        self.engine.accelerate(dv)
        print (f"{self.brand} is accelerating now @ speed {self.engine.speed} km/h")
    
    def deccelerate(self,dv):
        self.engine.deccelerate(dv)
        print (f"{self.brand} is accelerating now @ speed {self.engine.speed} km/h")
        


    