class Fish {
    constructor(position) {
      this.position = position.copy();
      this.width = 30;
      this.height = 205;
    }
  
    run() {
      this.swim();
      this.display();
    }
  
    swim() {
      this.position.x += random(-1, 1);
      this.position.y += random(-1, 1);
    }
  
    display() {
      // Body
      noStroke();
      fill(30, 191, 80);
      ellipse(this.position.x, this.position.y, this.width, this.height);
  
      // Tail
      triangle(
        this.position.x - this.width / 2 + 10,
        this.position.y,
        this.position.x - this.width * 1.75,
        this.position.y + this.height / 5,
        this.position.x - this.width * 1.75,
        this.position.y - this.height / 5
      );
  
      // Eye
      fill(255, 100, 100);
      circle(this.position.x + this.width / 2, this.position.y-30, 20);
  
      // Pupil
      fill(0, 0, 0);
      circle(this.position.x + this.width / 2, this.position.y-30, 8);

      // Mouth
      fill(0,0,0);
      circle(this.position.x + this.width / 2, this.position.y+30, 8);
      circle(this.position.x + this.width / 2-5, this.position.y+30, 8);
      circle(this.position.x + this.width / 2-8, this.position.y+26, 8);

    }
  
    getMouthPosition() {
      return createVector(this.position.x + this.width / 2 + 10, this.position.y);
    }
  }
  