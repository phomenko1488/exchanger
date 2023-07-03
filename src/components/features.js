import {getStorage} from "../service/storageService";

export default function Features() {
    let language = getStorage('language')
    return <div id="features">
        <h2 className="pb-2 border-bottom">
            {language === 'en' ? 'Our features' : '我们的特点'}
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2 d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                        <path
                            d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                        <path
                            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Fast Exchanges' : '快速交换'}
                    </h3>
                    <p>
                        {language === 'en' ? 'We complete all exchanges within 15 minutes.' : '我们在15分钟内完成所有交换。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path
                            d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path
                            d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Secure Transactions' : '安全交易'}
                    </h3>
                    <p>
                        {language === 'en' ? 'Our system ensures secure and reliable transactions.' : '我们的系统确保安全和可靠的交易。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                        <path
                            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"></path>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Wide Range of Cryptocurrencies' : '广泛的加密货币'}
                    </h3>
                    <p>
                        {language === 'en' ? 'We support a diverse selection of cryptocurrencies for exchange.' : '我们支持多样化的加密货币兑换选择。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-currency-exchange"
                         viewBox="0 0 16 16">
                        <path
                            d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Competitive Exchange Rates' : '具有竞争力的汇率'}
                    </h3>
                    <p>
                        {language === 'en' ? 'We offer competitive rates for exchanging cryptocurrencies.' : '我们为兑换加密货币提供有竞争力的价格。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-incognito" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Anonymity' : '匿名性'}
                    </h3>
                    <p>
                        {language === 'en' ? 'We prioritize your privacy and offer anonymous crypto exchanges, ensuring your personal information remains confidential.' : '我们将您的隐私放在首位，并提供匿名的加密货币交易，确保您的个人信息保密。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? '24/7 Availability' : '24/7的可用性'}
                    </h3>
                    <p>
                        {language === 'en' ? 'Our platform is accessible round-the-clock, allowing you to exchange cryptocurrencies at any time.' : '我们的平台是24小时开放的，允许你在任何时间兑换加密货币。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-microsoft-teams" viewBox="0 0 16 16">
                        <path
                            d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z"/>
                        <path
                            d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Experienced Team' : '经验丰富的团队'}
                        </h3>
                    <p>
                        {language === 'en' ? 'We have a team of experts with extensive knowledge in cryptocurrency exchanges.' : '我们有一支在加密货币交易所拥有丰富知识的专家团队。'}
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="p-2 rounded gradient-background-2  d-flex lex-shrink-0 me-3 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fw-bold gold-border-btm mb-0 fs-4 text-body-emphasis">
                        {language === 'en' ? 'Transparent Process' : '透明的过程'}
                    </h3>
                    <p>
                        {language === 'en' ? 'We provide a transparent exchange process, allowing you to track and verify your transactions on the blockchain.' : '我们提供一个透明的交换过程，允许你在区块链上跟踪和验证你的交易。'}
                    </p>
                </div>
            </div>
        </div>
    </div>
}