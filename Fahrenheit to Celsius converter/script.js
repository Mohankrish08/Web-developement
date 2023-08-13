function convertertocel() {
    const farVal = Number(document.getElementById('input').value)
    const celVal = (farVal - 32) * (5/9)
    const CelsicusResult = document.getElementById('CelsicusResult')
    CelsicusResult.innerHTML = celVal.toFixed(2)
}

function convertertofah() {
    const celVal = Number(document.getElementById('celsiusInput').value)
    const farVal = (celVal * (9/5)) + 32
    const FahrenheitResult = document.getElementById('FahrenheitResult')
    FahrenheitResult.innerHTML = farVal.toFixed(2)
}