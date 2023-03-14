function setup() {
    createCanvas(600, 400);
}

let pelotaX = 300;
let pelotaY = 200;
let velocidadPelotaX = 4;
let velocidadPelotaY = 4;

let anchoPalo = 10;
let alturaPalo = 80;
let paloIzquierdoY = 160;
let paloDerechoY = 160;
let velocidadPalo = 10;

let puntajeIzquierdo = 0;
let puntajeDerecho = 0;

let juegoTerminado = false;

function draw() {
    background(25);

    // Muestra el marcador en la parte superior centrado
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(puntajeIzquierdo + ' - ' + puntajeDerecho, width / 2, 40);

    ellipse(pelotaX, pelotaY, 20, 20);

    if (!juegoTerminado) {
        // solo mueve la pelota si el juego no ha terminado
        pelotaX += velocidadPelotaX;
        pelotaY += velocidadPelotaY;

        if (pelotaY < 0 || pelotaY > height) {
            velocidadPelotaY *= -1;
        }
        if (pelotaX < 0 || pelotaX > width) {
            pelotaX = width / 2;
            pelotaY = height / 2;
            if (velocidadPelotaX > 0) {
                puntajeIzquierdo++;
            } else {
                puntajeDerecho++;
            }
        }

        if (
            pelotaX - 10 < 20 + anchoPalo &&
            pelotaY > paloIzquierdoY &&
            pelotaY < paloIzquierdoY + alturaPalo
        ) {
            velocidadPelotaX *= -1;
        }

        if (
            pelotaX + 10 > width - 20 - anchoPalo &&
            pelotaY > paloDerechoY &&
            pelotaY < paloDerechoY + alturaPalo
        ) {
            velocidadPelotaX *= -1;
        }
    }

    rect(20, paloIzquierdoY, anchoPalo, alturaPalo);

    if (keyIsDown(87) && paloIzquierdoY > 0) {
        paloIzquierdoY -= velocidadPalo;
    }
    if (keyIsDown(83) && paloIzquierdoY + alturaPalo < height) {
        paloIzquierdoY += velocidadPalo;
    }

    rect(width - 20 - anchoPalo, paloDerechoY, anchoPalo, alturaPalo);

    if (keyIsDown(UP_ARROW) && paloDerechoY > 0) {
        paloDerechoY -= velocidadPalo;
    }
    if (keyIsDown(DOWN_ARROW) && paloDerechoY + alturaPalo < height) {
        paloDerechoY += velocidadPalo;
    }

    // Verifica si se alcanzó el puntaje límite para terminar el juego
    if (puntajeIzquierdo >= 5) {
        textSize(34);
        textAlign(CENTER);
        fill(255, 0, 0);
        text('GANADOR: IZQUIERDO', width / 2, height / 2);
        juegoTerminado = true;
    } else if (puntajeDerecho >= 5) {
        textSize(34);
        textAlign(CENTER);
        fill(255, 0, 0);
        text('GANADOR: DERECHO', width / 2, height / 2);
        juegoTerminado = true;
    }
}
