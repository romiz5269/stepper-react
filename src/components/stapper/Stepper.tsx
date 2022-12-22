import {FC} from 'react'
import styled, { css } from 'styled-components'
import { LeftConnector, RightConnector, StepCaption, StepCircle, StepContainer, StepContent, StepperContainer, StepperWrapper } from '../../dist/styles/StylesComponent'

interface StepperProps {
    steps: [],
    activeStep: number | null,
    dir?: string | undefined,
    clickable?: boolean
}



export const Stepper: FC<StepperProps> = ({steps, activeStep, dir = "rtl", clickable}) => {


    const renderSteps = steps?.map((item: any) => {
        if (item.id === 1) {
            return (
                <StepContainer
                     key={item.id ? item.id : item.label}>
                    <RightConnector ></RightConnector>
                    <StepCircle itemid={item.id} activeStep={activeStep}>
                        <StepContent itemid={item.id} activeStep={activeStep}>{item.id}</StepContent>
                        <StepCaption itemid={item.id} activeStep={activeStep}>{item.label}</StepCaption>
                    </StepCircle>
                    <LeftConnector itemid={item.id} activeStep={activeStep}> </LeftConnector>
                </StepContainer>
            )
        }
        if (item.id === steps.length) {
            return (
                <StepContainer 
                     key={item.id ? item.id : item.label}>
                    <RightConnector itemid={item.id} activeStep={activeStep} ></RightConnector>
                    <StepCircle itemid={item.id} activeStep={activeStep}>
                        <StepContent itemid={item.id} activeStep={activeStep}>{item.id}</StepContent>
                        <StepCaption itemid={item.id} activeStep={activeStep}>{item.label}</StepCaption>
                    </StepCircle>
                    <LeftConnector></LeftConnector>
                </StepContainer>
            )
        }
        return (
            <StepContainer 
                 key={item.id ? item.id : item.label}>
                <RightConnector itemid={item.id} activeStep={activeStep}></RightConnector>
                <StepCircle itemid={item.id} activeStep={activeStep}>
                    <StepContent itemid={item.id} activeStep={activeStep}>{item.id}</StepContent>
                    <StepCaption itemid={item.id} activeStep={activeStep}>{item.label}</StepCaption>
                </StepCircle>
                <LeftConnector itemid={item.id} activeStep={activeStep}></LeftConnector>
            </StepContainer>
        )

    })
    return (
        <StepperWrapper dir={dir}>
            <StepperContainer>
                {renderSteps}
            </StepperContainer>
        </StepperWrapper>
    )
}

