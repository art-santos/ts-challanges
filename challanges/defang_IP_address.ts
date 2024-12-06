function defangIPaddr(address: string): string {
    let splittedAddress = Array.from(address)

    let j = 0

    do {
        if (splittedAddress[j]==="."){
            splittedAddress[j] = "[.]"
        }
        j++
    }while(j<address.length)

    return splittedAddress.join("")
};


const ipfang = "1.1.1.1"

const dp = defangIPaddr(ipfang)
console.log("🚀 ~ dp:", dp)

//INPUT
//"1.1.1.1"

//ADDRESS
//255[.]100[.]50[.]0