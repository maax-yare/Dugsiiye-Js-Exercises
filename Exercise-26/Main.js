
//Asychronous Example

function userDataAsch(){
    alert ("Fetching user data ...")
    return{Id : 7, Name: 'mohamed'}

}

console.log("Starting fetching data");

const user = userDataAsch();

console.log("fariintan ila la aqbalo digninta hore lama fulinayo");


//Asychronous Example

function getUserData(callback){
    setTimeout(() => {
        console.log("farintan laba seccond qadanysa");
    }, 2000);
}

console.log("Starting fetching data");

getUserData();

console.log("wali sug farinta official ka ah");