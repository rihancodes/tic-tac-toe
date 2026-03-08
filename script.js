let ck = "0", flag = "0";
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const trn = document.getElementById("trn");
const rslt = document.getElementById("rslt");

for(let i=0; i<9; i++)
{
function c1(el)
 {
   if(ck==="0" && flag==="0"){       b1.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b1.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c2(el)
 {
   if(ck==="0" && flag==="0"){       b2.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b2.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c3(el)
 {
   if(ck==="0" && flag==="0"){       b3.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b3.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c4(el)
 {
   if(ck==="0" && flag==="0"){       b4.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b4.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c5(el)
 {
   if(ck==="0" && flag==="0"){       b5.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b5.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c6(el)
 {
   if(ck==="0" && flag==="0"){       b6.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b6.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c7(el)
 {
   if(ck==="0" && flag==="0"){       b7.textContent = "X";    ck = "1";    el.onclick = null;    check();    trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b7.textContent = "O";    ck = "0";    el.onclick = null;    check();    trn.textContent = "Player 1's turn";}
 }

function c8(el)
 {
   if(ck==="0" && flag==="0"){       b8.textContent = "X";    ck = "1";    el.onclick = null;    check();   trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b8.textContent = "O";    ck = "0";    el.onclick = null;    check();   trn.textContent = "Player 1's turn";}
 }

function c9(el)
 {
   if(ck==="0" && flag==="0"){       b9.textContent = "X";    ck = "1";    el.onclick = null;    check();   trn.textContent = "Player 2's turn";} 
   else if(ck==="1" && flag==="0"){  b9.textContent = "O";    ck = "0";    el.onclick = null;    check();   trn.textContent = "Player 1's turn";}
 }
}


function check()
{
   if((b1.textContent==="X" && b2.textContent==="X" && b3.textContent==="X") || (b4.textContent==="X" && b5.textContent==="X" && b6.textContent==="X") || 
      (b7.textContent==="X" && b8.textContent==="X" && b9.textContent==="X") || (b1.textContent==="X" && b4.textContent==="X" && b7.textContent==="X") ||
      (b2.textContent==="X" && b5.textContent==="X" && b8.textContent==="X") || (b3.textContent==="X" && b6.textContent==="X" && b9.textContent==="X") ||
      (b1.textContent==="X" && b5.textContent==="X" && b9.textContent==="X") || (b3.textContent==="X" && b5.textContent==="X" && b7.textContent==="X"))
  {  rslt.textContent = "Player 1 won 🎉🎉🎉"; flag = "1"; }

else if((b1.textContent==="O" && b2.textContent==="O" && b3.textContent==="O") || (b4.textContent==="O" && b5.textContent==="O" && b6.textContent==="O") || 
        (b7.textContent==="O" && b8.textContent==="O" && b9.textContent==="O") || (b1.textContent==="O" && b4.textContent==="O" && b7.textContent==="O") ||
        (b2.textContent==="O" && b5.textContent==="O" && b8.textContent==="O") || (b3.textContent==="O" && b6.textContent==="O" && b9.textContent==="O") ||
        (b1.textContent==="O" && b5.textContent==="O" && b9.textContent==="O") || (b3.textContent==="O" && b5.textContent==="O" && b7.textContent==="O"))
  {  rslt.textContent = "Player 2 won 🎉🎉🎉"; flag = "1"; }

  else if((b1.textContent==="X" || b1.textContent==="O") && (b2.textContent==="X" || b2.textContent==="O") && (b3.textContent==="X" || b3.textContent==="O") &&
          (b4.textContent==="X" || b4.textContent==="O") && (b5.textContent==="X" || b5.textContent==="O") && (b6.textContent==="X" || b6.textContent==="O") &&
          (b7.textContent==="X" || b7.textContent==="O") && (b8.textContent==="X" || b8.textContent==="O") && (b9.textContent==="X" || b9.textContent==="O")) 
  { rslt.textContent = "Draw!!!"; }
}