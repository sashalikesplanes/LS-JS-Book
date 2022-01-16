const calculateBMI = (heightInCm, weightInKg) => {
  const heightInM = heightInCm / 100;
  let bmi = weightInKg / heightInM**2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));