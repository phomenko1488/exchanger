import React from 'react';
import {REQUESTS_URL, TOKENS_URL} from "../constants";
import {Navigate} from "react-router";
import {validate} from "../components/addressValidator";
import {Container} from "react-bootstrap";
import Load from "../components/Load";
import '../App.css'
import Header from "../components/header";
import Footer from "../components/footer";
import {getStorage} from "../service/storageService";


class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromId: 1,
            from: null,
            toId: 2,
            to: null,
            fromAmount: 0,
            toAmount: 0,
            submitted: false,
            resultId: '',
            success: false,
            receiverAddress: '',
            formInvalid: true,
            addressValid: false,
            amountValid: false,
            amountTyped: false,
            addressTyped: false,
            tokens: [],
            loading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.changeFromId = this.changeFromId.bind(this)
        this.changeToId = this.changeToId.bind(this)
        this.changeFromAmount = this.changeFromAmount.bind(this)
        this.calculateOutputAmount = this.calculateOutputAmount.bind(this)
        this.checkPrice = this.checkPrice.bind(this)
        this.submit = this.submit.bind(this)
        this.findTokenById = this.findTokenById.bind(this)
        this.checkAddressValidity = this.checkAddressValidity.bind(this)
        setInterval(() => this.checkPrice(), 1000)
    }

    componentDidMount() {
        fetch(TOKENS_URL, {method: "GET"})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    tokens: json,
                    loading: false
                }, () => this.setState({
                    from: this.findTokenById(1),
                    to: this.findTokenById(2)
                }, () => setInterval(() => {
                    fetch(TOKENS_URL, {method: "GET"})
                        .then(res => res.json())
                        .then(json => {
                            this.setState({tokens: json}
                            )
                        })
                }, 5000)))
            })

    }

    changeFromId(e) {
        let id = e.target.value
        if (Number(this.state.toId) === Number(id))
            this.setState({toId: this.state.fromId, to: this.findTokenById(Number(this.state.fromId))})
        this.setState({fromId: id, from: this.findTokenById(Number(id))}, () => {
            this.calculateOutputAmount()
            this.checkAddressValidity();
        })
    }

    changeToId(e) {
        let id = e.target.value
        if (Number(this.state.fromId) === Number(id))
            this.setState({fromId: this.state.toId, from: this.findTokenById(this.state.toId)})
        this.setState({toId: id, to: this.findTokenById(Number(id))}, () => {
            this.calculateOutputAmount();
            this.checkAddressValidity();
        })
    }

    findTokenById(id) {
        let res
        this.state.tokens.forEach(item => {
            if (Number(item.id) === Number(id))
                res = item
        })
        return res
    }

    changeFromAmount(e) {
        if (!this.state.amountTyped)
            this.setState({amountTyped: true})
        let fromAmount = e.target.value;
        if (this.validateAmount(fromAmount)) {
            this.setState({fromAmount: fromAmount}, () => this.calculateOutputAmount())
        }
    }

    validateAmount(fromAmount) {
        return fromAmount >= 0;
    }

    calculateOutputAmount() {
        //1btc to eth, 0.1btc= 26000k, 1eth = 1.6k = from.amount*from.price / to.price
        let result = (this.state.fromAmount * this.state.from.price) / this.state.to.price
        this.setState({toAmount: result, amountValid: result > 0}, () => {
            this.checkFormValid()
        })
    }

    changeReceiverAddress(e) {
        if (!this.state.addressTyped)
            this.setState({addressTyped: true})
        let address = e.target.value
        this.setState({receiverAddress: address}, () => this.checkAddressValidity())
    }

    checkAddressValidity() {
        this.setState({addressValid: validate(this.state.receiverAddress, this.state.to.network)}, () => this.checkFormValid())
    }

    submit(e) {
        e.preventDefault();
        fetch(REQUESTS_URL, {
            method: "POST", body:
                JSON.stringify({
                    fromId: this.state.fromId,
                    toId: this.state.toId,
                    tokenFromAmount: this.state.fromAmount,
                    tokenToAmount: this.state.toAmount,
                    receiverAddress: this.state.receiverAddress
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            }).then(json => this.setState({resultId: json.result, success: true}))
    }

    checkFormValid() {
        let res = !(this.state.toAmount > 0 && this.state.addressValid === true)
        this.setState({formInvalid: res})
    }

    render() {
        if (this.state.loading)
            return <Load theme={'white'}/>
        if (this.state.success)
            return <Navigate to={`/request/${this.state.resultId}`}/>
        let language = getStorage('language')
        return <div>
            <Container>
                <Header/>
                <hr className={'mt-0'}/>
            </Container>
            <div className={""}>
                <Container>
                    <div className={" p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
                        <Container
                            className={"text-black d-flex justify-content-center align-items-center w-100 h-100"}>
                            <div
                                className={"create-container p-4 rounded-5"}
                                style={{border: '1px solid #ff8f1e'}}>
                                <h2 className={"text-center mb-2"}>
                                    {language === 'en' ? 'New exchange' : '新的交流'}
                                </h2>
                                <hr style={{color: "#ff8f1e", opacity: "0.75"}}/>
                                <form action={"#"} onSubmit={(e) => this.submit(e)}>
                                    <div>
                                        <div className={'mb-2'}>
                                            <label
                                                className={'mb-1'}
                                                htmlFor="from">
                                                {language === 'en' ? 'Input token' : '输入令牌'}
                                            </label>
                                            <select
                                                className={"form-select "}
                                                onChange={(e) => this.changeFromId(e)}
                                                name="from"
                                                id="from"
                                                value={this.state.fromId}>
                                                {this.state.tokens.map(item => {
                                                    if (item.name === "USDT")
                                                        return <option
                                                            value={item.id}>{item.abbreviation} in {item.network.name}</option>
                                                    else
                                                        return <option value={item.id}>{item.abbreviation}</option>

                                                })}
                                            </select>
                                        </div>
                                        <div className={'mb-2'}>
                                            <label
                                                htmlFor="fromAmount"
                                                className={'mb-1'}>
                                                {language === 'en' ? 'Input amount' : '输入金额'}
                                            </label>
                                            <input
                                                className={"form-control "}
                                                type={"text"}
                                                onInput={(e) => this.changeFromAmount(e)}
                                                name="fromAmount"
                                                id="fromAmount"
                                                value={this.state.fromAmount}>
                                            </input>
                                            <div
                                                style={(this.state.amountValid || !this.state.amountTyped) ? {display: "none"} : {display: "block"}}
                                                className="invalid-feedback">
                                                {language === 'en' ? 'Please input a valid amount.' : '请输入一个有效的金额。'}

                                            </div>
                                        </div>
                                        <div className={'mb-2'}>
                                            <label
                                                className={'mb-1'}
                                                htmlFor="to">
                                                {language === 'en' ? 'Output token' : '输出令牌'}
                                            </label>
                                            <select
                                                className={"form-select "}
                                                name="to"
                                                id="to"
                                                onChange={(event) => this.changeToId(event)}
                                                value={this.state.toId}>
                                                {this.state.tokens.map(item => {
                                                    if (item.name === "USDT")
                                                        return <option
                                                            value={item.id}>{item.abbreviation} in {item.network.name}</option>
                                                    else
                                                        return <option value={item.id}>{item.abbreviation}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className={'mb-2'}>
                                            <label
                                                className={'mb-1'}
                                                htmlFor="receiverAddress">
                                                {language === 'en' ? 'Your address' : '您的地址'}
                                            </label>
                                            <input type={"text"}
                                                   className={"form-control  "}
                                                   onInput={(e) => this.changeReceiverAddress(e)}
                                                   id="receiverAddress"
                                                   value={this.state.receiverAddress}
                                                   required={true}>
                                            </input>
                                            <div
                                                style={(this.state.addressValid || !this.state.addressTyped) ? {display: "none"} : {display: "block"}}
                                                className="invalid-feedback">
                                                {language === 'en' ? 'Please input a valid address.' : '请输入一个有效的地址。'}
                                            </div>
                                        </div>
                                        <div className={'mb-3'}>
                                            <label
                                                className={'mb-1'}
                                                htmlFor="outputAmount">
                                                {language === 'en' ? 'Output amount' : '输出量'}
                                            </label>
                                            <input type={"text"}
                                                   className={"form-control  "}
                                                   id="outputAmount"
                                                   value={this.state.toAmount}
                                                   disabled={true}>
                                            </input>
                                        </div>
                                    </div>
                                    {/*{this.state.tokens.map(item => {*/}
                                    {/*    return <div>1 {item.name} = {item.price}$</div>*/}
                                    {/*})}*/}
                                    <button
                                        className={'btn crypto-btn btn-outline-primary w-100'}
                                        disabled={this.state.formInvalid}
                                    >
                                        {language === 'en' ? 'Create' : '创建'}
                                    </button>
                                    <hr className={'mb-3'} style={{color: "#ff8f1e", opacity: "0.75"}}/>
                                    <div className={'text-center'}>
                                        <a
                                            style={{color: "#ff8f1e"}}
                                            className={'nav-link link-underline-opacity-0'}
                                            href="https://t.me/schoolboiq">
                                            {language === 'en' ? '24/7 Support' : '24/7支持'}
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </div>
                </Container>
                <Footer isIndexPage={false}/>
            </div>

        </div>
    }

    checkPrice() {
        if ((this.findTokenById(this.state.fromId).price !== this.state.from.price) || (this.findTokenById(this.state.toId).price !== this.state.to.price)) {
            this.setState({
                    to: this.findTokenById(Number(this.state.toId)),
                    from: this.findTokenById(Number(this.state.fromId))
                },
                () => this.calculateOutputAmount())
        }
        // if ((this.findTokenById(this.state.fromId).price != this.state.from.price) || (this.findTokenById(this.state.toId).price != this.state.to.price)) {
        //     this.setState({
        //         to: this.findTokenById(this.state.toId),
        //         from: this.findTokenById(this.state.fromId)
        //     }, () => this.calculateOutputAmount())
        // }
    }
}

export default CreateRequest;