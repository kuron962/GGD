function createByColor() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const screenWidth = canvas.width;
    const screenHeight = canvas.height;

    const ctx = canvas.getContext("2d");
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const c = Math.floor(Math.random() * 100);
    const color = "rgb(" + a + "," + b + "," + c + ")";

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        ctx.beginPath();
        ctx.arc(
          (screenWidth / x) * i + screenWidth / x / 2,
          (screenHeight / y) * j + screenHeight / y / 2,
          screenHeight / x / 2,
          0,
          180 * Math.PI * 2,
          true
        );
        ctx.fillStyle = color;
        ctx.rect(
          (screenWidth / x) * i,
          (screenHeight / y) * j,
          screenWidth / x / 2,
          screenWidth / x / 2
        );
        ctx.rect(
          (screenWidth / x) * i + screenWidth / x / 2,
          (screenHeight / y) * j + screenHeight / y / 2,
          screenWidth / x / 2,
          screenWidth / x / 2
        );
        ctx.fill();
        ctx.stroke();
      }
    }
  }
}

function createByMono() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const screenWidth = canvas.width;
    const screenHeight = canvas.height;

    const ctx = canvas.getContext("2d");
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        ctx.beginPath();
        ctx.arc(
          (screenWidth / x) * i + screenWidth / x / 2,
          (screenHeight / y) * j + screenHeight / y / 2,
          screenHeight / x / 2,
          0,
          180 * Math.PI * 2,
          true
        );
        ctx.fillStyle = "rgb(160,160,160)";
        ctx.rect(
          (screenWidth / x) * i,
          (screenHeight / y) * j,
          screenWidth / x / 2,
          screenWidth / x / 2
        );
        ctx.rect(
          (screenWidth / x) * i + screenWidth / x / 2,
          (screenHeight / y) * j + screenHeight / y / 2,
          screenWidth / x / 2,
          screenWidth / x / 2
        );
        ctx.fill();
        ctx.stroke();
      }
    }
  }
}

function clearCv() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function download() {
  let canvas = document.getElementById("canvas");
  let link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "canvas.png";
  link.click();
}
