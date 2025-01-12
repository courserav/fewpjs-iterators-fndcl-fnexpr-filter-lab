// Code your solution here
function findMatching(driversArray, string){
    return driversArray.filter(driver => {
        return driver.toLowerCase() == string.toLowerCase()
    })
}

function fuzzyMatch(driversArray, string){
    return driversArray.filter(driver => {
        return driver.charAt(0) == string.charAt(0)
    })
}

function matchName(driversArray, string){
    return driversArray.filter(driver => {
        return driver.name === string
    })
}