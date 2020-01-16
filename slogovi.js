

const glasovi = ["a","b","c","č","ć","d","dž","đ","e","f","g","h","i","j","k","l","lj","m","n","nj","o","p","r","s","š","t","u","v","z","ž","A","B","C","Č","Ć","D","DŽ","Đ","E","F","G","H","I","J","K","L","LJ","M","N","NJ","O","P","R","S","Š","T","U","V","Z","Ž","Dž","Lj","Nj","а","б","в","г","д","ђ","е","ж","з","и","ј","к","л","љ","м","н","њ","о","п","р","с","т","ћ","у","ф","х","ц","ч","џ","ш","А","Б","В","Г","Д","Ђ","Е","Ж","З","И","Ј","К","Л","Љ","М","Н","Њ","О","П","Р","С","Т","Ћ","У","Ф","Х","Ц","Ч","Џ","Ш"];
const samoglasnici = ["a","e","i","o","u","A","E","I","O","U","а","е","и","о","у","А","Е","И","О","У","À","Á","Â","Ã","Ä","È","É","Ê","Ë","Ì","Í","Î","Ï","Ò","Ó","Ô","Õ","Ö","Ù","Ú","Û","Ü","à","á","â","ã","ä","è","é","ê","ë","ì","í","î","ï","ò","ó","ô","ô","õ","ö","ù","ú","û","ü","Ā","ā","Ē","ē","Ĩ","ĩ","Ī","ī","Ō","ō","Ū","ū","Ũ","ũ","Ű","ű","ѝ","Ӣ","ӣ","Ӥ","ӥ","Ӧ","ӧ","Ӯ","ӯ","Ӱ","ӱ","Ӳ","ӳ"];
const nosiociSloga = ["l","n","r","L","N","R","л","н","р","Л","Н","Р"]; //r-va-ti, bi-ci-kl, I-bn, N-dža-me-na. POSEBAN SLUČAJ: M KAO NOSILAC SLOGA - Ms-ti-slav
const suglasnici = ["b","c","č","ć","d","dž","đ","f","g","h","j","k","lj","m","nj","p","s","š","t","v","z","ž","B","C","Č","Ć","D","DŽ","Đ","F","G","H","J","K","LJ","M","NJ","P","S","Š","T","V","Z","Ž","Dž","Lj","Nj","б","в","г","д","ђ","ж","з","ј","к","љ","м","њ","п","с","т","ћ","ф","х","ц","ч","џ","ш","Б","В","Г","Д","Ђ","Ж","З","Ј","К","Љ","М","Њ","П","С","Т","Ћ","Ф","Х","Ц","Ч","Џ","Ш"];
const sonanti = ["v","r","j","l","lj","n","nj","m","V","R","J","L","LJ","N","NJ","M","Lj","Nj","в","р","ј","л","љ","н","њ","м","В","Р","Ј","Л","Љ","Н","Њ","М"];
const subSonanti = ["j","v","l","lj","r","J","V","L","LJ","R","Lj","ј","в","л","љ","р","Ј","В","Л","Љ","Р"];
const praskavi = ["b","d","g","p","t","k","B","D","G","P","T","K","б","д","г","п","т","к","Б","Д","Г","П","Т","К"];
const strujniISliveni = ["c","č","dž","ć","đ","f","s","z","š","ž","h","C","Č","DŽ","Ć","Đ","F","S","Z","Š","Ž","H","Dž","ц","ч","џ","ћ","ђ","ф","с","з","ш","ж","х","Ц","Ч","Џ","Ћ","Ђ","Ф","С","З","Ш","Ж","Х"];
const izuzeci = ["anjon","nadživ","injek","injic","injunk","injur","konjek","konjicir","konjug","konjunk","konjur","ANJON","NADŽIV","INJEK","INJIC","INJUNK","INJUR","KONJEK","KONJICIR","KONJUG","KONJUNK","KONJUR","анјон","наджив","инјек","инјиц","инјунк","инјур","конјек","конјицир","конјуг","конјунк","конјур","АНЈОН","НАДЖИВ","ИНЈЕК","ИНЈИЦ","ИНЈУНК","ИНЈУР","КОНЈЕК","КОНЈИЦИР","КОНЈУГ","КОНЈУНК","КОНЈУР"]; // izuzeci kada se glasovi dž, lj, nj izgovaraju odvojeno
const slogotvornoR = ['r', 'R', 'р', 'Р'];
const izuzeciSlogotvornoR = ["RĐ", 'rđ', 'рђ', 'РЂ', 'rv', 'RV', 'рв', 'РВ', 'rz', 'RZ', 'рз', 'РЗ'];
const izuzeciSlogotvornoRA = ['a', 'A', 'а', 'А'];

function vocalCount(word) {                                 // funkcija broji koliko ima vokala u reči
    let brojac = 0;
    for(i=0; i<word.length; i++) {
        if (samoglasnici.includes(word[i])) {
            brojac++;
        };       
    };
    return brojac;
};

function daLiJeIzuzetak(word) {
    let j= 0;
    for (let i = 0; i<izuzeci.length; i++) {
        if (word.includes(izuzeci[i])) {
            j++;
        }
    };
    if (j>0) {
        return true;
    } else {
        return false;
    }
};

function pushWordToString(word) {                         // funkcija pretvara reč (string) u niz (array) pojedinačnih glasova
    let wordString = [];
    if (daLiJeIzuzetak(word)) {                           // da li uneta reč predstavlja neki od izuzetaka u kojima se dž, lj, nj izgovaraju kao dva glasa (nadživeti, injekcija, konjukcija i sl)
        for (let i=0; i<word.length; i++) {                   
            if ((i>=4) && ((word[i]===('d') && word[i+1] === 'ž') || (word[i] === 'l' && word [i+1] === 'j') || (word[i] === 'n' && word [i+1] === 'j') || (word[i]===('D') && word[i+1] === 'Ž') || (word[i] === 'L' && word [i+1] === 'J') || (word[i] === 'N' && word [i+1] === 'J'))) {
                wordString.push(word[i]+word[i+1]);       // ako je uneta reč izuzetak, proveri da li posle najveće dužine nepromenljive osnove izuzetka (4 grafeme - NAKARADNO) postoji još koje dž, lj ili nj i tretiraj ostale kombinacije grafema svaku kao jedan glas (npr. NADŽIVLJEN) 
                i++;
            } else {
                wordString.push(word[i]);                // ako je uneta reč izuzetak i ne sadrži više dž, lj, nj - tretiraj svaku pojedinačnu grafemu kao zaseban glas (npr. NADŽIVETI)
            }
        }
    }
    else {                                           
        for (let i=0; i<word.length; i++) {
            if ((word[i] === 'd' && word[i+1] === 'ž') || (word[i] === 'D' && word[i+1] === 'ž') || (word[i] === 'D' && word[i+1] === 'Ž') || (word[i] === 'l' && word [i+1] === 'j') || (word[i] === 'L' && word [i+1] === 'j') || (word[i] === 'L' && word [i+1] === 'J') || (word[i] === 'n' && word [i+1] === 'j') || (word[i] === 'N' && word [i+1] === 'j') || (word[i] === 'N' && word [i+1] === 'J')) {
                wordString.push(word[i]+word[i+1]);       // ako uneta reč ne predstavlja izuzetak za dž, lj, nj, a sadrži dž, lj ili nj - tretiraj kombinacije grafema dž, lj, nj kao zasebne glasove 
                i++;
            } else {
                wordString.push(word[i]);                 // ako uneta reč ne sadrži dž, lj ili nj - tretiraj svaku pojedinačnu grafemu kao zaseban glas
            }
        }
    }   
    return wordString;
};

function wordLengthCheck(word) {                          // funkcija određuje dužinu reči i na osnovu dužine reči dodeljuje odgovarajuću funkciju za prebrojavanje slogova
    let str = pushWordToString(word);
    let count = 0;
    str.forEach ( () => {count++});
    const wordLength = count;
    
    switch (wordLength) { 
        
        case 1:
            return word;
        case 2: 
            return two(word); 
        case 3: 
            return three(word); 
        case 4:
            return four(word);
        case 5:
            return five(word);
        case 6:
            return six(word);
        default: 
            return sevenPlus(word);
    };
};

function checkIndexesOfVocals(word) {
    let indexesOfVocals = [];
    let wordString = pushWordToString(word);
    let count = 0;
    wordString.forEach ( () => {count++});

    for (let i=0; i<count; i++) {
        if (samoglasnici.includes(wordString[i])) {
            indexesOfVocals.push(i);
        }
    };
    return indexesOfVocals;
};

function checkIndexesOfSonants(word) {
    let indexesOfSonants = [];
    let wordString = pushWordToString(word); 
    let count = 0;
    wordString.forEach ( () => {count++});

    for (let i=0; i<count; i++) {
        if (nosiociSloga.includes(wordString[i]) && !samoglasnici.includes(wordString[i-1]) && !samoglasnici.includes(wordString[i+1])) {
            indexesOfSonants.push(i);
        }
    };
    return indexesOfSonants;
};

function returnPattern(word) {
    let pattern = [];
    let wordString = pushWordToString(word);
    let count = 0;
    wordString.forEach ( () => {count++});

    for (i=0; i<count; i++) {
        if (samoglasnici.includes(wordString[i])) {
            pattern.push('V');
        } else if (suglasnici.includes(wordString[i])) {
            pattern.push('K');
        } else {
            pattern.push('S');
        }
    };
    let finalPattern = pattern.join('');
    return finalPattern;
}; 

function returnType(word) {
    let type = [];
    let wordString = pushWordToString(word);
    let count = 0;
    wordString.forEach ( () => {count++});

    for (i=0; i<count; i++) {
        if (praskavi.includes(wordString[i])) {
            type.push('E');
        } else if (strujniISliveni.includes(wordString[i])) {
            type.push('F');
        } else if (subSonanti.includes(wordString[i])) {
            type.push('Ss');
        }
    };
    let finalType = type.join('');
    return finalType;
};

// REČ OD DVA GLASA

function two (word) {                                                               // funkcija proverava broj slogova u rečima od dva glasa
    let wordString = pushWordToString(word);
    if (vocalCount(word) === 2) {
        wordString.splice(1, 0, '|');                                               // ako reč ima dva samoglasnika, imaće i dva sloga
    };
    let separatedWord = wordString.join('');                                        // ako reč ima jedan ili nijedan samoglasnik, imaće jedan slog
    return separatedWord;                                                     
};

// REČ OD TRI GLASA

function three (word) {                                                             // funkcija proverava broj slogova u rečima od tri glasa
    let wordString = pushWordToString(word);
    let pattern = returnPattern(word);
    let requiredPattern1 = ['SVV', 'KVV'];
    let requiredPattern2 = ['VKS', 'SKV', 'SSV'];
    if (vocalCount(word) === 2) {                                                   // ako reč ima dva samoglasnika, imaće i dva sloga (e|on, ge|a)
        if (requiredPattern1.includes(pattern)) {                                    // ako su dva samoglasnika na drugom i trećem mestu, granica sloga je posle prvog glasa (e|on)
            wordString.splice(2, 0, '|');
        } else {
            wordString.splice(1, 0, '|');                                           // ako su dva samoglasnika na prvom i drugom mestu, granica sloga je posle drugog glasa (ge|a)
        }
    } else if (requiredPattern2.includes(pattern)) {                                // ako reč ima jedan samoglasnik i jedan sonant koji su razdvojeni suglasnikom, granica sloga je posle prvog glasa (I|bn ili r|že)
        wordString.splice(1, 0, '|');                                               
    };
    let separatedWord = wordString.join('');                                        // u svim drugim slučajevima reč ima jedan slog
    return separatedWord;
};

// REČ OD ČETIRI GLASA

function four (word) {
    let wordString = pushWordToString(word);
    let indexesOfVocals = checkIndexesOfVocals(word);
    let pattern = returnPattern(word);
    let type = returnType(word);
    let requiredPattern1 = ['VKSK', 'SSVS', 'SSVK', 'SKVS', 'SKVK', 'SKSV'];
    let requiredPattern2 = ['VSKS','VKKS', 'SKKV', 'KVKS', 'KSSV', 'KSKV', 'SVKS', 'SSKV'];

    if (vocalCount(word) === 3) {
        wordString.splice((indexesOfVocals[0] + 1), 0, '|');
        wordString.splice((indexesOfVocals[1] + 2), 0, '|');
    };
    if (vocalCount(word) === 2) {
        if (pattern [0] === 'V') {
            if (pattern [1] === 'V') {
                if (pattern [3] === 'S' && pattern [2] === 'K') {
                    wordString.splice(1, 0, '|');
                    wordString.splice(3, 0, '|');
                } else {
                    wordString.splice(1, 0, '|');
                }
            };
            if (pattern [2] === 'V') {
                wordString.splice(1, 0, '|');
            };
            if (pattern [3] === 'V') {
                let conGroup = wordString.slice(1, 3).join('');
                wordString.splice(proveriPravila(conGroup) + 1, 0, '|');
            }
        }
        else if (pattern [1] === 'V') {
            if (pattern [2] === 'V') {
                wordString.splice(2, 0, '|');
            };
            if (pattern [3] === 'V') {
                wordString.splice(2, 0, '|');
            }
        }
        else if (pattern [2] === 'V') {
            if (pattern [0] === 'S') {
                wordString.splice(1, 0, '|');
                wordString.splice(4, 0, '|');
            } else {
                wordString.splice(3, 0, '|');
            };
        };
    };
    if (vocalCount(word) === 1) {
        if (requiredPattern1.includes(pattern)) {
            /*if (sonanti.includes(wordString[1])) {
                wordString;
            }
             else { */
            wordString.splice(1, 0, '|');
            //}
        } 
        else if (requiredPattern2.includes(pattern)) {
            if (pattern === 'SKKV' && (returnType(word[1]) === 'F' || returnType(word[1]) === 'Ss')) {
                wordString.splice(1, 0, '|');
            }
            else if (sonanti.includes(wordString[2])) {
                wordString;
            } else {
            wordString.splice(2, 0, '|');
            }
        } 
        else if (pattern[2] === 'S' && (word[3] === 'r' || word[3] === 'R' || word[3] === 'р' || word[3] === 'Р')) { //žan-r
            wordString.splice(3, 0, '|');
        }
        else if ((pattern === "KKVK" || pattern === "KKVS") && (type[0] === 'E' && type[1] === 'E')) {
            wordString.splice(1, 0, "|");
        } 
    }
    let separatedWord = wordString.join('');                                           
    return separatedWord;
};

// REČ OD PET GLASOVA

function five(word) {
    let wordString = pushWordToString(word);
    let indexesOfVocals = checkIndexesOfVocals(word);
    let pattern = returnPattern(word);
    if (vocalCount(word) === 4) {
        wordString.splice((indexesOfVocals[0] + 1), 0, '|');
        wordString.splice((indexesOfVocals[1] + 2), 0, '|');
        wordString.splice((indexesOfVocals[2] + 3), 0, '|');
    };
    if (vocalCount(word) === 3) {
        if (pattern[0] === 'V') {
            if ((pattern[1] === 'K' || pattern[1] === 'S') && (pattern[2] === 'K' || pattern[2] === 'S')) {
                let firstPart = wordString.slice(0,2);
                firstPart.push('|');
                let remainder = wordLengthCheck(wordString.slice(2,5).join(''));
                wordString.splice(0, 5, firstPart.join('') + remainder);
            } else {
            let firstV = wordString.shift();
            let remainder = wordLengthCheck(wordString.join(''));
            wordString.unshift(firstV + '|');
            wordString.splice(1, 4, remainder);
            }
        } else if (pattern[1] === 'V') {
            let firstPart = wordString.slice(0,2);
            firstPart.push('|');
            let remainder = wordLengthCheck(wordString.slice(2,5).join(''));
            wordString.splice(0, 5, firstPart.join('') + remainder);
        } else if (pattern[2] === 'V') {
            if (pattern[0] === 'K') {
                wordString.splice(3, 0, '|');
                wordString.splice(5, 0, '|');
            } else {
                wordString.splice(2, 0, '|');
                wordString.splice(4, 0, '|');
                wordString.splice(6, 0, '|');
            }
        }
    };
    if (vocalCount(word) === 2) {
        if (pattern[0] === 'V') {
            if (pattern[1] === 'V') {
                if ((pattern[2] === 'S') || (pattern[3] === 'S') || (pattern[4] === 'S')) {
                    wordString.splice(1, 0, '|');
                    wordString.splice(3, 0, '|');
                } else {
                    wordString.splice(1, 0, '|');
                }
            } else if (pattern[2] === 'V') {
                let firstV = wordString.shift();
                let remainder = wordLengthCheck(wordString.join(''));
                wordString.unshift(firstV + '|');
                wordString.splice(1, 4, remainder);
            } else {
                let conGroup = wordString.slice(1, 3).join('');
                wordString.splice(1+proveriPravila(conGroup), 0, '|');
                wordString.splice(2+proveriPravila(conGroup), 4 - proveriPravila(conGroup), wordLengthCheck(wordString.slice(2+proveriPravila(conGroup), 6).join(''))); 
            }
        }
        else if (pattern[1] === 'V') {
            if (pattern[2] === 'V') {
                if (pattern [4] === 'S' && !pattern [3] === 'S') {
                    wordString.splice(2, 0, '|');
                    wordString.splice(4, 0, '|');
                } else {
                    wordString.splice(2, 0, '|');
                }
            };
            if (pattern[3] === 'V') {
                wordString.splice(2, 0, '|');
            } else {
                let conGroup = wordString.slice(2, 4).join('');
                wordString.splice(2+proveriPravila(conGroup), 0, '|');
                wordString.splice(3+proveriPravila(conGroup), 3 - proveriPravila(conGroup), wordLengthCheck(wordString.slice(3+proveriPravila(conGroup), 6).join('')));
            }
        }
        else if (pattern[2] === 'V') {
            if (pattern [0] === 'S' && pattern[1] === 'K') {
                wordString.splice(1, 0, '|');
                wordString.splice(4, 0, '|');
            } else {
                wordString.splice(3, 0, '|');
            }
        };
        if (pattern[3] === 'V' && pattern[4] === 'V') { //Bug (pevaj) - ako ne stoji && pattern 4 onda radi jednom za pattern[1] === V i pattern[3] === V i jednom za ovo - pogrešno deli reč
            if ((pattern[0] === 'S' && pattern[1] === 'K') || (pattern[0] === 'K' && pattern[1] === 'S') || pattern[0] === 'S' && pattern[1] === 'S') {
                wordString.splice(2, 0, '|');
                wordString.splice(5, 0, '|');
            } else {
                wordString.splice(4, 0, '|');
            }
        }
    };
    if (vocalCount(word) === 1) {
        if (pattern [0] === 'V') {
            wordString.splice(1, 0, '|');
        };
        if (pattern [1] === 'V') {
            if (pattern [3] === 'S') {
                if (sonanti.includes(wordString[2])) {
                    wordString;
                } else {
                    wordString.splice(2, 0, '|');
                }
            } else if (pattern[4] === 'S') {
                wordString.splice(3, 0, '|');
            }
        };
        if (pattern [2] === 'V' && pattern [0] === 'S') {
            if (pattern[4] === 'S') {
                wordString.splice(1, 0, '|');
                wordString.splice(4, 0, '|');
            } else {
                wordString.splice(1, 0, '|');
            }
        }
        else if (pattern [2] === 'V' && pattern[4] === 'S') {
            wordString.splice(3, 0, '|');
        };
        if (pattern [3] === 'V' && pattern [0] === 'S') {
            wordString.splice(1, 0, '|');
        } else if (pattern [3] === 'V' && pattern [1] === 'S') {
            wordString.splice(2, 0, '|');
        };
        if (pattern [4] === 'V') {
            if (sonanti.includes(wordString[1]) && sonanti.includes(wordString[2])) {
                wordString.splice(3, 0, '|');
            } else if (pattern [1] === 'S') {
                wordString.splice(2, 0, '|');
            } else if (pattern [2] === 'S') {
                wordString.splice(3, 0, '|');
            }
        }
    };
    let separatedWord = wordString.join('');                                           
    return separatedWord;
};

// REČ OD ŠEST GLASOVA

function six(word) {
    let wordString = pushWordToString(word);
    let indexesOfVocals = checkIndexesOfVocals(word);
    let indexesOfSonants = checkIndexesOfSonants(word);
    let pattern = returnPattern(word);
    if (vocalCount(word) === 1 && indexesOfVocals[0] > 2 && pattern[indexesOfVocals[0]-1] === 'S' && (pattern[5] === 'K' || pattern[5] === 'S')) {
        wordString;
    }  
    else if (indexesOfVocals[0] > indexesOfSonants[0]) {
        let conGroup = wordString.slice(indexesOfSonants[0]+1, indexesOfSonants[0]+3).join('');
        if (pattern[indexesOfSonants[0]+2] === 'V') {
            let firstPart = wordString.slice(0, indexesOfSonants[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        } else {
            let firstPart = wordString.slice(0, indexesOfSonants[0] + proveriPravila(conGroup) + 1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
    } else {
        let conGroup = wordString.slice(indexesOfVocals[0]+1, indexesOfVocals[0]+3).join('');
        let conGroupPlus = wordString.slice(indexesOfVocals[0]+2, indexesOfVocals[0]+4).join('');
        if (izuzeciSlogotvornoR.includes(conGroupPlus) && izuzeciSlogotvornoRA.includes(wordString[indexesOfVocals[0] + 4])) {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+2).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
        else if (izuzeciSlogotvornoR.includes(conGroup) && izuzeciSlogotvornoRA.includes(wordString[indexesOfVocals[0] + 3])) {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
        else if (pattern[indexesOfVocals[0]+1] === 'V' || pattern[indexesOfVocals[0]+2] === 'V') {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        } else {
            let firstPart = wordString.slice(0, indexesOfVocals[0] + proveriPravila(conGroup) + 1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
    }
    let separatedWord = wordString.join('');                                           
    return separatedWord;
};
 
// SEDAM I VIŠE GLASOVA

function sevenPlus(word) {

    let wordString = pushWordToString(word);
    let indexesOfVocals = checkIndexesOfVocals(word);
    let indexesOfSonants = checkIndexesOfSonants(word);
    let pattern = returnPattern(word);
    let type = returnType(word);
    
    if (indexesOfVocals[0] > indexesOfSonants[0]) {
        let conGroup = wordString.slice(indexesOfSonants[0]+1, indexesOfSonants[0]+3).join('');
        if (pattern[indexesOfSonants[0]+2] === 'V') {
            let firstPart = wordString.slice(0, indexesOfSonants[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        } else {
            let firstPart = wordString.slice(0, indexesOfSonants[0] + proveriPravila(conGroup) + 1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
    } else {
        let conGroup = wordString.slice(indexesOfVocals[0]+1, indexesOfVocals[0]+3).join('');
        let conGroupPlus = wordString.slice(indexesOfVocals[0]+2, indexesOfVocals[0]+4).join('');
        if (izuzeciSlogotvornoR.includes(conGroupPlus) && izuzeciSlogotvornoRA.includes(wordString[indexesOfVocals[0] + 4])) {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+2).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
        else if (izuzeciSlogotvornoR.includes(conGroup) && izuzeciSlogotvornoRA.includes(wordString[indexesOfVocals[0] + 3])) {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
        else if (pattern[indexesOfVocals[0]+1] === 'V' || pattern[indexesOfVocals[0]+2] === 'V') {
            let firstPart = wordString.slice(0, indexesOfVocals[0]+1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        } else {
            let firstPart = wordString.slice(0, indexesOfVocals[0] + proveriPravila(conGroup) + 1).join('');
            firstPart += '|';
            let remainder = wordLengthCheck(wordString.slice(pushWordToString(firstPart).length - 1, wordString.length).join(''));
            wordString.splice(0, wordString.length, firstPart + remainder);
        }
    }
    let separatedWord = wordString.join('');                                           
    return separatedWord;
};

function splitTextToArray (text) {
    let textArray = text.split(/\s+/);
    if (textArray[textArray.length - 1] === "") {
        textArray.pop();
    };
    if (textArray[0] === "") {
        textArray.shift();
    };
    textArray.forEach((element) => {
        for(i=0; i<element.length; i++) {
            if (glasovi.includes(element[i]) === false || element[i] === ' ') {
                textArray.splice(textArray.indexOf(element), 1, (element.replace(element[i], '')));
            } 
        }
    });
    return textArray;
};
    
function checkForEveryWord (textArray) {
    let separatedWordsArray = [];
    textArray.forEach((word) => {
        separatedWordsArray.push(wordLengthCheck(word));
    });
    return separatedWordsArray;
};

function checkText() {
    let text = document.getElementById("newInput").value;
    let textArray = splitTextToArray (text);
    let separatedWordText = checkForEveryWord(textArray);
    let pismo = document.documentElement.lang;
    if (textArray.length === 0) {
        if (pismo === 'sr') {
            document.getElementById("result").innerHTML = "Molim Vas unesite jednu ili više reči.";
            document.getElementById("container").style.visibility = "visible";
        } else {
            document.getElementById("result").innerHTML = "Молим Вас унесите једну или више речи";  
            document.getElementById("container").style.visibility = "visible";  
        }
    } else {
        if (pismo === "sr") {
            document.getElementById("result").innerHTML = separatedWordText.join('| ');
            document.getElementById("container").style.visibility = "visible";
            document.getElementById("reportBug").style.visibility = "visible";
        } else {
            document.getElementById("result").innerHTML = separatedWordText.join('| ');
            document.getElementById("container").style.visibility = "visible";
            document.getElementById("reportBugCyr").style.visibility = "visible";
        }
    }
};

function naslov() {
    document.getElementById("naslov").innerHTML = "PO|DE|LI| TEKST| NA| SLO|GO|VE";
};
function naslovCyr() {
    document.getElementById("naslov").innerHTML = "ПO|ДЕ|ЛИ| ТЕКСТ| НА| СЛО|ГО|ВЕ";
}

function defNaslov() {
    document.getElementById("naslov").innerHTML = "PODELI TEKST NA SLOGOVE";
};
function defNaslovCyr() {
    document.getElementById("naslov").innerHTML = "ПОДЕЛИ ТЕКСТ НА СЛОГОВЕ";
}

function addSpace(e) {
    if (e.keyCode === 13) {
        document.getElementById("newInput").value += ' ';
    }
};

function sendEmail()
        {
            let subject = "Prijava pogrešno podeljene reči";
            let wrong = document.getElementById("inputWrong").value;
            let right = document.getElementById("inputRight").value;
            let body = "Reč: " + wrong + '.' + '%0D%0A' + "Ispravna podela na slogove: " + right + '.';
            document.getElementById("report1").href = "mailto: report@podelinaslogove.com?subject=" + subject + "&body=" + body;
            document.getElementById("thankYouMsg").style.visibility = "visible";
            console.log(document.getElementById("report1").href);
        };

// PRAVILA PODELE NA SLOGOVE 

function pravilo1(str) {
    if (returnType(str[0]) === 'F' && (returnPattern (str[1]) === 'K' || nosiociSloga.includes(str[1]))) {
        return true;
    } else {
        return false;
    }
};

function pravilo2(str) {
    if (!sonanti.includes(str[0]) && returnPattern(str[0]) === 'K' && returnType(str[1]) === 'Ss') {
        return true;
    } else {
        return false;
    }
};

function pravilo3(str) {
    if (sonanti.includes(str[0]) && sonanti.includes(str[1])) {
        return true;
    } else {
        return false;
    }
};

function pravilo4(str) {
    if (returnType(str[0]) === 'E' && !subSonanti.includes(str[1]) && (returnPattern(str[1]) === 'K' || nosiociSloga.includes(str[1]))) {
        return true;
    } else {
        return false;
    }
};

/*
function pravilo5(str) {                                                            // PRAVILO ZA IJEKAVICU - AKO VAŽI 5, VAŽI I 3, ALI 5 POBIJA 3 - PROBLEM SA DRUGIM REČIMA E.G. INJEKCIJA, ANJON
    //let str = pushWordToString(str);
    if (sonanti.includes(str[0]) && str[1] === 'j') {
        return true;
    } else {
        return false;
    }
};
*/

function pravilo6(str) {
    if (sonanti.includes(str[0]) && !sonanti.includes(str[1]) && !samoglasnici.includes(str[1])) {
        return true;
    } else {
        return false;
    }
};

function proveriPravila(str) {
    if (pravilo1(str) || pravilo2(str)) {
        return 0;
    } else if (pravilo3(str) || pravilo4(str) || pravilo6(str)) {
        /*if (pravilo5(str)) {
            return 0;
        } else {*/
        return 1;
    }
    else {
        console.log('Pravilo nije definisano');
    }
};
  