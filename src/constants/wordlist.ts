import { CONFIG } from "./config";

export const WORDS = ["adaawḵ", "adixs", "algyax̱", "algyax̱", "alisxw", "amalkw", "anist", "anjam", "anjoḵ", "an'on", "ayukws", "ay'aa'y", "aajax̱xw", "aapxin", "aat'ixs", "balgi", "balim", "bilan", "damḵxw", "da'mas", "dee'ntxw", "didi'y", "di'mhlxw", "dipx̱s", "dulpxw", "duxwsxw", "ee'esxw", "gidax̱", "gik'uuhl", "gilan", "gilaa'l", "ginees", "gi'nam", "gitl'", "gits'ooḵ", "g̱alan", "g̱alaaḵ'", "g̱anaa'w", "g̱aniis", "g̱aniis", "g̱antxw", "g̱as'uu", "g̱ehlx̱xw", "g̱enin", "g̱esx̱xw", "g̱olix", "g̱oo'os", "gwalḵ'a", "gwanks", "gwaasxwt", "gwidats'", "gwooyim", "gyamks", "gyax̱gu", "gyuksxw", "gyuwil", "habax̱", "hadix", "hagul", "hagun", "hakhlxw", "halakw", "hamom", "ha'mats", "ha'mooḵ", "hanaḵ'", "hanix", "hasaḵ", "hasba", "haseex", "hat'a'l", "hats'al", "hawil", "hayats", "haawaḵ", "hidin", "hilin", "hiihluxw", "hogix̱", "hoobix", "hu'max̱", "hlag̱oḵ", "hlantxw", "hlat'ax̱", "hlgilkw", "hlguya", "hliba'l", "hlisin", "hliyun", "hlut'ax̱", "ihlee'e", "ixsda", "japaan", "jayaas", "jayeehl", "jilks", "k'utk'u", "ḵ'alaa'n", "ḵ'eeg̱an", "ḵ'oox̱st", "kw'aat'ax̱", "kw'oodin", "laltxw", "laalax̱", "ligi'l", "litsx̱xw", "log̱ox̱", "lo'op", "lukw'il", "luulaḵ'", "mamst", "mandi", "ma'us", "maadim", "maaxwsxw", "midin", "milit", "miyup", "mi'yan", "mi'in", "miiluxw", "momst", "mo'on", "'masim", "'miyahl", "'mo'oxw", "naksxw", "naag̱ets", "naasik'", "no'ohl", "noosiḵ", "nuuhlx̱xw", "'niḵ'an", "saksxw", "sak'in", "saḵ'ap", "seegit", "seeg̱al", "seeg̱al", "seeg̱al", "see'lax̱", "sg̱ans", "sg̱enx", "sg̱olts", "sitxwt", "siip'in", "sḵ'eex̱xw", "skw'atxw", "sma'wn", "sog̱om", "tl'ook'", "t'asxu", "t'ilix", "t'uuts'xwa", "ts'ahlx̱xw", "ts'amtx", "ts'itxs", "ts'iipxwt", "ts'o'ot", "ts'u'win", "walix", "wantxw", "wat'uxw", "wijix", "wilaax", "wilḵt", "wineex", "wisax", "wisin", "wo'os", "'wahlin", "'widin", "xsg̱ooḵ", "xsihlxw", "x̱biist", "x̱pts'axw", "x̱sgyaak", "x̱sinḵ", "x̱ts'aḵxw", "yag̱ay", "yoog̱an", "yuxwsa"];

if (CONFIG.normalization) {
    WORDS.forEach((val, i) => WORDS[i] = val.normalize(CONFIG.normalization))
}

function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

if (CONFIG.shuffle) {
    shuffle(WORDS)
}