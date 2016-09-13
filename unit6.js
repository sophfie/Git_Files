var friends = {
bill: {
    firstName: 'Bill',
    lastName: 'Gates',
    number: 09876384,
    address: ['One Microsoft Way','Redmond','WA','98052']
    },
steve: {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: 09463832,
    address: ['Two Apple St','Palo Alto','CA','90210']
    }
};

var list = function(friends) {
        for(var key in friends) {
        console.log(key)
        }
    }
    
var search = function(name) {
    for(var key in friends) {
    if (friends[key].firstName === name)  { 
        console.log(friends[key]);
        return friends[key];
        }
    }
    
}




