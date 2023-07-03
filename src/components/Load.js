import {Container} from "react-bootstrap";
import {Triangle} from "react-loader-spinner";

export default function Load(props) {
    let bg
    if (props.theme === 'white')
        bg = 'bg-transparent'
    else
        bg = 'bg-black'
    return <div className={" gradient-background p-2 d-flex justify-content-center align-items-center w-100 h-100"}>
        <Container className={"text-white d-flex justify-content-center align-items-center w-100 h-100"}>
            <div
                className={bg + " p-4 rounded-5 text-center d-flex justify-content-center flex-column"}
                style={{width: "fit-content", border: '1px solid #ff8f1e'}}>
                <Triangle
                    height="200"
                    width="200"
                    color="#ff8f1e"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                <h3 style={{color: '#ff8f1e'}}>sExchanger</h3>
            </div>
        </Container>
    </div>
}