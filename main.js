class RunTracker{
    constructor(name,email){
        this.name = name
        this.email = email
        this.runs = []
    }

    addRun(date,time,distance){
        this.runs.push({date:date,
                        time: time,
                        distance: distance})
    }

    totalDistance(){
        let total = this.runs.reduce((ar,cu) => ar.distance+cu.distance)
        console.log(total)
        return total
    }

    longestDistance(){
        let max = this.runs.reduce((ar,cu) => ar.distance>cu.distance? ar.distance:cu.distance)
        console.log(max)
        return max
    }

    averageSpeed(){
        let avg = this.runs.reduce((ar,cu) => ar.time+cu.time)/this.runs.reduce((ar,cu) => ar.distance+cu.distance)
        console.log(avg)
        return avg
    }
}


const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

runner.totalDistance() // 50 meters

runner.longestDistance() // 30 meters

runner.averageSpeed() // 0.3 meters per second