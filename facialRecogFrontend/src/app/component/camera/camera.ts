import { Component } from '@angular/core';
import { enviroment } from '../../env';

@Component({
  selector: 'app-camera',
  imports: [],
  templateUrl: './camera.html',
  styleUrl: './camera.css',
})
export class Camera {


camera: string = `${enviroment.camera}`

}
