import './styles.css';
import { handleHover, handleUnhover } from './hover';

const sidebar=document.querySelector('side-bar');
const div=document.createElement('div');
div.textContent="hover Me";
div.addEventListener('mouseover', handleHover);
div.addEventListener('mouseout', handleUnhover);


sidebar.append(div);
