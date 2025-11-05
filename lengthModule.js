export function initilize () {
   return { 
        cmToInches (cm) {
            if(typeof cm !== "number") {
                throw new Error("Input must be a number");
            }
        return cm / 2.54;
    },
        inchToCm (inch) {
            if(typeof inch !== "number") {
                throw new Error("Input must be a number");
            }
        return inch * 2.54;
    }
};

}
