import { observable, computed, action } from "mobx";

export default class StepperStore {
    @observable activeStep = 0;

    @action handleNext = () => { this.activeStep++; }

    @action handleBack = () => { this.activeStep--; };

    @action handleReset = () => { this.activeStep = 0; };
}
