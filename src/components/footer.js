import {Container} from "react-bootstrap";
import {getStorage} from "../service/storageService";

export default function Footer(props) {
    let language = getStorage('language')
    return <Container className={''}>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
            <div className="col mb-3">
                <a href="/"
                   className="d-flex align-items-center  link-body-emphasis text-decoration-none">
                    <h3 className={'h3 mb-2'}>PandaSwap</h3>
                </a>
                <p className="text-body-secondary mb-1">+8(522) 450-14-62</p>
                <p className="text-body-secondary mb-1">
                    {language === 'en' ? '7 Floor, Tuen Mun Town Plaza, 1 Tuen Shun St, Tuen Mun, Hong-Kong, China' : '中国香港屯门屯顺街1号屯门市广场7楼'}
                </p>
                <p className="text-body-secondary">© 2023</p>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>
                    {language === 'en' ? 'Navigation' : '导航'}
                </h5>
                {props.isIndexPage ? <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#nav"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Home' : '首页'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="#features"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Features' : '特点'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="#rates"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Rates' : '费率'}
                    </a>
                    </li>
                    <li className="nav-item mb-2"><a href="#team"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Team' : '团队'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="#faq"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'FAQs' : '常见问题'}</a>
                    </li>
                </ul> : <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/#nav"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Home' : '首页'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="/#features"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Features' : '特点'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="/#rates"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Rates' : '费率'}
                    </a>
                    </li>
                    <li className="nav-item mb-2"><a href="/#team"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Team' : '团队'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="/#faq"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'FAQs' : '常见问题'}</a>
                    </li>
                </ul>}

            </div>

            <div className="col mb-3">
                <h5>{language === 'en' ? 'Information' : '信息'}</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/terms"
                                                     className="nav-link p-0 text-body-secondary">
                        {language === 'en' ? 'Terms and conditions' : '条款和条件'}
                        </a>
                    </li>
                    <li className="nav-item mb-2"><a href="/privacy"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Privacy Policy' : '隐私政策'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="#"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Support 24\\7' : '支持 24\\7'}</a>
                    </li>
                    <li className="nav-item mb-2"><a href="https://goo.gl/maps/bcW3ds1RRH6aQS5N9"
                                                     className="nav-link p-0 text-body-secondary">{language === 'en' ? 'Google maps' : '谷歌地图'}</a>
                    </li>
                </ul>
            </div>
        </footer>
    </Container>
}