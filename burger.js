function openNav() {
    document.getElementById("burgerSide").style.width = "530px";
    let breakpoint = window.matchMedia('(max-width:47.1875rem)');
    let breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
            document.getElementById("burgerSide").style.width = "100%";
            document.getElementById("burgerSide").style.height = "100%";
        } else { document.getElementById("burgerSide").style.width = "530px"; }
    }
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
};


function closeNav() {
    document.getElementById("burgerSide").style.width = "0";
}