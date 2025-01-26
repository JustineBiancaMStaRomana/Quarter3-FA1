function prob3() {
    if(confirm("Do you consent to sharing personal information with index.html?")){
        console.log("Name: " + nickname + " \nHeight: " + height + " \nWeight: " + weight);
    }else{
        console.log("User does not wish to share his/her information.");
    }
}