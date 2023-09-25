import React, {useState} from 'react'
import "./Form.css"

const Form = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (!height) {
      alert("신장을 입력하세요");
      return;
    }
  
    if (!weight) {
      alert("체중을 입력하세요");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(Number(calculatedBmi.toFixed(2)));

    if (calculatedBmi < 18.5) {
      setStatus('저체중입니다.');
    } else if (calculatedBmi < 25) {
      setStatus('정상입니다.');
    } else if (calculatedBmi < 30) {
      setStatus('과체중입니다.');
    } else {
      setStatus('비만입니다.');
    }
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="form-container">
      <div className="form-inner">
        <div className="input-group">
          <label className="input-label">신장</label>
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="input"/>
          <span className="input-unit">cm  /  </span>
          <label className="input-label">체중</label>
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="input"/>kg
        </div>
        <div className="button-group">
          <button onClick={calculateBMI} className="calculate-button">계산</button>
          <button onClick={reset} className="reset-button">초기화</button>
        </div>
      </div>
      <div className="result-group">
        {status && bmi ? (
          <>
            <div className="result">
              <span className="result-label">비만도 결과</span>
              {status && <span className="result-value result-status"> {status}</span>}
            </div>
            <div className="result">
              <span className="result-label">BMI 지수</span>
              {bmi !== null && <span className="result-value result-bmi"> {bmi}</span>}
            </div>
          </>
        ) : (
          <div className="placeholder">
            <span className="placeholder-text">비만도 결과</span>
            <span className="placeholder-text">BMI 지수</span>
          </div>
        )}
        <div style={{ position: 'relative', display: 'flex', marginTop: '50px', lineHeight: "35px", alignItems: "center"}}>
          <div style={{ position: 'absolute', top: '-30px', left: '0%', fontSize:"14px", fontWeight:"700"}}>BMI</div>
          <div style={{ position: 'absolute', top: '-30px', left: '15%', fontSize:"14px", fontWeight:"700"}}>18.5</div>
          <div style={{ position: 'absolute', top: '-30px', left: '36.5%', fontSize:"14px", fontWeight:"700"}}>23</div>
          <div style={{ position: 'absolute', top: '-30px', left: '61.5%', fontSize:"14px", fontWeight:"700"}}>25</div>
          
          <div style={{ width: '18%', backgroundColor: '#329ae3', textAlign: 'center', fontWeight: "700", color: "white"}}>저체중</div>
          <div style={{ width: '20%', backgroundColor: '#95c520', textAlign: 'center', fontWeight: "700", color: "white" }}>정상</div>
          <div style={{ width: '25%', backgroundColor: '#ee942a', textAlign: 'center', fontWeight: "700", color: "white" }}>과체중</div>
          <div style={{ width: '36.9%', backgroundColor: '#f15232', textAlign: 'center', fontWeight: "700", color: "white" }}>비만</div> 
          
          <div style={{ position: 'absolute', top: '30px', left: '0%', fontSize:"14px", fontWeight:"700"}}>체중</div>
        </div>
      </div>
    </div>
  );
}

export default Form