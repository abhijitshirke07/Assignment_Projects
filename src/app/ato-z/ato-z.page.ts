import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ato-z',
  templateUrl: './ato-z.page.html',
  styleUrls: ['./ato-z.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AtoZPage implements OnInit {

  pairsData = [
    { letter: 'A', image: 'https://i.pinimg.com/736x/e2/c4/81/e2c48162ce0d3e3bf5fb466bca49b2d2.jpg', name: 'Apple' },
    { letter: 'B', image: 'https://m.media-amazon.com/images/I/91iv1O9URdL.jpg', name: 'Ball' },
    { letter: 'C', image: 'https://i.pinimg.com/originals/ec/96/6f/ec966f5fe5d60496270f14fdd97ab2c8.png', name: 'Cat'},
    { letter: 'D', image: 'https://www.drawing123.com/wp-content/uploads/2021/12/dog-drawing-step-8.png', name: 'Dog' },
    { letter: 'E', image: 'https://www.svgheart.com/wp-content/uploads/2021/12/cute-elephant-baby-clipart-kids-room-decoration-free-svg-file-SVGHEART.COM.png', name: 'elephant' },
    { letter: 'F', image: 'https://i.pinimg.com/736x/a7/22/a1/a722a1fdddf674590c1d6eaf27703dae.jpg', name: 'Fish' },
    { letter: 'G', image: 'https://t3.ftcdn.net/jpg/00/72/78/64/360_F_72786423_2xkfeTpCSnZjrlINs8SRSyu7dscAxV5p.jpg', name: "Giraffe" },
    { letter: 'H', image: 'https://www.shutterstock.com/image-illustration/cute-horse-drawing-kids-600w-1405698488.jpg', name: "Horse" },
    { letter: 'I', image: 'https://i.pinimg.com/736x/55/f0/90/55f0901f05fa54c5107bf368bf78b871.jpg', name: "Ice-cream" },
    { letter: 'J', image: 'https://i.pinimg.com/736x/43/1a/3b/431a3b036dbecebaacb2f8e11b6d7f04.jpg', name: "Jar" },
    { letter: 'K', image: 'https://illustoon.com/photo/12401.png',name: "Kite" },
    { letter: 'L', image: 'https://thumbs.dreamstime.com/b/lion-cartoon-26990518.jpg', name: "Lion" },
    { letter: 'M', image: 'https://img.freepik.com/premium-vector/mango-isolated-white-background_114835-24910.jpg', name: "Mango" },
    { letter: 'N', image: 'https://cdn2.vectorstock.com/i/1000x1000/65/71/nestling-bird-in-nest-color-sketch-engraving-vector-25526571.jpg', name: "Nest" },
    { letter: 'O', image: 'https://www.drawing123.com/wp-content/uploads/2023/09/How-to-Draw-an-Owl-Step-9-2.jpg',name: "Owl" },
    { letter: 'P', image: 'https://thumbs.dreamstime.com/b/cartoon-parrot-funny-cute-green-waving-wing-smiling-vector-illustration-59502084.jpg', name: "Parrot"},
    { letter: 'Q', image: 'https://cdn.vectorstock.com/i/preview-1x/12/91/little-cute-queen-with-crown-cartoon-style-vector-46331291.jpg', name: "Queen" },
    { letter: 'R', image: 'https://img.freepik.com/premium-vector/colorful-rainbow-with-clouds-pop-art-icon-vintage-fashion-contour-cartoon-design-vector-illustrat_538002-2667.jpg', name: "Rainbow" },
    { letter: 'S', image: 'https://png.pngtree.com/png-clipart/20230427/original/pngtree-happy-sun-face-png-image_9108689.png', name: "Sun" },
    { letter: 'T', image: 'https://t3.ftcdn.net/jpg/02/51/14/60/360_F_251146040_TR5QApjwwQYt9fWVzPz5VnIJbP1WJElc.jpg', name: "Tiger" },
    { letter: 'U', image: 'https://clipart-library.com/images/kT8ngKzGc.png', name: "Umbrella" },
    { letter: 'V', image: 'https://i.pinimg.com/736x/8f/91/35/8f913566331e3dc6452f21ecc379abf2.jpg', name: "Violin" },
    { letter: 'W', image: 'https://i.pinimg.com/736x/11/05/23/110523a100c363d85e11905578aee694.jpg', name: "Watermelon" },
    { letter: 'X', image: 'https://www.creativefabrica.com/wp-content/uploads/2023/08/09/Kawaii-Chibi-Xylophone-Clipart-76489113-1.png', name: "Xylophone" },
    { letter: 'Y', image: 'https://clipart-library.com/2023/yak-clipart-sm.png', name: "Yak"},
    { letter: 'Z', image: 'https://thumbs.dreamstime.com/b/cute-zebra-cartoon-illustration-30569107.jpg', name: "Zebra" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToGuessAnimal(): void {
    this.router.navigate(['/guess-animal']);
}
}
