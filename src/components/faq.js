import {getStorage} from "../service/storageService";

export function Faq(props) {
    let language = getStorage('language')
    return <section id={"faq"} className="faq-section py-3">
        <div className="container">
            <div className={"d-flex justify-content-center"}>

                <div className={"px-2"}>
                    <div className={"px-4"}>
                        <h2>
                            {language === 'en' ? "FAQ" : "常见问题"}
                        </h2>
                    </div>
                    <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                </div>
            </div>
            <div className="accordion w-100" id="basicAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseOne" aria-expanded="false"
                                aria-controls="collapseOne">
                            {language === 'en' ? "Do I need to register an account to exchange cryptocurrencies on your platform?" : "在你们的平台上兑换加密货币是否需要注册一个账户？"}

                        </button>
                    </h2>
                    <div id="basicAccordionCollapseOne" className="accordion-collapse collapse"
                         aria-labelledby="headingOne"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <><strong>No,</strong> registration is not required for cryptocurrency exchanges on our platform. You can initiate exchanges without creating an account, making the process quick and hassle-free.</> : <><strong>不，</strong>在我们的平台上进行加密货币兑换不需要注册。你可以在不创建账户的情况下启动交换，使这个过程快速而无障碍</>}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                            {language === 'en' ? "How long does it take to complete a cryptocurrency exchange?" : "完成一次加密货币兑换需要多长时间？"}
                        </button>
                    </h2>
                    <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="headingTwo"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>On our platform, cryptocurrency exchanges are typically completed within <strong>20 minutes</strong>. The exchange process is designed to be fast and efficient, allowing you to quickly convert one cryptocurrency to another.</> : <>在我们的平台上，加密货币兑换通常在<strong>20分钟</strong>内完成。兑换过程被设计为快速和高效，使您能够快速将一种加密货币转换为另一种加密货币。</>}

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                            {language === 'en' ? "How can I contact customer support for assistance?" : "我如何联系客户支持以寻求帮助？"}

                        </button>
                    </h2>
                    <div id="basicAccordionCollapseThree" className="accordion-collapse collapse"
                         aria-labelledby="headingThree"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>We provide round-the-clock customer support through our <strong>Telegram bot</strong>. Simply reach out to our bot in Telegram, and our support team will be available to assist you with any queries or issues you may have regarding your exchanges.</> : <>我们通过<strong>电报机器人</strong>提供24小时的客户支持。只需在Telegram中与我们的机器人联系，我们的支持团队将协助您解决任何关于您的交换的疑问或问题。</>}

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseFour" aria-expanded="false"
                                data-parent="#basicAccordion"
                                aria-controls="collapseFour">
                            {language === 'en' ? "How do I initiate a cryptocurrency exchange on your website?" : "我如何在你们的网站上启动加密货币交易？"}

                        </button>
                    </h2>
                    <div id="basicAccordionCollapseFour" className="accordion-collapse collapse"
                         aria-labelledby="collapseFour"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>To initiate a cryptocurrency exchange, simply click on the <strong>"Exchange"</strong> button located at the top of the website. This will take you to the exchange interface, where you can select the cryptocurrencies you wish to exchange and enter the relevant details. Follow the instructions provided to complete the exchange process.</> : <>要启动加密货币兑换，只需点击位于网站顶部的<strong>"交流"</strong>按钮。这将带您进入兑换界面，您可以选择您希望兑换的加密货币，并输入相关细节。按照所提供的指示，完成兑换过程。</>}

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseFive" aria-expanded="false"
                                aria-controls="collapseTwo">
                            {language === 'en' ? "In which languages is your website available?" : "你的网站有哪些语言版本？"}

                        </button>
                    </h2>
                    <div id="basicAccordionCollapseFive" className="accordion-collapse collapse"
                         aria-labelledby="headingTwo"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>Our website supports two languages: <strong>English</strong> and <strong>Chinese</strong>. You can switch between these languages using the language selector located on the website\'s interface. This ensures that users from different language backgrounds can easily navigate and use our platform.</> : <>我们的网站支持两种语言： <strong>英语</strong>和<strong>中文</strong> 。你可以使用位于网站界面上的语言选择器在这些语言之间切换。这确保来自不同语言背景的用户可以轻松浏览和使用我们的平台。</>}

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseSix" aria-expanded="false"
                                aria-controls="collapseThree">
                            {language === 'en' ? "Are there any fees associated with cryptocurrency exchanges on your website?" : "你的网站上是否有任何与加密货币交易所相关的费用？"}

                        </button>
                    </h2>
                    <div id="basicAccordionCollapseSix" className="accordion-collapse collapse"
                         aria-labelledby="headingThree"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>We charge a <strong>transparent and competitive</strong> fee for cryptocurrency exchanges.<strong>All commission is already included in the outgoing coin rate</strong>, so there are no additional commissions. This ensures transparency and helps you make informed decisions.</> : <>我们对加密货币交换收取<strong>透明和有竞争力的</strong>费用。<strong>所有佣金已经包含在出币率中</strong>，所以没有额外的佣金。这确保了透明度，并帮助您做出明智的决定。</>}

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-toggle="collapse"
                                data-target="#basicAccordionCollapseSeven" aria-expanded="false"
                                aria-controls="collapseThree">
                            {language === 'en' ? "Can I exchange any cryptocurrency pair on your platform?" : "我可以在你们的平台上兑换任何加密货币对吗？"}
                        </button>
                    </h2>
                    <div id="basicAccordionCollapseSeven" className="accordion-collapse collapse"
                         aria-labelledby="headingThree"
                         data-parent="#basicAccordion">
                        <div className="accordion-body">
                            {language === 'en' ? <>Our platform supports a wide range of cryptocurrency pairs for exchange. You can exchange various cryptocurrencies based on the availability and liquidity of each cryptocurrency. <strong>Check our website for the list of supported cryptocurrency pairs.</strong></> : <>我们的平台支持广泛的加密货币对进行兑换。你可以根据每种加密货币的可用性和流动性来兑换各种加密货币。<strong>检查我们的网站，了解支持的加密货币对列表。</strong></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}