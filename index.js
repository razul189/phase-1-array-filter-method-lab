const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]
 
// function findMatching(drivers, name) {
//     return drivers.filter(
//         (driver) => driver.toLowerCase() === name.toLowerCase()
//     )
// }
function findMatching(drivers, name) {
    return drivers.filter(
        function(driver) {
          return driver.toLowerCase() === name.toLowerCase()
         }
        )
     }
function fuzzyMatch(drivers,name){
    return drivers.filter(
        function(driver) { 
            return driver[0] === name[0]
        }
    )
}
function matchName(drivers, soughtName) {
    return drivers.filter(function(driver) {
      return driver.name === soughtName;
    });
  }