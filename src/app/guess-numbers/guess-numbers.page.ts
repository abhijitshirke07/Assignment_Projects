import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guess-numbers',
  templateUrl: './guess-numbers.page.html',
  styleUrls: ['./guess-numbers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GuessNumbersPage implements OnInit {

  pairsData = [
    { number: '1', name: 'One' },{ number: '2', name: 'Two' },{ number: '3', name: 'Three' },{ number: '4', name: 'Four' },
    { number: '5', name: 'Five' },{ number: '6', name: 'Six' },{ number: '7', name: 'Seven' },{ number: '8', name: 'Eight' },
    { number: '9', name: 'Nine' },{ number: '10', name: 'Ten' },{ number: '11', name: 'Eleven' },{ number: '12', name: 'Twelve' },
    { number: '13', name: 'Thirteen' },{ number: '14', name: 'Fourteen' },{ number: '15', name: 'Fifteen' },{ number: '16', name: 'Sixteen' },
    { number: '17', name: 'Seventeen' },{ number: '18', name: 'Eighteen' },{ number: '19', name: 'Nineteen' },{ number: '20', name: 'Twenty' },
    { number: '21', name: 'Twenty-One' },{ number: '22', name: 'Twenty-Two' },{ number: '23', name: 'Twenty-Three' },{ number: '24', name: 'Twenty-Four' },
    { number: '25', name: 'Twenty-Five' },{ number: '26', name: 'Twenty-Six' },{ number: '27', name: 'Twenty-Seven' },{ number: '28', name: 'Twenty-Eight' },
    { number: '29', name: 'Twenty-Nine' },{ number: '30', name: 'Thirty' },{ number: '31', name: 'Thirty-One' },{ number: '32', name: 'Thirty-Two,' },
    { number: '33', name: 'Thirty-Three' },{ number: '34', name: 'Thirty-Four' },{ number: '35', name: 'Thirty-Five' },{ number: '36', name: 'Thirty-Six' },
    { number: '37', name: 'Thirty-Seven' },{ number: '38', name: 'Thirty-Eight' },{ number: '39', name: 'Thirty-Nine' },{ number: '40', name: 'Forty' },
    { number: '41', name: 'Forty-One' },{ number: '42', name: 'Forty-Two' },{ number: '43', name: 'Forty-Three' },{ number: '44', name: 'Forty-Four' },
    { number: '45', name: 'Forty-Five' },{ number: '46', name: 'Forty-Six' },{ number: '47', name: 'Forty-Seven' },{ number: '48', name: 'Forty-Eight' },
    { number: '49', name: 'Forty-Nine' },{ number: '50', name: 'Fifty' },{ number: '51', name: 'Fifty-One' },{ number: '52', name: 'Fifty-Two' },
    { number: '53', name: 'Fifty-Three' },{ number: '54', name: 'Fifty-Four' },{ number: '55', name: 'Fifty-Five' },{ number: '56', name: 'Fifty-Six' },
    { number: '57', name: 'Fifty-Seven' },{ number: '58', name: 'Fifty-Eight' },{ number: '59', name: 'Fifty-Nine' },{ number: '60', name: 'Sixty' },
    { number: '61', name: 'Sixty-One' },{ number: '62', name: 'Sixty-Two' },{ number: '63', name: 'Sixty-Three' },{ number: '64', name: 'Sixty-Four' },
    { number: '65', name: 'Sixty-Five' },{ number: '66', name: 'Sixty-Six' },{ number: '67', name: 'Sixty-Seven' },{ number: '68', name: 'Sixty-Eight' },
    { number: '69', name: 'Sixty-Nine' },{ number: '70', name: 'Seventy' },{ number: '71', name: 'Seventy-One' },{ number: '72', name: 'Seventy-Two' },
    { number: '73', name: 'Seventy-Three' },{ number: '74', name: 'Seventy-Four' },{ number: '75', name: 'Seventy-Five' },{ number: '76', name: 'Seventy-Six' },
    { number: '77', name: 'Seventy-Seven' },{ number: '78', name: 'Seventy-Eight' },{ number: '79', name: 'Seventy-Nine' },{ number: '80', name: 'Eighty' },
    { number: '81', name: 'Eighty-One' },{ number: '82', name: 'Eighty-Two' },{ number: '83', name: 'Eighty-Three' },{ number: '84', name: 'Eighty-Four' },
    { number: '85', name: 'Eighty-Five' },{ number: '86', name: 'Eighty-Six' },{ number: '87', name: 'Eighty-Seven' },{ number: '88', name: 'Eighty-Eight' },
    { number: '89', name: 'Eighty-Nine' },{ number: '90', name: 'Ninety' },{ number: '91', name: 'Ninety-One' },{ number: '92', name: 'Ninety-Two' },
    { number: '93', name: 'Ninety-Three' },{ number: '94', name: 'Ninety-Four' },{ number: '95', name: 'Ninety-Five' },{ number: '96', name: 'Ninety-Six' },
    { number: '97', name: 'Ninety-Seven' },{ number: '98', name: 'Ninety-Eight' },{ number: '99', name: 'Ninety-Nine' },{ number: '100', name: 'One Hundred' }
  ];

  constructor(private alertController: AlertController, private router: Router) { }

  currentNumber: string = '';
  currentName: string = '';
  userGuess: string = '';
  correctCount: number = 0;
  wrongCount: number = 0;
  usedIndices: Set<number> = new Set();
  feedbackMessage: string = '';
  gameLimit: number = 10; // Limit to 10 pairs
  marksPerCorrectAnswer: number = 2;

  ngOnInit() {
    this.generateRandomPair();
  }

  startGame() {
    this.correctCount = 0;
    this.wrongCount = 0;
    this.usedIndices.clear();
    this.generateRandomPair();
  }

  generateRandomPair() {
    if (this.usedIndices.size >= this.gameLimit) {
      this.endGame();
      return;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.pairsData.length);
    } while (this.usedIndices.has(randomIndex));
    
    this.usedIndices.add(randomIndex);
    this.currentNumber = this.pairsData[randomIndex].number;
    this.currentName = this.pairsData[randomIndex].name;
  }

  async endGame() {
    const totalScore = this.correctCount * this.marksPerCorrectAnswer;
    const alert = await this.alertController.create({
      header: 'Game Over',
      message: `Your score: ${totalScore} points\nCorrect Answers: ${this.correctCount}\nWrong Answers: ${this.wrongCount}\n\nDo you want to continue or exit?`,
      buttons: [
        {
          text: 'Continue',
          handler: () => {
            this.startGame(); // Restart the game
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          }
        }
      ]
    });
    await alert.present();
  }

  checkGuess() {
    if (this.userGuess.trim().toLowerCase() === this.currentName.toLowerCase()) {
      this.correctCount++;
      this.feedbackMessage = 'Correct! Good job!';
    } else {
      this.wrongCount++;
      this.feedbackMessage = 'Wrong answer! Try again.';
    }

    this.userGuess = '';
    this.generateRandomPair();
  }

}
