const testTruthy = (value) => {
    return value ? console.log(`${value} -> truthy`)
                 : console.log(`${value} -> falsy`);
}

testTruthy(undefined)
testTruthy(null)
testTruthy(new Boolean(false))
testTruthy('')
testTruthy(0)
testTruthy(NaN)
testTruthy(new Number(NaN))
testTruthy({})

let object = {
    name: 'Eduardo'
}

testTruthy(object.name)
testTruthy(object.age)