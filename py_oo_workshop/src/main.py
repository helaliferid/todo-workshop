from kernel.car import Car
from kernel.engine import Engine

if __name__ == '__main__':
    mercedes = Car('Mercedes','aa-123-aB',Engine(0))
    print(mercedes.description())
    mercedes.start()
    mercedes.accelerate(50)
    mercedes.accelerate(50)
    mercedes.accelerate(50)
    mercedes.deccelerate(70)
    mercedes.deccelerate(100)
    print('main works')