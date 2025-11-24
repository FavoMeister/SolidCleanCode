interface Bird {
    eat():void;
}

interface FlyingBird {
    fly():void;
}

interface RunningBird {
    run():void;
}

interface SwinnerBird {
    swin():void;
}

class Tucan implements Bird, HumingBird{
    public fly():void {}
    public eat():void {}
}

class HumingBird implements Bird, HumingBird{
    public fly():void {}
    public eat():void {}
}

class Ostrich implements Bird, RunningBird {
    public eat():void {}
    public run():void {}
}

class Penguin implements Bird, SwinnerBird {
    public eat():void {}
    public swin():void {}
}