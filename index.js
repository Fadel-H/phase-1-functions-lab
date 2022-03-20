// Code your solution in this file!

function distanceFromHqInBlocks(Distance){
    return Math.abs(Distance-42)
}

function distanceFromHqInFeet(Distance){
    return Math.abs((Distance-42)*264)
}

function distanceTravelledInFeet(Distance,Distance2){
    return Math.abs((Distance-Distance2)*264)
}

function calculatesFarePrice(Distance,Distance2){
    if (distanceTravelledInFeet(Distance,Distance2) <= 400){
        return 0
    }

    else if (distanceTravelledInFeet(Distance,Distance2) <=2000) {
        return (distanceTravelledInFeet(Distance,Distance2)-400)*0.02
    }

    else if (distanceTravelledInFeet(Distance,Distance2) <=2500){
        return 25
    }
    
    else {
        return 'cannot travel that far'
    }
}