/* 
Create a Promise which will be resolved by 1 second delay
• Display the success response on the console
• Create the same functionality with async / await syntax
Alter the previous code in a way that the Promise should be randomly resolved or rejected by 1
second delay
• Alter the usage of the Promise also to handle the possible error
Send a request to an arbitrary URL and log the response onto the console
• Handle the errors also (eg.: try to misspell the URL)
*/

const myPromise = new Promise((resolve, reject) => {   
    setTimeout(() => {
        resolve('Success!'); 
    }, 1000)
});

myPromise
    .then(value => console.log(value))  
    .catch(error => console.error(error));

async function waitForPromise() {
        const value = await myPromise;  // addig megáll a fv futása (de nem a teljes js futása),
                                        // nem megy tovább ezen a soron, amíg az awaittel nem teljesült a Promise
        console.log(value);
    }
    
waitForPromise();

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        (Math.random() < 0.5) ? resolve('Promise is successful') : reject('Promise error');
    }, 1000)
});

myPromise2
    .then(value => console.log(value))  
    .catch(error => console.error(error));

const waitForPromise2 = async () => {
        try {
            const value = await myPromise2;
            console.log(value);
        } catch(error) {
            console.error(error);
        }
    }
    
waitForPromise2();

const testURLrequest = async () => {
    const response = await fetch(`https://api.genderize.io/?name=eve`, {method: 'GET'});
    const jsonObject = await response.json();

    console.log(jsonObject);
}
testURLrequest();

async function testRequest() {
    const response = await fetch(`https://api.genderize.io/?name=eve`);
    console.log(await response.json());
}
testRequest();

fetch(`https://api.genderiize.io/?name=eve`)
    .then(async (response) => console.log(await response.json()))
    .catch((error) => console.log(`Error: ${error}`));
