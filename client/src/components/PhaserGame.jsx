import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { GameScene } from '../scenes/GameScene';

const PhaserGame = () => {
  // Phaser 게임 인스턴스를 마운트할 div에 대한 ref
  const gameContainerRef = useRef(null);
  
  // Phaser 게임 인스턴스를 저장하기 위한 ref (클린업 시 사용)
  const gameInstanceRef = useRef(null);

  useEffect(() => {
    if (gameContainerRef.current && !gameInstanceRef.current) {
      // Phaser 게임 설정
      const config = {
        type: Phaser.AUTO, // WebGL 또는 Canvas 자동 선택
        width: 800,
        height: 600,
        parent: gameContainerRef.current, // 게임을 렌더링할 DOM 요소
        backgroundColor: '#1a1a1a',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 300 },
            debug: false,
          },
        },
        scene: [GameScene], // 사용할 씬 등록
      };

      // 새 게임 인스턴스 생성
      gameInstanceRef.current = new Phaser.Game(config);
    }

    // 컴포넌트 언마운트 시 게임 인스턴스 정리
    return () => {
      if (gameInstanceRef.current) {
        gameInstanceRef.current.destroy(true);
        gameInstanceRef.current = null;
      }
    };
  }, []); // 빈 종속성 배열로 마운트 시 한 번만 실행

  return (
    <div 
      id="phaser-game-container" 
      ref={gameContainerRef} 
      style={{ width: '800px', height: '600px' }}
    />
  );
};

export default PhaserGame;