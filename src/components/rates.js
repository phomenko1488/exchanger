import {getStorage} from "../service/storageService";

export default function Rates(props) {
    let abbreviations = []

    function parseBg(item) {
        let res
        if (item.difference > 0)
            res = 'up-gradient-background'
        else if (item.difference < 0)
            res = 'down-gradient-background'
        else
            res = 'eql-gradient-background'
        return res
    }

    function parseText(item) {
        let res
        if (item.difference > 0)
            res = 'up-text'
        else if (item.difference < 0)
            res = 'down-text'
        else
            res = 'eql-text'
        return res
    }

    function getPointer(item) {
        let res
        if (item.difference > 0)
            res = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        else if (item.difference < 0)
            res = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
        else
            res = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-plus-slash-minus" viewBox="0 0 16 16">
                <path
                    d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
            </svg>
        return res

    }

    function printDifference(item) {
        let res
        if (item.difference > 0)
            res = `+${item.difference}`
        else if (item.difference < 0)
            res = `${item.difference}`
        else
            res = `0`
        return res
    }

    let language = getStorage('language')

    return <div id="features">
        <h2 className="pb-2 border-bottom">{language === 'en' ? 'Rates' : '费率'}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

            {props.tokens.filter((value, index, array) => {
                let res = (abbreviations.indexOf(value.abbreviation) === -1) && value.abbreviation !== 'USDT'
                if (res)
                    abbreviations.push(value.abbreviation)
                return res
            }).map(item => {
                let bg = parseBg(item);
                return <div className="col d-flex align-items-center">
                    <div className={bg + " p-2 rounded d-flex lex-shrink-0 me-3 align-items-center"}>
                        {getPointer(item)}
                    </div>
                    <div>
                        <h2 className="fw-bold gold-border-btm mb-0 fs-2 text-body-emphasis">{item.abbreviation}</h2>
                        <div className="d-inline-flex justify-content-between flex-column">
                            <div className={'fs-5'}>{item.price} $</div>
                            <div className={'fs-6 ' + parseText(item)}>{printDifference(item)} %</div>
                        </div>
                    </div>
                </div>
            })}</div>
    </div>
}