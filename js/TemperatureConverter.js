function CelsiusConvert() {
    TempVS.inFah.value = (TempVS.inCel.value * 9 / 5) + 32 + (' \xB0F');
    TempVS.inKel.value = TempVS.inCel.value * 1 + 273.15 + (' K');
};
function FahrenheitConvert() {
    TempVS.inCel.value = (TempVS.inFah.value - 32) * 5 / 9 + (' \xB0C');
    TempVS.inKel.value = ((TempVS.inFah.value - 32) * 5 / 9) + 273.15 + (' K');
};
function KelvinConvert() {
    TempVS.inCel.value = TempVS.inKel.value - 273.15 + (' \xB0C');
    TempVS.inFah.value = ((TempVS.inKel.value - 273.15) * 9 / 5) + 32 + (' \xB0F');
};