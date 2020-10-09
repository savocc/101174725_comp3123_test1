const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(array){
    return new Promise(function(resolve, reject){
        if (array.filter(e => typeof e === 'string' && e !== '').every(word => typeof word === 'string')) {
             resolve(array.filter(e => typeof e === 'string' && e !== '').map(word => word.toLowerCase()));
        }
        else {
             reject('Error. Wrong input.');
        }
    });
 }


lowerCaseWords(mixedArray)
                .then(output=>console.log(output))
                .catch(err=>console.log(err))