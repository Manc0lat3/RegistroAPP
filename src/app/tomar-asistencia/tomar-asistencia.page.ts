import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-tomar-asistencia',
  templateUrl: './tomar-asistencia.page.html',
  styleUrls: ['./tomar-asistencia.page.scss'],
})
export class TomarAsistenciaPage implements OnInit {
  username: string = '';
  capturedImage: string | null = null;
  downloadButton: HTMLAnchorElement | null = null;

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
          
          this.showDownloadButton();
  
          stream.getTracks().forEach(track => track.stop());
  
          document.body.removeChild(video);
          document.body.removeChild(captureButton);
        } else {
          alert('Error: No se pudo obtener el contexto del canvas.');
        }
      });
    } catch (error) {
      alert('Error al acceder a la cámara: ' + error);
    }
  }

  showDownloadButton() {
    this.downloadButton = document.createElement('a');
    this.downloadButton.innerText = 'Guardar Imagen';
    this.downloadButton.style.position = 'absolute';
    this.downloadButton.style.bottom = '70px'; 
    this.downloadButton.style.left = '50%'; 
    this.downloadButton.style.transform = 'translateX(-50%)'; 
    this.downloadButton.style.zIndex = '1001'; 
    this.downloadButton.style.padding = '10px 20px';
    this.downloadButton.style.fontSize = '18px';
    this.downloadButton.style.color = 'white';
    this.downloadButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    this.downloadButton.style.border = 'none';
    this.downloadButton.style.borderRadius = '5px';
    this.downloadButton.style.cursor = 'pointer';
  
    this.downloadButton.href = this.capturedImage!;
    this.downloadButton.download = 'captura.png'; 

    document.body.appendChild(this.downloadButton);
  
    this.downloadButton.addEventListener('click', () => {
      document.body.removeChild(this.downloadButton!);
      this.downloadButton = null;
    });
  }

  cancelCapture() {
    this.capturedImage = null;
    const video = document.querySelector('video');
    if (video) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      document.body.removeChild(video);
    }
    
    if (this.downloadButton) {
      document.body.removeChild(this.downloadButton);
      this.downloadButton = null;
    }
  }

  ngOnInit() {
  }
}
