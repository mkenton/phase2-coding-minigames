export default function CodeSnippet({ code }) {

    switch (code) {
        case 0:
            return (<p className="snippet0">|</p>)
        case 1:
            return (<p className="snippet1">| function1(args)</p>)
        case 2:
            return (<p className="snippet2">| const a = 5</p>)
        case 3:
            return (<p className="snippet3">| function2(args)</p>)
        case 4:
            return (<p className="snippet4">| let b = [newArray]</p>)

    }


}