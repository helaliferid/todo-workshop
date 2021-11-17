class Engine:
    def __init__(self,speed):
        self.speed=speed

    def start(self):
        print("the engine is starting now ...")

    def accelerate(self,dv):
        self.speed += dv
        print(f"the engine is accelerating now ... @ {self.speed}")
    
    def deccelerate(self,dv):
        self.speed -= dv
        print(f"the engine is deccelerating now ... @ {self.speed}")