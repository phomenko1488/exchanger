import React from "react";
import {REQUESTS_URL} from "../constants";
import {Navigate} from "react-router";
import {Container} from "react-bootstrap";
import QRCode from "react-qr-code";
import Countdown from "react-countdown";
import Load from "../components/Load";
import '../App.css'
import Header from "../components/header";
import Footer from "../components/footer";
import {getStorage} from "../service/storageService";

let language = getStorage('language')

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            request: {
                id: '',
                from: '',
                to: '',
                tokenFromAmount: 0,
                tokenToAmount: 0,
                creationDate: null,
                expiryDate: null,
                requestStatus: null,
                addressToSend: '',
                receiverAddress: ''
            },
            redirectToCreate: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.cancelRequest = this.cancelRequest.bind(this)
        this.redirectToCreate = this.redirectToCreate.bind(this)
        this.Error = this.Error.bind(this)
        this.CANCELED = this.CANCELED.bind(this)
        this.PROCEED = this.PROCEED.bind(this)
        this.EXPIRED = this.EXPIRED.bind(this)
    }

    componentDidMount() {
        let input = REQUESTS_URL + `/${this.props.id}`;
        fetch(input, {
            method: "GET", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).catch(() => this.setState({error: true}))
            .then(res => {
                return res.json()
            }).catch(() => this.setState({error: true}))
            // .then(json=>console.log(json))
            .then(json => this.setState({request: json, loading: false}), () => {
                this.setState({loading: false})
            }).catch(() => this.setState({error: true}))
    }

    render() {
        if (this.state.loading)
            return <Load theme={'white'}/>
        if (this.state.error)
            return <this.Error/>
        if (this.state.redirectedToCreate)
            return <Navigate to={"/create"}/>
        return <div>
            <Container>
                <Header/>
                <hr className={'mt-0'}/>
            </Container>
            <div className={""}>
                {(this.state.request !== undefined && this.state.request !== null) ?
                    this.getDivByState() : <></>
                }
            </div>
            <Container>
                <Footer isIndexPage={false}/>
            </Container>
        </div>

    }


    getDivByState() {
        let language = getStorage('language')
        switch (this.state.request.requestStatus) {
            case "CREATED":
                return this.PROCEED(language);
            case "EXPIRED":
                return this.EXPIRED(language);
            case "CANCELED":
                return this.CANCELED(language);
            default:
                return this.Error(language)
        }
    }

    EXPIRED(language) {
        return <div className={" p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
            <Container className={" d-flex justify-content-center align-items-center w-100 h-100"}>
                <div
                    className={" p-4 rounded-5 text-center"}
                    style={{width: "fit-content", border: '1px solid #ff8f1e'}}>
                    <h4>{this.state.request.id}</h4>
                    <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center mt-3'}>
                        <h4 className={'my-4'}>
                            {language === 'en' ? 'Exchange was expired' : '交易所已过期'}
                        </h4>
                        <h5 className={'mt-2 mb-3'}>
                            {language === 'en' ? 'Tap the button below to create new one' : '点击下面的按钮来创建新的'}

                        </h5>
                        <button
                            className={"crypto-btn  btn-outline-light w-100 bg-transparent my-1"}
                            onClick={() => this.redirectToCreate()}>
                            {language === 'en' ? 'Create' : '创建'}
                        </button>
                    </div>
                    <hr className={'mb-3'} style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center'}>
                        <a
                            style={{color: "#ff8f1e"}}
                            className={'nav-link link-underline-opacity-0'}
                            href="https://t.me/schoolboiq">
                            {language === 'en' ? '24/7 Support' : '24/7支持'}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    }

    CANCELED(language) {
        return <div className={" p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
            <Container className={" d-flex justify-content-center align-items-center w-100 h-100"}>
                <div
                    className={" p-4 rounded-5 text-center"}
                    style={{width: "fit-content", border: '1px solid #ff8f1e'}}>
                    <h4>{this.state.request.id}</h4>
                    <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center mt-3'}>
                        <h4 className={'my-4'}>
                            {language === 'en' ? 'Exchange was canceled' : '交流会被取消了'}
                        </h4>
                        <h5 className={'mt-2 mb-3'}>
                            {language === 'en' ? 'Tap the button below to create new one' : '点击下面的按钮来创建新的'}
                            </h5>
                        <button
                            className={"crypto-btn btn btn-outline-light w-100 bg-transparent my-1"}
                            onClick={() => this.redirectToCreate()}>
                            {language === 'en' ? 'Create' : '创建'}
                        </button>
                    </div>
                    <hr className={'mb-3'} style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center'}>
                        <a
                            style={{color: "#ff8f1e"}}
                            className={'nav-link link-underline-opacity-0'}
                            href="https://t.me/schoolboiq">
                            {language === 'en' ? '24/7 Support' : '24/7支持'}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    }

    Error(language) {
        return <div className={" p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
            <Container className={" d-flex justify-content-center align-items-center w-100 h-100"}>
                <div
                    className={" p-4 rounded-5 text-center"}
                    style={{width: "fit-content", border: '1px solid #ff8f1e'}}>
                    <h4>{this.state.request.id}</h4>
                    <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center mt-3'}>
                        <h4 className={'my-4'}>
                            {language === 'en' ? 'Invalid ID' : '无效ID'}
                        </h4>
                        <h5 className={'mt-2 mb-3'}>
                            {language === 'en' ? 'Tap the button below to create new one' : '点击下面的按钮来创建新的'}
                        </h5>
                        <button
                            className={"crypto-btn btn btn-outline-light w-100 bg-transparent my-1"}
                            onClick={() => this.redirectToCreate()}>
                            {language === 'en' ? 'Create' : '创建'}
                        </button>
                    </div>
                    <hr className={'mb-3'} style={{color: "#ff8f1e", opacity: "0.75"}}/>
                    <div className={'text-center'}>
                        <a
                            style={{color: "#ff8f1e"}}
                            className={'nav-link link-underline-opacity-0'}
                            href="https://t.me/schoolboiq">
                            {language === 'en' ? '24/7 Support' : '24/7支持'}
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    }

    PROCEED(language) {
        return (
            <div className={" p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
                <Container className={" d-flex justify-content-center align-items-center w-100 h-100"}>
                    <div
                        className={" p-4 rounded-5"}
                        style={{width: "fit-content", border: '1px solid #ff8f1e'}}>
                        <h4>{this.state.request.id}</h4>
                        <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                        {
                            (this.state.request.from.abbreviation === "ETH" || this.state.request.from.abbreviation === "BTC") ?
                                <div className="toCenterQR d-flex justify-content-center mb-2">
                                    <div className="qrContainer p-2 rounded-1"
                                         style={{width: "fit-content", height: 'fit-content', backgroundColor: "rgb(148, 148, 148)"}}>
                                        <QRCode
                                            value={this.generateQRCodeValue()}
                                            className={'qr'}
                                            // style={{width:'1vm',height:'1rem'}}
                                        />
                                    </div>
                                </div> : <></>
                        }
                        <div className={'mb-2'}>
                            <label
                                className={'mb-1'}
                                htmlFor="countdown">
                                {language === 'en' ? 'Time to pay' : '支付时间'}
                                </label>
                            <div
                                id={'countdown'}
                                className="form-control">
                                <Countdown
                                    renderer={({hours, minutes, seconds, completed}) => {
                                        return <div>{minutes}:{seconds < 10 ? "0" : ""}{seconds}</div>
                                    }}
                                    date={this.state.request.expiryDate}/>
                            </div>
                        </div>
                        <div className={'mb-2'}>
                            <label
                                className={'mb-1'}
                                htmlFor="inputToken">
                                {language === 'en' ? 'Input token' : '输入令牌'}
                            </label>
                            <input type={"text"}
                                   className={"form-control "}
                                   id="inputToken"
                                   value={this.state.request.from.abbreviation}
                                   disabled={true}>
                            </input>
                        </div>
                        <div className={'mb-2'}>
                            <label
                                className={'mb-1'}
                                htmlFor="tokenAmount">
                                {language === 'en' ? 'Token amount' : '代币金额'}
                            </label>

                            <div className="input-group">
                                <input type={"text"}
                                       className={"form-control "}
                                       id="tokenAmount"
                                       value={this.state.request.tokenFromAmount}
                                       disabled={true}>
                                </input>
                                <button className="crypto-btn btn btn-outline-secondary" type="button"
                                        id="button-addon2"
                                        onClick={() => navigator.clipboard.writeText(this.state.request.tokenFromAmount)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-clipboard">
                                        <path
                                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path
                                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={'mb-2'}>
                            <label
                                className={'mb-1'}
                                htmlFor="sendToAddress">
                                {language === 'en' ? 'Send to' : '发送至'}
                            </label>
                            <div className="input-group">
                                <input type={"text"}
                                       className={"form-control "}
                                       id="sendToAddress"
                                       value={this.state.request.addressToSend}
                                       disabled={true}>
                                </input>
                                <button className="crypto-btn btn btn-outline-secondary" type="button"
                                        id="button-addon2"
                                        onClick={() => navigator.clipboard.writeText(this.state.request.addressToSend)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-clipboard">
                                        <path
                                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                        <path
                                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {(this.state.request.from.abbreviation === "ETH" || this.state.request.from.abbreviation === "BTC") ? <></> :
                            <>
                                <div className={'mb-2'}>
                                    <label
                                        className={'mb-1'}
                                        htmlFor="outputToken">
                                        {language === 'en' ? 'Output token' : '输出令牌'}
                                    </label>
                                    <input type={"text"}
                                           className={"form-control "}
                                           id="outputToken"
                                           value={this.state.request.to.abbreviation}
                                           disabled={true}>
                                    </input>
                                </div>
                                <div className={'mb-3'}>
                                    <label
                                        className={'mb-1'}
                                        htmlFor="receiveAmount">
                                        {language === 'en' ? 'You will receive' : '您将收到'}
                                    </label>
                                    <input type={"text"}
                                           className={"form-control "}
                                           id="receiveAmount"
                                           value={this.state.request.tokenToAmount}
                                           disabled={true}>
                                    </input>
                                </div>
                            </>}
                        {/*<div>*/}
                        {/*    Status : {this.state.request.requestStatus}*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    Request automatic expire on the : {this.state.request.expiryDate}*/}
                        {/*</div>*/}
                        <button
                            className={"crypto-btn btn btn-outline-light w-100 bg-transparent"}
                            onClick={() => this.cancelRequest()}>
                            {language === 'en' ? 'Cancel' : '取消'}

                        </button>
                        <hr className={'mb-2'} style={{color: "#ff8f1e", opacity: "0.75"}}/>
                        <div className={'text-center'}>
                            <a
                                style={{color: "#ff8f1e"}}
                                className={'nav-link link-underline-opacity-0'}
                                href="https://t.me/schoolboiq">
                                {language === 'en' ? '24/7 Support' : '24/7支持'}
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    cancelRequest() {
        fetch(REQUESTS_URL + '/cancel', {
            method: "POST", body:
                JSON.stringify({
                    id: this.state.request.id
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
                // console.log(res.body)
                // console.log(res.json())
                // this.setState({resultId: res.body})
            }).then(json => this.setState({request: json}))
    }

    // detectNetwork() {
    //     switch (this.state.request.token.name) {
    //         case "Bitcoin":
    //             return
    //     }
    // }

    generateQRCodeValue() {
        // let networkName = this.detectNetwork()
        return `${this.state.request.from.name}:${this.state.request.addressToSend}?amount=${this.state.request.tokenFromAmount}`;
    }

    redirectToCreate() {
        this.setState({redirectedToCreate: true});
    }
}

export default Request