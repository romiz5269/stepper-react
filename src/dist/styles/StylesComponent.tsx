import styled, { css } from "styled-components"

export const StepperWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin: 0 auto;
direction: ${props => props.dir};

`
export const StepperContainer =styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex: 1 1 0%;
`
export const StepContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex: 1 1 0%;
width: 100%;
`
export const RightConnector = styled.div<{itemid?:string| number | undefined  , activeStep?:string | number | any}>`
content: '';
flex:1 1 0%;
height: 4px;
background-color:${props=> props?.itemid! <= props?.activeStep ? '#005adc' : props?.itemid! > props.activeStep ?'#e8e8e8': ''} ;

`
export const LeftConnector = styled.div<{itemid?:string| number | undefined  , activeStep?:string | number | any}>`
content: '';
flex:1 1 0%;
height: 4px;
background-color:${props=> props?.itemid! >= props?.activeStep ? '#e8e8e8' : props?.itemid! < props.activeStep ?'#005adc': ''} ;

`
export const StepCircle = styled.div<{itemid?:string| number | undefined  , activeStep?:string | number | any}>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color:rgba(255,255,255,0.8);
font-weight: 700;
font-size: 1.5rem;
line-height: 2rem;
border-radius: 50%;
position: relative;
background-color: #ececec;
width:50px;
height: 50px;
color:#737373;
${props=>props?.itemid! === props?.activeStep && css`
    background-color: #005adc ;
    box-shadow: 17px 17px 44px -4px rgba(0, 90, 220, 0.20);
    opacity: 1;
    width: 74px;
    height: 74px;
    color:white;
`}
${props=>props?.itemid! < props?.activeStep && css`
    background-color: #005ADC ;
    opacity: 1;
    width: 50px;
    height: 50px;
    color:white;
`}
`
export const StepContent = styled.div<{itemid?:string| number | undefined  , activeStep?:string | number | any}>`
font-size: 1.5rem;
line-height: 1.5rem;
color:#B0B0B0;
${props=>props?.itemid! === props?.activeStep && css`
    font-size: 2.25rem;
    line-height: 2.5rem;
    padding-top: 0.5rem;
    color:white;
`}
${props=>props?.itemid! < props?.activeStep && css`
    color:white;
`}
`

export const StepCaption = styled.div<{itemid?:string| number | undefined  , activeStep?:string | number | any}>`
    position: absolute;
    width: 8rem;
    text-align: center;
    left: -2.5rem;
    bottom: -2.5rem;
    color:#B0B0B0;
    ${props=>props?.itemid! === props?.activeStep && css`
        left:-2rem !important;
        bottom: -2rem !important;
        color:#005adc !important;
        font-weight: 700;
    `}
    ${props=>props?.itemid! < props?.activeStep && css`

        color:#005adc !important;
    `}

`