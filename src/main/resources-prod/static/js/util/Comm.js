const Comm = {
    baseURL: 'http://sangokch.org/mng',
    imgURL: 'http://sangokch.org/mng/file/',
    noImgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    //millisecond(1/1000)
    millisecond() {
        return (new Date()).getTime().toString()
    },
    bibleRegTitle: new RegExp(/^(창세기|출애굽기|레위기|민수기|신명기|여호수아|사사기|룻기|사무엘상|사무엘하|열왕기상|열왕기하|역대상|역대하|에스라|느헤미야|에스더|욥기|시편|잠언|전도서|아가|이사야|예레미야|예레미야애가|에스겔|다니엘|호세아|요엘|아모스|오바댜|요나|미가|나훔|하박국|스바냐|학개|스가랴|말라기|마태복음|마가복음|누가복음|요한복음|사도행전|로마서|고린도전서|고린도후서|갈라디아서|에베소서|빌립보서|골로새서|데살로니가전서|데살로니가후서|디모데전서|디모데후서|디도서|빌레몬서|히브리서|야고보서|베드로전서|베드로후서|요한일서|요한이서|요한삼서|유다서|요한계시록)\s*/),
    bibleRegShot: new RegExp(/\s*([0-9]+)(?:장|편)\s*([0-9]+)절$/),
    bibleRegLong: new RegExp(/\s*([0-9]+)(?:장|편)\s*([0-9]+)절\s*~?\s*([0-9]+)절/),
    hymnReg: new RegExp(/.*찬송가?\s*([0-9]+).*/),
    parseBibleHymn(text) {
        let result = {
            kind:'',
            title:'',
            chapter:0,
            s_verse:'',
            e_verse:'',
        }
        let arrTitle = text.match(this.bibleRegTitle)
        if (arrTitle && arrTitle[1]) {
            result.kind = 'B'
            result.title = arrTitle[1]
            let arrShot = text.match(this.bibleRegShot)
            if (arrShot && arrShot[1] && arrShot[2]) {
                result.chapter = arrShot[1]
                result.s_verse = arrShot[2]
                result.e_verse = arrShot[2]
            } else {
                let arrLong = text.match(this.bibleRegLong)
                if (arrLong && arrLong[1] && arrLong[2] && arrLong[3]) {
                    result.chapter = arrLong[1]
                    result.s_verse = arrLong[2]
                    result.e_verse = arrLong[3]
                } else {
                    result.kind = 'H'
                    result.title = text
                }
            }
        } else {
            let arrHymn = text.match(this.hymnReg)
            if (arrHymn && arrHymn[1]) {
                result.kind = 'H'
                result.chapter = arrHymn[1]
            } else {
                result.kind = 'H'
                result.title = text
            }
        }
        return result
    },
    setCookie(name, value, expiredays) {
        let todayDate = new Date()
        todayDate.setDate(todayDate.getDate() + expiredays)
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + todayDate.toGMTString() + ";"
    },
    getCookie(name) {
        let search = name + "="
        if (document.cookie.length > 0) {
            var offset = document.cookie.indexOf(search)
            var end = -1
            if (offset != -1) {
                offset += search.length;
                end = document.cookie.indexOf(";", offset)
                if (end == -1) end = document.cookie.length
                return unescape(document.cookie.substring(offset, end))
            }
        }
    }    
}