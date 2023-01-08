const sport = "basketball"; // Global Variable
console.log("A. Global Variable");
console.log("  ", sport);
console.log("");

function atlet() {
    
    let name = "Lionel Messi"; // Local Variable
    const noMessi = 10;

    console.log("B. Local Variable");
    console.log("  ", name);
    console.log("  ", noMessi);
    console.log("");

    if(sport == "basketball") {
    
        name = "Kobe Bryant";
        const noKobe = 24; // Block Variable

        console.log("C. Block Variable");
        console.log("  ", name);
        console.log("  ", noKobe);
        console.log("");
    }
    console.log("D. Call Function");
    return "   " + name;
}

console.log(atlet());