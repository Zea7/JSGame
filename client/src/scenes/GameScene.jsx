import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
      this.player = null;
      this.cursors = null;
      this.floor = null;
    }
  
    // 3. 게임 로직 업데이트 (매 프레임 실행)
    update() {
      if (!this.player || !this.cursors) return;
  
      // 키 입력에 따른 플레이어 속도 조절
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-300);
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(300);
      } else {
        this.player.body.setVelocityX(0);
      }

      if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.body.setVelocityY(-400);
      }
    }
  
    // 2. 게임 오브젝트 생성
    create() {
      // 게임 월드 크기를 가로로 길게 설정 (예: 3200px)
      this.physics.world.setBounds(0, 0, 800, 600);
  
      // 바닥 생성 (월드 크기에 맞게)
      // 1600 (중심 x), 580 (y), 3200 (너비), 40 (높이)
      this.floor = this.add.rectangle(400, 580, 800, 40, 0x666666);
      this.physics.add.existing(this.floor, true); // 정적 물리 객체로 추가
  
      // 플레이어 생성 (사각형으로 대체)
      this.player = this.add.rectangle(400, 500, 50, 50, 0xff0000);
      this.physics.add.existing(this.player);
  
      // 플레이어 물리 설정
      this.player.body.setGravityY(300);
      this.player.body.setCollideWorldBounds(true); // 월드 경계와 충돌
  
      // 바닥과 플레이어 간의 충돌 설정
      this.physics.add.collider(this.player, this.floor);
  
      // 키보드 입력 설정
      this.cursors = this.input.keyboard.createCursorKeys();
  
      // 카메라 설정
      this.cameras.main.setBounds(0, 0, 3200, 600); // 카메라가 비출 영역
      // this.cameras.main.startFollow(this.player, true); // 플레이어를 따라다니도록 설정
    }
  
    // 1. (옵션) 에셋 프리로드
    // preload() {
    //   this.load.image('player', 'path/to/player.png');
    // }
  }