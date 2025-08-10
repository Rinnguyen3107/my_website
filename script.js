// Hiệu ứng chào mừng đơn giản
document.addEventListener('DOMContentLoaded', () => {
  console.log("Website đã sẵn sàng!");
});
let i = 0;

function check(){
    const btn = document.getElementById("test");
    if(i % 2 == 0)
    btn.textContent = "mới bấm xong!";
    else btn.textContent = i.toString();
    i = i+1;
    console.log(i)
}
function tinh(){
  let tin = parseFloat(document.getElementById("tin").value);
  let gpa = parseFloat(document.getElementById("gpa").value);
  let total = parseInt(document.getElementById("total").value);
  let expect = parseFloat(document.getElementById("expect").value);
  let passAV = (document.getElementById("co").checked);
  if(passAV) total -= 8;
  let remain = total-tin;
  let res = (total*expect-tin*gpa)/remain;
  let box = (document.getElementById("box"));
  box.innerText = "Số điểm cần phải đạt được trung bình mỗi tín: " + res.toString()
  console.log("Số điểm cần phải đạt được trung bình mỗi tín: ", res);
  console.log("mo log cai nay ra cai j: ",passAV);

}
let pos = 0;
function move(){
  pos+= 15;
  document.getElementById("box").style.left = pos+"px";
  if(pos < 200) requestAnimationFrame(move);
}
