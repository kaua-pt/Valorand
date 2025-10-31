export type Maps ={
    name:string,
    imgPath:string
}

export default class RandomList{
    maps:Maps[] = [];
    
    constructor(maps:Maps[]){
        this.maps = maps;
        this.reset();
    }

    public reset(){
        this.maps.sort(() => Math.random() - 0.5);
    }

    public getValue(num:number){
        this.reset();
        return this.maps.slice(0,num);
    }
}