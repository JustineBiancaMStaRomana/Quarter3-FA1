function prob3() {
    if(confirm("Do you consent to sharing personal information with index.html?")){
        console.log("Name: " + nickname + " \nHeight: " + height1 + "\'" + height2 + "\"" + " \nWeight: " + weight + " lbs");
    }else{
        console.log("User does not wish to share his/her information.");
    }
}