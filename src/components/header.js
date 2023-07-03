import {getStorage, setStorage} from "../service/storageService";

export default function Header(props) {
    function select(e) {
        setStorage('language', e.target.value)
        window.location.reload()
    }
    let language = getStorage('language')
    return <header
        id={'nav'}
        className={' d-inline-flex justify-content-between align-items-center w-100 py-4'}>
        <a style={{color:'black',textDecoration:'none'}} href="/"><h3 className={'h3 mb-2'}>PandaSwap</h3></a>
        <div className="navs d-inline-flex justify-content-between align-items-center w-auto">
            <select onChange={e => select(e)} name="language" id="language" className="form-select me-2">
                <option selected={language === 'en'} value="en">English</option>
                <option selected={language === 'ch'} value="ch">中国</option>
            </select>
            <a style={{color:'black',textDecoration:'none'}}
               href={'/create'}
               className="btn btn-outline intro-button">
                {language === 'en' ? 'Exchange' : '交流'}
            </a>
        </div>
    </header>
}