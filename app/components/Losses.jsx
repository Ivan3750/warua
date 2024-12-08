const Losses = () => {
    return ( <>
    <h3 className="losses-title">Kig ikke væk. Behorrified</h3>
    <div className="losses-conteiner">
    <LossesBox amount="23 640" title="sårede civile"></LossesBox>
    <LossesBox amount="11 520" title="dræbt"></LossesBox>
    <LossesBox amount="35 160" title="ofre blandt ukrainere"></LossesBox>
    <LossesBox amount="146 994" title="Krigsforbrydelser registreret"></LossesBox>
    <LossesBox amount="584" title="barndom"></LossesBox>
    <LossesBox amount="167 200" title="civile bygninger besvaretødelagt
"></LossesBox>
    </div>
    </> );
}
 
export default Losses;

const LossesBox = ({amount, title}) =>{
    return(
    <div className="lossesbox">
        <p className="lossesbox-amount">{amount}+</p>
        <div>
            <p className="lossesboxTitle">{title}</p>
        </div>
    </div>
        )
}