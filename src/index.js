import './styles.css';
import numeral from 'numeral';

const courseValue =numeral(1000).format('$0,0.00');
/*eslint-disable no-console*/
console.log(`i would pay ${courseValue} for this awesome course`);
