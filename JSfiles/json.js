
        let ubaid={
            fname: 'ubaid',
            lnaem: 'Ullah',
            age: 22
        };
        console.log(ubaid);
        let json = JSON.stringify(ubaid);
        console.log(json);

        let khan = json.replace('ubaid' , 'Ahmad ali');
        console.log(khan);

        let newjson  = JSON.parse(khan);
        console.log(newjson);
        let aaaaa= JSON.stringify(khan);
        console.log(aaaaa);

        let change = aaaaa.replace('Ahmad ali','Adil khan');
        console.log(change);
        let nnnnjson = JSON.parse(change);
        console.log(nnnnjson);
        let jjjjj = JSON.parse(nnnnjson);
        console.log(jjjjj);