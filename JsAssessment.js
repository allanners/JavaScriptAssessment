/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_COLLECTION = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _hairColor, _eyeColor, _fashionType, _accessory) {
    const NFT = {
        "name": _name,
        "hairColor": _hairColor,
        "eyeColor": _eyeColor,
        "fashionType": _fashionType,
        "accessory": _accessory
    };
    NFT_COLLECTION.push(NFT);
    console.log("Successfully minted " + _name + "!!!\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (var i = 0; i < NFT_COLLECTION.length; i++){
        console.log("=======================");
        console.log("NFT ID: " + (i + 1));
        console.log("Name: " + NFT_COLLECTION[i].name);
        console.log("Hair Color: " + NFT_COLLECTION[i].hairColor);
        console.log("Eye Color: " + NFT_COLLECTION[i].eyeColor);
        console.log("Fashion Type: " + NFT_COLLECTION[i].fashionType);
        console.log("Accessory: " + NFT_COLLECTION[i].accessory);
        console.log("=======================");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The number of NFTs that have been minted are: " + NFT_COLLECTION.length);
}

// call your functions below this line
mintNFT("Fernando", "Blue", "Brown", "Streetwear", "Gloves");
mintNFT("Marcus", "Black", "Blue", "Smart Casual", "Bracelet");
mintNFT("Jared", "Red", "Green", "Casual", "Necklace");
mintNFT("Felipe", "Gray", "Black", "Formal", "Ring");
listNFTs();
getTotalSupply();
