function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
  
    if (campoB <= campoA) {
      alert("O número B deve ser maior que o número A.");
      return false;
    }
  
    alert("Formulário válido!");
    return true;
  }
  