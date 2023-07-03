// import React from 'react';
//
// const API_URL = "http://localhost:1488/api/v1/";
// const TOKENS_URL = API_URL + "tokens"
// const REQUESTS_URL = API_URL + "requests"
//
// class newCreateRequest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fromId: 1,
//             from: this.findTokenById(1),
//             toId: 2,
//             to: this.findTokenById(2),
//             fromAmount: 0,
//             toAmount: 0,
//             submitted: false,
//             resultId: ''
//         }
//         this.changeFromId = this.changeFromId.bind(this)
//         this.changeToId = this.changeToId.bind(this)
//         this.changeFromAmount = this.changeFromAmount.bind(this)
//         this.calculateOutputAmount = this.calculateOutputAmount.bind(this)
//         this.checkPrice = this.checkPrice.bind(this)
//         // this.submit = this.submit.bind(this)
//         this.findTokenById = this.findTokenById.bind(this)
//         setInterval(() => this.checkPrice(), 1000)
//     }
//
//     changeFromId(e) {
//         let id = e.target.value
//         if (Number(this.state.toId) === Number(id))
//             this.setState({toId: this.state.fromId, to: this.findTokenById(Number(this.state.fromId))})
//         this.setState({fromId: id, from: this.findTokenById(Number(id))}, () => this.calculateOutputAmount())
//     }
//
//     changeToId(e) {
//         let id = e.target.value
//         if (Number(this.state.fromId) === Number(id))
//             this.setState({fromId: this.state.toId, from: this.findTokenById(this.state.toId)})
//         this.setState({toId: id, to: this.findTokenById(Number(id))}, () => this.calculateOutputAmount())
//     }
//
//     findTokenById(id) {
//         let res
//         this.props.tokens.forEach(item => {
//             if (Number(item.id) === Number(id))
//                 res = item
//         })
//         return res
//     }
//
//     changeFromAmount(e) {
//         let fromAmount = e.target.value;
//         if (this.validateAmount(fromAmount)) {
//             this.setState({fromAmount: fromAmount}, () => this.calculateOutputAmount())
//         }
//     }
//
//     validateAmount(fromAmount) {
//         return fromAmount >= 0;
//     }
//
//     calculateOutputAmount() {
//         //1btc to eth, 0.1btc= 26000k, 1eth = 1.6k = from.amount*from.price / to.price
//         let result = (this.state.fromAmount * this.state.from.price) / this.state.to.price
//         this.setState({toAmount: result})
//     }
//
//     submit() {
//         fetch(REQUESTS_URL, {
//             method: "POST", body: JSON.stringify(
//                 {
//                     fromId: this.state.fromId,
//                     toId: this.state.toId,
//                     tokenFromAmount: this.state.fromAmount,
//                     tokenToAmount: this.state.toAmount
//                 })
//         })
//             .then(res => {
//                 this.setState({resultId: res.body})
//             })
//     }
//
//     render() {
//         return <div>
//             <div>
//                 {/*{this.state.resultId ?? <div>{this.state.resultId}</div>}*/}
//                 <div>selected from : {this.state.fromId}</div>
//                 <div>
//                     <label htmlFor="fromAmount">Input amount</label>
//                     <input type={"number"}
//                            onInput={(e) => this.changeFromAmount(e)}
//                            name="fromAmount"
//                            id="fromAmount"
//                            value={this.state.fromAmount}>
//                     </input>
//                 </div>
//                 <div>
//                     <label htmlFor="from">Input token</label>
//                     <select onChange={(e) => this.changeFromId(e)} name="from" id="from" value={this.state.fromId}>
//                         {this.props.tokens.map(item => {
//                             return <option value={item.id}>{item.name} in {item.network.name}</option>
//                         })}
//                     </select>
//                 </div>
//                 <div>
//                     Output amount : {this.state.toAmount}
//                 </div>
//                 <div>
//                     <label htmlFor="to">Output token</label>
//                     <select name="to" id="to" onChange={(event) => this.changeToId(event)} value={this.state.toId}>
//                         {this.props.tokens.map(item => {
//                             return <option value={item.id}>{item.name} in {item.network.name}</option>
//                         })}
//                     </select>
//                 </div>
//             </div>
//             {/*<button onClick={() => this.submit}>Create</button>*/}
//         </div>
//     }
//
//     checkPrice() {
//         console.log(this.state.from)
//         console.log(this.state.to)
//         // if ((this.findTokenById(this.state.fromId).price !== this.state.from.price) || (this.findTokenById(this.state.toId).price !== this.state.to.price)) {
//         //     this.setState({
//         //             to: this.findTokenById(Number(this.state.toId)),
//         //             from: this.findTokenById(Number(this.state.fromId))
//         //         },
//         //         () => this.calculateOutputAmount())
//         // }
//         // if ((this.findTokenById(this.state.fromId).price != this.state.from.price) || (this.findTokenById(this.state.toId).price != this.state.to.price)) {
//         //     this.setState({
//         //         to: this.findTokenById(this.state.toId),
//         //         from: this.findTokenById(this.state.fromId)
//         //     }, () => this.calculateOutputAmount())
//         // }
//     }
// }
//
// export default newCreateRequest;