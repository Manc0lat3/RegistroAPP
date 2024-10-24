import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tomar-asistencia',
  templateUrl: './tomar-asistencia.page.html',
  styleUrls: ['./tomar-asistencia.page.scss'],
})
export class TomarAsistenciaPage implements OnInit {
  username: string = '';
  capturedImage: string = ''; // Inicializa como cadena vacía

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private authService: AuthService
  ) { }

  goBack() {
    this.navCtrl.back();  
  }

  logout() {
    this.authService.logout();  
    this.username = 'Usuario';  
    this.router.navigate(['/login']);  
  }

  async takePicture() {
    console.log('Intentando tomar una foto...');
  
    const video = document.createElement('video');
    video.style.position = 'fixed'; // Fijar posición para que ocupe toda la pantalla
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%'; // Ajustar el ancho al 100% de la pantalla
    video.style.height = '100%'; // Ajustar la altura al 100% de la pantalla
    video.style.zIndex = '1000'; // Asegurarse de que esté al frente
    video.style.objectFit = 'cover'; // Ajustar la imagen para cubrir el video
    video.style.backgroundColor = 'black'; // Fondo negro para el video
    
    const constraints = {
      video: true,
    };
  
    try {
      // Pide acceso a la cámara
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
      video.play();
  
      // Agregar el video al DOM
      document.body.appendChild(video);
  
      // Crear un botón para capturar la foto
      const captureButton = document.createElement('button');
      captureButton.innerText = 'Tomar Foto';
      captureButton.style.position = 'absolute'; // Fijar el botón en la pantalla
      captureButton.style.bottom = '20px'; // Ubicar el botón en la parte inferior
      captureButton.style.left = '50%'; // Centrar horizontalmente
      captureButton.style.transform = 'translateX(-50%)'; // Ajustar para centrar
      captureButton.style.zIndex = '1001'; // Asegurarse de que el botón esté encima del video
      captureButton.style.padding = '10px 20px'; // Añadir un poco de relleno al botón
      captureButton.style.fontSize = '18px'; // Tamaño de fuente del botón
      captureButton.style.color = 'white'; // Color de texto del botón
      captureButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fondo semi-transparente
      captureButton.style.border = 'none'; // Sin borde
      captureButton.style.borderRadius = '5px'; // Bordes redondeados
      captureButton.style.cursor = 'pointer'; // Cambiar cursor al pasar el ratón
      document.body.appendChild(captureButton);
  
      // Capturar la foto al hacer clic en el botón
      captureButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
  
        // Verifica si context no es null antes de dibujar
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          // Guardar la imagen capturada
          this.capturedImage = canvas.toDataURL('image/png');
          console.log('Imagen capturada:', this.capturedImage);
          
          // Crear un botón para descargar la imagen
          const downloadButton = document.createElement('a');
          downloadButton.innerText = 'Guardar Imagen';
          downloadButton.style.position = 'absolute';
          downloadButton.style.bottom = '70px'; // Ubicar el botón de descarga por encima del botón de captura
          downloadButton.style.left = '50%'; // Centrar horizontalmente
          downloadButton.style.transform = 'translateX(-50%)'; // Ajustar para centrar
          downloadButton.style.zIndex = '1001'; // Asegurarse de que el botón esté encima del video
          downloadButton.style.padding = '10px 20px';
          downloadButton.style.fontSize = '18px';
          downloadButton.style.color = 'white';
          downloadButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          downloadButton.style.border = 'none';
          downloadButton.style.borderRadius = '5px';
          downloadButton.style.cursor = 'pointer';
  
          // Establecer el atributo href y download
          downloadButton.href = this.capturedImage; // Asigna la imagen capturada
          downloadButton.download = 'captura.png'; // Nombre del archivo para descargar
  
          // Agregar el botón de descarga al DOM
          document.body.appendChild(downloadButton);
          
          // Eliminar el botón de guardar imagen después de hacer clic
          downloadButton.addEventListener('click', () => {
            document.body.removeChild(downloadButton); // Eliminar el botón de descarga
          });
  
          // Detener el stream
          stream.getTracks().forEach(track => track.stop());
  
          // Limpiar la vista
          document.body.removeChild(video);
          document.body.removeChild(captureButton);
        } else {
          console.error('No se pudo obtener el contexto del canvas.');
          alert('Error: No se pudo obtener el contexto del canvas.');
        }
      });
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
      alert('Error al acceder a la cámara: ' + error);
    }
  }
  
  
  

  ngOnInit() {
  }
}
