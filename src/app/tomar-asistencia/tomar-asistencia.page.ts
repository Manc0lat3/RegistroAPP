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
  capturedImage: string = '';

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
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.zIndex = '1000';
    video.style.objectFit = 'cover';
    video.style.backgroundColor = 'black';
    
    const constraints = {
      video: true,
    };
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
      video.play();
  
      document.body.appendChild(video);
  
      const captureButton = document.createElement('button');
      captureButton.innerText = 'Tomar Foto';
      captureButton.style.position = 'absolute';
      captureButton.style.bottom = '20px'; 
      captureButton.style.left = '50%'; 
      captureButton.style.transform = 'translateX(-50%)'; 
      captureButton.style.zIndex = '1001'; 
      captureButton.style.padding = '10px 20px'; 
      captureButton.style.fontSize = '18px';
      captureButton.style.color = 'white'; 
      captureButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
      captureButton.style.border = 'none'; 
      captureButton.style.borderRadius = '5px'; 
      captureButton.style.cursor = 'pointer';
      document.body.appendChild(captureButton);
  
      captureButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
  
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          this.capturedImage = canvas.toDataURL('image/png');
          console.log('Imagen capturada:', this.capturedImage);
          
          const downloadButton = document.createElement('a');
          downloadButton.innerText = 'Guardar Imagen';
          downloadButton.style.position = 'absolute';
          downloadButton.style.bottom = '70px'; 
          downloadButton.style.left = '50%'; 
          downloadButton.style.transform = 'translateX(-50%)'; 
          downloadButton.style.zIndex = '1001'; 
          downloadButton.style.padding = '10px 20px';
          downloadButton.style.fontSize = '18px';
          downloadButton.style.color = 'white';
          downloadButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          downloadButton.style.border = 'none';
          downloadButton.style.borderRadius = '5px';
          downloadButton.style.cursor = 'pointer';
  
          downloadButton.href = this.capturedImage;
          downloadButton.download = 'captura.png'; 
  
          document.body.appendChild(downloadButton);
          
          downloadButton.addEventListener('click', () => {
            document.body.removeChild(downloadButton);
          });
  
          stream.getTracks().forEach(track => track.stop());
  
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
