sendRGB.addEventListener("click", () => {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  if (red == "" || green == "" || blue == "") {
    alert("please fill all the parameters");
  } else {
    save.style.display = "block";
    container.style.display = "grid";
    if (flag) {
      colorOne = [red, green, blue];
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      flag = false;
    } else {
      btnBox1.style.display = "block";
      colorTwo = [red, green, blue];
      box1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      flag = true;
    }
  }
});

function rgbToHex(r, g, b) {
  const rgb = (r << 16) | (g << 8) | (b << 0);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
}

btnBox.addEventListener("click", () => {
  let hex = rgbToHex(colorOne[0], colorOne[1], colorOne[2]);
  box.style.color = colorHex(
    parseInt(colorOne[0]),
    parseInt(colorOne[1]),
    parseInt(colorOne[2])
  );
  box.innerHTML = hex;
});

btnBox1.addEventListener("click", () => {
  let hex = rgbToHex(colorTwo[0], colorTwo[1], colorTwo[2]);
  box1.style.color = colorHex(
    parseInt(colorTwo[0]),
    parseInt(colorTwo[1]),
    parseInt(colorTwo[2])
  );
  box1.innerHTML = hex;
});

function colorHex(r, g, b) {
  let sum = r + g + b;
  if (sum < 170) {
    return "white";
  } else {
    return "black";
  }
}

//userNames,displayUserChoice
saveBtn.addEventListener("click", () => {
  const colorName = document.getElementById("color-name").value;
  if (check(colorName)) {
    let obj = {};
    flag
      ? (obj = createObj(colorName, colorTwo[0], colorTwo[1], colorTwo[2]))
      : (obj = createObj(colorName, colorOne[0], colorOne[1], colorOne[2]));
    userNames.push(obj);
    userPick.style.display = "block";
    list.innerHTML += `<li> ${userNames[counter]["userColor"]}</li>`;
    counter++;
  }
});

pullBtn.addEventListener("click", () => {
  const userChoice = document.getElementById("user-choice").value;
  redUserChoice = userNames[userChoice - 1]["colorRed"];
  greenUserChoice = userNames[userChoice - 1]["colorGreen"];
  blueUserChoice = userNames[userChoice - 1]["colorBlue"];

  displayUserChoice.style.backgroundColor = `rgb(${redUserChoice}, ${greenUserChoice}, ${blueUserChoice})`;
  displayUserChoice.style.color = colorHex(
    parseInt(redUserChoice),
    parseInt(greenUserChoice),
    parseInt(blueUserChoice)
  );
  displayUserChoice.innerText = `
    Red: ${redUserChoice} 
    Green: ${greenUserChoice}
    Blue: ${blueUserChoice} 
    Hex: ${rgbToHex(redUserChoice, greenUserChoice, blueUserChoice)}`;
});

function check(userName) {
  if (userName === "") {
    alert("name is empty");
    return false;
  }
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i]["userColor"] === userName) {
      alert("name all ready exists");
      return false;
    }
  }
  return true;
}

function createObj(colorName, redColor, greenColor, blueColor) {
  let obj = {
    userColor: colorName,
    colorRed: redColor,
    colorGreen: greenColor,
    colorBlue: blueColor,
  };
  return obj;
}
