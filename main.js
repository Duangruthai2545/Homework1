const root = document.querySelector('#root');
const btnadd = document.querySelector('#btn-add'); // Use # to select by ID
const sumInfo = document.querySelector('#sumCounter')
function Countel() {
    let countNum = 0;

    const makeElement = (tag, attr_n, attr_v, content) => {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = content;
        return output;
    }

    const updateCounter = (n) => {
        if (countNum + n < 0) {
            return;
        }
        countNum += n;
        number.textContent = countNum;
        sumInfo.textContent=`Sum =${total}`
    }

    const delCounter = (e) => {
        // root.removeChild(counter); // Remove the counter element
        // console.log(e.target.closest('.counter'))
        updateCounter(-countNum)
        e.target.closest('.counter').remove()
    
    }

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn btn-clr', 'C');
    const btnDel = makeElement('button', 'class', 'btn btn-del', 'x');

    btnInc.addEventListener('click', () => updateCounter(1));
    btnDec.addEventListener('click', () => updateCounter(-1));
    btnClr.addEventListener('click', () => updateCounter(-countNum));
    btnDel.addEventListener('click', delCounter);

    counter.append(btnInc, number, btnDec, btnClr, btnDel);

    return counter;  // Return the counter element, not the Countel function
}

const hdlAddCounter = () => {
    root.append(Countel());
}

btnadd.addEventListener('click', hdlAddCounter);

