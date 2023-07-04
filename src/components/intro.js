export default function Intro(props) {
    return <div id="intro"
                className={'mb-3'}>
        <div
            className=" gradient-background row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
            <div
                className="row p-4 align-items-center rounded-3 ">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                        {props.language === 'en' ? 'Your Trusted Partner for Crypto Transactions' : '您值得信赖的加密货币交易伙伴'}
                    </h1>
                    <p className="lead">
                        {props.language === 'en' ? 'Join thousands of satisfied users who rely on our secure and transparent cryptocurrency exchange services. Enjoy anonymous and confidential crypto exchanges, protecting your personal information throughout the transaction process. Our dedicated support team is available 24/7 to assist you with any inquiries or concerns, providing reliable guidance every step of the way.' : '加入成千上万的满意用户，他们依赖我们安全和透明的加密货币兑换服务。享受匿名和保密的加密货币交换，在整个交易过程中保护您的个人信息。我们的专业支持团队24/7为您提供任何咨询或关注，在每一步都提供可靠的指导。'}
                    </p>
                    <div
                        className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a
                            style={{textDecoration:'none'}}
                            href={'/create'}
                                className="intro-button btn btn-outline-secondary btn-lg px-4 w-100">
                            {props.language === 'en' ? 'Exchange' : '交流'}

                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0">
                    <div className={'d-flex justify-content-center'} id={'introAnimation'}>
                        <div id="container">
                            <span id="text1"></span>
                            <span id="text2"></span>
                        </div>

                        <svg id="filters">
                            <defs>
                                <filter id="threshold">
                                    <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
}