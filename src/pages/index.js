import React from 'react';
import {Container} from "react-bootstrap";
import {TOKENS_URL} from "../constants";
import Features from "../components/features";
import Intro from "../components/intro";
import Footer from "../components/footer";
import Header from "../components/header";
import Load from "../components/Load";
import Rates from "../components/rates";
import "bootstrap/dist/js/bootstrap";
import {getStorage, setStorage} from "../service/storageService";
import {Faq} from "../components/faq";
import {Team} from "../components/team";

let elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

let texts = [];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;
let animationNumber = 0
let animationIsStarted = false
let animationIsVisible = true
let language

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${(Math.pow(fraction, 0.4) * 100)}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    animationNumber = requestAnimationFrame(animate);
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokens: [],
            loading: true,
            abbreviations: [],
            language: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.animationVisibleCallback = this.animationVisibleCallback.bind(this)
        this.intersectingCallback = this.intersectingCallback.bind(this)
        let storage = getStorage('language');
        if (storage === undefined || storage === null) {
            storage = 'en'
            setStorage('language', storage)
        }
        language = storage
    }

    componentDidMount() {
        fetch(TOKENS_URL, {method: "GET"})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    tokens: json,
                    abbreviations: json.map(item => item.abbreviation),
                    loading: false
                }, () => {
                    texts = this.state.abbreviations.filter((value, index, array) => array.indexOf(value) === index);
                    setInterval(() => {
                        fetch(TOKENS_URL, {method: "GET"})
                            .then(res => res.json())
                            .then(json => {
                                this.setState({tokens: json}
                                )
                            })
                    }, 15000)

                    // console.log(this.state.elts)
                    // this.state.elts.text1.textContent = this.state.abbreviations[this.state.textIndex % this.state.abbreviations.length];
                    // this.state.elts.text2.textContent = this.state.abbreviations[(this.state.textIndex + 1) % this.state.abbreviations.length];
                })
            })
        // window.addEventListener("load", ()=>{
        if (!animationIsStarted)
            setTimeout(() => {
                elts = {
                    text1: document.getElementById("text1"),
                    text2: document.getElementById("text2")
                }
                elts.text1.textContent = texts[textIndex % texts.length];
                elts.text2.textContent = texts[(textIndex + 1) % texts.length];
                animate();
                animationIsStarted = true
                var options = {
                    // root: null,
                    rootMargin: '0px',
                    threshold: 0
                }
                var observer = new IntersectionObserver(this.animationVisibleCallback, options);
                var target = document.querySelector('#introAnimation');
                observer.observe(target);
            }, 1)
        // })
    }

    render() {
        // if (this.state.loading)
        //     return <Load theme={'white'}/>
        return (
            <div>
                <Container>
                    <Header language={language}/>
                    <hr className={'mt-0'}/>
                </Container>
                <div className={""}>
                    <Container>
                        <Intro language={language}/>
                        <Features language={language}/>
                        <Rates tokens={this.state.tokens}/>
                        <hr/>
                        <Team language={language}/>
                        <hr/>

                        <Faq language={language}/>
                    </Container>
                    <Footer isIndexPage={true}/>
                </div>
            </div>
        );
    }

    animationVisibleCallback(entries, observer) {
        // console.log(entries)
        const {target, isIntersecting} = entries[0]
        this.intersectingCallback(isIntersecting)
        // entries.forEach((entry) => {
        //     получаем свойства, которые доступны в объекте entry
        // const {target, isIntersecting} = entry;
        //
        //
        //
        // });

    }

    intersectingCallback(isIntersecting) {
        if (isIntersecting) {
            // добавляем класс, когда элемент входит в область наблюдения
            if (!animationIsVisible) {
                console.log("on")
                animationIsVisible = true
                animationNumber = requestAnimationFrame(animate)
            }
            //todo:start animation
        } else {
            if (animationIsVisible) {
                console.log("off")
                animationIsVisible = false
                cancelAnimationFrame(animationNumber)
            }
        }
    }
}

export default Index