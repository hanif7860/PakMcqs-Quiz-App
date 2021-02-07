function check(){
    var score=0
    var  rigth_awnser_1 = document.getElementById("q1-a1");
    var q1_awnser_2 = document.getElementById("q1-a2");
    var q1_awnser_3 = document.getElementById("q1-a3");
    var q1_awnser_4 = document.getElementById("q1-a4");
    if (rigth_awnser_1.checked == true) {
        score++
        alert("Q1 awnser correct")
    }
    else{
        alert("Q1 awnser uncorrect")
    }



    var rigth_awnser_2 =document.getElementById("q2-a1")
    var q2_awnser_2 =document.getElementById("q2-a1")
    var q2_awnser_2 =document.getElementById("q2-a1")
    var q3_awnser_2 =document.getElementById("q2-a1")
    if (rigth_awnser_2.checked == true) {
        score++
        alert("Q2 awnser correct")
    }
    else{
        alert("Q2 awnser uncorrect")
    }


    var rigth_awnser_3 =document.getElementById("q3-a4")
    var q1_awnser_1 =document.getElementById("q3-a2")
    var q4_awnser_4 =document.getElementById("q3-a3")
    var q4_awnser_2 =document.getElementById("q3-a1")
    if (rigth_awnser_3.checked == true) {
        score++
        alert("Q3 awnser correct")
    } else {
        alert("Q3 awnser uncorrect")
    }
    alert("your score is " + score);
}
